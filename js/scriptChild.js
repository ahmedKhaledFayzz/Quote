// مصفوفة الاقتباسات
const quotes = [
  "الأطفال هم الزهور التي تنمو في حديقة الحياة.",
  "الأطفال هم المستقبل الذي نبنيه اليوم.",
  "الأطفال هم هدية من الله، فلنحافظ عليهم.",
  "الأطفال يجلبون السعادة والنور إلى حياتنا.",
  "الأطفال هم الأمل الذي يضيء طريقنا.",
  "الأطفال يرسمون البسمة على وجوهنا.",
  "الأطفال هم الأحلام التي تتحقق.",
  "الأطفال هم قلوب نقية وطاهرة.",
  "الأطفال يعلموننا الحب والتسامح.",
  "الأطفال هم الجواهر الثمينة في حياتنا.",
  "الأطفال يجلبون الفرح والضحك إلى حياتنا.",
  "الأطفال هم الأمل الذي نعيش من أجله.",
  "الأطفال يجعلون الحياة أكثر جمالًا.",
  "الأطفال هم المعلمون الصغار الذين يعلموننا البراءة.",
  "الأطفال هم الابتسامة التي تضيء يومنا.",
  "الأطفال يجلبون السلام إلى أرواحنا.",
  "الأطفال هم الحب الصادق والبراءة.",
  "الأطفال هم المستقبل الذي نطمح إليه.",
  "الأطفال هم الأمل الذي لا يموت.",
  "الأطفال يجعلون حياتنا مليئة بالفرح.",
  "الأطفال هم العبير الذي يملأ حياتنا.",
  "الأطفال هم السعادة التي لا تنتهي.",
  "الأطفال هم النور الذي يضيء طريقنا.",
  "الأطفال هم الحب الذي يملأ قلوبنا.",
  "الأطفال يجعلون كل يوم أجمل.",
  "الأطفال هم الضحكة البريئة التي تملأ حياتنا.",
  "الأطفال هم النجوم التي تضيء سماء حياتنا.",
  "الأطفال هم الحلم الذي نعيشه.",
  "الأطفال يجعلون الحياة أكثر إشراقًا.",
  "الأطفال هم الأمل الذي يملأ قلوبنا.",
  "الأطفال هم الفرحة التي تملأ حياتنا.",
  "الأطفال هم الحب الذي يجعل حياتنا جميلة.",
  "الأطفال هم السعادة التي نشعر بها.",
  "الأطفال يجعلون الحياة تستحق العيش.",
  "الأطفال هم البذور التي نزرعها للمستقبل.",
  "الأطفال هم الأمل الذي نحيا من أجله.",
  "الأطفال يجعلون كل لحظة تستحق الاحتفال.",
  "الأطفال هم الهدية التي لا تقدر بثمن.",
  "الأطفال هم الفرح الذي نعيشه كل يوم.",
  "الأطفال هم البهجة التي تملأ حياتنا.",
  "الأطفال هم الأمل الذي لا ينتهي.",
  "الأطفال يجعلون حياتنا مليئة بالألوان.",
  "الأطفال هم الأمل الذي يضيء حياتنا.",
  "الأطفال هم البسمة التي تملأ حياتنا.",
  "الأطفال هم الحب الذي نشعر به في قلوبنا.",
  "الأطفال يجعلون الحياة أكثر جمالًا وروعة.",
  "الأطفال هم الأمل الذي نعيش من أجله.",
  "الأطفال هم البذور التي تنمو لتصبح شجرة المستقبل.",
  "الأطفال هم الفرح الذي يملأ حياتنا.",
  "الأطفال يجعلون الحياة تستحق العيش.",
  "الأطفال هم الأمل الذي يملأ قلوبنا.",
  "الأطفال هم السعادة التي نشعر بها كل يوم.",
  "الأطفال هم الحب الذي يملأ حياتنا.",
  "الأطفال يجعلون كل يوم أجمل.",
  "الأطفال هم البذور التي نزرعها للمستقبل.",
  "الأطفال هم الأمل الذي نحيا من أجله.",
  "الأطفال هم الفرح الذي نعيشه كل يوم.",
  "الأطفال هم الأمل الذي يضيء طريقنا.",
  "الأطفال هم الحب الذي يجعل حياتنا جميلة.",
  "الأطفال هم السعادة التي تملأ حياتنا.",
  "الأطفال يجعلون الحياة مليئة بالبهجة.",
  "الأطفال هم النجوم التي تضيء سماء حياتنا.",
  "الأطفال هم الأمل الذي يملأ قلوبنا.",
  "الأطفال هم البهجة التي تملأ حياتنا.",
  "الأطفال هم الفرح الذي نعيشه كل يوم.",
  "الأطفال يجعلون كل لحظة تستحق الاحتفال.",
  "الأطفال هم الهدية التي لا تقدر بثمن.",
  "الأطفال هم الحب الذي يجعل حياتنا رائعة.",
  "الأطفال هم السعادة التي نشعر بها كل يوم.",
  "الأطفال هم الأمل الذي لا يموت.",
  "الأطفال هم البذور التي تنمو لتصبح شجرة المستقبل.",
  "الأطفال هم الفرح الذي يملأ حياتنا.",
  "الأطفال يجعلون الحياة تستحق العيش.",
  "الأطفال هم الأمل الذي يملأ قلوبنا.",
  "الأطفال هم السعادة التي نشعر بها كل يوم.",
  "الأطفال هم الحب الذي يملأ حياتنا.",
  "الأطفال يجعلون كل يوم أجمل.",
  "الأطفال هم البذور التي نزرعها للمستقبل.",
  "الأطفال هم الأمل الذي نحيا من أجله.",
  "الأطفال هم الفرح الذي نعيشه كل يوم.",
  "الأطفال هم الأمل الذي يضيء طريقنا.",
  "الأطفال هم الحب الذي يجعل حياتنا جميلة.",
  "الأطفال هم السعادة التي تملأ حياتنا.",
  "الأطفال يجعلون الحياة مليئة بالبهجة.",
  "الأطفال هم النجوم التي تضيء سماء حياتنا.",
  "الأطفال هم الأمل الذي يملأ قلوبنا.",
  "الأطفال هم البهجة التي تملأ حياتنا.",
  "الأطفال هم الفرح الذي نعيشه كل يوم.",
  "الأطفال يجعلون كل لحظة تستحق الاحتفال.",
];

// الحصول على العناصر من الصفحة
const quoteElement = document.getElementById("quote");
const quoteButton = document.getElementById("quoteButton");
const favoriteButton = document.getElementById("favoriteButton");
const shareButton = document.getElementById("shareButton");
const favoritesElement = document.getElementById("favorites");

// استرجاع المفضلة من التخزين المحلي
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// دالة لتوليد اقتباس عشوائي
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}
// أضف هذه الدالة الجديدة
function deleteQuote(index) {
  favorites.splice(index, 1);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  updateFavorites();
}

// عدل دالة updateFavorites لتشمل زر الحذف
function updateFavorites() {
  favoritesElement.innerHTML = "";
  favorites.forEach((quote, index) => {
    const div = document.createElement("div");
    div.className = "favorite-quote";

    const quoteText = document.createElement("span");
    quoteText.textContent = quote;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.onclick = () => deleteQuote(index);

    div.appendChild(quoteText);
    div.appendChild(deleteButton);
    favoritesElement.appendChild(div);
  });
}
// إضافة الأحداث للأزرار
quoteButton.addEventListener("click", generateQuote);

favoriteButton.addEventListener("click", () => {
  const currentQuote = quoteElement.textContent;
  if (!favorites.includes(currentQuote)) {
    favorites.push(currentQuote);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateFavorites();
  }
});

function shareQuote() {
  const currentQuote = document.getElementById("quote").textContent;
  const appName = "اقتباسات ملهمة";
  const developerName = "أحمد خالد";
  const appDownloadLink =
    "https://drive.google.com/drive/folders/1-RsaL0iT20HPxG7jFgliz-tnLV-bV5m2"; // استبدل هذا برابط التنزيل الفعلي للتطبيق

  const shareText = `"${currentQuote}"

تم مشاركة هذا الاقتباس من تطبيق "${appName}"
تطوير: ${developerName}
لتنزيل التطبيق: ${appDownloadLink}`;

  const shareUrl = window.location.href;

  // التحقق من دعم واجهة برمجة التطبيقات للمشاركة الأصلية
  if (navigator.share) {
    navigator
      .share({
        title: "اقتباس ملهم",
        text: shareText,
        url: shareUrl,
      })
      .then(() => {
        console.log("تمت المشاركة بنجاح");
      })
      .catch((error) => {
        console.log("خطأ في المشاركة:", error);
        fallbackShare(
          shareText,
          shareUrl,
          appName,
          developerName,
          appDownloadLink
        );
      });
  } else {
    fallbackShare(shareText, shareUrl, appName, developerName, appDownloadLink);
  }
}

function fallbackShare(
  shareText,
  shareUrl,
  appName,
  developerName,
  appDownloadLink
) {
  const dialog = document.createElement("div");
  dialog.className = "share-dialog";
  dialog.innerHTML = `
<div class="share-content">
    <h5>مشاركة الاقتباس</h5>
    <textarea class="form-control" rows="4" readonly>${shareText}</textarea>
    <div class="social-share mt-3">
        <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(
          shareText
        )}" target="_blank" class="btn btn-custom">
            <i class="fab fa-twitter"></i> تويتر
        </a>
        <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(
          shareText
        )}" target="_blank" class="btn btn-custom">
            <i class="fab fa-whatsapp"></i> واتساب
        </a>
        <a href="mailto:?subject=اقتباس ملهم&body=${encodeURIComponent(
          shareText
        )}" target="_blank" class="btn btn-custom">
            <i class="fas fa-envelope"></i> البريد الإلكتروني
        </a>
        <a href="https://t.me/share/url?url=${encodeURIComponent(
          shareUrl
        )}&text=${encodeURIComponent(
    shareText
  )}" target="_blank" class="btn btn-custom">
            <i class="fab fa-telegram-plane"></i> تيليجرام
        </a>
        <a href="#" onclick="shareToInstagram('${shareText}')" class="btn btn-custom">
            <i class="fab fa-instagram"></i> إنستجرام
        </a>
        <a href="#" onclick="shareToInstagramStories('${shareText}')" class="btn btn-custom">
            <i class="fab fa-instagram"></i> إنستجرام ستوريز
        </a>
    </div>
    <div class="app-info">
        <p>تمت مشاركة هذا الاقتباس من تطبيق "${appName}"</p>
        <p>تطوير: ${developerName}</p>
        <p><a href="${appDownloadLink}" target="_blank">تنزيل التطبيق</a></p>
    </div>
</div>
`;

  document.body.appendChild(dialog);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      document.body.removeChild(dialog);
    }
  });
}

function shareToInstagram(shareText) {
  copyToClipboard(shareText);
  alert("تم نسخ الاقتباس. افتح تطبيق إنستجرام والصقه هناك.");
  window.location.href = "instagram://app";
}

function shareToInstagramStories(shareText) {
  copyToClipboard(shareText);
  alert(
    "تم نسخ الاقتباس. افتح تطبيق إنستجرام وقم بإنشاء قصة جديدة والصق الاقتباس."
  );
  window.location.href = "instagram://story-camera";
}

function copyToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

// تعديل الحدث لزر المشاركة
shareButton.addEventListener("click", shareQuote);
// تحديث المفضلة عند تحميل الصفحة
updateFavorites();

// توليد اقتباس عند تحميل الصفحة
generateQuote();
