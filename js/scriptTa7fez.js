// مصفوفة الاقتباسات
const quotes = [
  "الأمل هو الحلم الذي يمشي على قدمين.",
  "الأحلام لا تتحقق إلا إذا سعيت لتحقيقها.",
  "العزيمة تصنع النجاح.",
  "التفاؤل هو السر الأكبر للنجاح.",
  "الإيجابية تجذب الفرص.",
  "الإبداع يولد من التفكير المختلف.",
  "العزيمة تقهر الصعاب.",
  "التحديات تصنع الأبطال.",
  "العلم هو النور الذي يضيء طريقنا.",
  "العمل الجماعي يحقق النجاح.",
  "الحياة مغامرة تستحق المخاطرة.",
  "التفاني في العمل يؤدي إلى النجاح.",
  "الإيمان بنفسك هو أول خطوة نحو النجاح.",
  "الأمل هو الحافز الذي يدفعنا للأمام.",
  "الخبرة هي المعلم الأفضل.",
  "التعلم هو مفتاح الحياة.",
  "النية الطيبة تجلب الحظ السعيد.",
  "التفكير الإيجابي يجذب النجاح.",
  "الإبداع يأتي من الداخل.",
  "العزيمة تصنع المعجزات.",
  "التعلم من الأخطاء هو الطريق إلى الحكمة.",
  "الأحلام تتحقق بالإرادة.",
  "النجاح هو ثمرة الجهد.",
  "العمل هو مفتاح النجاح.",
  "الحب هو اللغة التي يفهمها الجميع.",
  "الإيمان يحقق المستحيل.",
  "الثقة بالنفس هي بداية النجاح.",
  "الأحلام تبدأ بالرغبة.",
  "التحديات تقوي العزيمة.",
  "العلم يفتح الأبواب.",
  "الأمل هو طريق النجاح.",
  "النية الطيبة تجلب الحظ.",
  "النجاح يأتي بالعمل.",
  "الإبداع هو أن ترى ما يراه الجميع ولكن تفكر كما لم يفكر أحد.",
  "اعمل بجد في صمت، ودع النجاح يحدث ضجة.",
  "كن التغيير الذي تريد أن تراه في العالم.",
  "الأفعال أبلغ من الأقوال.",
  "التعليم هو السلاح الأقوى لتغيير العالم.",
  "الأمانة هي جوهر النجاح.",
  "الحرية هي حق الإنسانية الأعظم.",
  "التعلم هو كنز يتبع صاحبه في كل مكان.",
  "الرحلة هي المكافأة.",
  "الأمل هو ضوء في نهاية النفق.",
  "العمل الجاد هو مفتاح النجاح.",
  "النجاح يحتاج إلى تخطيط.",
  "المعرفة قوة.",
  "السعادة تبدأ من الداخل.",
  "الابتسامة هي جواز السفر للقلوب.",
  "التعاون يبني المجتمعات.",
  "الشجاعة هي مقاومة الخوف.",
  "الفضول هو بداية الحكمة.",
  "الخيال أهم من المعرفة.",
  "الأحلام هي شمس الروح.",
  "الصداقة هي الوردة التي لا تذبل.",
  "الأحلام لا تتحقق بالكسل، بل بالسعي والعمل.",
  "الإيجابية هي البداية، والجهد هو المفتاح.",
  "الرحمة هي أعظم فضيلة.",
  "العطاء يضاعف السعادة.",
  "العزيمة تقهر الصعاب.",
  "التحديات تصنع الأبطال.",
  "العمل الجماعي هو سر النجاح.",
  "العلم هو النور الذي يضيء طريقنا.",
  "الخبرة هي المعلم الأفضل.",
  "الإبداع يولد من التفكير المختلف.",
  "الأمل هو الحافز الذي يدفعنا للأمام.",
  "النية الطيبة تجلب الحظ السعيد.",
  "الإيمان بنفسك هو أول خطوة نحو النجاح.",
  "التعلم من الأخطاء هو الطريق إلى الحكمة.",
  "الأحلام تتحقق بالإرادة.",
  "النجاح هو ثمرة الجهد.",
  "العمل هو مفتاح النجاح.",
  "الحب هو اللغة التي يفهمها الجميع.",
  "الإيمان يحقق المستحيل.",
  "الثقة بالنفس هي بداية النجاح.",
  "الأحلام تبدأ بالرغبة.",
  "التحديات تقوي العزيمة.",
  "العلم يفتح الأبواب.",
  "الأمل هو طريق النجاح.",
  "النية الطيبة تجلب الحظ.",
  "النجاح يأتي بالعمل.",
  "الإبداع هو أن ترى ما يراه الجميع ولكن تفكر كما لم يفكر أحد.",
  "اعمل بجد في صمت، ودع النجاح يحدث ضجة.",
  "كن التغيير الذي تريد أن تراه في العالم.",
  "الأفعال أبلغ من الأقوال.",
  "التعليم هو السلاح الأقوى لتغيير العالم.",
  "الأمانة هي جوهر النجاح.",
  "الحرية هي حق الإنسانية الأعظم.",
  "التعلم هو كنز يتبع صاحبه في كل مكان.",
  "الرحلة هي المكافأة.",
  "الأمل هو ضوء في نهاية النفق.",
  "العمل الجاد هو مفتاح النجاح.",
  "النجاح يحتاج إلى تخطيط.",
  "المعرفة قوة.",
  "السعادة تبدأ من الداخل.",
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
    "https://drive.google.com/drive/folders/1-RsaL0iT20HPxG7jFgliz-tnLV-bV5m2?usp=sharing"; // استبدل هذا برابط التنزيل الفعلي للتطبيق

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
