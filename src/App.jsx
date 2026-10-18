
import { useState } from "react";

const subjects = [
  {
    name: "Mathematics",
    icon: "📐",
    color: "bg-blue-100",
    description: "Learn numbers, algebra and geometry.",
    lessons: [
      { title: "Introduction to Algebra", duration: "15 min", level: "Beginner" },
      { title: "Linear Equations", duration: "20 min", level: "Beginner" },
      { title: "Geometry Basics", duration: "18 min", level: "Intermediate" },
    ],
  },
  {
    name: "Physics",
    icon: "⚛️",
    color: "bg-purple-100",
    description: "Explore forces, energy and motion.",
    lessons: [
      { title: "Introduction to Physics", duration: "12 min", level: "Beginner" },
      { title: "Motion and Speed", duration: "20 min", level: "Beginner" },
      { title: "Force and Energy", duration: "25 min", level: "Intermediate" },
    ],
  },
  {
    name: "Biology",
    icon: "🧬",
    color: "bg-green-100",
    description: "Discover living things and nature.",
    lessons: [
      { title: "Introduction to Biology", duration: "15 min", level: "Beginner" },
      { title: "The Cell", duration: "20 min", level: "Beginner" },
      { title: "Human Body Systems", duration: "25 min", level: "Intermediate" },
    ],
  },
  {
    name: "Chemistry",
    icon: "🧪",
    color: "bg-orange-100",
    description: "Understand atoms, elements and reactions.",
    lessons: [
      { title: "Introduction to Chemistry", duration: "15 min", level: "Beginner" },
      { title: "Atoms and Elements", duration: "20 min", level: "Beginner" },
      { title: "Chemical Reactions", duration: "25 min", level: "Intermediate" },
    ],
  },
];

function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);

  const completedCount = completedLessons.length;
  const totalLessons = subjects.reduce(
    (total, subject) => total + subject.lessons.length,
    0
  );

  function chooseSubject(subject) {
    setSelectedSubject(subject);
    setSelectedLesson(null);
  }

  function markAsCompleted(lesson) {
    setCompletedLessons((previous) =>
      previous.includes(lesson)
        ? previous
        : [...previous, lesson]
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button
            onClick={() => {
              setSelectedSubject(null);
              setSelectedLesson(null);
            }}
            className="text-2xl font-bold text-indigo-600"
          >
            LearnHub
          </button>

          <nav className="flex gap-6 text-sm font-medium">
            <button
              onClick={() => {
                setSelectedSubject(null);
                setSelectedLesson(null);
              }}
              className="hover:text-indigo-600"
            >
              Home
            </button>
            <a href="#subjects" className="hover:text-indigo-600">
              Subjects
            </a>
            <a href="#progress" className="hover:text-indigo-600">
              My Progress
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 py-10">
        <section className="rounded-3xl bg-indigo-600 text-white p-8 md:p-12 mb-10">
          <p className="text-indigo-200 font-semibold mb-3">
            YOUR LEARNING JOURNEY STARTS HERE
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-5">
            Learn something new every day.
          </h1>

          <p className="text-indigo-100 max-w-2xl mb-7">
            Explore your favorite subjects, study step by step,
            and track your learning progress in one place.
          </p>

          <a
            href="#subjects"
            className="inline-block rounded-xl bg-white text-indigo-700 font-bold px-6 py-3 hover:bg-indigo-50"
          >
            Explore Subjects
          </a>
        </section>

        <section id="progress" className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm">Available Subjects</p>
            <h2 className="text-3xl font-bold mt-2">{subjects.length}</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm">Available Lessons</p>
            <h2 className="text-3xl font-bold mt-2">{totalLessons}</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm">Lessons Completed</p>
            <h2 className="text-3xl font-bold mt-2">
              {completedCount}
            </h2>
            <div className="w-full bg-slate-100 h-2 rounded-full mt-3">
              <div
                className="bg-green-500 h-2 rounded-full transition-all"
                style={{
                  width: `${(completedCount / totalLessons) * 100}%`,
                }}
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">
              {Math.round((completedCount / totalLessons) * 100)}% complete
            </p>
          </div>
        </section>

        <section id="subjects" className="mb-12">
          <div className="flex flex-col sm:flex-row justify-between gap-3 mb-6">
            <div>
              <h2 className="text-2xl font-bold">Explore Subjects</h2>
              <p className="text-slate-500 mt-1">
                Choose a subject to discover its lessons.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {subjects.map((subject) => (
              <button
                key={subject.name}
                onClick={() => chooseSubject(subject)}
                className={`text-left bg-white rounded-2xl p-6 border-2 transition hover:shadow-lg ${
                  selectedSubject?.name === subject.name
                    ? "border-indigo-500"
                    : "border-transparent"
                }`}
              >
                <div className={`${subject.color} w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-5`}>
                  {subject.icon}
                </div>

                <h3 className="text-lg font-bold mb-2">
                  {subject.name}
                </h3>

                <p className="text-sm text-slate-500 mb-4">
                  {subject.description}
                </p>

                <p className="text-indigo-600 text-sm font-semibold">
                  {subject.lessons.length} lessons →
                </p>
              </button>
            ))}
          </div>
        </section>

        {selectedSubject && (
          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm mb-12">
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
              <div>
                <p className="text-sm text-indigo-600 font-semibold">
                  SELECTED SUBJECT
                </p>
                <h2 className="text-2xl font-bold mt-1">
                  {selectedSubject.icon} {selectedSubject.name} Lessons
                </h2>
                <p className="text-slate-500 mt-2">
                  Select a lesson to start learning.
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedSubject(null);
                  setSelectedLesson(null);
                }}
                className="text-slate-500 hover:text-indigo-600"
              >
                Close ×
              </button>
            </div>

            <div className="space-y-4">
              {selectedSubject.lessons.map((lesson, index) => {
                const isCompleted = completedLessons.includes(
                  `${selectedSubject.name}: ${lesson.title}`
                );

                return (
                  <div
                    key={lesson.title}
                    className="border border-slate-200 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="bg-indigo-50 text-indigo-700 w-12 h-12 rounded-xl flex items-center justify-center font-bold">
                        {index + 1}
                      </div>

                      <div>
                        <h3 className="font-bold">{lesson.title}</h3>
                        <p className="text-sm text-slate-500 mt-1">
                          {lesson.duration} · {lesson.level}
                        </p>
                        {isCompleted && (
                          <p className="text-green-600 text-sm mt-1">
                            ✓ Completed
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        setSelectedLesson({
                          ...lesson,
                          subject: selectedSubject.name,
                        })
                      }
                      className="bg-indigo-600 text-white rounded-xl px-5 py-3 font-semibold hover:bg-indigo-700"
                    >
                      {isCompleted ? "Review Lesson" : "Start Lesson"}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {selectedLesson && (
          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm mb-12">
            <p className="text-sm font-semibold text-indigo-600">
              {selectedLesson.subject} · {selectedLesson.level}
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-4">
              {selectedLesson.title}
            </h2>

            <p className="text-slate-600 mb-5">
              Welcome to this lesson! Take your time to understand
              the topic and review the key ideas below.
            </p>

            <div className="bg-indigo-50 rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-lg mb-3">Lesson Overview</h3>
              <p className="text-slate-700">
                This lesson introduces the main concepts of{" "}
                {selectedLesson.title.toLowerCase()}. Read your class
                notes, review the examples provided by your teacher,
                and write down any questions you have.
              </p>
              <p className="mt-4 text-slate-700">
                <strong>Study tip:</strong> Summarize what you learn
                in your own words and practice with exercises.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  markAsCompleted(
                    `${selectedLesson.subject}: ${selectedLesson.title}`
                  );
                }}
                disabled={completedLessons.includes(
                  `${selectedLesson.subject}: ${selectedLesson.title}`
                )}
                className="bg-green-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-700 disabled:opacity-50"
              >
                {completedLessons.includes(
                  `${selectedLesson.subject}: ${selectedLesson.title}`
                )
                  ? "✓ Lesson Completed"
                  : "Mark as Completed"}
              </button>

              <button
                onClick={() => setSelectedLesson(null)}
                className="border border-slate-300 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50"
              >
                Back to Lessons
              </button>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-7">
        <div className="max-w-7xl mx-auto px-5 text-center text-sm text-slate-500">
          <p>© 2026 LearnHub. Learn at your own pace.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
