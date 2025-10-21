# ToDo-List-using-JS

Smart Task Manager is a simple yet powerful web-based application that helps users manage daily tasks efficiently.
It allows you to add, edit, complete, and delete tasks, all stored in your browser’s localStorage — so your data persists even after refreshing!
It also displays a motivational quote fetched from a public API to keep you inspired while working 💪

🚀 Features
📝 Task Management

Add new tasks easily with a single click.

Edit tasks inline via a prompt.

Mark tasks as completed (strikethrough effect).

Delete individual tasks or clear all at once.

💾 Local Storage Support

All tasks are automatically saved to the browser’s localStorage.

Tasks persist between sessions — no data loss on page reload.

💬 Motivational Quotes

Fetches a random motivational quote every time you open the app.

Option to refresh the quote anytime using a button click.

🎨 Clean UI

Simple and responsive interface built using Bootstrap classes.

Intuitive button icons for editing, completing, and deleting tasks.

🧠 Tech Stack
Technology	Purpose
HTML5	Structure and layout
CSS3 / Bootstrap	Styling and responsiveness
Vanilla JavaScript (ES6)	Core app logic and event handling
localStorage API	Persistent task storage
Quotable API	Fetches random motivational quotes
🏗️ Project Structure
Smart-Task-Manager/
├── index.html
├── style.css
├── script.js
└── README.md

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/Srivishnuboddu/ToDo-List-using-JS
cd smart-task-manager

2️⃣ Open the App

Just open the index.html file in your browser — no server setup required!

🧩 How It Works

Add a Task:

Enter a task name and click “Add Task.”

It gets stored in the tasks array and rendered dynamically.

Edit or Complete:

Click ✏️ to edit text.

Click ✔️ to mark as complete or incomplete.

Delete or Clear All:

Remove individual tasks with ❌ or delete all with Clear All Tasks.

Persistent Storage:

Tasks automatically save in localStorage as JSON.

Motivational Quotes:

Fetched dynamically from Quotable API
.

Click the “Refresh Quote” button to load a new one anytime.

🧾 Example Interface
🧠 "Success is not final; failure is not fatal: It is the courage to continue that counts."
- Winston Churchill

✅ To-Do List
[✏️] Complete JavaScript project     [✔️]   [❌]
[✏️] Review React topics             [✔️]   [❌]

[Add Task] [Clear All]

LIVE LINK : https://srivishnuboddu.github.io/ToDo-List-using-JS/

YOUTUBE DEMO VIDEO : https://youtu.be/-CJ9_4wNsUw?si=LAkgfR0Et3LssJcd

🔗 API Reference

Motivational Quotes API:

https://api.quotable.io/random

Sample Response:

{
  "_id": "abcd1234",
  "content": "The best way to get started is to quit talking and begin doing.",
  "author": "Walt Disney"
}

🪪 License

This project is licensed under the MIT License.
You are free to use, modify, and share it with attribution.

👨‍💻 Author

Developed by: BODDU SRI VISHNU
🎓 B.Tech Final Year | Passionate about Frontend & Automation
📧 boddusrivishnu1234@gmail.com

⭐ If you found this helpful, please star the repository — it motivates me to build more cool projects!
