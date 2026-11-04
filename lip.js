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
      return { items: d.trends.slice(0, 10), fallback: false };
    } catch (e) {
      return { items: FALLBACK_TRENDS, fallback: true };
    } finally {
      clearTimeout(timer);
    }
  }

  async function fetchNews() {
    const r = await fetch('/api/news');
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

  return { lang, esc, fmt, loadBiz, calc, fetchTrends, fetchNews, ago };
})();
