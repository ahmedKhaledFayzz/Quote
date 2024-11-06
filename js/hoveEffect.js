const hoverEffect = document.querySelector(".hover-effect");

hoverEffect.addEventListener("mouseleave", () => {
  // إزالة التأثير عن طريق إجبار المتصفح على إعادة تحميل الـ hover
  hoverEffect.style.animation = "none";
  setTimeout(() => (hoverEffect.style.animation = ""), 10);
});
