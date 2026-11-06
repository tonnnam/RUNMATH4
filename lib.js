// lib.js — small helpers shared by overview.html and trends.html
const Lib = (() => {
  const TRENDS_URL = 'https://pytrends-api-qu8c.onrender.com//api/trends';
  const FALLBACK_TRENDS = [
    'กาแฟคั่วสด', 'เสื้อผ้าออนไลน์', 'คอร์สออนไลน์', 'อาหารคลีน', 'ขนมหวาน',
    'เครื่องสำอาง', 'ผลิตภัณฑ์ธรรมชาติ', 'เสื้อผ้าเด็ก', 'อุปกรณ์ออกกำลังกาย', 'บริการส่งอาหาร'
  ];

  const lang = () => localStorage.getItem('language') || 'th';
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmt = n => Number(n).toLocaleString('th-TH', { maximumFractionDigits: 1 });

  function loadBiz() {
    try {
      const d = JSON.parse(localStorage.getItem('businessData') || 'null');
      if (d && d.price > 0 && d.cost >= 0 && d.units >= 0 && d.expense >= 0) return d;
    } catch (e) { }
    return null;
  }

  function calc(d) {
    const unit = d.price - d.cost;
    return {
      revenue: d.price * d.units,
      profit: unit * d.units - d.expense,
      margin: d.price > 0 ? (unit / d.price) * 100 : 0,
      breakeven: unit > 0 ? Math.ceil(d.expense / unit) : null
    };
  }

  async function fetchTrends() {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10000);
    try {
      const r = await fetch(TRENDS_URL, { signal: controller.signal });
      const d = await r.json();
      if (!d.trends || !d.trends.length) throw new Error('no trends');
      return { items: d.trends.slice(0, 10), fallback: false, updated: d.last_update || null };
    } catch (e) {
      return { items: FALLBACK_TRENDS, fallback: true, updated: null };
    } finally {
      clearTimeout(timer);
    }
  }

  async function fetchNews() {
    const r = await fetch('/api/news');
    if (!(r.headers.get('content-type') || '').includes('json')) throw new Error('no_api');
    const d = await r.json();
    if (!r.ok || !Array.isArray(d.items)) throw new Error('bad response');
    return d.items;
  }

  function ago(ms) {
    if (!ms) return '';
    const rtf = new Intl.RelativeTimeFormat(lang() === 'th' ? 'th' : 'en', { numeric: 'auto' });
    const mins = Math.round((ms - Date.now()) / 60000);
    if (Math.abs(mins) < 60) return rtf.format(mins, 'minute');
    const hrs = Math.round(mins / 60);
    if (Math.abs(hrs) < 48) return rtf.format(hrs, 'hour');
    return rtf.format(Math.round(hrs / 24), 'day');
  }

  const money = n => Number(n).toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // price = (cost + extra) / (1 - fee% - margin%)
  function calcPrice({ cost, extra, feePct, marginPct }) {
    const base = cost + extra;
    const denom = 1 - feePct / 100 - marginPct / 100;
    if (!(base >= 0) || !(denom > 0)) return null;
    const price = base / denom;
    return { price, profit: price - base - price * feePct / 100, markup: base > 0 ? (price / base - 1) * 100 : null };
  }

  function calcRunway({ cash, revenue, costs }) {
    const net = revenue - costs;
    return { net, runway: net < 0 ? cash / -net : null, coverage: costs > 0 ? cash / costs : null };
  }

  function calcTarget({ targetProfit, price, varCost, fixed, days }) {
    const unit = price - varCost;
    if (!(unit > 0)) return null;
    const units = Math.ceil((targetProfit + fixed) / unit);
    return { unit, units, revenue: units * price, perDay: days > 0 ? Math.ceil(units / days) : null };
  }

  // Turns a search phrase such as "ร้านอาหารใกล้ฉัน" into a keyword that can match news headlines
  function newsKeyword(name) {
    let k = String(name).replace(/1\s*แถม\s*1/g, ' ');
    for (const w of ['ใกล้ฉัน', 'ใกล้ ฉัน', 'ใกล้บ้าน', 'ฟรี', 'เมนู', 'ราคา', 'near me', 'free', 'menu', 'price']) k = k.split(w).join(' ');
    k = k.replace(/\s+/g, ' ').trim();
    const noOnline = k.replace(/ออนไลน์/g, '').trim();
    if (noOnline.length >= 3) k = noOnline;
    return k || String(name).trim();
  }

  return { lang, esc, newsKeyword, fmt, money, loadBiz, calc, calcPrice, calcRunway, calcTarget, fetchTrends, fetchNews, ago };
})();
