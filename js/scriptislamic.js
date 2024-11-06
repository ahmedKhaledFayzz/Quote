  // مصفوفة الاقتباسات
  const quotes = [
    "إنما الأعمال بالنيات وإنما لكل امرئ ما نوى. - النبي محمد ﷺ",
    "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه. - النبي محمد ﷺ",
    "الدين النصيحة. - النبي محمد ﷺ",
    "إن الله لا ينظر إلى صوركم وأموالكم ولكن ينظر إلى قلوبكم وأعمالكم. - النبي محمد ﷺ",
    "خير الناس أنفعهم للناس. - النبي محمد ﷺ",
    "حب لأخيك ما تحب لنفسك. - النبي محمد ﷺ",
    "اطلبوا العلم من المهد إلى اللحد. - النبي محمد ﷺ",
    "من سلك طريقًا يلتمس فيه علمًا سهل الله له به طريقًا إلى الجنة. - النبي محمد ﷺ",
    "ليس الغنى عن كثرة العرض ولكن الغنى غنى النفس. - النبي محمد ﷺ",
    "المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف. - النبي محمد ﷺ",
    "إذا مات ابن آدم انقطع عمله إلا من ثلاث: صدقة جارية، أو علم ينتفع به، أو ولد صالح يدعو له. - النبي محمد ﷺ",
    "الدنيا سجن المؤمن وجنة الكافر. - النبي محمد ﷺ",
    "الجنة تحت أقدام الأمهات. - النبي محمد ﷺ",
    "أحب الأعمال إلى الله أدومها وإن قل. - النبي محمد ﷺ",
    "من تواضع لله رفعه. - النبي محمد ﷺ",
    "الخلق كلهم عيال الله وأحبهم إلى الله أنفعهم لعياله. - النبي محمد ﷺ",
    "التاجر الأمين الصدوق مع النبيين والصديقين والشهداء. - النبي محمد ﷺ",
    "إن الله جميل يحب الجمال. - النبي محمد ﷺ",
    "من حسن إسلام المرء تركه ما لا يعنيه. - النبي محمد ﷺ",
    "المسلم من سلم المسلمون من لسانه ويده. - النبي محمد ﷺ",
    "الكلمة الطيبة صدقة. - النبي محمد ﷺ",
    "تبسمك في وجه أخيك صدقة. - النبي محمد ﷺ",
    "المؤمن مرآة أخيه المؤمن. - النبي محمد ﷺ",
    "الدعاء هو العبادة. - النبي محمد ﷺ",
    "إنما المؤمنون إخوة. - القرآن الكريم",
    "ولقد خلقنا الإنسان في كبد. - القرآن الكريم",
    "إن الله لا يغير ما بقوم حتى يغيروا ما بأنفسهم. - القرآن الكريم",
    "قل لن يصيبنا إلا ما كتب الله لنا. - القرآن الكريم",
    "إن الله مع الصابرين. - القرآن الكريم",
    "واعتصموا بحبل الله جميعًا ولا تفرقوا. - القرآن الكريم",
    "إن الله يحب المحسنين. - القرآن الكريم",
    "من يتق الله يجعل له مخرجًا ويرزقه من حيث لا يحتسب. - القرآن الكريم",
    "وعسى أن تكرهوا شيئًا وهو خير لكم. - القرآن الكريم",
    "ولا تقنطوا من رحمة الله. - القرآن الكريم",
    "إن الله مع الذين اتقوا والذين هم محسنون. - القرآن الكريم",
    "الله لا إله إلا هو الحي القيوم. - القرآن الكريم",
    "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار. - القرآن الكريم",
    "قل يا عبادي الذين أسرفوا على أنفسهم لا تقنطوا من رحمة الله. - القرآن الكريم",
    "ألا بذكر الله تطمئن القلوب. - القرآن الكريم",
    "والعصر إن الإنسان لفي خسر. - القرآن الكريم",
    "قل هو الله أحد. - القرآن الكريم",
    "ومن أحسن قولًا ممن دعا إلى الله وعمل صالحًا وقال إنني من المسلمين. - القرآن الكريم",
    "إن مع العسر يسرا. - القرآن الكريم",
    "واصبر وما صبرك إلا بالله. - القرآن الكريم",
    "إن الصلاة تنهى عن الفحشاء والمنكر. - القرآن الكريم",
    "ومن يتوكل على الله فهو حسبه. - القرآن الكريم",
    "ولا تزر وازرة وزر أخرى. - القرآن الكريم",
    "وجعلناكم شعوبًا وقبائل لتعارفوا. - القرآن الكريم",
    "يا أيها الذين آمنوا اتقوا الله وقولوا قولًا سديدًا. - القرآن الكريم",
    "ربنا لا تؤاخذنا إن نسينا أو أخطأنا. - القرآن الكريم",
    "واتقوا يومًا ترجعون فيه إلى الله. - القرآن الكريم",
    "ومن أحياها فكأنما أحيا الناس جميعًا. - القرآن الكريم",
    "كل نفس ذائقة الموت. - القرآن الكريم",
    "ما يلفظ من قول إلا لديه رقيب عتيد. - القرآن الكريم",
    "والله بما تعملون خبير. - القرآن الكريم",
    "وإن تعدوا نعمة الله لا تحصوها. - القرآن الكريم",
    "ففروا إلى الله. - القرآن الكريم",
    "إن أكرمكم عند الله أتقاكم. - القرآن الكريم",
    "ومن يعظم شعائر الله فإنها من تقوى القلوب. - القرآن الكريم",
    "ولا تنسوا الفضل بينكم. - القرآن الكريم",
    "يا أيها الناس اتقوا ربكم. - القرآن الكريم",
    "إن الله يعلم ما في السماوات وما في الأرض. - القرآن الكريم",
    "ادعوني أستجب لكم. - القرآن الكريم",
    "يا أيها الذين آمنوا استعينوا بالصبر والصلاة. - القرآن الكريم",
    "ولا تيأسوا من روح الله. - القرآن الكريم",
    "فإن مع العسر يسرا. - القرآن الكريم",
    "وما خلقت الجن والإنس إلا ليعبدون. - القرآن الكريم",
    "إن الله لا يضيع أجر المحسنين. - القرآن الكريم",
    "واعبد ربك حتى يأتيك اليقين. - القرآن الكريم",
    "إن الله يحب المتوكلين. - القرآن الكريم",
    "وتواصوا بالحق وتواصوا بالصبر. - القرآن الكريم",
    "ولا تستوي الحسنة ولا السيئة. - القرآن الكريم",
    "إن الله على كل شيء قدير. - القرآن الكريم",
    "قل إن هدى الله هو الهدى. - القرآن الكريم",
    "وما توفيقي إلا بالله. - القرآن الكريم",
    "يا أيها الذين آمنوا لا تأكلوا الربا أضعافًا مضاعفة. - القرآن الكريم",
    "ومن يعمل سوءًا أو يظلم نفسه ثم يستغفر الله يجد الله غفورًا رحيمًا. - القرآن الكريم",
    "واتقوا الله لعلكم ترحمون. - القرآن الكريم",
    "يا أيها الذين آمنوا كتب عليكم الصيام كما كتب على الذين من قبلكم. - القرآن الكريم",
    "ولا تمش في الأرض مرحًا. - القرآن الكريم",
    "وأقيموا الصلاة وآتوا الزكاة. - القرآن الكريم",
    "ومن أظلم ممن افترى على الله كذبًا. - القرآن الكريم",
    "واستغفروا الله إن الله غفور رحيم. - القرآن الكريم",
    "يا أيها الذين آمنوا اتقوا الله حق تقاته. - القرآن الكريم",
    "يا أيها الذين آمنوا إنما الخمر والميسر والأنصاب والأزلام رجس من عمل الشيطان فاجتنبوه. - القرآن الكريم",
    "وعباد الرحمن الذين يمشون على الأرض هونًا وإذا خاطبهم الجاهلون قالوا سلامًا. - القرآن الكريم",
    "يا أيها الناس كلوا مما في الأرض حلالًا طيبًا. - القرآن الكريم",
    "إن الله لا يستحيي أن يضرب مثلًا ما. - القرآن الكريم",
    "إن الذين آمنوا وعملوا الصالحات سيجعل لهم الرحمن ودًا. - القرآن الكريم",
    "وإنك لعلى خلق عظيم. - القرآن الكريم",
    "إن هذا القرآن يهدي للتي هي أقوم. - القرآن الكريم",
    "فاذكروني أذكركم واشكروا لي ولا تكفرون. - القرآن الكريم",
    "إن الله يحب التوابين ويحب المتطهرين. - القرآن الكريم",
    "قل هو الرحمن آمنا به وعليه توكلنا. - القرآن الكريم"
];
// الحصول على العناصر من الصفحة
const quoteElement = document.getElementById('quote');
const quoteButton = document.getElementById('quoteButton');
const favoriteButton = document.getElementById('favoriteButton');
const shareButton = document.getElementById('shareButton');
const favoritesElement = document.getElementById('favorites');

// استرجاع المفضلة من التخزين المحلي
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// دالة لتوليد اقتباس عشوائي
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}
// أضف هذه الدالة الجديدة
function deleteQuote(index) {
    favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavorites();
}

// عدل دالة updateFavorites لتشمل زر الحذف
function updateFavorites() {
    favoritesElement.innerHTML = '';
    favorites.forEach((quote, index) => {
        const div = document.createElement('div');
        div.className = 'favorite-quote';

        const quoteText = document.createElement('span');
        quoteText.textContent = quote;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.onclick = () => deleteQuote(index);

        div.appendChild(quoteText);
        div.appendChild(deleteButton);
        favoritesElement.appendChild(div);
    });
}
// إضافة الأحداث للأزرار
quoteButton.addEventListener('click', generateQuote);

favoriteButton.addEventListener('click', () => {
    const currentQuote = quoteElement.textContent;
    if (!favorites.includes(currentQuote)) {
        favorites.push(currentQuote);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateFavorites();
    }
});

function shareQuote() {
    const currentQuote = document.getElementById('quote').textContent;
    const appName = "اقتباسات ملهمة";
    const developerName = "أحمد خالد";
    const appDownloadLink = "https://drive.google.com/drive/folders/1-RsaL0iT20HPxG7jFgliz-tnLV-bV5m2"; // استبدل هذا برابط التنزيل الفعلي للتطبيق

    const shareText = `"${currentQuote}"

تم مشاركة هذا الاقتباس من تطبيق "${appName}"
تطوير: ${developerName}
لتنزيل التطبيق: ${appDownloadLink}`;

    const shareUrl = window.location.href;

    // التحقق من دعم واجهة برمجة التطبيقات للمشاركة الأصلية
    if (navigator.share) {
        navigator.share({
            title: 'اقتباس ملهم',
            text: shareText,
            url: shareUrl
        }).then(() => {
            console.log('تمت المشاركة بنجاح');
        }).catch((error) => {
            console.log('خطأ في المشاركة:', error);
            fallbackShare(shareText, shareUrl, appName, developerName, appDownloadLink);
        });
    } else {
        fallbackShare(shareText, shareUrl, appName, developerName, appDownloadLink);
    }
}

function fallbackShare(shareText, shareUrl, appName, developerName, appDownloadLink) {
    const dialog = document.createElement('div');
    dialog.className = 'share-dialog';
    dialog.innerHTML = `
<div class="share-content">
    <h5>مشاركة الاقتباس</h5>
    <textarea class="form-control" rows="4" readonly>${shareText}</textarea>
    <div class="social-share mt-3">
        <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}" target="_blank" class="btn btn-custom">
            <i class="fab fa-twitter"></i> تويتر
        </a>
        <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}" target="_blank" class="btn btn-custom">
            <i class="fab fa-whatsapp"></i> واتساب
        </a>
        <a href="mailto:?subject=اقتباس ملهم&body=${encodeURIComponent(shareText)}" target="_blank" class="btn btn-custom">
            <i class="fas fa-envelope"></i> البريد الإلكتروني
        </a>
        <a href="https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}" target="_blank" class="btn btn-custom">
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
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) {
            document.body.removeChild(dialog);
        }
    });
}

function shareToInstagram(shareText) {
    copyToClipboard(shareText);
    alert('تم نسخ الاقتباس. افتح تطبيق إنستجرام والصقه هناك.');
    window.location.href = 'instagram://app';
}

function shareToInstagramStories(shareText) {
    copyToClipboard(shareText);
    alert('تم نسخ الاقتباس. افتح تطبيق إنستجرام وقم بإنشاء قصة جديدة والصق الاقتباس.');
    window.location.href = 'instagram://story-camera';
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
shareButton.addEventListener('click', shareQuote);
// تحديث المفضلة عند تحميل الصفحة
updateFavorites();

// توليد اقتباس عند تحميل الصفحة
generateQuote();