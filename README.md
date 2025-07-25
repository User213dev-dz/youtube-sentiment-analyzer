youtube-sentiment-analyzer/
   │
   ├── public/
   │   ├── index.html      👈 ملف الواجهة
   │   └── style.css       👈 تنسيقات
   │
   ├── index.js            👈 هذا هو الخادم
   ├── .env                👈 مفتاح API
   ├── package.json
📦 الخطوات الكاملة للمشروع:
    1. 📁 إنشاء مجلد المشروع والدخول إليه:
                                                                          mkdir youtube-sentiment-analyzer
                                                                          cd youtube-sentiment-analyzer

2. ⚙️ تهيئة مشروع Node.js:
                                                                                                      npm init -y
هذا ينشئ ملف package.json تلقائيًا.
3. 📦 تثبيت الحزم المطلوبة:
                                                       npm install express axios sentiment dotenv body-parser cors

  | الوظيفة                                 |     الحزمة    |
                                                                                 | ----------- | ------------------------------------- |
                                                                                 | express     | لإنشاء الخادم (Backend server)             |
                                                                                 | axios       | لجلب البيانات من YouTube API               |
                                                                                 | sentiment   | لتحليل المشاعر Sentiment Analysis          |
                                                                                 | dotenv      | لقراءة المتغيرات السرية من ملف `.env`          |
                                                                                 | body-parser | لتحليل بيانات الطلب (Post body)             |
                                                                                 | cors        | للسماح بالوصول من واجهة HTML frontend      |
4. 🧪 تشغيل الخادم (server):
                                                                                                   node index.js

✅ تأكد أن ملف index.js موجود ويحتوي على خادم Express يعمل على المنفذ 3000.
5. 🌐 فتح المتصفح: http://localhost:3000
📊 النتيجة
  1- تدخل ID فيديو يوتيوب مثل: dQw4w9WgXcQ
  2- تضغط "حلل"
                                                                                                   
🛠️ ملاحظات احترافية:                          
✅ ملف .env:
استبدل YOUR_YOUTUBE_API_KEY بمفتاح API الحقيقي الذي حصلت عليه من Google Cloud Console:
                                                YOUTUBE_API_KEY=YOUR_API_KEY_HERE


لإنشاء مشروع يعمل بـ YouTube Data API v3، ستحتاج إلى تنفيذ الخطوات التالية من البداية حتى توليد المفتاح (API Key) الذي يمكنك استخدامه في مشروع تحليل بيانات (مثلاً: تحليل مشاعر تعليقات فيديوهات اليوتيوب).

✅ الخطوة 1: إنشاء حساب Google Cloud
1- اذهب إلى: https://console.cloud.google.com
2- قم بتسجيل الدخول باستخدام حساب Gmail.
3- اضغط على "Select a project" في أعلى الصفحة، ثم على "New Project".
4- أدخل اسمًا للمشروع مثل: YouTube Sentiment Project.
5- اضغط على "Create".

✅ الخطوة 2: تفعيل YouTube Data API v3
 بعد إنشاء المشروع، تأكد أنك داخل مشروعك.
 من القائمة الجانبية، اختر "APIs & Services" → ثم "Library".
 في خانة البحث، اكتب:YouTube Data API v3
اختر النتيجة التي تظهر، ثم اضغط "Enable".

✅ الخطوة 3: إنشاء مفتاح API (API Key)
 من القائمة الجانبية، اختر:"APIs & Services" → "Credentials"
 اضغط على "Create Credentials" → ثم اختر "API Key".
 سيظهر لك مفتاح، يمكنك نسخه (مثلاً: AIzaSyA...) واستعماله في مشروعك.

🔐 ملاحظة مهمة:
  لا تشارك المفتاح علنًا. يمكنك أيضًا تقييده عبر:
    تحديد عنوان IP  أو تحديد المواقع المسموح بها



    
   


   
