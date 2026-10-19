# 📚 LearnHub – Student Learning Platform

LearnHub is a simple, responsive online learning platform where students can study lessons, take quizzes, track their learning progress, and organize their study tasks.

## 🔗 Live Demo

[Open LearnHub](https://week4-todo-app-pi.vercel.app/)

## 📸 Dashboard Preview

![LearnHub Dashboard](screenshots/dashboard.png)

## ✨ Features

- **Five Courses:** JavaScript Fundamentals, Mathematics, Physics, Biology, and Chemistry.
- **Course Search:** Search courses by title or category.
- **Lessons and Quizzes:** Read lesson content and test your knowledge.
- **Progress Tracking:** Track completed lessons after answering quiz questions correctly.
- **My Results:** View quiz attempts and scores.
- **Dashboard Statistics:** View available courses, tests completed, lessons completed, and average test scores.
- **Task Management:** Add, edit, complete, and delete tasks.
- **Task Filters:** Filter tasks by All, Active, and Completed.
- **Clear Completed Tasks:** Remove completed tasks after confirmation.
- **Input Validation:** Prevent empty and duplicate tasks.
- **Local Storage:** Save tasks, learning progress, quiz results, and theme preferences in the browser.
- **Dark Mode:** Switch between light and dark themes.
- **Responsive Design:** Use the platform on phones, tablets, and desktops.

## 📸 Screenshots

### Dashboard and Quiz

| Dashboard | Quiz |
|---|---|
| ![Dashboard](screenshots/dashboard.png) | ![Quiz](screenshots/quiz.png) |

### My Tasks and Dark Mode

| My Tasks | Dark Mode |
|---|---|
| ![My Tasks](screenshots/tasks.png) | ![Dark Mode](screenshots/dark-mode.png) |

## 🛠️ Technologies Used

- HTML5
- Tailwind CSS v4
- Vanilla JavaScript
- Vite
- Local Storage
- Vercel

## 💻 How to Run Locally

### Prerequisites

- Node.js and npm
- Git
- Visual Studio Code or another code editor

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Iradukunda41/week4-todo-app.git
```

**2. Navigate to the project folder**

```bash
cd week4-todo-app
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## 📁 Project Structure

```text
week4-todo-app/
├── screenshots/
│   ├── dashboard.png
│   ├── quiz.png
│   ├── tasks.png
│   └── dark-mode.png
├── src/
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

*Note: The structure above is an example. Make sure it matches your actual repository and that the screenshot files exist.*

## ➕ How to Add a New Course

1. Open `src/main.js`.
2. Find the `courses` array.
3. Add a new course object following the structure of the existing courses.
4. Include the course ID, title, category, color, icon, and lessons.
5. Add lesson content, quiz questions, answer options, and the correct answer index.

## ⚠️ Known Limitations

- Data is stored in the browser using Local Storage and is not automatically shared between devices.
- The platform does not currently have user accounts or a backend database.

## 🚀 Future Improvements

- Add more lessons to each course.
- Introduce user accounts and database storage.
- Add timed quizzes and certificates.

## 🎥 Demo Video

Watch my Week 4 project demonstration:

[Watch the LearnHub Demo Video](https://drive.google.com/file/d/125NuaBoR5EEVYcT_7RNGJmD0c-izGZ5E/view?usp=drive_link)

## 👩‍💻 Author

**Iradukunda Flora**

Frontend Web Development Learner  
Igire Rwanda Organization

## 📄 License

This project was created for educational purposes as part of my frontend web development learning journey.