// i18n.js

const translations = {
  th: {
    dashboardTitle: "📊 ศูนย์วิเคราะห์ธุรกิจครบวงจร",
    dashboardSubtitle: "วิเคราะห์ธุรกิจ จัดการเงิน และเป้าหมายต่อเดือน",
    productLabel: "🎯 สินค้า/บริการ:",
    businessTypeLabel: "ประเภทธุรกิจ:",
    tabOverview: "📈 ภาพรวม",
    tabAccounting: "💰 บัญชีรายวัน",
    tabGoalAnalysis: "🎯 วิเคราะห์เส้นทางสู่เป้าหมาย",
    overviewHeader: "📊 ผลการวิเคราะห์ธุรกิจ"
    // 👉 เพิ่ม key ใหม่ได้เรื่อยๆ
  },
  en: {
    dashboardTitle: "📊 All-in-One Business Analysis Center",
    dashboardSubtitle: "Analyze your business, manage finances, and set monthly goals",
    productLabel: "🎯 Product/Service:",
    businessTypeLabel: "Business Type:",
    tabOverview: "📈 Overview",
    tabAccounting: "💰 Daily Accounting",
    tabGoalAnalysis: "🎯 Path to Goal Analysis",
    overviewHeader: "📊 Business Analysis Result"
    // 👉 Add more keys here as needed
  }
};

function setLanguage(lang) {
  localStorage.setItem("language", lang);
  translatePage();
}

function translatePage() {
  const lang = localStorage.getItem("language") || "th";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

// แปลภาษาเมื่อเปิดหน้า
window.addEventListener("DOMContentLoaded", translatePage);