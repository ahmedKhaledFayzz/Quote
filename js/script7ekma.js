  // مصفوفة الاقتباسات
  const quotes = [
    "الحياة قصيرة، عشها.",
    "الفرص لا تأتي مرتين.",
    "النجاح هو نتيجة الإعداد الجيد، والعمل الشاق، والتعلم من الفشل.",
    "السعادة ليست شيئاً جاهزاً، بل هي تأتي من أفعالك.",
    "الإبداع هو أن ترى ما يراه الجميع ولكن تفكر كما لم يفكر أحد.",
    "اعمل بجد في صمت، ودع النجاح يحدث ضجة.",
    "أعظم مجد في الحياة ليس في عدم السقوط، بل في النهوض في كل مرة نسقط فيها.",
    "الإيمان بأنك تستطيع هو نصف النجاح.",
    "الصبر هو مفتاح الفرج.",
    "الحب هو المفتاح الأساسي للسعادة.",
    "الفشل هو جزء من عملية التعلم.",
    "الرحلة هي المكافأة.",
    "الأمل هو الحلم الذي يمشي على قدمين.",
    "الثقة بالنفس هي الخطوة الأولى للنجاح.",
    "كن التغيير الذي تريد أن تراه في العالم.",
    "الأفعال أبلغ من الأقوال.",
    "عش كل يوم وكأنه آخر يوم في حياتك.",
    "التعلم هو كنز يتبع صاحبه في كل مكان.",
    "الحكمة في اختيار المعارك.",
    "التحديات هي ما يجعل الحياة ممتعة، والتغلب عليها هو ما يجعل الحياة ذات مغزى.",
    "ابتسم دائماً للحياة، فإنها تستحق ذلك.",
    "العقل هو كل شيء، ما تعتقد أنك ستصبحه.",
    "النوايا الحسنة تجعل العالم مكاناً أفضل.",
    "الوقت هو ما نريده أكثر، ولكن ما نستخدمه بأسوأ طريقة.",
    "التغيير هو القانون الوحيد الثابت في الحياة.",
    "النجاح ليس نهاية، الفشل ليس قاتلاً: الشجاعة هي الاستمرار.",
    "الأشياء العظيمة لا تأتي من منطقة الراحة.",
    "العقلية الإيجابية تجلب نتائج إيجابية.",
    "النجاح لا يأتي من الراحة، بل من التحدي.",
    "الأحلام لا تتحقق إلا إذا سعيت لتحقيقها.",
    "التواضع هو العلامة الحقيقية للعظمة.",
    "العزيمة تصنع النجاح.",
    "كل إنسان يصنع مستقبله بنفسه.",
    "الصداقة الحقيقية كنز لا يفنى.",
    "الحياة مغامرة جريئة أو لا شيء.",
    "الضمير هو صوت الروح.",
    "الأمل هو ضوء في نهاية النفق.",
    "العمل الجاد هو مفتاح النجاح.",
    "الوقت لا ينتظر أحد.",
    "العطاء هو سر السعادة.",
    "النجاح يحتاج إلى تخطيط.",
    "الإيمان يحقق المعجزات.",
    "المعرفة قوة.",
    "الحب يتغلب على كل شيء.",
    "السعادة تبدأ من الداخل.",
    "الثقة هي أساس العلاقات.",
    "الابتسامة هي جواز السفر للقلوب.",
    "الأمل هو الروح التي لا تموت.",
    "الصبر هو الطريق إلى الحكمة.",
    "الحكمة تأتي مع الزمن.",
    "النجاح لا يأتي بسهولة.",
    "الإصرار يحقق الأهداف.",
    "التعاون يبني المجتمعات.",
    "الشجاعة هي مقاومة الخوف.",
    "العلم نور.",
    "الفضول هو بداية الحكمة.",
    "الخيال أهم من المعرفة.",
    "التفاؤل هو السر الأكبر للنجاح.",
    "الأحلام هي شمس الروح.",
    "الصداقة هي الوردة التي لا تذبل.",
    "التعليم هو السلاح الأقوى لتغيير العالم.",
    "الأمانة هي جوهر النجاح.",
    "الحرية هي حق الإنسانية الأعظم.",
    "العزيمة لا تعرف المستحيل.",
    "التعلم من الأخطاء هو الطريق إلى الحكمة.",
    "الأحلام تتحقق بالإرادة.",
    "النجاح هو ثمرة الجهد.",
    "الصدق هو أفضل سياسة.",
    "العمل هو مفتاح النجاح.",
    "الحب هو اللغة التي يفهمها الجميع.",
    "الصحة هي الثروة الحقيقية.",
    "الإيجابية تجذب الفرص.",
    "الإبداع يولد من التفكير المختلف.",
    "العزيمة تصنع المعجزات.",
    "الوقت هو الجوهر.",
    "التحديات تصنع الأبطال.",
    "العلم هو النور الذي يضيء طريقنا.",
    "العمل الجماعي يحقق النجاح.",
    "الحياة مغامرة تستحق المخاطرة.",
    "التفاني في العمل يؤدي إلى النجاح.",
    "الضمير هو صوت الحق.",
    "الإيمان بنفسك هو أول خطوة نحو النجاح.",
    "الأمل هو الحافز الذي يدفعنا للأمام.",
    "العلم يبني بيوتاً لا عماد لها.",
    "الخبرة هي المعلم الأفضل.",
    "التعلم هو مفتاح الحياة.",
    "النية الطيبة تجلب الحظ السعيد.",
    "التفكير الإيجابي يجذب النجاح.",
    "الرحمة هي أعظم فضيلة.",
    "العطاء يضاعف السعادة.",
    "العزيمة تقهر الصعاب.",
    "الوقت هو الحياة.",
    "العمل الصالح يبقى.",
    "الحب يصنع المعجزات.",
    "الثقة بالنفس هي بداية النجاح.",
    "الأحلام تبدأ بالرغبة.",
    "التحديات تقوي العزيمة.",
    "العلم يفتح الأبواب.",
    "العمل الجاد يحقق الأحلام.",
    "الأمل هو طريق النجاح.",
    "النية الطيبة تجلب الحظ.",
    "الإيمان يحقق المستحيل.",
    "النجاح يأتي بالعمل.",
    "الحب يملأ القلوب بالسعادة.",
    "الإبداع يأتي من الداخل.",
    "العلم هو سلاح المستقبل."
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
    const developerName = "المهندس :أحمد خالد ";
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
      
<a href="#" onclick="shareFacebook(); return false;" class="btn btn-custom">
<i class="fab fa-facebook-f"></i> فيسبوك
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





function shareFacebook() {
    FB.ui({
        method: 'share',
        href: window.location.href,
        quote: 'النص الذي تريد مشاركته',
    }, function (response) { });
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