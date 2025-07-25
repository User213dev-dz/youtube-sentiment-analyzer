📁 youtube-sentiment-analyzer/
| Path / File                   | Description                          |
| ----------------------------- | ------------------------------------ |
| `youtube-sentiment-analyzer/` | 📁 Main project directory            |
| ├── `public/`                 | 📁 Contains frontend assets          |
| │   ├── `index.html`          | 👈 Frontend interface (HTML page)    |
| │   └── `style.css`           | 👈 CSS styling file                  |
| ├── `index.js`                | 👈 Backend server file (Node.js)     |
| ├── `.env`                    | 👈 Stores your API key securely      |
| ├── `package.json`            | 👈 Project metadata and dependencies |


📦 Complete Project Steps:
1. 📁 Create the project folder and navigate into it:
mkdir youtube-sentiment-analyzer
cd youtube-sentiment-analyzer
2. ⚙️ Initialize Node.js project:
npm init -y
This automatically creates a package.json file.
3. 📦 Install required packages:
npm install express axios sentiment dotenv body-parser cors

| Purpose                      | Package       |
| ---------------------------- | ------------- |
| Create backend server        | `express`     |
| Fetch data from YouTube API  | `axios`       |
| Sentiment analysis           | `sentiment`   |
| Handle environment variables | `dotenv`      |
| Parse request bodies         | `body-parser` |
| Enable frontend access       | `cors`        |

4. 🧪 Run the backend server:
node index.js

✅ Make sure index.js exists and contains an Express server running on port 3000.
5. 🌐 Open your browser:
http://localhost:3000

📊 Final Output:
Enter a YouTube video ID (e.g., dQw4w9WgXcQ)
Click "Analyze" to see the sentiment of the comments.

🛠️ Pro Tips:
✅ .env file:
Replace YOUR_YOUTUBE_API_KEY with the actual API key you generated in Google Cloud Console:
YOUTUBE_API_KEY=YOUR_API_KEY_HERE

🔑 How to Get the YouTube Data API Key
To create a working project using YouTube Data API v3, follow these steps:

✅ Step 1: Create a Google Cloud Account & Project
Visit: https://console.cloud.google.com
Sign in with your Google account.
Click "Select a project" at the top, then "New Project".
Name it something like: YouTube Sentiment Project.
Click "Create".

✅ Step 2: Enable YouTube Data API v3
Make sure you're inside your newly created project.
Go to the left menu → APIs & Services → Library.
Search for: YouTube Data API v3
Click it, then click Enable.

✅ Step 3: Generate an API Key
Go to: APIs & Services → Credentials
Click "Create Credentials" → choose "API Key"
Copy the key shown (e.g., AIzaSyA...) and paste it in your .env file.

🔐 Important Security Note:
Never share your API key publicly.
You can restrict its usage by:
Setting IP address restrictions
Specifying allowed websites/domains


