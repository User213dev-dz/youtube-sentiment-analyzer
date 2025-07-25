const express = require('express');
const axios = require('axios');
const Sentiment = require('sentiment');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // ملفات HTML/CSS/JS في مجلد "public"

// 🧠 قاموس الكلمات العربية الشائعة للتحليل
const arabicSentiment = new Sentiment();
const arabicLexicon = {
  // كلمات إيجابية
  "شكرا": 3,
  "شكراً": 3,
  "رائع": 4,
  "ممتاز": 4,
  "جميل": 3,
  "محترم": 3,
  "أفضل": 2,
  "مفيد": 3,
  "مذهل": 4,
  "تحفة": 3,
  "ابداع": 3,
  "تسلم": 2,
  "يعطيك العافية": 4,
  // كلمات سلبية
  "سيء": -3,
  "سيئ": -3,
  "أسوأ": -4,
  "كرهت": -4,
  "ملل": -2,
  "غبي": -4,
  "تافه": -3,
  "رديء": -3,
  "سيئة": -3,
  "سخيف": -3,
  "بشع": -2
};

// API لتحليل تعليقات الفيديو
app.post('/analyze', async (req, res) => {
  const videoId = req.body.videoId;
  const apiKey = process.env.YOUTUBE_API_KEY;

  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/commentThreads', {
      params: {
        part: 'snippet',
        videoId: videoId,
        key: apiKey,
        maxResults: 30
      }
    });

    const comments = response.data.items.map(item => {
      const text = item.snippet.topLevelComment.snippet.textDisplay;

      // تحليل النص باستخدام القاموس العربي
      const result = arabicSentiment.analyze(text, { extras: arabicLexicon });

      let sentimentLabel = 'neutral';
      if (result.score > 0) sentimentLabel = 'positive';
      else if (result.score < 0) sentimentLabel = 'negative';

      return {
        text: text,
        sentiment: sentimentLabel,
        score: result.score
      };
    });

    // ملخص النتائج
    const summary = {
      positive: comments.filter(c => c.sentiment === 'positive').length,
      neutral: comments.filter(c => c.sentiment === 'neutral').length,
      negative: comments.filter(c => c.sentiment === 'negative').length,
      total: comments.length
    };

    res.json({ comments, summary });

  } catch (error) {
    console.error('❌ Error fetching comments:', error.message);
    res.status(500).json({ error: 'فشل في جلب التعليقات من YouTube API' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
