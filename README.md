# 📚 LearnHub – Student Learning Platform

LearnHub is a simple online learning platform where students can study lessons, take quizzes, track their progress, and organize their study tasks.

## 🔗 Live Demo

[Open LearnHub](https://week4-todo-app-pi.vercel.app/)

**Note:** Replace this URL with your actual LearnHub deployment link when it is available.

## 📸 Dashboard Preview

![LearnHub Dashboard](screenshots/dashboard.png)

## ✨ Features

- **Five Courses:** JavaScript Fundamentals, Mathematics, Physics, Biology, and Chemistry.
- **Course Search:** Filter courses by title or category.
- **Lessons and Quizzes:** Study lessons and test your knowledge with quizzes.
- **Automatic Progress Tracking:** Track lesson completion after answering quiz questions correctly.
- **My Results:** View quiz attempts and scores.
- **Dashboard Statistics:** Track courses, tests taken, completed lessons, and average scores.
- **My Tasks:** Add, complete, delete, filter, and clear completed tasks.
- **Dark Mode:** Switch between light and dark themes.
- **Local Storage:** Save progress, results, tasks, and theme preferences in the browser.
- **Responsive Design:** Access the platform on phones, tablets, and desktops.

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
- Vercel

## 💻 How to Run Locally

### Prerequisites

- Node.js and npm
- Git
- Visual Studio Code or another code editor

### Installation

**1. Clone the repository**

Replace `YOUR-USERNAME` with your GitHub username.

```bash
git clone https://github.com/YOUR-USERNAME/student-learning-platform.git
```

**2. Navigate to the project folder**

```bash
cd student-learning-platform
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
student-learning-platform/
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

*Note: Adjust the structure above to match the actual files in your project.*

## ➕ How to Add a New Course

1. Open `src/main.js`.
2. Find the `courses` array.
3. Add a new course object following the structure of the existing courses.
4. Include the course ID, title, category, color, icon, and lessons.
5. Add lesson content and quiz questions with answer options and the correct answer index.

Make sure the new course follows the structure used by the existing courses.

## ⚠️ Known Limitations

- Data is stored in the browser using Local Storage and is not automatically shared between devices.
- The platform does not currently have user accounts or a backend database.

## 🚀 Future Improvements

- Add more lessons to each course.
- Introduce user accounts and database storage.
- Add timed quizzes and certificates.

## 🎥 Demo Video

Watch my Week 4 Todo App demonstration:

[Watch My Week 4 Todo App Demo](https://drive.google.com/file/d/125NuaBoR5EEVYcT_7RNGJmD0c-izGZ5E/view?usp=drive_link)

## 👩‍💻 Author

**Iradukunda Flora**

Frontend Web Development Learner  
Igire Rwanda Organization

## 📄 License

This project was created for educational purposes as part of my frontend web development learning journey.
