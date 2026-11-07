// api/news.js — Vercel serverless function (Node.js). No API key needed.
// Reads public RSS/Atom feeds and returns headlines + links only (no article text).
// To add or remove a news source, edit the SOURCES list below.

const SOURCES = [
  { id: 'bangkokpost', name: 'Bangkok Post', url: 'https://www.bangkokpost.com/rss/data/business.xml', cat: 'economy', lang: 'en' },
  { id: 'bbc', name: 'BBC Business', url: 'https://feeds.bbci.co.uk/news/business/rss.xml', cat: 'economy', lang: 'en' },
  { id: 'guardian', name: 'The Guardian Business', url: 'https://www.theguardian.com/business/rss', cat: 'economy', lang: 'en' },
  { id: 'prachachat', name: 'ประชาชาติธุรกิจ', url: 'https://www.prachachat.net/feed', cat: 'economy', lang: 'th' },
  { id: 'techsauce', name: 'Techsauce', url: 'https://techsauce.co/feed', cat: 'startup', lang: 'en' },
  { id: 'techcrunch', name: 'TechCrunch', url: 'https://techcrunch.com/feed/', cat: 'startup', lang: 'en' },
  { id: 'brandbuffet', name: 'Brand Buffet', url: 'https://www.brandbuffet.in.th/feed/', cat: 'marketing', lang: 'th' },
  { id: 'marketeer', name: 'Marketeer', url: 'https://marketeeronline.co/feed', cat: 'marketing', lang: 'th' },
  { id: 'positioning', name: 'Positioning', url: 'https://positioningmag.com/feed', cat: 'marketing', lang: 'th' }
];

const PER_SOURCE = 12;
const MAX_AGE_DAYS = 14;
const MAX_ITEMS = 80;
const CACHE_MS = 10 * 60 * 1000;
let cache = { time: 0, data: null };

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };

function clean(s) {
  return String(s || '')
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]*>/g, '')
    .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
      if (e[0] === '#') {
        const code = e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
        try { return String.fromCodePoint(code); } catch (_) { return m; }
      }
      return ENTITIES[e.toLowerCase()] ?? m;
    })
    .replace(/\s+/g, ' ')
    .trim();
}

function tag(block, name) {
  const m = block.match(new RegExp('<' + name + '(?:\\s[^>]*)?>([\\s\\S]*?)</' + name + '>', 'i'));
  return m ? m[1] : '';
}

function linkOf(block) {
  const plain = block.match(/<link(?:\s[^>]*)?>\s*(?:<!\[CDATA\[)?\s*(https?:\/\/[^<\s\]]+)/i);
  if (plain) return plain[1];
  for (const m of block.matchAll(/<link\b([^>]*)>/gi)) {
    const attrs = m[1];
    const rel = (attrs.match(/rel\s*=\s*["']([^"']*)["']/i) || [])[1] || 'alternate';
    const href = (attrs.match(/href\s*=\s*["']([^"']*)["']/i) || [])[1];
    if (href && rel === 'alternate') return href.replace(/&amp;/g, '&');
  }
  return '';
}

function parseFeed(xml, source) {
  const blocks = xml.match(/<item\b[\s\S]*?<\/item>|<entry\b[\s\S]*?<\/entry>/gi) || [];
  const items = [];
  for (const b of blocks) {
    const title = clean(tag(b, 'title')).slice(0, 300);
    const link = linkOf(b).trim().replace(/&amp;/g, '&');
    if (!title || !/^https?:\/\//i.test(link)) continue;
    const rawDate = clean(tag(b, 'pubDate') || tag(b, 'dc:date') || tag(b, 'published') || tag(b, 'updated'));
    const t = Date.parse(rawDate);
    items.push({
      title, link,
      source: source.name, cat: source.cat, lang: source.lang,
      time: Number.isFinite(t) ? t : null
    });
    if (items.length >= PER_SOURCE) break;
  }
  return items;
}

async function readSource(source) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 7000);
  try {
    const r = await fetch(source.url, {
      signal: controller.signal,
      headers: {
        'user-agent': 'Mozilla/5.0 (compatible; Math4StartupNewsBot/1.0)',
        accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml, */*'
      }
    });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const xml = (await r.text()).slice(0, 2_000_000);
    const items = parseFeed(xml, source);
    return { source, items, ok: items.length > 0, error: items.length ? null : 'no items found' };
  } catch (err) {
    return { source, items: [], ok: false, error: String(err && err.message || err).slice(0, 80) };
  } finally {
    clearTimeout(timer);
  }
}

async function build() {
  const results = await Promise.all(SOURCES.map(readSource));
  const oldest = Date.now() - MAX_AGE_DAYS * 86400 * 1000;
  const items = results.flatMap(r => r.items)
    .filter(i => i.time === null || i.time >= oldest)
    .sort((a, b) => (b.time || 0) - (a.time || 0))
    .slice(0, MAX_ITEMS);
  return {
    updated: Date.now(),
    items,
    // open /api/news in a browser to see which sources are working
    sources: results.map(r => ({ id: r.source.id, name: r.source.name, ok: r.ok, count: r.items.length, error: r.error }))
  };
}

module.exports = async (req, res) => {
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });
  res.setHeader('Cache-Control', 'public, s-maxage=900, stale-while-revalidate=3600');
  try {
    if (!cache.data || Date.now() - cache.time > CACHE_MS) {
      cache = { time: Date.now(), data: await build() };
    }
    const q = String((req.query && req.query.q) || '').trim().slice(0, 60).toLowerCase();
    if (!q) return res.status(200).json(cache.data);
    const tokens = q.split(/\s+/).filter(w => w.length >= 2);
    const items = cache.data.items.filter(i => tokens.some(w => i.title.toLowerCase().includes(w)));
    return res.status(200).json({ ...cache.data, items, query: q });
  } catch (err) {
    console.error('news failed', err);
    return res.status(500).json({ error: 'failed' });
  }
};
module.exports.parseFeed = parseFeed;
