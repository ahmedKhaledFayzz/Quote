// تعيين مدة التحميل إلى 10 ثوانٍ (10000 مللي ثانية)
setTimeout(() => {
  const loadingScreen = document.getElementById("loading-screen");
  const content = document.getElementById("content");

  loadingScreen.style.display = "none"; // إخفاء شاشة التحميل
  content.style.display = "block"; // عرض المحتوى الرئيسي
}, 1000); // مدة الانتظار بالمللي ثانية
