// مصفوفة الاقتباسات
const quotes = [
  "النجاح هو نتيجة الإعداد الجيد، والعمل الشاق، والتعلم من الفشل.",
  "النجاح ليس نهاية، الفشل ليس قاتلاً: الشجاعة هي الاستمرار.",
  "النجاح لا يأتي من الراحة، بل من التحدي.",
  "النجاح هو ثمرة الجهد.",
  "النجاح يحتاج إلى تخطيط.",
  "النجاح هو ثمرة المثابرة.",
  "النجاح هو ما تفعله بما تملك.",
  "النجاح يأتي لأولئك الذين يعتقدون في جمال أحلامهم.",
  "النجاح لا يعتمد على الحظ، بل على العمل الجاد.",
  "النجاح هو القدرة على الانتقال من فشل إلى فشل دون أن تفقد حماسك.",
  "النجاح هو مجموع الجهود الصغيرة التي تتكرر يوماً بعد يوم.",
  "النجاح هو السير من فشل إلى فشل دون فقدان الحماس.",
  "النجاح هو الاستمتاع برحلتك.",
  "النجاح هو الحصول على ما تريد، والسعادة هي أن تريد ما تحصل عليه.",
  "النجاح ليس هدفاً، بل هو رحلة.",
  "النجاح يأتي لأولئك الذين يؤمنون بجمال أحلامهم.",
  "النجاح ليس مفتاح السعادة، السعادة هي مفتاح النجاح.",
  "النجاح هو الحصول على ما تريد، والسعادة هي أن تريد ما تحصل عليه.",
  "النجاح ليس هدفاً، بل هو نتيجة للإعداد الجيد، والعمل الشاق، والتعلم من الفشل.",
  "النجاح يأتي لأولئك الذين يؤمنون بجمال أحلامهم.",
  "النجاح هو الحصول على ما تريد، والسعادة هي أن تريد ما تحصل عليه.",
  "النجاح هو ثمرة المثابرة والعمل الجاد.",
  "النجاح هو القدرة على الانتقال من فشل إلى فشل دون أن تفقد حماسك.",
  "النجاح يأتي لأولئك الذين يؤمنون بجمال أحلامهم.",
  "النجاح هو الحصول على ما تريد، والسعادة هي أن تريد ما تحصل عليه.",
  "النجاح هو مجموع الجهود الصغيرة التي تتكرر يوماً بعد يوم.",
  "النجاح يأتي لأولئك الذين يؤمنون بجمال أحلامهم.",
  "النجاح هو ثمرة المثابرة والعمل الجاد.",
  "النجاح هو القدرة على الانتقال من فشل إلى فشل دون أن تفقد حماسك.",
  "النجاح هو الحصول على ما تريد، والسعادة هي أن تريد ما تحصل عليه.",
  "النجاح يأتي لأولئك الذين يؤمنون بجمال أحلامهم.",
  "النجاح ليس هدفاً، بل هو نتيجة للإعداد الجيد، والعمل الشاق، والتعلم من الفشل.",
  "النجاح هو القدرة على الانتقال من فشل إلى فشل دون أن تفقد حماسك.",
  "النجاح هو السير من فشل إلى فشل دون فقدان الحماس.",
  "النجاح هو الحصول على ما تريد، والسعادة هي أن تريد ما تحصل عليه.",
  "النجاح يأتي لأولئك الذين يؤمنون بجمال أحلامهم.",
  "النجاح ليس هدفاً، بل هو رحلة.",
  "النجاح هو الحصول على ما تريد، والسعادة هي أن تريد ما تحصل عليه.",
  "النجاح هو ثمرة المثابرة والعمل الجاد.",
  "النجاح هو مجموع الجهود الصغيرة التي تتكرر يوماً بعد يوم.",
  "النجاح هو القدرة على الانتقال من فشل إلى فشل دون أن تفقد حماسك.",
  "النجاح هو الاستمتاع برحلتك.",
  "النجاح هو الحصول على ما تريد، والسعادة هي أن تريد ما تحصل عليه.",
  "النجاح ليس هدفاً، بل هو رحلة.",
  "النجاح هو الحصول على ما تريد، والسعادة هي أن تريد ما تحصل عليه.",
  "النجاح هو ثمرة المثابرة والعمل الجاد.",
  "النجاح هو القدرة على الانتقال من فشل إلى فشل دون أن تفقد حماسك.",
  "النجاح هو مجموع الجهود الصغيرة التي تتكرر يوماً بعد يوم.",
  "النجاح هو السير من فشل إلى فشل دون فقدان الحماس.",
  "النجاح هو الحصول على ما تريد، والسعادة هي أن تريد ما تحصل عليه.",
  "النجاح يأتي لأولئك الذين يؤمنون بجمال أحلامهم.",
  "النجاح هو الحصول على ما تريد، والسعادة هي أن تريد ما تحصل عليه.",
  "النجاح ليس هدفاً، بل هو رحلة.",
  "النجاح هو ثمرة المثابرة والعمل الجاد.",
  "النجاح هو القدرة على الانتقال من فشل إلى فشل دون أن تفقد حماسك.",
  "النجاح هو مجموع الجهود الصغيرة التي تتكرر يوماً بعد يوم.",
  "النجاح هو السير من فشل إلى فشل دون فقدان الحماس.",
  "النجاح هو الحصول على ما تريد، والسعادة هي أن تريد ما تحصل عليه.",
  "النجاح يأتي لأولئك الذين يؤمنون بجمال أحلامهم.",
  "النجاح هو ثمرة المثابرة والعمل الجاد.",
  "النجاح هو القدرة على الانتقال من فشل إلى فشل دون أن تفقد حماسك.",
  "النجاح هو مجموع الجهود الصغيرة التي تتكرر يوماً بعد يوم.",
  "النجاح هو السير من فشل إلى فشل دون فقدان الحماس.",
  "النجاح هو الحصول على ما تريد، والسعادة هي أن تريد ما تحصل عليه.",
  "النجاح يأتي لأولئك الذين يؤمنون بجمال أحلامهم.",
  "النجاح هو ثمرة المثابرة والعمل الجاد.",
  "النجاح هو القدرة على الانتقال من فشل إلى فشل دون أن تفقد حماسك.",
  "النجاح هو مجموع الجهود الصغيرة التي تتكرر يوماً بعد يوم.",
  "النجاح هو السير من فشل إلى فشل دون فقدان الحماس.",
  "النجاح هو الحصول على ما تريد، والسعادة هي أن تريد ما تحصل عليه.",
  "النجاح يأتي لأولئك الذين يؤمنون بجمال أحلامهم.",
  "النجاح هو ثمرة المثابرة والعمل الجاد.",
  "النجاح هو القدرة على الانتقال من فشل إلى فشل دون أن تفقد حماسك.",
  "النجاح هو مجموع الجهود الصغيرة التي تتكرر يوماً بعد يوم.",
  "النجاح هو السير من فشل إلى فشل دون فقدان الحماس.",
  "النجاح هو الحصول على ما تريد، والسعادة هي أن تريد ما تحصل عليه.",
  "النجاح يأتي لأولئك الذين يؤمنون بجمال أحلامهم.",
  "النجاح هو ثمرة المثابرة والعمل الجاد.",
  "النجاح هو القدرة على الانتقال من فشل إلى فشل دون أن تفقد حماسك.",
  "النجاح هو مجموع الجهود الصغيرة التي تتكرر يوماً بعد يوم.",
  "النجاح هو السير من فشل إلى فشل دون فقدان الحماس.",
  "النجاح هو الحصول على ما تريد، والسعادة هي أن تريد ما تحصل عليه.",
  "النجاح يأتي لأولئك الذين يؤمنون بجمال أحلامهم.",
  "النجاح هو ثمرة المثابرة والعمل الجاد.",
  "النجاح هو القدرة على الانتقال من فشل إلى فشل دون أن تفقد حماسك.",
  "النجاح هو مجموع الجهود الصغيرة التي تتكرر يوماً بعد يوم.",
  "النجاح هو السير من فشل إلى فشل دون فقدان الحماس.",
  "النجاح هو الحصول على ما تريد، والسعادة هي أن تريد ما تحصل عليه.",
  "النجاح يأتي لأولئك الذين يؤمنون بجمال أحلامهم.",
  "النجاح هو ثمرة المثابرة والعمل الجاد.",
  "النجاح هو القدرة على الانتقال من فشل إلى فشل دون أن تفقد حماسك.",
  "النجاح هو مجموع الجهود الصغيرة التي تتكرر يوماً بعد يوم.",
  "النجاح هو السير من فشل إلى فشل دون فقدان الحماس.",
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
