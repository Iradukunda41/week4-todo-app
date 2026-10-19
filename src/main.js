import './style.css'

/* ---------- COURSE DATA ---------- */
const courses = [
  {
    id: 'js', title: 'JavaScript Fundamentals',
    category: 'Web Development', color: 'bg-yellow-100', icon: '💻',
    lessons: [
      {
        title: 'Variables and Data Types', duration: '15 min',
        content: 'A variable stores a value. Use let for values that can change and const for values that cannot be reassigned. Common data types include strings, numbers, booleans, arrays, and objects.',
        quiz: [
          { question: 'Which keyword declares a variable that cannot be reassigned?', options: ['let', 'const', 'var'], answer: 1 },
          { question: 'What data type is "Flora"?', options: ['number', 'boolean', 'string'], answer: 2 },
        ],
      },
      {
        title: 'Functions', duration: '20 min',
        content: 'A function is reusable code. Example: function greet(name) { return "Hello " + name }. An arrow function can be written as const greet = (name) => "Hello " + name.',
        quiz: [
          { question: 'Which keyword returns a value from a function?', options: ['return', 'break', 'print'], answer: 0 },
          { question: 'Which one is an arrow function?', options: ['function a() {}', 'const a = () => {}', 'a => function'], answer: 1 },
        ],
      },
    ],
  },
  {
    id: 'math', title: 'Mathematics',
    category: 'Secondary & University', color: 'bg-blue-100', icon: '📐',
    lessons: [
      {
        title: 'Introduction to Algebra', duration: '15 min',
        content: 'Algebra uses letters such as x and y to represent unknown numbers. For example, x + 3 = 7, so x = 4.',
        quiz: [
          { question: 'If x + 5 = 12, what is x?', options: ['5', '7', '17'], answer: 1 },
          { question: 'In 2x = 10, what is x?', options: ['5', '8', '20'], answer: 0 },
        ],
      },
      {
        title: 'Linear Equations', duration: '20 min',
        content: 'A linear equation has variables with a power of 1, such as y = 2x + 1. When x = 3, y = 7.',
        quiz: [
          { question: 'In y = 2x + 1, if x = 2, what is y?', options: ['4', '5', '6'], answer: 1 },
          { question: 'Which one is a linear equation?', options: ['y = x²', 'y = 3x + 2', 'y = 1/x'], answer: 1 },
        ],
      },
    ],
  },
  {
    id: 'physics', title: 'Physics',
    category: 'Science', color: 'bg-purple-100', icon: '🔬',
    lessons: [
      {
        title: 'Motion and Speed', duration: '20 min',
        content: 'Speed is distance divided by time. A car travelling 100 km in 2 hours has a speed of 50 km/h.',
        quiz: [
          { question: 'What is the formula for speed?', options: ['distance × time', 'distance ÷ time', 'time ÷ distance'], answer: 1 },
          { question: 'A car travels 120 km in 2 hours. What is its speed?', options: ['40 km/h', '60 km/h', '240 km/h'], answer: 1 },
        ],
      },
      {
        title: 'Force and Energy', duration: '25 min',
        content: 'Force is measured in Newtons. The formula is F = m × a. Energy is measured in Joules.',
        quiz: [
          { question: 'What unit is force measured in?', options: ['Joules', 'Newtons', 'Watts'], answer: 1 },
          { question: 'What is the formula for force?', options: ['F = m × a', 'F = m + a', 'F = m ÷ a'], answer: 0 },
        ],
      },
    ],
  },
  {
    id: 'biology', title: 'Biology',
    category: 'Science', color: 'bg-green-100', icon: '🧬',
    lessons: [
      {
        title: 'The Cell', duration: '20 min',
        content: 'The cell is the basic unit of life. The nucleus controls cell activities, the membrane protects the cell, and mitochondria release energy.',
        quiz: [
          { question: 'What is the basic unit of life?', options: ['Atom', 'Cell', 'Organ'], answer: 1 },
          { question: 'Which part controls cell activities?', options: ['Nucleus', 'Cell membrane', 'Mitochondria'], answer: 0 },
        ],
      },
      {
        title: 'Photosynthesis', duration: '25 min',
        content: 'Photosynthesis allows plants to make food using sunlight, water, and carbon dioxide. It takes place in chloroplasts.',
        quiz: [
          { question: 'Which gas do plants release during photosynthesis?', options: ['Oxygen', 'Carbon dioxide', 'Nitrogen'], answer: 0 },
          { question: 'Where does photosynthesis take place?', options: ['Nucleus', 'Chloroplasts', 'Roots'], answer: 1 },
        ],
      },
    ],
  },
  {
    id: 'chemistry', title: 'Chemistry',
    category: 'Science', color: 'bg-orange-100', icon: '🧪',
    lessons: [
      {
        title: 'Atoms and Elements', duration: '20 min',
        content: 'Atoms contain protons, neutrons, and electrons. An element contains one type of atom, such as hydrogen or oxygen.',
        quiz: [
          { question: 'Which particle has a negative charge?', options: ['Proton', 'Neutron', 'Electron'], answer: 2 },
          { question: 'What is the chemical symbol for oxygen?', options: ['O', 'Ox', 'G'], answer: 0 },
        ],
      },
      {
        title: 'Chemical Reactions', duration: '25 min',
        content: 'In a chemical reaction, reactants change into products. For example, hydrogen and oxygen can react to form water.',
        quiz: [
          { question: 'What are the starting substances in a reaction called?', options: ['Products', 'Reactants', 'Catalysts'], answer: 1 },
          { question: 'Hydrogen and oxygen react to form what?', options: ['Salt', 'Carbon dioxide', 'Water'], answer: 2 },
        ],
      },
    ],
  },
]

/* ---------- LOAD AND SAVE DATA ---------- */
function loadSavedData() {
  try {
    const data = JSON.parse(localStorage.getItem('learnhub'))
    return data && typeof data === 'object' ? data : {}
  } catch {
    return {}
  }
}

const saved = loadSavedData()

const state = {
  completed: saved.completed && typeof saved.completed === 'object' ? saved.completed : {},
  results: Array.isArray(saved.results) ? saved.results : [],
  tasks: Array.isArray(saved.tasks)
    ? saved.tasks.map(task => ({ ...task, id: String(task.id), done: Boolean(task.done) }))
    : [],
  studyLog: saved.studyLog && typeof saved.studyLog === 'object' ? saved.studyLog : {},
  dailyGoal: Number.isInteger(saved.dailyGoal)
    ? Math.min(20, Math.max(1, saved.dailyGoal))
    : 2,
  taskFilter: 'all',
  taskSearch: '',
  editingTaskId: null,
  search: '',
  activeCourse: null,
  activeLesson: null,
  feedback: null,
}

function save() {
  try {
    localStorage.setItem('learnhub', JSON.stringify({
      completed: state.completed,
      results: state.results,
      tasks: state.tasks,
      studyLog: state.studyLog,
      dailyGoal: state.dailyGoal,
    }))
  } catch (error) {
    console.error('Unable to save LearnHub data:', error)
  }
}

function getCourse(id) {
  return courses.find(course => course.id === id)
}

function courseProgress(course) {
  return Math.round(((state.completed[course.id] || []).length / course.lessons.length) * 100)
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/* ---------- STUDY STREAK & DAILY GOALS ---------- */
function getDateKey(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function getDateOffset(offset) {
  const date = new Date()
  date.setHours(12, 0, 0, 0)
  date.setDate(date.getDate() + offset)
  return getDateKey(date)
}

function recordStudySession(courseId, lessonIndex) {
  const today = getDateKey()
  const lessonId = `${courseId}:${lessonIndex}`

  if (!Array.isArray(state.studyLog[today])) state.studyLog[today] = []
  if (!state.studyLog[today].includes(lessonId)) state.studyLog[today].push(lessonId)
}

function calculateStudyStreak() {
  let offset = state.studyLog[getDateKey()]?.length ? 0 : -1
  let streak = 0

  while (true) {
    const dateKey = getDateOffset(offset)
    if (!Array.isArray(state.studyLog[dateKey]) || state.studyLog[dateKey].length === 0) break
    streak++
    offset--
  }

  return streak
}

function renderStudyGoals() {
  const todayLessons = Array.isArray(state.studyLog[getDateKey()])
    ? state.studyLog[getDateKey()].length
    : 0

  const goal = state.dailyGoal
  const percentage = Math.min(100, Math.round((todayLessons / goal) * 100))
  const streak = calculateStudyStreak()
  const remaining = Math.max(0, goal - todayLessons)

  document.querySelector('#study-streak').textContent = `${streak} ${streak === 1 ? 'day' : 'days'}`
  document.querySelector('#daily-progress').textContent = `${todayLessons} / ${goal} ${goal === 1 ? 'lesson' : 'lessons'}`
  document.querySelector('#daily-progress-bar').style.width = `${percentage}%`
  document.querySelector('#daily-progress-bar').setAttribute('aria-valuenow', percentage)
  document.querySelector('#daily-message').textContent =
    todayLessons >= goal
      ? '🎉 Daily goal completed! Great work!'
      : `${remaining} more ${remaining === 1 ? 'lesson' : 'lessons'} to reach your goal.`

  document.querySelector('#daily-goal-input').value = goal
}

/* ---------- ACHIEVEMENTS ---------- */
function renderAchievements() {
  const completedLessons = Object.values(state.completed).reduce(
    (total, lessons) => total + (Array.isArray(lessons) ? lessons.length : 0),
    0
  )

  const quizMaster = state.results.some(
    result => result.total > 0 && result.score === result.total
  )

  const todayLessons = Array.isArray(state.studyLog[getDateKey()])
    ? state.studyLog[getDateKey()].length
    : 0

  const achievements = [
    {
      icon: '🥇',
      title: 'First Lesson',
      description: 'Complete your first lesson.',
      unlocked: completedLessons >= 1,
    },
    {
      icon: '🧠',
      title: 'Quiz Master',
      description: 'Answer every question correctly in a quiz.',
      unlocked: quizMaster,
    },
    {
      icon: '🔥',
      title: 'Study Streak',
      description: 'Study on 3 consecutive days.',
      unlocked: calculateStudyStreak() >= 3,
    },
    {
      icon: '🎯',
      title: 'Daily Goal',
      description: 'Reach your daily lesson goal.',
      unlocked: todayLessons >= state.dailyGoal,
    },
  ]

  document.querySelector('#achievements-list').innerHTML = achievements.map(item => `
    <article class="rounded-xl border ${
      item.unlocked ? 'border-yellow-300 bg-yellow-50' : 'border-slate-200 bg-slate-50'
    } p-5">
      <div class="flex items-center gap-3">
        <span class="text-3xl ${item.unlocked ? '' : 'grayscale opacity-40'}">${item.icon}</span>
        <div>
          <h4 class="font-bold text-slate-900">${item.title}</h4>
          <p class="mt-1 text-xs font-semibold ${
            item.unlocked ? 'text-green-700' : 'text-slate-500'
          }">${item.unlocked ? '✓ Unlocked' : '🔒 Locked'}</p>
        </div>
      </div>
      <p class="mt-4 text-sm text-slate-600">${item.description}</p>
    </article>
  `).join('')

  const count = achievements.filter(item => item.unlocked).length
  document.querySelector('#achievements-count').textContent =
    `${count} of ${achievements.length} achievements unlocked`
}

/* ---------- PAGE SHELL ---------- */
document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-slate-50 md:flex">
    <aside class="bg-slate-900 p-6 text-white md:sticky md:top-0 md:h-screen md:w-64 md:shrink-0">
      <h1 class="text-xl font-bold">📚 LearnHub</h1>
      <p class="mt-2 text-sm text-slate-400">Student Learning Platform</p>
      <nav class="mt-8 flex gap-3 overflow-x-auto md:flex-col">
        <a href="#dashboard" class="rounded-lg bg-blue-600 px-4 py-3">🏠 Dashboard</a>
        <a href="#courses" class="rounded-lg px-4 py-3 hover:bg-slate-800">📖 My Courses</a>
        <a href="#tests" class="rounded-lg px-4 py-3 hover:bg-slate-800">📝 Online Tests</a>
        <a href="#results" class="rounded-lg px-4 py-3 hover:bg-slate-800">🏆 My Results</a>
        <a href="#achievements" class="rounded-lg px-4 py-3 hover:bg-slate-800">🏅 Achievements</a>
        <a href="#tasks" class="rounded-lg px-4 py-3 hover:bg-slate-800">✅ My Tasks</a>
      </nav>
    </aside>

    <main id="dashboard" class="min-w-0 flex-1 p-5 md:p-8">
      <header class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p class="text-sm text-slate-500">WELCOME TO LEARNHUB</p>
          <h2 class="mt-1 text-2xl font-bold text-slate-900">Your learning dashboard 👋</h2>
        </div>
        <div class="flex items-center gap-3">
          <button id="theme-toggle" type="button"
            class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold">🌙 Dark</button>
          <div class="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">🎓 Student</div>
        </div>
      </header>

      <section class="mt-8 rounded-2xl bg-blue-600 p-6 text-white md:p-8">
        <p class="text-sm font-semibold text-blue-100">YOUR FUTURE STARTS HERE</p>
        <h3 class="mt-3 text-2xl font-bold md:text-3xl">Learn something new every day!</h3>
        <p class="mt-3 max-w-xl text-blue-100">Read lessons, take tests and follow your progress.</p>
        <a href="#courses" class="mt-5 inline-block rounded-lg bg-white px-5 py-3 font-semibold text-blue-700">Explore Courses →</a>
      </section>

      <section class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article class="rounded-xl border border-slate-200 bg-white p-5">
          <p class="text-sm text-slate-500">Available Courses</p>
          <p id="course-count" class="mt-2 text-3xl font-bold">0</p>
        </article>
        <article class="rounded-xl border border-slate-200 bg-white p-5">
          <p class="text-sm text-slate-500">Tests Completed</p>
          <p id="test-count" class="mt-2 text-3xl font-bold">0</p>
        </article>
        <article class="rounded-xl border border-slate-200 bg-white p-5">
          <p class="text-sm text-slate-500">Lessons Completed</p>
          <p id="lesson-count" class="mt-2 text-3xl font-bold">0</p>
        </article>
        <article class="rounded-xl border border-slate-200 bg-white p-5">
          <p class="text-sm text-slate-500">Average Test Score</p>
          <p id="average-score" class="mt-2 text-3xl font-bold">—</p>
        </article>
      </section>

      <section id="study-goals" class="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="text-sm font-semibold text-blue-600">YOUR DAILY HABIT</p>
            <h3 class="mt-1 text-xl font-bold text-slate-900">🔥 Study Streak & Daily Goals</h3>
            <p class="mt-2 text-sm text-slate-500">Learn every day and keep making progress.</p>
          </div>
          <div class="rounded-xl bg-orange-50 px-4 py-3 text-center">
            <p class="text-sm text-orange-700">Current streak</p>
            <p id="study-streak" class="mt-1 text-2xl font-bold text-orange-600">0 days</p>
          </div>
        </div>

        <div class="mt-6 grid gap-5 sm:grid-cols-2">
          <div class="rounded-xl bg-slate-50 p-4">
            <p class="text-sm text-slate-500">Today's progress</p>
            <p id="daily-progress" class="mt-2 text-2xl font-bold text-slate-900">0 / 2 lessons</p>
            <div class="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
              <div id="daily-progress-bar" role="progressbar" aria-label="Daily study goal progress"
                aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"
                class="h-full rounded-full bg-blue-600 transition-all" style="width:0%"></div>
            </div>
            <p id="daily-message" class="mt-2 text-sm text-slate-600">Complete a lesson to start your daily goal.</p>
          </div>
          <form id="daily-goal-form" class="rounded-xl bg-slate-50 p-4">
            <label for="daily-goal-input" class="font-semibold text-slate-900">🎯 Daily lesson goal</label>
            <p class="mt-1 text-sm text-slate-500">Choose between 1 and 20 lessons per day.</p>
            <div class="mt-3 flex items-center gap-3">
              <input id="daily-goal-input" type="number" min="1" max="20" value="2" required
                class="w-24 rounded-lg border border-slate-300 bg-white px-3 py-2" />
              <button type="submit" class="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white">Save Goal</button>
            </div>
            <p id="daily-goal-feedback" class="mt-2 text-sm" role="status"></p>
          </form>
        </div>
      </section>

      <!-- ACHIEVEMENTS -->
      <section id="achievements" class="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <p class="text-sm font-semibold text-blue-600">YOUR ACHIEVEMENTS</p>
        <h3 class="mt-1 text-xl font-bold text-slate-900">🏆 Achievements & Badges</h3>
        <p class="mt-2 text-sm text-slate-500">Keep learning to unlock new achievements!</p>
        <div id="achievements-list" class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"></div>
        <p id="achievements-count" class="mt-5 text-sm font-medium text-slate-600"></p>
      </section>

      <section id="courses" class="mt-10">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 class="text-xl font-bold text-slate-900">My Courses</h3>
            <p class="mt-1 text-sm text-slate-500">Choose a subject to start learning.</p>
          </div>
          <span id="subject-label" class="text-sm font-medium text-blue-600"></span>
        </div>
        <input id="course-search" type="search" aria-label="Search courses" placeholder="Search courses (e.g. physics, science)..."
          class="mt-5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3" />
        <div id="course-list" class="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3"></div>
      </section>

      <section id="learn" class="mt-8"></section>

      <section id="tests" class="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h3 class="text-lg font-bold">📝 Online Tests</h3>
        <p class="mt-2 text-slate-600">Open a lesson, read the content, and complete its quiz.</p>
      </section>

      <section id="results" class="mt-5 rounded-xl border border-slate-200 bg-white p-6">
        <h3 class="text-lg font-bold">🏆 My Results</h3>
        <div id="results-list" class="mt-3"></div>
      </section>

      <section id="tasks" class="mt-5 rounded-xl border border-slate-200 bg-white p-6">
        <h3 class="text-lg font-bold">✅ My Tasks (Study Planner)</h3>
        <p class="mt-2 text-slate-600">Organize your study tasks and track your progress.</p>
        <form id="task-form" class="mt-4 flex gap-2">
          <input id="task-input" type="text" maxlength="100" aria-label="New task"
            placeholder="e.g. Revise Physics formulas"
            class="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-2" />
          <button type="submit" class="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white">Add</button>
        </form>
        <p id="task-error" role="alert" class="mt-2 hidden text-sm text-red-600"></p>
        <input id="task-search" type="search" aria-label="Search tasks" placeholder="Search tasks..."
          class="mt-4 w-full rounded-lg border border-slate-300 px-4 py-2" />
        <div id="task-filters" class="mt-4 flex flex-wrap gap-2"></div>
        <ul id="task-list" class="mt-4 space-y-2"></ul>
        <div class="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
          <span id="task-counter" aria-live="polite"></span>
          <button type="button" data-action="clear-completed" class="text-red-600 hover:underline">Clear completed</button>
        </div>
      </section>

      <footer class="mt-10 border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        LearnHub © 2026 · Learn, practise and grow.
      </footer>
    </main>
  </div>
`

/* ---------- DASHBOARD RENDERING ---------- */
function renderStats() {
  const totalCompleted = Object.values(state.completed).reduce(
    (sum, list) => sum + (Array.isArray(list) ? list.length : 0), 0
  )

  const average = state.results.length
    ? Math.round(
        (state.results.reduce((sum, result) => sum + result.score / result.total, 0) /
          state.results.length) * 100
      )
    : null

  document.querySelector('#course-count').textContent = courses.length
  document.querySelector('#subject-label').textContent = `${courses.length} subjects`
  document.querySelector('#test-count').textContent = state.results.length
  document.querySelector('#lesson-count').textContent = totalCompleted
  document.querySelector('#average-score').textContent = average === null ? '—' : `${average}%`
}

function renderCourses() {
  const query = state.search.trim().toLowerCase()
  const visible = courses.filter(course =>
    course.title.toLowerCase().includes(query) ||
    course.category.toLowerCase().includes(query)
  )
  const list = document.querySelector('#course-list')

  if (!visible.length) {
    list.innerHTML = `<p class="col-span-full rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center text-slate-500">No courses found. Try another search.</p>`
    return
  }

  list.innerHTML = visible.map(course => {
    const progress = courseProgress(course)
    return `
      <article class="rounded-xl border border-slate-200 bg-white p-5 transition hover:shadow-lg">
        <div class="flex items-center gap-4">
          <div class="${course.color} flex h-14 w-14 items-center justify-center rounded-xl text-2xl">${course.icon}</div>
          <div>
            <h4 class="font-bold text-slate-900">${escapeHtml(course.title)}</h4>
            <p class="mt-1 text-sm text-slate-500">${escapeHtml(course.category)}</p>
          </div>
        </div>
        <div class="mt-6 flex justify-between text-sm">
          <span class="text-slate-500">Course progress</span>
          <span class="font-semibold">${progress}%</span>
        </div>
        <div class="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
          <div class="h-full rounded-full bg-blue-600" style="width:${progress}%"></div>
        </div>
        <button type="button" data-action="start-course" data-course="${course.id}"
          class="mt-5 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700">
          ${progress > 0 ? 'Continue Learning' : 'Start Learning'}
        </button>
      </article>`
  }).join('')
}

function renderLearn() {
  const panel = document.querySelector('#learn')
  const course = getCourse(state.activeCourse)

  if (!course) {
    panel.innerHTML = ''
    return
  }

  if (state.activeLesson === null) {
    const done = state.completed[course.id] || []

    panel.innerHTML = `
      <div class="rounded-2xl border border-slate-200 bg-white p-6">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-sm font-semibold text-blue-600">SELECTED COURSE</p>
            <h3 class="mt-1 text-xl font-bold">${course.icon} ${escapeHtml(course.title)}</h3>
          </div>
          <button type="button" data-action="close-course" class="text-slate-500">Close ×</button>
        </div>
        <div class="mt-5 space-y-3">
          ${course.lessons.map((lesson, index) => `
            <div class="flex flex-col justify-between gap-3 rounded-xl border border-slate-200 p-4 md:flex-row md:items-center">
              <div>
                <p class="font-semibold">${index + 1}. ${escapeHtml(lesson.title)}</p>
                <p class="text-sm text-slate-500">${escapeHtml(lesson.duration)}
                  ${done.includes(index) ? '<span class="ml-2 text-green-600">✓ Completed</span>' : ''}
                </p>
              </div>
              <button type="button" data-action="open-lesson" data-lesson="${index}"
                class="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white">
                ${done.includes(index) ? 'Review' : 'Start Lesson'}
              </button>
            </div>`).join('')}
        </div>
      </div>`
    return
  }

  const lesson = course.lessons[state.activeLesson]
  const feedback = state.feedback

  panel.innerHTML = `
    <div class="rounded-2xl border border-slate-200 bg-white p-6">
      <p class="text-sm font-semibold text-blue-600">${escapeHtml(course.title)}</p>
      <h3 class="mt-1 text-2xl font-bold">${escapeHtml(lesson.title)}</h3>
      <div class="mt-4 rounded-xl bg-blue-50 p-5 text-slate-700">${escapeHtml(lesson.content)}</div>
      <h4 class="mt-6 text-lg font-bold">📝 Quiz</h4>
      ${lesson.quiz.map((question, qi) => `
        <div class="mt-4">
          <p class="font-semibold">${qi + 1}. ${escapeHtml(question.question)}</p>
          <div class="mt-2 space-y-2">
            ${question.options.map((option, oi) => {
              let style = 'border-slate-200'
              if (feedback) {
                if (oi === question.answer) style = 'border-green-500 bg-green-50'
                else if (feedback.picked[qi] === oi) style = 'border-red-500 bg-red-50'
              }
              return `
                <label class="flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 ${style}">
                  <input type="radio" name="q${qi}" value="${oi}"
                    ${feedback ? 'disabled' : ''}
                    ${feedback && feedback.picked[qi] === oi ? 'checked' : ''} />
                  ${escapeHtml(option)}
                </label>`
            }).join('')}
          </div>
        </div>`).join('')}
      <div class="mt-6 flex flex-wrap items-center gap-3">
        ${feedback ? `
          <p class="font-bold">Score: ${feedback.score}/${feedback.total}
            ${feedback.score === feedback.total ? '🎉 Lesson completed!' : 'Try again to complete the lesson.'}
          </p>
          ${feedback.score !== feedback.total
            ? '<button type="button" data-action="retry" class="rounded-lg border border-slate-300 px-4 py-2">Try again</button>'
            : ''}
        ` : '<button type="button" data-action="submit-quiz" class="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white">Submit Quiz</button>'}
        <button type="button" data-action="back-lessons" class="rounded-lg border border-slate-300 px-4 py-2">Back to Lessons</button>
      </div>
    </div>`
}

function renderResults() {
  const box = document.querySelector('#results-list')

  if (!state.results.length) {
    box.innerHTML = '<p class="text-slate-600">Your test scores will appear here after your first quiz.</p>'
    return
  }

  box.innerHTML = `
    <ul class="divide-y divide-slate-100">
      ${[...state.results].reverse().map(result => `
        <li class="flex items-center justify-between gap-3 py-3">
          <span>${escapeHtml(result.course)} · <span class="text-slate-500">${escapeHtml(result.lesson)}</span></span>
          <span class="font-semibold ${result.score === result.total ? 'text-green-600' : 'text-orange-600'}">${result.score}/${result.total}</span>
        </li>`).join('')}
    </ul>`
}

/* ---------- TASK LIST ---------- */
function renderTasks() {
  const filters = ['all', 'active', 'completed']

  document.querySelector('#task-filters').innerHTML = filters.map(filter => `
    <button type="button" data-action="filter" data-filter="${filter}"
      aria-pressed="${state.taskFilter === filter}"
      class="rounded-full px-4 py-1 text-sm font-medium ${
        state.taskFilter === filter
          ? 'bg-blue-600 text-white'
          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
      }">
      ${filter[0].toUpperCase() + filter.slice(1)}
    </button>`).join('')

  const query = state.taskSearch.trim().toLowerCase()
  const visible = state.tasks.filter(task => {
    if (state.taskFilter === 'active' && task.done) return false
    if (state.taskFilter === 'completed' && !task.done) return false
    return !query || task.text.toLowerCase().includes(query)
  })

  const list = document.querySelector('#task-list')

  if (!visible.length) {
    const message = state.tasks.length === 0
      ? 'No tasks yet. Add your first task above!'
      : query
        ? 'No tasks match your search.'
        : state.taskFilter === 'active'
          ? 'No active tasks. Great job!'
          : state.taskFilter === 'completed'
            ? 'No completed tasks yet.'
            : 'No tasks found.'

    list.innerHTML = `<li class="rounded-lg border border-dashed border-slate-300 p-5 text-center text-slate-500">${message}</li>`
  } else {
    list.innerHTML = visible.map(task => {
      const editing = state.editingTaskId === task.id
      return `
        <li class="rounded-lg border border-slate-200 px-4 py-3">
          ${editing ? `
            <form data-action="save-task" data-id="${escapeHtml(task.id)}" class="flex flex-wrap gap-2">
              <input type="text" data-edit-input value="${escapeHtml(task.text)}" maxlength="100" required
                aria-label="Edit task" class="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2" />
              <button type="submit" class="rounded-lg bg-blue-600 px-3 py-2 text-white">Save</button>
              <button type="button" data-action="cancel-edit" class="rounded-lg border border-slate-300 px-3 py-2">Cancel</button>
              <p data-edit-error class="hidden w-full text-sm text-red-600"></p>
            </form>
          ` : `
            <div class="flex flex-wrap items-center justify-between gap-3">
              <label class="flex min-w-0 flex-1 cursor-pointer items-center gap-3">
                <input type="checkbox" data-action="toggle-task" data-id="${escapeHtml(task.id)}"
                  ${task.done ? 'checked' : ''} aria-label="Mark task complete" />
                <span class="break-words ${task.done ? 'text-slate-400 line-through' : 'text-slate-800'}">${escapeHtml(task.text)}</span>
              </label>
              <div class="flex items-center gap-3">
                <button type="button" data-action="edit-task" data-id="${escapeHtml(task.id)}"
                  class="text-sm font-medium text-blue-600 hover:underline"
                  ${task.done ? 'disabled title="Uncheck the task before editing"' : ''}>Edit</button>
                <button type="button" data-action="delete-task" data-id="${escapeHtml(task.id)}"
                  class="text-sm font-medium text-red-600 hover:underline">Delete</button>
              </div>
            </div>`}
        </li>`
    }).join('')
  }

  const remaining = state.tasks.filter(task => !task.done).length
  const completed = state.tasks.filter(task => task.done).length

  document.querySelector('#task-counter').textContent =
    `${remaining} ${remaining === 1 ? 'task' : 'tasks'} remaining · ${completed} completed`

  const clearButton = document.querySelector('[data-action="clear-completed"]')
  clearButton.disabled = completed === 0
  clearButton.classList.toggle('opacity-50', completed === 0)
  clearButton.classList.toggle('cursor-not-allowed', completed === 0)
}

function renderAll() {
  renderStats()
  renderCourses()
  renderLearn()
  renderResults()
  renderTasks()
  renderStudyGoals()
  renderAchievements()
}

/* ---------- QUIZ ACTION ---------- */
function submitQuiz() {
  const course = getCourse(state.activeCourse)
  if (!course || state.activeLesson === null) return

  const lesson = course.lessons[state.activeLesson]
  const picked = lesson.quiz.map((question, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`)
    return selected ? Number(selected.value) : null
  })

  if (picked.includes(null)) {
    alert('Please answer all questions first.')
    return
  }

  const score = lesson.quiz.filter((question, index) => picked[index] === question.answer).length
  const total = lesson.quiz.length

  state.results.push({ course: course.title, lesson: lesson.title, score, total })

  if (score === total) {
    const completed = state.completed[course.id] || []
    if (!completed.includes(state.activeLesson)) completed.push(state.activeLesson)
    state.completed[course.id] = completed
    recordStudySession(course.id, state.activeLesson)
  }

  state.feedback = { score, total, picked }
  save()
  renderAll()
}

/* ---------- SAVE DAILY GOAL ---------- */
document.querySelector('#daily-goal-form').addEventListener('submit', event => {
  event.preventDefault()

  const input = document.querySelector('#daily-goal-input')
  const feedback = document.querySelector('#daily-goal-feedback')
  const value = Number(input.value)

  if (!Number.isInteger(value) || value < 1 || value > 20) {
    feedback.textContent = 'Choose a whole number between 1 and 20.'
    feedback.className = 'mt-2 text-sm text-red-600'
    return
  }

  state.dailyGoal = value
  save()
  renderStudyGoals()
  renderAchievements()

  feedback.textContent = 'Your daily goal has been saved!'
  feedback.className = 'mt-2 text-sm text-green-700'
})

/* ---------- CLICK ACTIONS ---------- */
document.addEventListener('click', event => {
  const button = event.target.closest('[data-action]')
  if (!button) return

  const { action, id } = button.dataset

  if (action === 'start-course') {
    state.activeCourse = button.dataset.course
    state.activeLesson = null
    state.feedback = null
    renderLearn()
    document.querySelector('#learn').scrollIntoView({ behavior: 'smooth' })
  }

  if (action === 'close-course') {
    state.activeCourse = null
    state.activeLesson = null
    state.feedback = null
    renderLearn()
  }

  if (action === 'open-lesson') {
    state.activeLesson = Number(button.dataset.lesson)
    state.feedback = null
    renderLearn()
  }

  if (action === 'back-lessons') {
    state.activeLesson = null
    state.feedback = null
    renderLearn()
  }

  if (action === 'retry') {
    state.feedback = null
    renderLearn()
  }

  if (action === 'submit-quiz') submitQuiz()

  if (action === 'toggle-task') {
    const task = state.tasks.find(item => item.id === id)
    if (task) {
      task.done = !task.done
      state.editingTaskId = null
      save()
      renderTasks()
    }
  }

  if (action === 'delete-task') {
    const task = state.tasks.find(item => item.id === id)
    if (!task) return

    if (window.confirm(`Are you sure you want to delete "${task.text}"?`)) {
      state.tasks = state.tasks.filter(item => item.id !== id)
      if (state.editingTaskId === id) state.editingTaskId = null
      save()
      renderTasks()
    }
  }

  if (action === 'edit-task') {
    state.editingTaskId = id
    renderTasks()
    const input = document.querySelector('[data-edit-input]')
    input?.focus()
    input?.select()
  }

  if (action === 'cancel-edit') {
    state.editingTaskId = null
    renderTasks()
  }

  if (action === 'filter') {
    state.taskFilter = button.dataset.filter
    state.editingTaskId = null
    renderTasks()
  }

  if (action === 'clear-completed') {
    const count = state.tasks.filter(task => task.done).length
    if (!count) return

    if (window.confirm(`Clear all ${count} completed task(s)?`)) {
      state.tasks = state.tasks.filter(task => !task.done)
      state.editingTaskId = null
      save()
      renderTasks()
    }
  }
})

/* ---------- ADD TASK ---------- */
document.querySelector('#task-form').addEventListener('submit', event => {
  event.preventDefault()

  const input = document.querySelector('#task-input')
  const error = document.querySelector('#task-error')
  const text = input.value.trim()

  if (!text) {
    error.textContent = 'Please enter a task before adding it.'
    error.classList.remove('hidden')
    input.focus()
    return
  }

  if (state.tasks.some(task => task.text.toLowerCase() === text.toLowerCase())) {
    error.textContent = 'This task already exists. Please enter a different task.'
    error.classList.remove('hidden')
    input.focus()
    return
  }

  error.classList.add('hidden')
  state.tasks.push({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    text,
    done: false,
  })
  state.taskFilter = 'all'
  state.taskSearch = ''
  document.querySelector('#task-search').value = ''
  input.value = ''
  save()
  renderTasks()
  input.focus()
})

/* ---------- SAVE EDITED TASK ---------- */
document.addEventListener('submit', event => {
  const form = event.target.closest('form[data-action="save-task"]')
  if (!form) return

  event.preventDefault()

  const id = form.dataset.id
  const input = form.querySelector('[data-edit-input]')
  const error = form.querySelector('[data-edit-error]')
  const newText = input.value.trim()

  if (!newText) {
    error.textContent = 'Task cannot be empty.'
    error.classList.remove('hidden')
    input.focus()
    return
  }

  const duplicate = state.tasks.some(
    task => task.id !== id && task.text.toLowerCase() === newText.toLowerCase()
  )

  if (duplicate) {
    error.textContent = 'Another task already has this name.'
    error.classList.remove('hidden')
    input.focus()
    return
  }

  const task = state.tasks.find(item => item.id === id)
  if (task) {
    task.text = newText
    state.editingTaskId = null
    save()
    renderTasks()
  }
})

/* ---------- KEYBOARD SUPPORT ---------- */
document.addEventListener('keydown', event => {
  if (!event.target.matches('[data-edit-input]')) return

  if (event.key === 'Escape') {
    state.editingTaskId = null
    renderTasks()
  }
})

/* ---------- COURSE SEARCH ---------- */
document.querySelector('#course-search').addEventListener('input', event => {
  state.search = event.target.value
  renderCourses()
})

/* ---------- TASK SEARCH ---------- */
document.querySelector('#task-search').addEventListener('input', event => {
  state.taskSearch = event.target.value
  state.editingTaskId = null
  renderTasks()
})

/* ---------- DARK MODE ---------- */
const themeButton = document.querySelector('#theme-toggle')

function loadTheme() {
  try {
    return localStorage.getItem('learnhub-theme') || 'light'
  } catch {
    return 'light'
  }
}

let theme = loadTheme()

function applyTheme(value) {
  document.documentElement.classList.toggle('dark', value === 'dark')
  themeButton.textContent = value === 'dark' ? '☀️ Light' : '🌙 Dark'
}

applyTheme(theme)

themeButton.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark'
  applyTheme(theme)

  try {
    localStorage.setItem('learnhub-theme', theme)
  } catch (error) {
    console.error('Unable to save theme preference:', error)
  }
})

/* ---------- INITIAL RENDER ---------- */
renderAll()