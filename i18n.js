
// i18n.js - ระบบแปลภาษาสมบูรณ์

const translations = {
  th: {
    // Index page
    heroTitle: "Math4Startup: เครื่องมือวิเคราะห์การเงินด้วย AI",
    heroSubtitle: "เริ่มต้นด้วยการเลือกสินค้าที่คุณสนใจ หรือดูแนวโน้มสินค้าขายดีในตลาด",
    labelProduct: "🛍️ ชื่อสินค้าหรือบริการที่คุณสนใจ",
    btnStart: "เริ่มต้นวิเคราะห์ธุรกิจ →",
    trendingTitle: "🔥 ธุรกิจแนะนำในช่วงนี้",
    refreshBtn: "🔄 รีเฟรชข้อมูล",
    trendingCategory: "หมวดหมู่ทั่วไป",
    productPlaceholder: "เช่น กาแฟ, เสื้อผ้า, คอร์สออนไลน์",
    langThai: "ไทย",
    langEnglish: "English",

    // Form page
    form_title: "⚡ กรอกข้อมูลสั้นๆ",
    form_subtitle: "เพียง 5 ข้อมูลสำคัญ ก็วิเคราะห์ธุรกิจได้แล้ว!",
    selected_product: "🎯 สินค้าที่เลือก:",
    quick_note: "✨ ใส่ข้อมูลง่ายๆ 5 ข้อ ระบบจะช่วยวิเคราะห์ให้เอง!",
    label_product: "1. ชื่อสินค้า/บริการ",
    label_cost: "2. ต้นทุนต่อชิ้น (บาท)",
    label_price: "3. ราคาขายต่อชิ้น (บาท)",
    label_units: "4. จำนวนที่จะขายต่อเดือน (หน่วย)",
    label_expense: "5. ค่าใช้จ่ายประจำเดือน (บาท)",
    btn_analyze: "🚀 วิเคราะห์ธุรกิจเลย!",
    productPlaceholder_form: "เช่น กาแฟคั่วสด",
    costPlaceholder: "เช่น 15",
    pricePlaceholder: "เช่น 35",
    unitsPlaceholder: "เช่น 500",
    expensePlaceholder: "เช่น 10000",
    help_text: "ค่าเช่า + ค่าไฟ + เงินเดือน",
    help_text_cost: "ค่าวัตถุดิบ + ค่าแรง",
    btn_submit: "🚀 เริ่มวิเคราะห์เลย!",
    back_home: "← กลับหน้าแรก",
    required_field: "จำเป็น",
    validation_complete: "กรุณากรอกข้อมูลให้ครบถ้วน",
    validation_price_higher: "❗ ราคาขายต้องมากกว่าต้นทุน",

    // Analyze page - Complete translations
    dashboardTitle: "📊 ศูนย์วิเคราะห์ธุรกิจครบวงจร",
    dashboardSubtitle: "วิเคราะห์ธุรกิจ จัดการเงิน และเป้าหมายต่อเดือน",
    productLabel: "🎯 สินค้า/บริการ:",
    businessTypeLabel: "ประเภทธุรกิจ:",
    tabOverview: "📈 ภาพรวม",
    tabAccounting: "💰 บัญชีรายวัน",
    tabGoalAnalysis: "🎯 วิเคราะห์เส้นทางสู่เป้าหมาย",
    overviewHeader: "📊 ผลการวิเคราะห์ธุรกิจ",
    langThai: "ไทย",
    langEnglish: "English",

    // Accounting tab translations
    addTransactionTitle: "💰 เพิ่มรายการรายรับรายจ่าย",
    transactionDate: "วันที่",
    transactionType: "ประเภท",
    transactionSelectType: "เลือกประเภท",
    transactionIncome: "รายรับ",
    transactionExpense: "รายจ่าย",
    transactionAmount: "จำนวนเงิน (บาท)",
    transactionDescription: "รายละเอียด",
    transactionDescPlaceholder: "เช่น ขายสินค้า, ค่าเช่า",
    transactionCategory: "หมวดหมู่",
    transactionSelectCategory: "เลือกหมวดหมู่",
    categorySales: "รายได้จากขาย",
    categoryOtherIncome: "รายได้อื่นๆ",
    categoryMaterials: "ค่าวัตถุดิบ",
    categoryRent: "ค่าเช่า",
    categoryUtilities: "ค่าสาธารณูปโภค",
    categoryMarketing: "ค่าการตลาด",
    categoryTransport: "ค่าขนส่ง",
    categoryOtherExpense: "ค่าใช้จ่ายอื่นๆ",
    btnAddTransaction: "เพิ่มรายการ",
    
    // Monthly summary
    monthlySummaryTitle: "📊 สรุปยอดรายเดือน",
    monthlyIncomeTotal: "รายรับรวม",
    monthlyExpenseTotal: "รายจ่ายรวม",
    monthlyBalance: "ยอดคงเหลือ",
    
    // Transaction list
    transactionListTitle: "📋 รายการธุรกรรม",
    transactionListDate: "วันที่",
    transactionListDescription: "รายละเอียด",
    transactionListCategory: "หมวดหมู่",
    transactionListAmount: "จำนวน",
    transactionListDelete: "ลบ",

    // Path analysis tab
    pathAnalysisTitle: "🎯 วิเคราะห์เส้นทางสู่เป้าหมาย",
    pathAnalysisSubtitle: "กรอกข้อมูลเพื่อวิเคราะห์เส้นทางการดำเนินธุรกิจและแผนการบรรลุเป้าหมาย",
    pathProductCost: "ต้นทุนสินค้าต่อชิ้น (บาท)",
    pathMarketingCost: "ค่าการตลาดต่อชิ้น (บาท)",
    pathShippingCost: "ค่าขนส่งต่อชิ้น (บาท)",
    pathSellingPrice: "ราคาขายต่อชิ้น (บาท)",
    pathProfitGoal: "เป้าหมายกำไรต่อเดือน (บาท)",
    pathFixedCosts: "ต้นทุนคงที่ต่อเดือน (บาท)",
    pathSellingDays: "จำนวนวันที่ขายต่อเดือน (วัน)",
    pathAnalysisResult: "📊 ผลการวิเคราะห์",

    // Business overview metrics
    monthlyRevenue: "รายได้ต่อเดือน",
    monthlyProfit: "กำไรต่อเดือน",
    profitMargin: "อัตรากำไร",
    breakeven: "จุดคุ้มทุน (หน่วย)",
    profitPerUnit: "กำไรสุทธิต่อชิ้น",
    unitsPerMonth: "ต้องขายต่อเดือน",
    unitsPerDay: "ต้องขายต่อวัน",
    actualRevenue: "รายได้จริงที่จะได้",
    actualProfit: "กำไรจริงหลังหักต้นทุนคงที่",
    
    // Additional metric labels
    totalCostPerUnit: "ต้นทุนรวมต่อชิ้น",
    profitPerUnitGoal: "กำไรต่อชิ้นตามเป้า",
    unitsNeededForGoal: "จำนวนที่ต้องขายเพื่อบรรลุเป้า",
    unitsPerDayGoal: "ต้องขายต่อวันเพื่อบรรลุเป้า",
    totalMonthlyCost: "ต้นทุนรวมต่อเดือน",
    expectedMonthlyRevenue: "รายได้คาดหวังต่อเดือน",
    expectedMonthlyProfit: "กำไรคาดหวังต่อเดือน",
    profitGoalAchievable: "ความเป็นไปได้ของเป้าหมาย",
    
    // Status and evaluation labels
    statusAchievable: "บรรลุได้",
    statusDifficult: "ท้าทาย",
    statusNotAchievable: "ยาก",
    evaluationExcellent: "ยอดเยี่ยม",
    evaluationGood: "ดี",
    evaluationAverage: "ปานกลาง",
    evaluationPoor: "ต้องปรับปรุง",
    
    // Section headers
    businessAnalysisHeader: "การวิเคราะห์ธุรกิจ",
    performanceMetricsHeader: "ตัวชี้วัดประสิทธิภาพ",
    goalAnalysisHeader: "การวิเคราะห์เป้าหมาย",
    financialSummaryHeader: "สรุปทางการเงิน",

    // Business insights
    insightsTitle: "💡 ข้อเสนะแนะ",
    editBusinessData: "📝 แก้ไขข้อมูลธุรกิจ",

    // Daily accounting page
    headerTitle: "💰 บัญชีรายรับรายจ่ายรายวัน",
    headerSubtitle: "บันทึกรายการเงินเข้า-ออกประจำวัน",
    formTitle: "เพิ่มรายการใหม่",
    labelDate: "วันที่",
    labelType: "ประเภท",
    labelAmount: "จำนวนเงิน (บาท)",
    labelDescription: "รายละเอียด",
    labelCategory: "หมวดหมู่",
    incomeOption: "รายรับ",
    expenseOption: "รายจ่าย",
    btnAdd: "เพิ่มรายการ",
    totalIncome: "รายรับรวม (เดือนนี้)",
    totalExpense: "รายจ่ายรวม (เดือนนี้)",
    balanceTitle: "ยอดคงเหลือ",
    chartTitle: "กราฟรายรับรายจ่ายรายเดือน",
    transactionListTitle: "รายการธุรกรรม",
    colDate: "วันที่",
    colDesc: "รายละเอียด",
    colCategory: "หมวดหมู่",
    colAmount: "จำนวน",
    colDelete: "ลบ",
    backHome: "← กลับหน้าแรก",
    deleteBtn: "ลบ",

    // Analysis result page
    analysisResultTitle: "📊 ผลการวิเคราะห์ธุรกิจ",
    analysisResultSubtitle: "คำนวณจากข้อมูล 7 ตัวแปรสำคัญ",
    monthlyCost: "ต้นทุนต่อเดือน",
    basicDataTitle: "📊 ข้อมูลพื้นฐาน",
    mainResultsTitle: "🎯 ผลการคำนวณเส้นทางสู่เป้าหมาย",
    actualSalesAnalysis: "💡 วิเคราะห์ยอดขายจริง",
    actualSalesNote: "หากคุณคิดว่ายอดขายต่อเดือนจริงของคุณเป็นเท่าไหร่ กรุณาแจ้งเรา เราจะช่วยแนะนำแนวทางให้",
    actualSalesWarning: "*ยอดขายที่คิดไว้ไม่ควรคลาดเคลื่อนมากเกินไปจากยอดขายที่ระบบคำนวณให้ เพราะอาจส่งผลต่อการวิเคราะห์",
    actualSalesInput: "ยอดขายจริงต่อเดือน (ชิ้น)",
    btnAnalyzeActual: "วิเคราะห์ยอดขายจริง",
    navBackAnalyze: "← กลับหน้าศูนย์วิเคราะห์ธุรกิจครบวงจร",
    navBackHome: "🏠 กลับหน้าแรก",

    // Business type names
    businessTypeRetail: "ขายปลีก",
    businessTypeWholesale: "ขายส่ง", 
    businessTypeService: "บริการ",
    businessTypeFood: "อาหารและเครื่องดื่ม",
    businessTypeOnline: "ออนไลน์/E-commerce",
    businessTypeManufacturing: "ผลิต",
    businessTypeConsulting: "ที่ปรึกษา",

    // Category names for all transaction types
    categorySalesName: "ขายสินค้า",
    categoryOtherIncomeName: "รายได้อื่นๆ", 
    categoryMaterialsName: "วัตถุดิบ",
    categoryRentName: "ค่าเช่า",
    categoryUtilitiesName: "สาธารณูปโภค",
    categoryMarketingName: "การตลาด",
    categoryTransportName: "ขนส่ง",
    categoryOtherExpenseName: "ค่าใช้จ่ายอื่นๆ",

    // Business insights messages
    insightHighProfit: "🎉 อัตรากำไรสูงมาก ธุรกิจมีศักยภาพดีเยี่ยม",
    insightLowProfit: "⚠️ อัตรากำไรต่ำ ควรลดต้นทุนหรือเพิ่มราคา",
    insightProfitable: "✅ ธุรกิจมีกำไร ควรขยายการตลาดเพื่อเพิ่มยอดขาย",
    insightLoss: "🔴 ธุรกิจขาดทุน ต้องปรับกลยุทธ์ด่วน",
    insightBreakeven: "📊 ต้องขายอย่างน้อย {breakeven} หน่วยต่อเดือนเพื่อคุ้มทุน",
    insightTracking: "📈 บันทึกรายรับรายจ่ายจริงเพื่อเปรียบเทียบกับแผน",

    // Chart labels
    chartIncomeLabel: "รายรับสะสม",
    chartExpenseLabel: "รายจ่ายสะสม",
    chartBalanceLabel: "ยอดเงินคงเหลือ",
    chartAmountAxis: "จำนวนเงิน (บาท)",
    chartDateAxis: "วันที่ในเดือน",
    chartTooltipIncome: "รายรับสะสม: {amount} ฿",
    chartTooltipExpense: "รายจ่ายสะสม: {amount} ฿",
    chartTooltipBalance: "ยอดคงเหลือ: {amount} ฿",

    // Doughnut chart labels
    chartProfitLabel: "กำไร",
    chartCostLabel: "ต้นทุนสินค้า",
    chartExpenseFixedLabel: "ค่าใช้จ่าย"
  },

  en: {
    // Index page
    heroTitle: "Math4Startup: AI-Powered Financial Decision Engine",
    heroSubtitle: "Start by entering a product or exploring trending business ideas.",
    labelProduct: "🛍️ Product or Service Name",
    btnStart: "Start Business Analysis →",
    trendingTitle: "🔥 Recommended Businesses Now",
    refreshBtn: "🔄 Refresh Data",
    trendingCategory: "General Category",
    productPlaceholder: "e.g. Coffee, Clothing, Online Course",
    langThai: "ไทย",
    langEnglish: "English",

    // Form page
    form_title: "⚡ Quick Business Info",
    form_subtitle: "Just 5 key data points to analyze your business!",
    selected_product: "🎯 Selected Product:",
    quick_note: "✨ Enter 5 simple details and let the system analyze for you!",
    label_product: "1. Product/Service Name",
    label_cost: "2. Cost per Unit (THB)",
    label_price: "3. Selling Price per Unit (THB)",
    label_units: "4. Monthly Sales Volume (Units)",
    label_expense: "5. Monthly Fixed Expenses (THB)",
    btn_analyze: "🚀 Analyze Business Now!",
    productPlaceholder_form: "e.g. Fresh Roasted Coffee",
    costPlaceholder: "e.g. 15",
    pricePlaceholder: "e.g. 35",
    unitsPlaceholder: "e.g. 500",
    expensePlaceholder: "e.g. 10000",
    help_text: "Rent + Utilities + Salary",
    help_text_cost: "Materials + Labor",
    btn_submit: "🚀 Start Analysis Now!",
    back_home: "← Back to Home",
    required_field: "Required",
    validation_complete: "Please fill in all required fields",
    validation_price_higher: "❗ Selling price must be higher than cost",

    // Analyze page - Complete translations
    dashboardTitle: "📊 All-in-One Business Analysis Center",
    dashboardSubtitle: "Analyze your business, manage finances, and set monthly goals",
    productLabel: "🎯 Product/Service:",
    businessTypeLabel: "Business Type:",
    tabOverview: "📈 Overview",
    tabAccounting: "💰 Daily Accounting",
    tabGoalAnalysis: "🎯 Path to Goal Analysis",
    overviewHeader: "📊 Business Analysis Result",
    langThai: "ไทย",
    langEnglish: "English",

    // Accounting tab translations
    addTransactionTitle: "💰 Add Income & Expense Entry",
    transactionDate: "Date",
    transactionType: "Type",
    transactionSelectType: "Select Type",
    transactionIncome: "Income",
    transactionExpense: "Expense",
    transactionAmount: "Amount (THB)",
    transactionDescription: "Description",
    transactionDescPlaceholder: "e.g. Product sales, Rent",
    transactionCategory: "Category",
    transactionSelectCategory: "Select Category",
    categorySales: "Sales Revenue",
    categoryOtherIncome: "Other Income",
    categoryMaterials: "Materials Cost",
    categoryRent: "Rent",
    categoryUtilities: "Utilities",
    categoryMarketing: "Marketing",
    categoryTransport: "Transport",
    categoryOtherExpense: "Other Expenses",
    btnAddTransaction: "Add Entry",
    
    // Monthly summary
    monthlySummaryTitle: "📊 Monthly Summary",
    monthlyIncomeTotal: "Total Income",
    monthlyExpenseTotal: "Total Expenses",
    monthlyBalance: "Balance",
    
    // Transaction list
    transactionListTitle: "📋 Transaction List",
    transactionListDate: "Date",
    transactionListDescription: "Description",
    transactionListCategory: "Category",
    transactionListAmount: "Amount",
    transactionListDelete: "Delete",

    // Path analysis tab
    pathAnalysisTitle: "🎯 Path to Goal Analysis",
    pathAnalysisSubtitle: "Enter data to analyze your business path and goal achievement plan",
    pathProductCost: "Product Cost per Unit (THB)",
    pathMarketingCost: "Marketing Cost per Unit (THB)",
    pathShippingCost: "Shipping Cost per Unit (THB)",
    pathSellingPrice: "Selling Price per Unit (THB)",
    pathProfitGoal: "Monthly Profit Goal (THB)",
    pathFixedCosts: "Monthly Fixed Costs (THB)",
    pathSellingDays: "Selling Days per Month (Days)",
    pathAnalysisResult: "📊 Analysis Result",

    // Business overview metrics
    monthlyRevenue: "Monthly Revenue",
    monthlyProfit: "Monthly Profit",
    profitMargin: "Profit Margin",
    breakeven: "Breakeven (Units)",
    profitPerUnit: "Net Profit per Unit",
    unitsPerMonth: "Units to Sell per Month",
    unitsPerDay: "Units to Sell per Day",
    actualRevenue: "Actual Revenue Expected",
    actualProfit: "Actual Profit After Fixed Costs",
    
    // Additional metric labels
    totalCostPerUnit: "Total Cost per Unit",
    profitPerUnitGoal: "Profit per Unit Target",
    unitsNeededForGoal: "Units Needed for Goal",
    unitsPerDayGoal: "Units per Day for Goal",
    totalMonthlyCost: "Total Monthly Cost",
    expectedMonthlyRevenue: "Expected Monthly Revenue",
    expectedMonthlyProfit: "Expected Monthly Profit",
    profitGoalAchievable: "Goal Achievability",
    
    // Status and evaluation labels
    statusAchievable: "Achievable",
    statusDifficult: "Challenging",
    statusNotAchievable: "Difficult",
    evaluationExcellent: "Excellent",
    evaluationGood: "Good",
    evaluationAverage: "Average",
    evaluationPoor: "Needs Improvement",
    
    // Section headers
    businessAnalysisHeader: "Business Analysis",
    performanceMetricsHeader: "Performance Metrics",
    goalAnalysisHeader: "Goal Analysis",
    financialSummaryHeader: "Financial Summary",

    // Business insights
    insightsTitle: "💡 Recommendations",
    editBusinessData: "📝 Edit Business Data",

    // Daily accounting page
    headerTitle: "💰 Daily Income & Expense Tracking",
    headerSubtitle: "Record daily financial transactions",
    formTitle: "Add New Entry",
    labelDate: "Date",
    labelType: "Type",
    labelAmount: "Amount (THB)",
    labelDescription: "Description",
    labelCategory: "Category",
    incomeOption: "Income",
    expenseOption: "Expense",
    btnAdd: "Add Entry",
    totalIncome: "Total Income (This Month)",
    totalExpense: "Total Expenses (This Month)",
    balanceTitle: "Remaining Balance",
    chartTitle: "Monthly Income vs Expense Chart",
    transactionListTitle: "Transaction List",
    colDate: "Date",
    colDesc: "Description",
    colCategory: "Category",
    colAmount: "Amount",
    colDelete: "Delete",
    backHome: "← Back to Home",
    deleteBtn: "Delete",

    // Analysis result page
    analysisResultTitle: "📊 Business Analysis Results",
    analysisResultSubtitle: "Calculated from 7 key variables",
    monthlyCost: "Monthly Cost",
    basicDataTitle: "📊 Basic Data",
    mainResultsTitle: "🎯 Path to Goal Analysis Results",
    actualSalesAnalysis: "💡 Actual Sales Analysis",
    actualSalesNote: "If you think your actual monthly sales are different, please let us know and we'll provide recommendations",
    actualSalesWarning: "*Estimated sales should not deviate too much from system-calculated sales as it may affect analysis",
    actualSalesInput: "Actual Monthly Sales (Units)",
    btnAnalyzeActual: "Analyze Actual Sales",
    navBackAnalyze: "← Back to Business Analysis Center",
    navBackHome: "🏠 Back to Home",

    // Business type names
    businessTypeRetail: "Retail",
    businessTypeWholesale: "Wholesale",
    businessTypeService: "Service",
    businessTypeFood: "Food & Beverage",
    businessTypeOnline: "Online/E-commerce",
    businessTypeManufacturing: "Manufacturing",
    businessTypeConsulting: "Consulting",

    // Category names for all transaction types
    categorySalesName: "Product Sales",
    categoryOtherIncomeName: "Other Income",
    categoryMaterialsName: "Materials",
    categoryRentName: "Rent",
    categoryUtilitiesName: "Utilities",
    categoryMarketingName: "Marketing",
    categoryTransportName: "Transport",
    categoryOtherExpenseName: "Other Expenses",

    // Business insights messages
    insightHighProfit: "🎉 Excellent profit margin! Your business has great potential",
    insightLowProfit: "⚠️ Low profit margin. Consider reducing costs or increasing prices",
    insightProfitable: "✅ Business is profitable. Consider expanding marketing to increase sales",
    insightLoss: "🔴 Business is losing money. Need immediate strategy adjustment",
    insightBreakeven: "📊 Need to sell at least {breakeven} units per month to break even",
    insightTracking: "📈 Track actual income and expenses to compare with plan",

    // Chart labels
    chartIncomeLabel: "Cumulative Income",
    chartExpenseLabel: "Cumulative Expenses",
    chartBalanceLabel: "Account Balance",
    chartAmountAxis: "Amount (THB)",
    chartDateAxis: "Date in Month",
    chartTooltipIncome: "Cumulative Income: {amount} ฿",
    chartTooltipExpense: "Cumulative Expenses: {amount} ฿",
    chartTooltipBalance: "Balance: {amount} ฿",

    // Doughnut chart labels
    chartProfitLabel: "Profit",
    chartCostLabel: "Product Cost",
    chartExpenseFixedLabel: "Fixed Expenses"
  }
};

// ฟังก์ชันแปลภาษาที่มีประสิทธิภาพสูง
function setLanguage(lang) {
  localStorage.setItem("language", lang);
  translatePage();
  
  // อัพเดทภาษาในหน้าอื่นๆ ที่มี dropdown selector
  const languageSelects = document.querySelectorAll("#languageSelect");
  languageSelects.forEach(select => {
    if (select) select.value = lang;
  });
}

function translatePage() {
  const lang = localStorage.getItem("language") || "th";
  const currentTranslations = translations[lang];
  
  if (!currentTranslations) return;
  
  // แปลข้อความทั่วไป - ใช้ DocumentFragment เพื่อประสิทธิภาพ
  const elementsToTranslate = document.querySelectorAll("[data-i18n]");
  elementsToTranslate.forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = currentTranslations[key];
    if (translation) {
      el.textContent = translation;
    }
  });

  // แปล placeholder
  const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");
  placeholderElements.forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const translation = currentTranslations[key];
    if (translation) {
      el.setAttribute("placeholder", translation);
    }
  });

  // แปล title attributes
  const titleElements = document.querySelectorAll("[data-i18n-title]");
  titleElements.forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    const translation = currentTranslations[key];
    if (translation) {
      el.setAttribute("title", translation);
    }
  });

  // แปล aria-label attributes
  const ariaElements = document.querySelectorAll("[data-i18n-aria]");
  ariaElements.forEach(el => {
    const key = el.getAttribute("data-i18n-aria");
    const translation = currentTranslations[key];
    if (translation) {
      el.setAttribute("aria-label", translation);
    }
  });

  // แปล option ใน select
  const optionElements = document.querySelectorAll("option[data-i18n]");
  optionElements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = currentTranslations[key];
    if (translation) {
      el.textContent = translation;
    }
  });

  // อัพเดท language selector
  const languageSelects = document.querySelectorAll("#languageSelect");
  languageSelects.forEach(select => {
    if (select) select.value = lang;
  });

  // อัพเดทภาษาของหน้า
  document.documentElement.lang = lang === 'th' ? 'th' : 'en';
}

// ฟังก์ชันแปลข้อความแบบ dynamic
function getTranslation(key, lang = null) {
  const currentLang = lang || localStorage.getItem("language") || "th";
  return translations[currentLang] && translations[currentLang][key] || key;
}

// ฟังก์ชันแปลชื่อหมวดหมู่
function getCategoryDisplayName(category, lang = null) {
  const currentLang = lang || localStorage.getItem("language") || "th";
  const categoryMap = {
    'sales': currentLang === 'th' ? 'ขายสินค้า' : 'Product Sales',
    'other-income': currentLang === 'th' ? 'รายได้อื่นๆ' : 'Other Income',
    'materials': currentLang === 'th' ? 'วัตถุดิบ' : 'Materials',
    'rent': currentLang === 'th' ? 'ค่าเช่า' : 'Rent',
    'utilities': currentLang === 'th' ? 'สาธารณูปโภค' : 'Utilities',
    'marketing': currentLang === 'th' ? 'การตลาด' : 'Marketing',
    'transport': currentLang === 'th' ? 'ขนส่ง' : 'Transport',
    'other-expense': currentLang === 'th' ? 'ค่าใช้จ่ายอื่นๆ' : 'Other Expenses'
  };
  return categoryMap[category] || category;
}

// ฟังก์ชันแปลชื่อประเภทธุรกิจ
function getBusinessTypeDisplayName(type, lang = null) {
  const currentLang = lang || localStorage.getItem("language") || "th";
  const typeMap = {
    'retail': currentLang === 'th' ? 'ขายปลีก' : 'Retail',
    'wholesale': currentLang === 'th' ? 'ขายส่ง' : 'Wholesale',
    'service': currentLang === 'th' ? 'บริการ' : 'Service',
    'food': currentLang === 'th' ? 'อาหารและเครื่องดื่ม' : 'Food & Beverage',
    'online': currentLang === 'th' ? 'ออนไลน์/E-commerce' : 'Online/E-commerce',
    'manufacturing': currentLang === 'th' ? 'ผลิต' : 'Manufacturing',
    'consulting': currentLang === 'th' ? 'ที่ปรึกษา' : 'Consulting'
  };
  return typeMap[type] || type;
}

// เรียกใช้เมื่อโหลดหน้า
window.addEventListener("DOMContentLoaded", translatePage);

// Export สำหรับใช้ในไฟล์อื่น
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations, setLanguage, translatePage };
}
