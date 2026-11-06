// api/advisor.js — Vercel serverless function (Node.js)
// Needs the environment variable ANTHROPIC_API_KEY (set it in Vercel, never in this file).
// Optional: CLAUDE_MODEL (default below). Use "claude-haiku-5-5" for cheaper and faster answers.

const MODEL = process.env.CLAUDE_MODEL || 'claude-sonnet-5-5';
const MAX_PER_HOUR = 20;     // per visitor IP (best effort: resets when the function restarts)
const hits = new Map();

function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(t => now - t < 3600 * 1000);
  if (recent.length >= MAX_PER_HOUR) { hits.set(ip, recent); return true; }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function num(v) {
  const n = Number(v);
  return Number.isFinite(n) && n >= 0 && n <= 1e10 ? n : null;
}

function businessBlock(c) {
  if (!c) return '';
  const price = num(c.price), cost = num(c.cost), units = num(c.units), expense = num(c.expense);
  if ([price, cost, units, expense].some(v => v === null)) return '';
  const name = String(c.productName || '').slice(0, 100);
  const unit = price - cost;
  const profit = unit * units - expense;
  const be = unit > 0 ? Math.ceil(expense / unit) : 'not reachable (price <= cost)';
  const margin = price > 0 ? ((unit / price) * 100).toFixed(1) : '0';
  return `
Business data entered by the user (THB, unverified):
- Product/service: ${name}
- Cost per unit: ${cost}
- Selling price per unit: ${price}
- Units sold per month: ${units}
- Fixed expenses per month: ${expense}
Computed: profit per unit ${unit}, monthly profit ${profit}, margin ${margin}%, break-even units per month ${be}.`;
}

function systemPrompt(lang, context) {
  return `You are the business advisor inside Math4Startup, a web app for early-stage founders and small business owners in Thailand. You give practical, specific advice on pricing, unit economics, cash flow, low-budget marketing, validating ideas and planning.

Rules:
- Reply in the language the user writes in (Thai or English). Default language: ${lang === 'en' ? 'English' : 'Thai'}.
- Be concise: short paragraphs or hyphen lists. No markdown headings, tables or bold markers. Aim for under 250 words unless the user asks for more.
- When business data is given, ground your advice in those numbers and show the arithmetic briefly. The figures are typed in by the user and unverified, so say so if something looks implausible (for example a margin above 90% or below 5%).
- If key information is missing, ask one clarifying question instead of guessing.
- Be honest about uncertainty and never promise profits or outcomes. You are not a licensed financial, tax or legal advisor; for tax, legal or fundraising-contract questions, suggest a professional.
- Stay on business topics.${businessBlock(context)}`;
}

function ideaPrompt(lang) {
  return `You are a startup mentor inside Math4Startup, a web app for early-stage founders and small business owners in Thailand. The user describes a business idea. Give an honest, practical first assessment.

Rules:
- Reply in the language the user writes in (Thai or English). Default language: ${lang === 'en' ? 'English' : 'Thai'}.
- Plain text only: no markdown symbols, no tables. Use exactly these labelled sections, each on its own line followed by short text or hyphen points:
  Verdict: one sentence (promising / promising with changes / risky) and why.
  Demand: who needs this and what signals to look for.
  Competition: likely competitors or substitutes and how this idea could stand out.
  Money: what to verify about price, costs and margin.
  Risks: the three biggest risks.
  Next 30 days: three cheap, concrete tests or actions.
  Ask 5 customers: three questions to ask potential customers.
- Translate the section labels into the reply language.
- You have no live market data. Say what you are assuming, never invent statistics or named competitors you are not sure exist, and never promise outcomes.
- Keep it under 350 words. You are not a licensed financial or legal advisor.`;
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return res.status(500).json({ error: 'not_configured' });

  // only accept calls coming from this site
  const origin = req.headers.origin || '';
  if (origin && !origin.endsWith('//' + (req.headers.host || ''))) {
    return res.status(403).json({ error: 'forbidden' });
  }

  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  if (limited(ip)) return res.status(429).json({ error: 'rate_limited' });

  const body = req.body || {};
  let messages, system, maxTokens;
  if (body.mode === 'idea') {
    const f = body.idea || {};
    const s = (v, n) => String(v || '').replace(/\s+/g, ' ').trim().slice(0, n);
    const idea = s(f.idea, 600);
    if (!idea) return res.status(400).json({ error: 'bad_request' });
    const budget = f.budget === '' || f.budget == null ? null : num(f.budget);
    messages = [{ role: 'user', content:
      `Business idea: ${idea}\nTarget customers: ${s(f.customers, 300) || 'not given'}\nHow it makes money: ${s(f.revenue, 300) || 'not given'}\nStarting budget (THB): ${budget === null ? 'not given' : budget}` }];
    system = ideaPrompt(body.lang);
    maxTokens = 900;
  } else {
    messages = (Array.isArray(body.messages) ? body.messages : [])
      .map(m => ({
        role: m && m.role === 'assistant' ? 'assistant' : 'user',
        content: String((m && m.content) || '').slice(0, 2000)
      }))
      .filter(m => m.content.trim())
      .slice(-10);
    while (messages.length && messages[0].role !== 'user') messages.shift();
    if (!messages.length || messages[messages.length - 1].role !== 'user') {
      return res.status(400).json({ error: 'bad_request' });
    }
    system = systemPrompt(body.lang, body.context);
    maxTokens = 700;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 25000);
  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'content-type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: maxTokens,
        system,
        messages
      })
    });
    if (!upstream.ok) {
      console.error('Anthropic API error', upstream.status, await upstream.text());
      return res.status(502).json({ error: 'upstream_error' });
    }
    const data = await upstream.json();
    const reply = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('\n').trim();
    if (!reply) return res.status(502).json({ error: 'empty_reply' });
    return res.status(200).json({ reply });
  } catch (err) {
    console.error('advisor failed', err);
    return res.status(504).json({ error: 'timeout_or_network' });
  } finally {
    clearTimeout(timer);
  }
};
