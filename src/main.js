import './style.css'

/* ---------- DATA ---------- */
const courses = [
  {
    id: 'js',
    title: 'JavaScript Fundamentals',
    category: 'Web Development',
    color: 'bg-yellow-100',
    icon: '💻',
    lessons: [
      {
        title: 'Variables and Data Types',
        duration: '15 min',
        content:
          'A variable is a container that stores a value. We declare variables with let or const: a let variable can be changed later, while a const variable cannot be reassigned. The main data types are string, number, boolean, array and object.',
        quiz: [
          {
            question: 'Which keyword declares a variable that cannot be reassigned?',
            options: ['let', 'const', 'var'],
            answer: 1,
          },
          {
            question: 'What data type is "Flora"?',
            options: ['number', 'boolean', 'string'],
            answer: 2,
          },
        ],
      },
      {
        title: 'Functions',
        duration: '20 min',
        content:
          'A function is a block of code you can reuse many times. Example: function greet(name) { return "Hello " + name }. The same function as an arrow function: const greet = (name) => "Hello " + name.',
        quiz: [
          {
            question: 'Which keyword makes a function send a value back?',
            options: ['return', 'break', 'print'],
            answer: 0,
          },
          {
            question: 'Which one is an arrow function?',
            options: ['function a() {}', 'const a = () => {}', 'a => function'],
            answer: 1,
          },
        ],
      },
    ],
  },
  {
    id: 'math',
    title: 'Mathematics',
    category: 'Secondary & University',
    color: 'bg-blue-100',
    icon: '📐',
    lessons: [
      {
        title: 'Introduction to Algebra',
        duration: '15 min',
        content:
          'Algebra uses letters (such as x and y) to represent unknown numbers. Example: x + 3 = 7, so x = 4.',
        quiz: [
          {
            question: 'If x + 5 = 12, what is x?',
            options: ['5', '7', '17'],
            answer: 1,
          },
          {
            question: 'In 2x = 10, what is x?',
            options: ['5', '8', '20'],
            answer: 0,
          },
        ],
      },
      {
        title: 'Linear Equations',
        duration: '20 min',
        content:
          'A linear equation has variables with a power of 1, such as y = 2x + 1. When x = 3, y = 7.',
        quiz: [
          {
            question: 'In y = 2x + 1, if x = 2, what is y?',
            options: ['4', '5', '6'],
            answer: 1,
          },
          {
            question: 'Which one is a linear equation?',
            options: ['y = x²', 'y = 3x + 2', 'y = 1/x'],
            answer: 1,
          },
        ],
      },
    ],
  },
  {
    id: 'physics',
    title: 'Physics',
    category: 'Science',
    color: 'bg-purple-100',
    icon: '🔬',
    lessons: [
      {
        title: 'Motion and Speed',
        duration: '20 min',
        content:
          'Speed is the distance travelled in a given time: speed = distance ÷ time. A car that travels 100 km in 2 hours has a speed of 50 km/h.',
        quiz: [
          {
            question: 'What is the formula for speed?',
            options: ['distance × time', 'distance ÷ time', 'time ÷ distance'],
            answer: 1,
          },
          {
            question: 'A car travels 120 km in 2 hours. What is its speed?',
            options: ['40 km/h', '60 km/h', '240 km/h'],
            answer: 1,
          },
        ],
      },
      {
        title: 'Force and Energy',
        duration: '25 min',
        content:
          'Force is measured in Newtons (N). Formula: F = m × a. Energy is measured in Joules (J); it is never lost, it only changes form.',
        quiz: [
          {
            question: 'What unit is force measured in?',
            options: ['Joules', 'Newtons', 'Watts'],
            answer: 1,
          },
          {
            question: 'What is the formula for force?',
            options: ['F = m × a', 'F = m + a', 'F = m ÷ a'],
            answer: 0,
          },
        ],
      },
    ],
  },
  {
    id: 'biology',
    title: 'Biology',
    category: 'Science',
    color: 'bg-green-100',
    icon: '🧬',
    lessons: [
      {
        title: 'The Cell',
        duration: '20 min',
        content:
          'The cell is the basic unit of life. Every living thing is made of one or more cells. Key parts: the nucleus controls the cell, the cell membrane protects it, and the mitochondria release energy.',
        quiz: [
          {
            question: 'What is the basic unit of life?',
            options: ['Atom', 'Cell', 'Organ'],
            answer: 1,
          },
          {
            question: 'Which part of the cell controls its activities?',
            options: ['Nucleus', 'Cell membrane', 'Mitochondria'],
            answer: 0,
          },
        ],
      },
      {
        title: 'Photosynthesis',
        duration: '25 min',
        content:
          'Photosynthesis is how plants make food using sunlight. Plants take in carbon dioxide and water, and produce glucose and oxygen. It happens in the chloroplasts, which contain chlorophyll.',
        quiz: [
          {
            question: 'Which gas do plants release during photosynthesis?',
            options: ['Oxygen', 'Carbon dioxide', 'Nitrogen'],
            answer: 0,
          },
          {
            question: 'Where does photosynthesis take place?',
            options: ['Nucleus', 'Chloroplasts', 'Roots'],
            answer: 1,
          },
        ],
      },
    ],
  },
  {
    id: 'chemistry',
    title: 'Chemistry',
    category: 'Science',
    color: 'bg-orange-100',
    icon: '🧪',
    lessons: [
      {
        title: 'Atoms and Elements',
        duration: '20 min',
        content:
          'An atom is the smallest unit of an element. It has protons and neutrons in the nucleus, and electrons around it. An element contains only one type of atom, for example hydrogen (H) or oxygen (O).',
        quiz: [
          {
            question: 'Which particle has a negative charge?',
            options: ['Proton', 'Neutron', 'Electron'],
            answer: 2,
          },
          {
            question: 'What is the chemical symbol for oxygen?',
            options: ['O', 'Ox', 'G'],
            answer: 0,
          },
        ],
      },
      {
        title: 'Chemical Reactions',
        duration: '25 min',
        content:
          'In a chemical reaction, substances called reactants change into new substances called products. Example: hydrogen + oxygen → water. Mass is never lost: the total mass before and after is the same.',
        quiz: [
          {
            question: 'What are the starting substances in a reaction called?',
            options: ['Products', 'Reactants', 'Catalysts'],
            answer: 1,
          },
          {
            question: 'Hydrogen and oxygen react to form what?',
            options: ['Salt', 'Carbon dioxide', 'Water'],
            answer: 2,
          },
        ],
      },
    ],
  },
]

/* ---------- STATE (saved in localStorage) ---------- */
let saved = {}
try {
  saved = JSON.parse(localStorage.getItem('learnhub')) || {}
} catch {
  saved = {}
}

const state = {
  completed: saved.completed || {}, // { js: [0, 1], math: [0] }
  results: saved.results || [], // [{ course, lesson, score, total }]
  tasks: saved.tasks || [], // [{ id, text, done }]
  taskFilter: 'all',
  search: '',
  activeCourse: null,
  activeLesson: null,
  feedback: null,
}

function save() {
  localStorage.setItem(
    'learnhub',
    JSON.stringify({
      completed: state.completed,
      results: state.results,
      tasks: state.tasks,
    })
  )
}

function getCourse(id) {
  return courses.find((c) => c.id === id)
}

function courseProgress(course) {
  const done = (state.completed[course.id] || []).length
  return Math.round((done / course.lessons.length) * 100)
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
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
            class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50">
            🌙 Dark
          </button>
          <div class="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">🎓 Student</div>
        </div>
      </header>

      <section class="mt-8 rounded-2xl bg-blue-600 p-6 text-white md:p-8">
        <p class="text-sm font-semibold text-blue-100">YOUR FUTURE STARTS HERE</p>
        <h3 class="mt-3 text-2xl font-bold md:text-3xl">Learn something new every day!</h3>
        <p class="mt-3 max-w-xl text-blue-100">
          Read lessons, take tests and follow your progress.
        </p>
        <a href="#courses" class="mt-5 inline-block rounded-lg bg-white px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50">
          Explore Courses →
        </a>
      </section>

      <section class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article class="rounded-xl border border-slate-200 bg-white p-5">
          <p class="text-sm text-slate-500">Available Courses</p>
          <p id="course-count" class="mt-2 text-3xl font-bold">0</p>
          <p class="mt-2 text-sm text-slate-500">Explore your subjects</p>
        </article>
        <article class="rounded-xl border border-slate-200 bg-white p-5">
          <p class="text-sm text-slate-500">Tests Completed</p>
          <p id="test-count" class="mt-2 text-3xl font-bold">0</p>
          <p class="mt-2 text-sm text-slate-500">Keep practising</p>
        </article>
        <article class="rounded-xl border border-slate-200 bg-white p-5">
          <p class="text-sm text-slate-500">Lessons Completed</p>
          <p id="lesson-count" class="mt-2 text-3xl font-bold">0</p>
          <p class="mt-2 text-sm text-slate-500">Stay consistent</p>
        </article>
        <article class="rounded-xl border border-slate-200 bg-white p-5">
          <p class="text-sm text-slate-500">Average Test Score</p>
          <p id="average-score" class="mt-2 text-3xl font-bold">—</p>
          <p class="mt-2 text-sm text-slate-500">Your learning progress</p>
        </article>
      </section>

      <section id="courses" class="mt-10">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 class="text-xl font-bold text-slate-900">My Courses</h3>
            <p class="mt-1 text-sm text-slate-500">Choose a subject to start learning.</p>
          </div>
          <span id="subject-label" class="text-sm font-medium text-blue-600"></span>
        </div>
        <input id="course-search" type="search" placeholder="Search courses (e.g. physics, science)..."
          class="mt-5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <div id="course-list" class="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3"></div>
      </section>

      <section id="learn" class="mt-8"></section>

      <section id="tests" class="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h3 class="text-lg font-bold">📝 Online Tests</h3>
        <p class="mt-2 text-slate-600">
          Open any lesson to read it, then take its quiz. Pass the quiz to complete the lesson.
        </p>
      </section>

      <section id="results" class="mt-5 rounded-xl border border-slate-200 bg-white p-6">
        <h3 class="text-lg font-bold">🏆 My Results</h3>
        <div id="results-list" class="mt-3"></div>
      </section>

      <section id="tasks" class="mt-5 rounded-xl border border-slate-200 bg-white p-6">
        <h3 class="text-lg font-bold">✅ My Tasks</h3>
        <p class="mt-2 text-slate-600">Plan your study tasks and tick them off.</p>

        <form id="task-form" class="mt-4 flex gap-2">
          <input id="task-input" type="text" maxlength="100"
            placeholder="e.g. Revise Physics formulas"
            class="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit"
            class="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700">
            Add
          </button>
        </form>
        <p id="task-error" class="mt-2 hidden text-sm text-red-600"></p>

        <div id="task-filters" class="mt-4 flex flex-wrap gap-2"></div>
        <ul id="task-list" class="mt-4 space-y-2"></ul>

        <div class="mt-4 flex items-center justify-between text-sm text-slate-500">
          <span id="task-counter"></span>
          <button type="button" data-action="clear-completed" class="text-red-600 hover:underline">
            Clear completed
          </button>
        </div>
      </section>

      <footer class="mt-10 border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        LearnHub © 2026 · Learn, practise and grow.
      </footer>
    </main>
  </div>
`

/* ---------- RENDER FUNCTIONS ---------- */
function renderStats() {
  const totalDone = Object.values(state.completed).reduce((sum, list) => sum + list.length, 0)
  const average = state.results.length
    ? Math.round(
        (state.results.reduce((sum, r) => sum + r.score / r.total, 0) / state.results.length) * 100
      )
    : null

  document.querySelector('#course-count').textContent = courses.length
  document.querySelector('#subject-label').textContent = `${courses.length} subjects`
  document.querySelector('#test-count').textContent = state.results.length
  document.querySelector('#lesson-count').textContent = totalDone
  document.querySelector('#average-score').textContent = average === null ? '—' : `${average}%`
}

function renderCourses() {
  const query = state.search.trim().toLowerCase()
  const visible = courses.filter(
    (c) =>
      c.title.toLowerCase().includes(query) ||
      c.category.toLowerCase().includes(query)
  )
  const list = document.querySelector('#course-list')

  if (visible.length === 0) {
    list.innerHTML =
      '<p class="col-span-full rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center text-slate-500">No courses found.</p>'
    return
  }

  list.innerHTML = visible
    .map((course) => {
      const progress = courseProgress(course)
      return `
        <article class="rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg">
          <div class="flex items-center gap-4">
            <div class="${course.color} flex h-14 w-14 items-center justify-center rounded-xl text-2xl">${course.icon}</div>
            <div>
              <h4 class="font-bold text-slate-900">${course.title}</h4>
              <p class="mt-1 text-sm text-slate-500">${course.category}</p>
            </div>
          </div>

          <div class="mt-6 flex justify-between text-sm">
            <span class="text-slate-500">Course progress</span>
            <span class="font-semibold">${progress}%</span>
          </div>
          <div class="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
            <div class="h-full rounded-full bg-blue-600 transition-all" style="width: ${progress}%"></div>
          </div>

          <button type="button" data-action="start-course" data-course="${course.id}"
            class="mt-5 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700">
            ${progress > 0 ? 'Continue Learning' : 'Start Learning'}
          </button>
        </article>
      `
    })
    .join('')
}

function renderLearn() {
  const panel = document.querySelector('#learn')
  const course = getCourse(state.activeCourse)

  if (!course) {
    panel.innerHTML = ''
    return
  }

  /* Lesson list */
  if (state.activeLesson === null) {
    const done = state.completed[course.id] || []
    panel.innerHTML = `
      <div class="rounded-2xl border border-slate-200 bg-white p-6">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-sm font-semibold text-blue-600">SELECTED COURSE</p>
            <h3 class="mt-1 text-xl font-bold">${course.icon} ${course.title}</h3>
          </div>
          <button type="button" data-action="close-course" class="text-slate-500 hover:text-blue-600">Close ×</button>
        </div>

        <div class="mt-5 space-y-3">
          ${course.lessons
            .map(
              (lesson, i) => `
            <div class="flex flex-col justify-between gap-3 rounded-xl border border-slate-200 p-4 md:flex-row md:items-center">
              <div>
                <p class="font-semibold">${i + 1}. ${lesson.title}</p>
                <p class="text-sm text-slate-500">${lesson.duration}
                  ${done.includes(i) ? '<span class="ml-2 text-green-600">✓ Completed</span>' : ''}
                </p>
              </div>
              <button type="button" data-action="open-lesson" data-lesson="${i}"
                class="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
                ${done.includes(i) ? 'Review' : 'Start Lesson'}
              </button>
            </div>`
            )
            .join('')}
        </div>
      </div>
    `
    return
  }

  /* Single lesson + quiz */
  const lesson = course.lessons[state.activeLesson]
  const fb = state.feedback

  panel.innerHTML = `
    <div class="rounded-2xl border border-slate-200 bg-white p-6">
      <p class="text-sm font-semibold text-blue-600">${course.title}</p>
      <h3 class="mt-1 text-2xl font-bold">${lesson.title}</h3>

      <div class="mt-4 rounded-xl bg-blue-50 p-5 text-slate-700">${lesson.content}</div>

      <h4 class="mt-6 text-lg font-bold">📝 Quiz</h4>

      ${lesson.quiz
        .map(
          (q, qi) => `
        <div class="mt-4">
          <p class="font-semibold">${qi + 1}. ${q.question}</p>
          <div class="mt-2 space-y-2">
            ${q.options
              .map((opt, oi) => {
                let style = 'border-slate-200'
                if (fb) {
                  if (oi === q.answer) style = 'border-green-500 bg-green-50'
                  else if (fb.picked[qi] === oi) style = 'border-red-500 bg-red-50'
                }
                return `
                <label class="flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 ${style}">
                  <input type="radio" name="q${qi}" value="${oi}" ${fb ? 'disabled' : ''}
                    ${fb && fb.picked[qi] === oi ? 'checked' : ''} />
                  ${opt}
                </label>`
              })
              .join('')}
          </div>
        </div>`
        )
        .join('')}

      <div class="mt-6 flex flex-wrap items-center gap-3">
        ${
          fb
            ? `<p class="font-bold">Score: ${fb.score}/${fb.total} ${fb.score === fb.total ? '🎉 Lesson completed!' : '😅 Try again to complete the lesson'}</p>
               ${fb.score !== fb.total ? '<button type="button" data-action="retry" class="rounded-lg border border-slate-300 px-4 py-2 font-semibold hover:bg-slate-50">Try again</button>' : ''}`
            : '<button type="button" data-action="submit-quiz" class="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">Submit Quiz</button>'
        }
        <button type="button" data-action="back-lessons" class="rounded-lg border border-slate-300 px-4 py-2 font-semibold hover:bg-slate-50">Back to Lessons</button>
      </div>
    </div>
  `
}

function renderResults() {
  const box = document.querySelector('#results-list')

  if (state.results.length === 0) {
    box.innerHTML = '<p class="text-slate-600">Your test scores will appear here after your first quiz.</p>'
    return
  }

  box.innerHTML = `
    <ul class="divide-y divide-slate-100">
      ${[...state.results]
        .reverse()
        .map(
          (r) => `
        <li class="flex items-center justify-between py-3">
          <span>${r.course} · <span class="text-slate-500">${r.lesson}</span></span>
          <span class="font-semibold ${r.score === r.total ? 'text-green-600' : 'text-orange-600'}">${r.score}/${r.total}</span>
        </li>`
        )
        .join('')}
    </ul>
  `
}

function renderTasks() {
  const filters = ['all', 'active', 'completed']

  document.querySelector('#task-filters').innerHTML = filters
    .map(
      (f) => `
      <button type="button" data-action="filter" data-filter="${f}"
        class="rounded-full px-4 py-1 text-sm font-medium ${
          state.taskFilter === f
            ? 'bg-blue-600 text-white'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        }">
        ${f[0].toUpperCase() + f.slice(1)}
      </button>`
    )
    .join('')

  const visible = state.tasks.filter((t) =>
    state.taskFilter === 'all' ? true : state.taskFilter === 'active' ? !t.done : t.done
  )

  document.querySelector('#task-list').innerHTML = visible.length
    ? visible
        .map(
          (t) => `
      <li class="flex items-center justify-between gap-3 rounded-lg border border-slate-200 px-4 py-3">
        <label class="flex min-w-0 flex-1 cursor-pointer items-center gap-3">
          <input type="checkbox" data-action="toggle-task" data-id="${t.id}" ${t.done ? 'checked' : ''} />
          <span class="break-words ${t.done ? 'text-slate-400 line-through' : ''}">${escapeHtml(t.text)}</span>
        </label>
        <button type="button" data-action="delete-task" data-id="${t.id}"
          class="text-slate-400 hover:text-red-600" aria-label="Delete task">🗑️</button>
      </li>`
        )
        .join('')
    : '<li class="rounded-lg border border-dashed border-slate-300 p-4 text-center text-slate-500">No tasks here yet.</li>'

  const remaining = state.tasks.filter((t) => !t.done).length
  document.querySelector('#task-counter').textContent =
    `${remaining} task${remaining === 1 ? '' : 's'} remaining`
}

function renderAll() {
  renderStats()
  renderCourses()
  renderLearn()
  renderResults()
  renderTasks()
}

/* ---------- ACTIONS ---------- */
function submitQuiz() {
  const course = getCourse(state.activeCourse)
  const lesson = course.lessons[state.activeLesson]

  const picked = lesson.quiz.map((q, qi) => {
    const checked = document.querySelector(`input[name="q${qi}"]:checked`)
    return checked ? Number(checked.value) : null
  })

  if (picked.includes(null)) {
    alert('Please answer all questions first.')
    return
  }

  const score = lesson.quiz.filter((q, qi) => picked[qi] === q.answer).length
  const total = lesson.quiz.length

  state.results.push({ course: course.title, lesson: lesson.title, score, total })

  if (score === total) {
    const done = state.completed[course.id] || []
    if (!done.includes(state.activeLesson)) done.push(state.activeLesson)
    state.completed[course.id] = done
  }

  state.feedback = { score, total, picked }
  save()
  renderAll()
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-action]')
  if (!button) return

  const action = button.dataset.action

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

  if (action === 'toggle-task') {
    const task = state.tasks.find((t) => t.id === button.dataset.id)
    if (task) {
      task.done = !task.done
      save()
      renderTasks()
    }
  }

  if (action === 'delete-task') {
    state.tasks = state.tasks.filter((t) => t.id !== button.dataset.id)
    save()
    renderTasks()
  }

  if (action === 'filter') {
    state.taskFilter = button.dataset.filter
    renderTasks()
  }

  if (action === 'clear-completed') {
    state.tasks = state.tasks.filter((t) => !t.done)
    save()
    renderTasks()
  }

  if (action === 'submit-quiz') submitQuiz()
})

document.querySelector('#task-form').addEventListener('submit', (event) => {
  event.preventDefault()

  const input = document.querySelector('#task-input')
  const error = document.querySelector('#task-error')
  const text = input.value.trim()

  if (!text) {
    error.textContent = 'Please enter a task.'
    error.classList.remove('hidden')
    return
  }

  error.classList.add('hidden')
  state.tasks.push({ id: Date.now().toString(), text, done: false })
  input.value = ''
  save()
  renderTasks()
})

document.querySelector('#course-search').addEventListener('input', (event) => {
  state.search = event.target.value
  renderCourses()
})

/* ---------- DARK MODE ---------- */
const themeButton = document.querySelector('#theme-toggle')
let theme = 'light'
try {
  theme = localStorage.getItem('learnhub-theme') || 'light'
} catch {
  theme = 'light'
}

function applyTheme(value) {
  document.documentElement.classList.toggle('dark', value === 'dark')
  themeButton.textContent = value === 'dark' ? '☀️ Light' : '🌙 Dark'
}

applyTheme(theme)

themeButton.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark'
  localStorage.setItem('learnhub-theme', theme)
  applyTheme(theme)
})

renderAll()