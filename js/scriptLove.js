 // مصفوفة الاقتباسات
 const quotes = [
    "الحب هو أن ترى النور في قلب من تحب.",
    "الحب لا يقتل العشاق، هو فقط يجعلهم معلقين بين الحياة والموت.",
    "الحب الحقيقي هو أن تتمنى الخير لمن تحب مهما كان بعيدًا عنك.",
    "الحب الذي ينتهي لم يكن حبًا.",
    "الحب هو أسمى شعور يمكن أن يحس به الإنسان.",
    "الحب هو التعاطف والحنان والإخلاص.",
    "الحب هو تلاقي روحين في جسد واحد.",
    "الحب لا يعرف الحدود.",
    "الحب هو أن تكون مخلصًا وأمينًا في غياب من تحب.",
    "الحب هو أن تجعل الشخص الآخر يشعر بأنه مهم بالنسبة لك.",
    "الحب هو لغة القلب التي لا تعرف الكذب.",
    "الحب هو أن تكون سندًا لمن تحب.",
    "الحب هو أن تكون حاضرًا رغم البعد.",
    "الحب هو أن تعطي دون انتظار مقابل.",
    "الحب هو أن ترى الجمال في عيوب من تحب.",
    "الحب هو الشعور بالأمان مع من تحب.",
    "الحب هو أن تفتح قلبك لمن تحب.",
    "الحب هو أن تضحك مع من تحب في أوقات الفرح والحزن.",
    "الحب هو أن تتجاوز كل العقبات من أجل من تحب.",
    "الحب هو أن تكون مخلصًا في قولك وفعلك.",
    "الحب هو أن تشعر بالسعادة عندما ترى من تحب سعيدًا.",
    "الحب هو أن تكون قادرًا على التضحية من أجل من تحب.",
    "الحب هو أن تعتني بمن تحب دون أن تطلب منه شيئًا.",
    "الحب هو أن تشعر بالاشتياق لمن تحب عندما يكون بعيدًا.",
    "الحب هو أن تكون صادقًا في مشاعرك.",
    "الحب هو أن تعطي كل ما لديك لمن تحب.",
    "الحب هو أن تسامح من تحب عندما يخطئ.",
    "الحب هو أن تقدر ما يفعله من تحب من أجلك.",
    "الحب هو أن تكون حنونًا ورحيمًا مع من تحب.",
    "الحب هو أن تتشارك الأحلام مع من تحب.",
    "الحب هو أن تشعر بالأمان والراحة مع من تحب.",
    "الحب هو أن تبتسم عندما ترى من تحب.",
    "الحب هو أن تشعر بالدفء في قلبك عندما تكون مع من تحب.",
    "الحب هو أن تكون متفهمًا لمشاعر من تحب.",
    "الحب هو أن تشعر بالفرح عندما ترى من تحب سعيدًا.",
    "الحب هو أن تكون حاضرًا عندما يحتاجك من تحب.",
    "الحب هو أن تتغاضى عن عيوب من تحب.",
    "الحب هو أن تشعر بالأمان مع من تحب.",
    "الحب هو أن تكون مخلصًا في قولك وفعلك.",
    "الحب هو أن تشعر بالامتنان لمن تحب.",
    "الحب هو أن تكون داعمًا لمن تحب في كل الظروف.",
    "الحب هو أن تكون مخلصًا في قولك وفعلك.",
    "الحب هو أن تتشارك الأحلام مع من تحب.",
    "الحب هو أن تشعر بالفرح عندما ترى من تحب سعيدًا.",
    "الحب هو أن تكون حاضرًا عندما يحتاجك من تحب.",
    "الحب هو أن تتغاضى عن عيوب من تحب.",
    "الحب هو أن تكون مخلصًا في قولك وفعلك.",
    "الحب هو أن تشعر بالامتنان لمن تحب.",
    "الحب هو أن تكون داعمًا لمن تحب في كل الظروف.",
    "الحب هو أن تعطي من قلبك دون انتظار مقابل.",
    "الحب هو أن تبتسم عندما ترى من تحب.",
    "الحب هو أن تكون حاضرًا عندما يحتاجك من تحب.",
    "الحب هو أن تعتني بمن تحب دون أن تطلب منه شيئًا.",
    "الحب هو أن تكون سعيدًا برؤية من تحب سعيدًا.",
    "الحب هو أن تعطي من قلبك دون انتظار مقابل.",
    "الحب هو أن تكون قادرًا على التضحية من أجل من تحب.",
    "الحب هو أن تسامح من تحب عندما يخطئ.",
    "الحب هو أن تكون حاضرًا عندما يحتاجك من تحب.",
    "الحب هو أن تكون سعيدًا برؤية من تحب سعيدًا.",
    "الحب هو أن تعطي من قلبك دون انتظار مقابل.",
    "الحب هو أن تكون قادرًا على التضحية من أجل من تحب.",
    "الحب هو أن تسامح من تحب عندما يخطئ.",
    "الحب هو أن تكون حاضرًا عندما يحتاجك من تحب.",
    "الحب هو أن تكون سعيدًا برؤية من تحب سعيدًا.",
    "الحب هو أن تعطي من قلبك دون انتظار مقابل.",
    "الحب هو أن تكون قادرًا على التضحية من أجل من تحب.",
    "الحب هو أن تسامح من تحب عندما يخطئ.",
    "الحب هو أن تكون حاضرًا عندما يحتاجك من تحب.",
    "الحب هو أن تكون سعيدًا برؤية من تحب سعيدًا.",
    "الحب هو أن تعطي من قلبك دون انتظار مقابل.",
    "الحب هو أن تكون قادرًا على التضحية من أجل من تحب.",
    "الحب هو أن تسامح من تحب عندما يخطئ.",
    "الحب هو أن تكون حاضرًا عندما يحتاجك من تحب.",
    "الحب هو أن تكون سعيدًا برؤية من تحب سعيدًا.",
    "الحب هو أن تعطي من قلبك دون انتظار مقابل.",
    "الحب هو أن تكون قادرًا على التضحية من أجل من تحب.",
    "الحب هو أن تسامح من تحب عندما يخطئ.",
    "الحب هو أن تكون حاضرًا عندما يحتاجك من تحب.",
    "الحب هو أن تكون سعيدًا برؤية من تحب سعيدًا.",
    "الحب هو أن تعطي من قلبك دون انتظار مقابل.",
    "الحب هو أن تكون قادرًا على التضحية من أجل من تحب.",
    "الحب هو أن تسامح من تحب عندما يخطئ.",
    "الحب هو أن تكون حاضرًا عندما يحتاجك من تحب.",
    "الحب هو أن تكون سعيدًا برؤية من تحب سعيدًا.",
    "الحب هو أن تعطي من قلبك دون انتظار مقابل.",
    "الحب هو أن تكون قادرًا على التضحية من أجل من تحب.",
    "الحب هو أن تسامح من تحب عندما يخطئ.",
    "الحب هو أن تكون حاضرًا عندما يحتاجك من تحب.",
    "الحب هو أن تكون سعيدًا برؤية من تحب سعيدًا.",
    "الحب هو أن تعطي من قلبك دون انتظار مقابل.",
    "الحب هو أن تكون قادرًا على التضحية من أجل من تحب."
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