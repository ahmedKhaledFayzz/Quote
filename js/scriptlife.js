// مصفوفة الاقتباسات
const quotes = [
  "الحياة مثل ركوب الدراجة، لتحافظ على توازنك يجب أن تواصل التحرك. - ألبرت أينشتاين",
  "لا تستطيع الحياة أن تهزم شخصًا يتعامل معها بابتسامة. - مقولة",
  "الحياة قصيرة جدًا لقضاء الوقت في كره الآخرين. - مقولة",
  "استمتع بالأشياء الصغيرة في الحياة، لأنك يومًا ما قد تنظر للوراء وتدرك أنها كانت الأشياء الكبيرة. - روبرت براولت",
  "الحياة التي تقودها شجاعتك هي حياة مليئة بالسلام. - مقولة",
  "الحياة مغامرة جريئة أو لا شيء على الإطلاق. - هيلين كيلر",
  "لا تُعقّد الحياة. تمتع ببساطتها. - مقولة",
  "الحياة ليست انتظار العاصفة لتنجلي، بل تعلم الرقص تحت المطر. - فيفيان جرين",
  "الفرص لا تنتظر. اغتنمها الآن أو قد تفقدها للأبد. - مقولة",
  "العبرة ليست بعدد سنوات حياتك، بل بما ملأتها به. - مقولة",
  "الحياة ليست عن عدد الأنفاس التي تأخذها، بل عن اللحظات التي تخطف أنفاسك. - مقولة",
  "في نهاية اليوم، لن نتذكر كلمات أعدائنا، بل صمت أصدقائنا. - مارتن لوثر كينغ جونيور",
  "الحياة مليئة بالصخور، تجنبها واجعلها خطوات نحو أهدافك. - مقولة",
  "لا تقيس حياتك بما حققته، بل بما تستطيع تحقيقه. - مقولة",
  "الأمل هو النافذة التي تطل على مستقبل مشرق. - مقولة",
  "الحياة عبارة عن سلسلة من الدروس التي يجب أن تُعاش لتُفهم. - رالف والدو إيمرسون",
  "الحياة ليست مسألة جدية، إنها لعبة مليئة بالأمل والمتعة. - مقولة",
  "الحياة تعطيك دائمًا فرصة ثانية، تُسمى الغد. - مقولة",
  "أكثر اللحظات حزنًا في الحياة هي أن تتذكر وقتًا كنت فيه سعيدًا. - مقولة",
  "لا يمكنك العودة إلى الوراء وتغيير البداية، لكن يمكنك البدء الآن وتغيير النهاية. - مقولة",
  "الحياة قصيرة، لا تقضيها مع الأشخاص الذين يسلبون منك السعادة. - مقولة",
  "أفضل وقت لزراعة شجرة كان منذ عشرين سنة. ثاني أفضل وقت هو الآن. - مثل صيني",
  "الحياة مليئة بالتحديات، استمتع بها بدلاً من الشكوى منها. - مقولة",
  "تعلم من الأمس، عش اليوم، وتأمل في الغد. - ألبرت أينشتاين",
  "الحياة مليئة بالفرص، اغتنمها بكل ما لديك. - مقولة",
  "لا تجعل مخاوفك تقف في طريق أحلامك. - مقولة",
  "الحياة ليست عادلة، تعوّد على ذلك. - بيل غيتس",
  "السعادة ليست في غياب المشاكل، بل في القدرة على التعامل معها. - مقولة",
  "الحياة بسيطة، لكننا نصر على تعقيدها. - كونفوشيوس",
  "الحياة ليست عن الانتظار، بل عن صنع الفرص. - مقولة",
  "عش حياتك كما لو أن كل شيء معجزة. - ألبرت أينشتاين",
  "في الحياة، الأهم هو ليس ما تملكه، بل من تملكه. - مقولة",
  "الأمل هو الذي يجعل الحياة أجمل. - مقولة",
  "الحياة ليست بحاجة إلى الكثير من المال، بل إلى الكثير من الحب. - مقولة",
  "الحياة مليئة بالألوان، عش كل يوم بلون جديد. - مقولة",
  "الحياة مغامرة جريئة أو لا شيء على الإطلاق. - هيلين كيلر",
  "لا تُعقد الحياة. تمتع ببساطتها. - مقولة",
  "الحياة ليست انتظار العاصفة لتنجلي، بل تعلم الرقص تحت المطر. - فيفيان جرين",
  "الحياة ليست ما يحدث لك، بل كيف تتعامل معه. - مقولة",
  "الحياة مغامرة كبيرة تتطلب الشجاعة والجرأة. - مقولة",
  "الحياة مليئة بالألوان، عش كل يوم بلون جديد. - مقولة",
  "الحياة تعطيك دائمًا فرصة ثانية، تُسمى الغد. - مقولة",
  "السعادة ليست في غياب المشاكل، بل في القدرة على التعامل معها. - مقولة",
  "الحياة هي ما نصنعه منها. - مقولة",
  "العبرة ليست بعدد سنوات حياتك، بل بما ملأتها به. - مقولة",
  "الحياة ليست عادلة، تعوّد على ذلك. - بيل غيتس",
  "الأمل هو الذي يجعل الحياة أجمل. - مقولة",
  "الحياة قصيرة، لا تقضيها مع الأشخاص الذين يسلبون منك السعادة. - مقولة",
  "الحياة ليست بحاجة إلى الكثير من المال، بل إلى الكثير من الحب. - مقولة",
  "الحياة مثل ركوب الدراجة، لتحافظ على توازنك يجب أن تواصل التحرك. - ألبرت أينشتاين",
  "الحياة هي ما نصنعه منها. - مقولة",
  "الحياة مغامرة كبيرة تتطلب الشجاعة والجرأة. - مقولة",
  "في الحياة، الأهم هو ليس ما تملكه، بل من تملكه. - مقولة",
  "الحياة ليست ما يحدث لك، بل كيف تتعامل معه. - مقولة",
  "الحياة قصيرة جدًا لقضاء الوقت في كره الآخرين. - مقولة",
  "استمتع بالأشياء الصغيرة في الحياة، لأنك يومًا ما قد تنظر للوراء وتدرك أنها كانت الأشياء الكبيرة. - روبرت براولت",
  "الفرص لا تنتظر. اغتنمها الآن أو قد تفقدها للأبد. - مقولة",
  "لا تجعل مخاوفك تقف في طريق أحلامك. - مقولة",
  "تعلم من الأمس، عش اليوم، وتأمل في الغد. - ألبرت أينشتاين",
  "أكثر اللحظات حزنًا في الحياة هي أن تتذكر وقتًا كنت فيه سعيدًا. - مقولة",
  "لا يمكنك العودة إلى الوراء وتغيير البداية، لكن يمكنك البدء الآن وتغيير النهاية. - مقولة",
  "الحياة مليئة بالتحديات، استمتع بها بدلاً من الشكوى منها. - مقولة",
  "في نهاية اليوم، لن نتذكر كلمات أعدائنا، بل صمت أصدقائنا. - مارتن لوثر كينغ جونيور",
  "الحياة مليئة بالصخور، تجنبها واجعلها خطوات نحو أهدافك. - مقولة",
  "الحياة التي تقودها شجاعتك هي حياة مليئة بالسلام. - مقولة",
  "الكتاب يقرأ من عنوانه. - مثل عربي",
  "الوقت كالسيف إن لم تقطعه قطعك. - مثل عربي",
  "العقل زينة. - مثل عربي",
  "العلم نور والجهل ظلام. - مثل عربي",
  "الحياة قصيرة، فلا تضيّعها في كره الآخرين. - مقولة",
  "الأمل هو حلم اليقظة. - أرسطو",
  "الحياة ليست عن عدد الأنفاس التي تأخذها، بل عن اللحظات التي تخطف أنفاسك. - مقولة",
  "الحياة مليئة بالألوان، عش كل يوم بلون جديد. - مقولة",
  "الحياة تعطيك دائمًا فرصة ثانية، تُسمى الغد. - مقولة",
  "الأمل هو النور الذي ينير طريقنا في الحياة. - مقولة",
  "الأمل هو الوقود الذي يدفع الإنسان نحو النجاح. - مقولة",
  "في التأني السلامة وفي العجلة الندامة. - مثل عربي",
  "الحكمة هي خلاصة التفكير. - مقولة",
  "العلم في الصغر كالنقش على الحجر. - مثل عربي",
  "الحياة قصيرة، لا تقضيها مع الأشخاص الذين يسلبون منك السعادة. - مقولة",
  "الحياة مليئة بالفرص، اغتنمها بكل ما لديك. - مقولة",
  "الحياة مغامرة كبيرة تتطلب الشجاعة والجرأة. - مقولة",
  "الحياة التي تقودها شجاعتك هي حياة مليئة بالسلام. - مقولة",
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
