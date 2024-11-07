// مصفوفة الاقتباسات
const quotes = [
  "العلم نور والجهل ظلام. - مثل عربي",
  "ربّ أخٍ لك لم تلده أمك. - مثل عربي",
  "الصبر مفتاح الفرج. - مثل عربي",
  "العين بصيرة واليد قصيرة. - مثل عربي",
  "من جد وجد ومن زرع حصد. - مثل عربي",
  "ربّ صدفة خير من ألف ميعاد. - مثل عربي",
  "في التأني السلامة وفي العجلة الندامة. - مثل عربي",
  "الوقت كالسيف إن لم تقطعه قطعك. - مثل عربي",
  "الكتاب يقرأ من عنوانه. - مثل عربي",
  "لا تؤجل عمل اليوم إلى الغد. - مثل عربي",
  "العقل زينة. - مثل عربي",
  "خير الكلام ما قل ودل. - مثل عربي",
  "يد واحدة لا تصفق. - مثل عربي",
  "الجار قبل الدار. - مثل عربي",
  "المال لا يشتري السعادة. - مثل عربي",
  "الوقاية خير من العلاج. - مثل عربي",
  "التفاحة لا تسقط بعيدًا عن الشجرة. - مثل عربي",
  "الطريق إلى الجحيم مفروش بالنوايا الحسنة. - مثل عربي",
  "عصفور في اليد خير من عشرة على الشجرة. - مثل عربي",
  "الضرب في الميت حرام. - مثل عربي",
  "الكلاب تعوي والقافلة تسير. - مثل عربي",
  "كل إناء بما فيه ينضح. - مثل عربي",
  "كما تدين تدان. - مثل عربي",
  "القليل الدائم خير من الكثير المنقطع. - مثل عربي",
  "عند الامتحان يُكرم المرء أو يُهان. - مثل عربي",
  "مصائب قوم عند قوم فوائد. - مثل عربي",
  "الحاجة أم الاختراع. - مثل عربي",
  "السكوت علامة الرضا. - مثل عربي",
  "العلم في الصغر كالنقش على الحجر. - مثل عربي",
  "لا يأس مع الحياة ولا حياة مع اليأس. - مصطفى كامل",
  "النجاح رحلة وليس وجهة. - مقولة",
  "الأمل هو حلم اليقظة. - أرسطو",
  "كل شيء إذا كثر رخص إلا العلم فإنه إذا كثر غلا. - علي بن أبي طالب",
  "الشجاعة هي إتقان الخوف وليس غياب الخوف. - نيلسون مانديلا",
  "الحب أعمى. - أفلاطون",
  "الحكمة هي أن تعرف الفرق بين الذي تملكه والذي لا تملكه. - سقراط",
  "السعادة ليست غياب المشاكل، بل القدرة على التعامل معها. - مقولة",
  "إذا لم تحاول شيئًا جديدًا فكيف تعرف ما يمكنك تحقيقه؟ - مقولة",
  "العقل هو سلاحك في المعركة ضد الحياة. - مقولة",
  "الأفعال أبلغ من الأقوال. - مثل عربي",
  "الابتسامة في وجه أخيك صدقة. - النبي محمد ﷺ",
  "من جدّ وجد ومن سار على الدرب وصل. - مثل عربي",
  "العلم نور. - مثل عربي",
  "الكتاب خير جليس. - مثل عربي",
  "الحكمة ضالة المؤمن. - حديث شريف",
  "الصديق وقت الضيق. - مثل عربي",
  "من شبّ على شيء شاب عليه. - مثل عربي",
  "الكلمة الطيبة صدقة. - حديث شريف",
  "من طلب العلا سهر الليالي. - مثل عربي",
  "النظافة من الإيمان. - حديث شريف",
  "كل تأخيرة وفيها خيرة. - مثل عربي",
  "الجنة تحت أقدام الأمهات. - حديث شريف",
  "من تواضع لله رفعه. - حديث شريف",
  "العجلة من الشيطان. - حديث شريف",
  "ما خاب من استخار ولا ندم من استشار. - مثل عربي",
  "ليس كل ما يلمع ذهبًا. - مثل عربي",
  "العقل زينة. - مثل عربي",
  "الكتاب يقرأ من عنوانه. - مثل عربي",
  "لا تستوحشوا طريق الحق لقلة سالكيه. - علي بن أبي طالب",
  "اطلب العلم من المهد إلى اللحد. - حديث شريف",
  "الوحدة خير من جليس السوء. - مثل عربي",
  "اليد العليا خير من اليد السفلى. - حديث شريف",
  "ليس الفتى من قال كان أبي ولكن الفتى من قال ها أنا ذا. - مقولة",
  "العقل زينة. - مثل عربي",
  "خير جليس في الزمان كتاب. - أبو الطيب المتنبي",
  "الكلمة الطيبة شجرة مثمرة. - مثل عربي",
  "العلم في الصغر كالنقش على الحجر. - مثل عربي",
  "السعادة أن يكون لديك شخص يخشى عليك من الألم. - مقولة",
  "الحب الحقيقي لا ينتهي أبداً. - مقولة",
  "الحكمة هي خلاصة التفكير. - مقولة",
  "إذا كنت تستطيع تخيل شيء ما، يمكنك تحقيقه. - مقولة",
  "العمل هو مفتاح النجاح. - مقولة",
  "التفاؤل هو الإيمان الذي يؤدي إلى الإنجاز. - مقولة",
  "الحياة قصيرة، فلا تضيّعها في كره الآخرين. - مقولة",
  "الأمل هو الوقود الذي يدفع الإنسان نحو النجاح. - مقولة",
  "الأمل هو الضوء الذي ينير طريقك في الظلام. - مقولة",
  "الأمل هو السعادة الحقيقية. - مقولة",
  "الصديق الحقيقي هو الذي يعرف كل شيء عنك ولا يزال يحبك. - مقولة",
  "الأصدقاء الحقيقيون يصعب العثور عليهم. - مقولة",
  "الصديق الحقيقي هو من يكون معك في السراء والضراء. - مقولة",
  "الأصدقاء الحقيقيون هم كالنجوم. - مقولة",
  "الصديق الحقيقي هو الشخص الذي يساندك عندما يتخلى عنك الجميع. - مقولة",
  "الأمل هو الشعور الذي يجعل الحياة أكثر إشراقًا. - مقولة",
  "الأمل هو القوة التي تدفع الإنسان نحو المستقبل. - مقولة",
  "الأمل هو الشعور الذي يجعلنا نستمر في الحياة. - مقولة",
  "الأمل هو الوقود الذي يحرك الإنسان نحو أهدافه. - مقولة",
  "الأمل هو النور الذي ينير طريقنا في الحياة. - مقولة",
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
