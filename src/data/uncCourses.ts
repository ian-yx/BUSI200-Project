import type {
  Course,
  FilterTag,
  MatchResult,
  Mentor,
  UserProfile,
} from './types'

export type {
  AiPolicy,
  ChatMessage,
  Course,
  FilterTag,
  MatchResult,
  MatchSession,
  Mentor,
  UserProfile,
} from './types'

export {
  AP_OPTIONS,
  DEFAULT_PROFILE,
  GOAL_OPTIONS,
  INTEREST_OPTIONS,
  TOPIC_OPTIONS,
} from './types'

export const AI_POLICY_META: Record<
  import('./types').AiPolicy,
  { label: string; short: string; color: string; bg: string }
> = {
  green: {
    label: 'AI allowed with citation',
    short: 'AI OK',
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
  },
  yellow: {
    label: 'AI limited',
    short: 'Limited',
    color: 'text-amber-700',
    bg: 'bg-amber-50',
  },
  red: {
    label: 'AI restricted',
    short: 'Restricted',
    color: 'text-rose-700',
    bg: 'bg-rose-50',
  },
}

export const FILTER_OPTIONS: { id: FilterTag; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'fba', label: 'FBA Year 1' },
  { id: 'prereq', label: 'UBP Prerequisites' },
  { id: 'explore', label: 'Explore' },
]

const PUBLIC_SYLLABI = 'https://reports-spt.unc.edu/'
const ECON_SYLLABI = 'https://econ.unc.edu/undergraduate/syllabi/'

export const courses: Course[] = [
  {
    id: 'busi-200',
    code: 'BUSI 200',
    title: 'Unlocking Your Leadership Potential',
    category: 'FBA Year 1 · Required',
    categoryKey: 'fba',
    credits: '3.0',
    professors: ['Shimul Melwani'],
    format: 'Large lecture + weekly 50-min ULA recitation',
    examFormat: 'Experiential / project-based (no traditional closed-book finals)',
    attendance: 'Recitation cohorts (ULA-led) are central; lecture + peer sections',
    aiPolicy: 'yellow',
    aiNote: 'Brainstorming/prototyping may be allowed; personal reflections must be your own.',
    difficulty: 2.4,
    tip: 'Expect leadership labs, reflection, and real networking practice—recent cohorts met alumni and employers in Bell Hall.',
    description:
      'Structured around Kenan-Flagler’s values of inclusion, innovation, integrity, and impact. Empowers Assured Enrollment students to take charge of their leadership journey through action, reflection, experimentation, and application.',
    gradingBreakdown: [
      { item: 'ULA recitation / peer engagement', weight: '~25%' },
      { item: 'Team / changemaking project work', weight: '~35%' },
      { item: 'Individual reflection & leadership work', weight: '~25%' },
      { item: 'Participation & attendance', weight: '~15%' },
    ],
    gradeFloor: 'Required FBA Year 1 course for Assured Enrollment students.',
    detailedAdvice: [
      'FBA students are pre-registered into reserved sections.',
      'ULA cohorts (~20–25) meet Thu/Fri for a 50-minute recitation.',
      'Course emphasizes practice—networking, listening, perspective-taking.',
      'Bell Hall is a frequent venue for class experiences and events.',
    ],
    genEd: 'FC-CREATE',
    sourceNote: 'UNC Catalog; Kenan-Flagler FBA academic experience',
    tags: ['fba'],
    catalogUrl: 'https://catalog.unc.edu/courses/busi/',
    syllabusUrl:
      'https://www.kenan-flagler.unc.edu/programs/undergraduate-business/admissions/future-business-admits/',
    syllabusLabel: 'FBA Year 1 course overview',
  },
  {
    id: 'busi-100',
    code: 'BUSI 100',
    title: 'Introduction to Business: People, Profits, Planet',
    category: 'FBA Year 1 · UBP Prerequisite',
    categoryKey: 'fba',
    credits: '1.5',
    professors: ['Paul Friga', 'Section instructors vary'],
    format: 'Large lecture (FBA-reserved sections available)',
    examFormat: 'Assessments vary by section (exams / cases typical)',
    attendance: 'Section-dependent; large-lecture format',
    aiPolicy: 'green',
    aiNote: 'Case research with AI is often fine if you cite sources; follow your syllabus.',
    difficulty: 2.2,
    tip: 'Assured Enrollment students are placed in a dedicated Year 1 cohort section—confirm the FBA section at registration.',
    description:
      'Covers five themes—people, customers, firms, markets, and society—and how business disciplines fit together. Introduces career paths and mindsets. Required UBP prerequisite (C or better, not C-).',
    gradingBreakdown: [
      { item: 'Exams / quizzes', weight: 'Section-specific' },
      { item: 'Case / project work', weight: 'Section-specific' },
      { item: 'Participation', weight: 'Section-specific' },
    ],
    gradeFloor: 'C or better required for Assured Enrollment / UBP entry (not C-).',
    detailedAdvice: [
      'Official catalog title: Introduction to Business: People, Profits, Planet.',
      'FBA students take a reserved first-year section.',
      'AP/IB/transfer equivalents may apply if UNC awards credit.',
      'Complete within first two semesters for Assured Enrollment.',
    ],
    sourceNote: 'UNC Catalog; Kenan-Flagler Assured Enrollment requirements',
    tags: ['fba', 'prereq'],
    catalogUrl: 'https://catalog.unc.edu/search/?P=BUSI+100',
    syllabusUrl: PUBLIC_SYLLABI,
    syllabusLabel: 'UNC public syllabi portal',
  },
  {
    id: 'econ-101',
    code: 'ECON 101',
    title: 'Introduction to Economics',
    category: 'UBP Prerequisite · Economics',
    categoryKey: 'prereq',
    credits: '4.0',
    professors: ['Rita A. Balaban', 'Kalina Staub', 'Section instructors vary'],
    format: 'Lecture + weekly recitation; Poll Everywhere common',
    examFormat: 'Typically 2 midterms + cumulative final',
    attendance: 'In-class Poll Everywhere often graded for participation',
    aiPolicy: 'red',
    aiNote: 'Graded Achieve/homework and exams are individual Honor Code work.',
    difficulty: 3.6,
    tip: 'Practice exams + EconAid Center peer tutoring in Gardner 009 help more than cramming.',
    description:
      'One-semester intro to micro and macro. Gateway for the Economics major (C required). IDEAs in Action: FC-KNOWING.',
    gradingBreakdown: [
      { item: 'Homework / Achieve', weight: '~15%' },
      { item: 'Poll Everywhere participation', weight: '~5%' },
      { item: 'Recitation assignments', weight: '~5%' },
      { item: 'Higher midterm', weight: '~25%' },
      { item: 'Lower midterm', weight: '~15%' },
      { item: 'Final exam', weight: '~35%' },
    ],
    gradeFloor: 'C or better for Assured Enrollment / UBP (not C-).',
    detailedAdvice: [
      'Staub FA26 syllabus uses Achieve, Poll Everywhere, Gradescope, Canvas.',
      'Midterms are often multiple choice; final is cumulative and heavily weighted.',
      'AP Macro + Micro credit can sometimes place you out—check UNC tables.',
      'Use EconAid Center (Gardner 009) early.',
    ],
    genEd: 'FC-KNOWING',
    sourceNote: 'UNC Catalog; Economics Dept syllabi archive',
    tags: ['prereq'],
    catalogUrl: 'https://catalog.unc.edu/search/?P=ECON+101',
    syllabusUrl:
      'https://econ.unc.edu/wp-content/uploads/sites/1423/2026/09/101-Staub.pdf',
    syllabusLabel: 'Sample syllabus (Staub, Fall 2026 PDF)',
  },
  {
    id: 'stor-155',
    code: 'STOR 155',
    title: 'Introduction to Data Models and Inference',
    category: 'UBP Prerequisite · Statistics option',
    categoryKey: 'prereq',
    credits: '3.0',
    professors: ['Mario Giacomazzo', 'Section instructors vary'],
    format: 'Lecture; WebAssign homework common',
    examFormat: 'Often 2 midterms + final (section-dependent)',
    attendance: 'Lecture attendance policies vary by instructor',
    aiPolicy: 'yellow',
    aiNote: 'OK for debugging spreadsheet syntax in some sections; graded work must be yours.',
    difficulty: 3.1,
    tip: 'One of three stats options (STOR 155 / STOR 120 / DATA 110). Stay current on WebAssign.',
    description:
      'Data analysis; correlation & regression; sampling & design; probability; inference; spreadsheet software. Prereq: MATH 110. FC-QUANT.',
    gradingBreakdown: [
      { item: 'WebAssign / homework', weight: 'Often ~40%' },
      { item: 'Midterm 1', weight: '~15%' },
      { item: 'Midterm 2', weight: '~15%' },
      { item: 'Final exam', weight: '~30%' },
    ],
    gradeFloor: 'C or better for Assured Enrollment / UBP (not C-).',
    detailedAdvice: [
      'Catalog prereq: MATH 110 (or exemption).',
      'OpenIntro Statistics is a common free text.',
      'STOR open tutorials are often offered most evenings.',
      'Compare STOR 120 and DATA 110 for alternate pathways.',
    ],
    genEd: 'FC-QUANT',
    sourceNote: 'UNC Catalog; STOR undergraduate courses',
    tags: ['prereq'],
    catalogUrl: 'https://catalog.unc.edu/search/?P=STOR+155',
    syllabusUrl: 'https://stor.unc.edu/undergraduate/courses/',
    syllabusLabel: 'STOR course listing',
  },
  {
    id: 'math-231',
    code: 'MATH 231',
    title: 'Calculus of Functions of One Variable I',
    category: 'UBP Prerequisite · Calculus option',
    categoryKey: 'prereq',
    credits: '4.0',
    professors: ['Linda Green', 'Section instructors vary'],
    format: 'Lecture + recitation; MyLab / WebAssign common',
    examFormat: 'Typically 3 midterms + department Common Final',
    attendance: 'Recitation usually graded / required',
    aiPolicy: 'red',
    aiNote: 'Honor Code: no AI on graded calculus work or exams.',
    difficulty: 3.9,
    tip: 'Common Final is shared across MATH 231 sections. Green’s Calc 1 videos are widely used supplements.',
    description:
      'Limits, derivatives, and integrals of one variable. Calc options for business: MATH 152, MATH 231, or STOR 113. FC-QUANT.',
    gradingBreakdown: [
      { item: 'Recitation', weight: '~10–13%' },
      { item: 'Homework', weight: '~10–13%' },
      { item: 'Midterms (×3)', weight: '~45%' },
      { item: 'Common Final', weight: '~30–33%' },
    ],
    gradeFloor: 'C or better for Assured Enrollment / UBP (not C-).',
    detailedAdvice: [
      'Common finals for the calc sequence are scheduled together by the Registrar.',
      'AP Calculus credit may place you out—verify on UNC credit tables.',
      'MATH 231L corequisite exists for algebra/trig support.',
      'Practice prior common-final style problems.',
    ],
    genEd: 'FC-QUANT',
    sourceNote: 'UNC Catalog; Math Dept / Linda Green teaching pages',
    tags: ['prereq'],
    catalogUrl: 'https://catalog.unc.edu/search/?P=MATH+231',
    syllabusUrl: 'https://lindagreen.web.unc.edu/teaching/calculus-1/',
    syllabusLabel: 'Calc 1 resources (Linda Green)',
  },
  {
    id: 'busi-102',
    code: 'BUSI 102',
    title: 'Introduction to Financial Accounting',
    category: 'Explore · Accounting foundation',
    categoryKey: 'explore',
    credits: '1.5',
    professors: ['Courtney Knoll', 'Charles Skender', 'Section instructors vary'],
    format: 'Often MOD (half-semester); lecture',
    examFormat: 'Usually 2 exams + participation (section-dependent)',
    attendance: 'Participation often graded',
    aiPolicy: 'red',
    aiNote: 'Calculation/exam work is individual—no AI.',
    difficulty: 3.0,
    tip: 'Not an Assured Enrollment Year 1 requirement (that’s BUSI 100), but useful before later accounting.',
    description:
      'Intro to financial reports: balance sheet, income statement, equity, and cash flows. Often runs as a MOD. Cannot double-credit with BUSI 106/107.',
    gradingBreakdown: [
      { item: 'Exam 1', weight: 'Section-specific (~40%)' },
      { item: 'Exam 2', weight: 'Section-specific (~50%)' },
      { item: 'Participation', weight: 'Section-specific (~10%)' },
    ],
    gradeFloor: 'Optional explore course; strong foundation for accounting/finance tracks.',
    detailedAdvice: [
      'Catalog credit: 1.5. MOD sections follow Kenan-Flagler module dates.',
      'Debit/credit fundamentals early—later accounting builds on them.',
      'BUSI 407 lists BUSI 102 as pre-/corequisite in catalog history.',
      'Practice packets often mirror exam style.',
    ],
    sourceNote: 'UNC Catalog (BUSI)',
    tags: ['explore'],
    catalogUrl: 'https://catalog.unc.edu/courses/busi/',
    syllabusUrl: PUBLIC_SYLLABI,
    syllabusLabel: 'UNC public syllabi portal',
  },
]

/** Diversified UBP peer pool (illustrative profiles for the prototype). */
export const mentors: Mentor[] = [
  {
    id: 'm1',
    name: 'Jordan Ellis',
    year: "Junior '28",
    track: 'Finance',
    identityTag: 'FBA',
    avatarColor: '#4B9CD3',
    initials: 'JE',
    courseIds: ['busi-200', 'busi-100', 'econ-101'],
    courseHistory: {
      'busi-200': { professor: 'Shimul Melwani', term: 'Fall 2025', grade: 'A' },
      'busi-100': { professor: 'Paul Friga', term: 'Spring 2026', grade: 'A-' },
      'econ-101': { professor: 'Rita Balaban', term: 'Fall 2025', grade: 'B+' },
    },
    specialties: ['BUSI 200', 'Keeping Assured Enrollment', 'Bell Hall tips'],
    strengths: ['quick-tips', 'exams', 'first-weeks'],
    karma: 128,
    replyMinutes: 5,
  },
  {
    id: 'm2',
    name: 'Aisha Rahman',
    year: "Sophomore '29",
    track: 'Consulting',
    identityTag: 'FBA',
    avatarColor: '#0f766e',
    initials: 'AR',
    courseIds: ['busi-200', 'stor-155', 'busi-100'],
    courseHistory: {
      'busi-200': { professor: 'Shimul Melwani', term: 'Fall 2025', grade: 'A' },
      'stor-155': {
        professor: 'Mario Giacomazzo',
        term: 'Fall 2025',
        grade: 'A-',
      },
      'busi-100': { professor: 'Section', term: 'Spring 2026', grade: 'A' },
    },
    specialties: ['STOR 155', 'ULA recitations', 'Consulting prep'],
    strengths: ['deep-dive', 'labs', 'study-system'],
    karma: 96,
    replyMinutes: 8,
  },
  {
    id: 'm3',
    name: 'Marcus Webb',
    year: "Senior '27",
    track: 'Investment Banking',
    identityTag: 'UBP',
    avatarColor: '#13294B',
    initials: 'MW',
    courseIds: ['busi-102', 'econ-101', 'math-231'],
    courseHistory: {
      'busi-102': { professor: 'Courtney Knoll', term: 'Spring 2024', grade: 'A' },
      'econ-101': { professor: 'Kalina Staub', term: 'Fall 2023', grade: 'A-' },
      'math-231': { professor: 'Linda Green', term: 'Fall 2023', grade: 'B+' },
    },
    specialties: ['BUSI 102', 'AP credit decisions', 'C-or-better strategy'],
    strengths: ['ap-decision', 'recruiting', 'exams'],
    karma: 210,
    replyMinutes: 10,
  },
  {
    id: 'm4',
    name: 'Sofia Martinez',
    year: "Junior '28",
    track: 'Marketing',
    identityTag: 'UBP',
    avatarColor: '#c2410c',
    initials: 'SM',
    courseIds: ['busi-100', 'busi-200', 'stor-155'],
    courseHistory: {
      'busi-100': { professor: 'Paul Friga', term: 'Spring 2025', grade: 'A' },
      'busi-200': { professor: 'Shimul Melwani', term: 'Fall 2024', grade: 'A-' },
      'stor-155': { professor: 'Section', term: 'Fall 2024', grade: 'B+' },
    },
    specialties: ['BUSI 100 sections', 'Networking events', 'Light chats'],
    strengths: ['quick-tips', 'first-weeks', 'professor-style'],
    karma: 142,
    replyMinutes: 6,
  },
  {
    id: 'm5',
    name: 'Priya Nair',
    year: "Sophomore '29",
    track: 'Finance',
    identityTag: 'FBA',
    avatarColor: '#7c3aed',
    initials: 'PN',
    courseIds: ['math-231', 'stor-155', 'econ-101'],
    courseHistory: {
      'math-231': { professor: 'Linda Green', term: 'Fall 2025', grade: 'A' },
      'stor-155': {
        professor: 'Mario Giacomazzo',
        term: 'Spring 2026',
        grade: 'A',
      },
      'econ-101': { professor: 'Rita Balaban', term: 'Fall 2025', grade: 'A-' },
    },
    specialties: ['Common Final', 'WebAssign', 'AP calc decisions'],
    strengths: ['deep-dive', 'exams', 'ap-decision'],
    karma: 175,
    replyMinutes: 4,
  },
  {
    id: 'm6',
    name: 'Caleb Brooks',
    year: "Junior '28",
    track: 'Accounting',
    identityTag: 'UBP',
    avatarColor: '#be123c',
    initials: 'CB',
    courseIds: ['busi-102', 'busi-100', 'math-231'],
    courseHistory: {
      'busi-102': {
        professor: 'Charles Skender',
        term: 'Spring 2025',
        grade: 'A',
      },
      'busi-100': { professor: 'Section', term: 'Spring 2024', grade: 'A-' },
      'math-231': { professor: 'Section', term: 'Fall 2024', grade: 'B+' },
    },
    specialties: ['Debits/credits', 'MOD timing', 'Recruiting grades'],
    strengths: ['deep-dive', 'recruiting', 'exams'],
    karma: 158,
    replyMinutes: 7,
  },
  {
    id: 'm7',
    name: 'Naomi Okonkwo',
    year: "Senior '27",
    track: 'Strategy',
    identityTag: 'UBP',
    avatarColor: '#0369a1',
    initials: 'NO',
    courseIds: ['busi-200', 'econ-101', 'busi-102'],
    courseHistory: {
      'busi-200': { professor: 'Shimul Melwani', term: 'Fall 2023', grade: 'A' },
      'econ-101': { professor: 'Rita Balaban', term: 'Fall 2023', grade: 'B+' },
      'busi-102': { professor: 'Courtney Knoll', term: 'Spring 2024', grade: 'A-' },
    },
    specialties: ['BUSI 200 projects', 'EconAid', 'UBP roadmap'],
    strengths: ['deep-dive', 'explore-track', 'study-system'],
    karma: 201,
    replyMinutes: 9,
  },
  {
    id: 'm8',
    name: 'Ethan Park',
    year: "Sophomore '29",
    track: 'Entrepreneurship',
    identityTag: 'FBA',
    avatarColor: '#2563eb',
    initials: 'EP',
    courseIds: ['busi-200', 'busi-100', 'math-231'],
    courseHistory: {
      'busi-200': { professor: 'Shimul Melwani', term: 'Fall 2025', grade: 'A' },
      'busi-100': { professor: 'Paul Friga', term: 'Spring 2026', grade: 'A' },
      'math-231': { professor: 'Linda Green', term: 'Fall 2025', grade: 'B' },
    },
    specialties: ['AI boundaries', 'Leadership labs', 'First-year pacing'],
    strengths: ['quick-tips', 'first-weeks', 'time-management'],
    karma: 88,
    replyMinutes: 5,
  },
  {
    id: 'm9',
    name: 'Maya Thompson',
    year: "Junior '28",
    track: 'Operations',
    identityTag: 'UBP',
    avatarColor: '#b45309',
    initials: 'MT',
    courseIds: ['stor-155', 'econ-101', 'busi-100'],
    courseHistory: {
      'stor-155': { professor: 'Section', term: 'Spring 2025', grade: 'A-' },
      'econ-101': { professor: 'Kalina Staub', term: 'Fall 2024', grade: 'B+' },
      'busi-100': { professor: 'Section', term: 'Spring 2025', grade: 'A' },
    },
    specialties: ['Poll Everywhere', 'Practice exams', 'Weekly rhythm'],
    strengths: ['study-system', 'exams', 'time-management'],
    karma: 134,
    replyMinutes: 12,
  },
  {
    id: 'm10',
    name: "Liam O'Connor",
    year: "Sophomore '29",
    track: 'Finance',
    identityTag: 'FBA',
    avatarColor: '#334155',
    initials: 'LO',
    courseIds: ['math-231', 'busi-102', 'econ-101'],
    courseHistory: {
      'math-231': { professor: 'Linda Green', term: 'Fall 2025', grade: 'A-' },
      'busi-102': { professor: 'Courtney Knoll', term: 'Spring 2026', grade: 'A' },
      'econ-101': { professor: 'Rita Balaban', term: 'Fall 2025', grade: 'A-' },
    },
    specialties: ['C-or-better plan', 'AP vs retake', 'Common Final'],
    strengths: ['ap-decision', 'keep-assured', 'exams'],
    karma: 167,
    replyMinutes: 5,
  },
  {
    id: 'm11',
    name: 'Destiny Washington',
    year: "Senior '27",
    track: 'Real Estate',
    identityTag: 'UBP',
    avatarColor: '#9f1239',
    initials: 'DW',
    courseIds: ['busi-102', 'stor-155', 'busi-200'],
    courseHistory: {
      'busi-102': {
        professor: 'Charles Skender',
        term: 'Fall 2024',
        grade: 'A-',
      },
      'stor-155': {
        professor: 'Mario Giacomazzo',
        term: 'Spring 2023',
        grade: 'B+',
      },
      'busi-200': { professor: 'Shimul Melwani', term: 'Fall 2023', grade: 'A' },
    },
    specialties: ['Mentor karma', 'McColl resources', 'Leadership stories'],
    strengths: ['explore-track', 'recruiting', 'deep-dive'],
    karma: 245,
    replyMinutes: 15,
  },
  {
    id: 'm12',
    name: 'Samir Patel',
    year: "Junior '28",
    track: 'International Business',
    identityTag: 'UBP',
    avatarColor: '#0e7490',
    initials: 'SP',
    courseIds: ['busi-100', 'econ-101', 'stor-155'],
    courseHistory: {
      'busi-100': { professor: 'Paul Friga', term: 'Spring 2025', grade: 'A' },
      'econ-101': { professor: 'Rita Balaban', term: 'Fall 2024', grade: 'A-' },
      'stor-155': { professor: 'Section', term: 'Spring 2025', grade: 'A' },
    },
    specialties: ['People-Profits-Planet', 'First-semester plan', 'Icebreakers'],
    strengths: ['quick-tips', 'first-weeks', 'keep-assured'],
    karma: 119,
    replyMinutes: 6,
  },
]

const REPLY_BANK: Record<string, string[]> = {
  'busi-200': [
    'BUSI 200 is experiential—ULA recitation + projects matter more than a classic final. Plan time for reflection write-ups and team work. Networking nights in Bell Hall are part of the design.',
    'Melwani’s course is about leadership practice: listening, perspective-taking, trying things. Show up for your ULA cohort—those 50-minute sections are where it clicks.',
    'No AP skip for BUSI 200—it’s the FBA Year 1 required leadership course. Treat it as onboarding into Kenan-Flagler culture.',
  ],
  'busi-100': [
    'BUSI 100 is 1.5 credits, large lecture. Themes are people/customers/firms/markets/society. FBA students should be in the reserved Year 1 section.',
    'You need C or better (not C-) for Assured Enrollment / UBP. Workload is lighter than ECON/MATH, but don’t sleep on cases if your section uses them.',
    'This is a required prereq—confirm your section code is the FBA cohort one.',
  ],
  'econ-101': [
    'ECON 101 is 4 credits and a real filter. Many sections use Achieve, Poll Everywhere, recitation, 2 midterms + heavy final. EconAid in Gardner 009 helps.',
    'Exams are often multiple choice and tight on time. Practice exams > rereading notes. Bring a charged phone for polls.',
    'AP Macro+Micro can place you out if UNC awards credit. If your foundation is shaky and you need the C for Assured Enrollment, taking it at Carolina is often safer.',
  ],
  'stor-155': [
    'STOR 155 is 3 credits, MATH 110 prereq. Expect WebAssign and two midterms + final in many sections. Don’t fall a week behind on homework.',
    'Content: descriptive stats, regression, probability, inference, spreadsheets. Open tutorials most evenings help.',
    'Stats options for business: STOR 155, STOR 120, or DATA 110. Pick based on schedule and teaching style.',
  ],
  'math-231': [
    'MATH 231 is 4 credits with a department Common Final. Typical structure: recitation + homework + 3 midterms + common final.',
    'Common Final rooms/times are set by the Registrar. Study old common-final style problems. Green’s Calc 1 videos are solid supplements.',
    'Calc options for Assured Enrollment: MATH 152, MATH 231, or STOR 113. AP credit can place you out; retake only if you need the foundation.',
  ],
  'busi-102': [
    'BUSI 102 is 1.5 credits and often a MOD. Focus: reading financial statements—balance sheet, income statement, equity, cash flow.',
    'Not required for Assured Enrollment Year 1 (that’s BUSI 100), but helpful before later accounting.',
    'You can’t double-dip credit with BUSI 106/107. Nail debits/credits in week 1–2.',
  ],
}

const GRADE_POINTS: Record<string, number> = {
  A: 4,
  'A-': 3.7,
  'B+': 3.3,
  B: 3,
  'B-': 2.7,
  'C+': 2.3,
  C: 2,
}

export function findBestMatch(
  courseId: string,
  profile: UserProfile,
): MatchResult | null {
  const pool = mentors.filter((m) => m.courseIds.includes(courseId))
  if (pool.length === 0) return null

  const scored = pool.map((mentor) => {
    let score = 62
    const reasons: string[] = []
    const history = mentor.courseHistory[courseId]

    if (
      profile.pathway === 'assured-enrollment' &&
      mentor.identityTag === 'FBA'
    ) {
      score += 14
      reasons.push('Also came through Assured Enrollment / FBA')
    } else if (mentor.identityTag === 'UBP') {
      score += 6
      reasons.push('Active UBP peer mentor')
    }

    const interestHit = profile.interests.find((i) =>
      mentor.track.toLowerCase().includes(i.toLowerCase()),
    )
    if (interestHit) {
      score += 12
      reasons.push(`Shared focus: ${mentor.track}`)
    }

    if (history) {
      const gp = GRADE_POINTS[history.grade] ?? 2.5
      score += Math.round(gp * 3)
      reasons.push(
        `Completed ${courses.find((c) => c.id === courseId)?.code ?? 'course'} with ${history.professor} (${history.grade})`,
      )
    }

    if (profile.goals.includes('keep-assured')) {
      score += 6
      reasons.push('Strong on Assured Enrollment grade floors')
    }

    if (
      profile.goals.includes('ap-decision') ||
      profile.apCredits.length > 0
    ) {
      if (
        mentor.strengths.includes('ap-decision') ||
        mentor.specialties.some((s) => s.toLowerCase().includes('ap'))
      ) {
        score += 8
        reasons.push('Experienced with AP / placement decisions')
      }
    }

    if (profile.chatStyle === 'quick-tips' && mentor.replyMinutes <= 6) {
      score += 5
      reasons.push(`Usually replies in ~${mentor.replyMinutes} min`)
    }
    if (
      profile.chatStyle === 'deep-dive' &&
      mentor.strengths.includes('deep-dive')
    ) {
      score += 5
      reasons.push('Prefers thorough, detailed answers')
    }

    if (profile.topics.includes('Exams & grading') && mentor.strengths.includes('exams')) {
      score += 4
    }
    if (
      profile.topics.includes('First 3 weeks') &&
      mentor.strengths.includes('first-weeks')
    ) {
      score += 4
    }

    score += Math.min(6, Math.floor(mentor.karma / 50))

    // Stable tie-break from profile + mentor id
    const hash =
      (profile.displayName.length * 17 +
        mentor.id.charCodeAt(1) * 13 +
        courseId.length * 7) %
      5
    score += hash

    return {
      mentor,
      score: Math.min(99, Math.max(70, score)),
      reasons: reasons.slice(0, 4),
    }
  })

  scored.sort((a, b) => b.score - a.score || a.mentor.name.localeCompare(b.mentor.name))
  return scored[0]
}

export function getIcebreakers(course: Course): string[] {
  return [
    `Quick take on ${course.code}—what should I watch for in the first 3 weeks?`,
    `How tough are exams / grading in your section, and what’s a realistic path to a solid grade?`,
    `Would you recommend using AP/transfer credit to skip this, or taking it at UNC?`,
  ]
}

export function getMentorReply(courseId: string, userText: string): string {
  const bank = REPLY_BANK[courseId] ?? REPLY_BANK['busi-200']
  const lower = userText.toLowerCase()
  if (
    lower.includes('week') ||
    lower.includes('watch for') ||
    lower.includes('first')
  ) {
    return bank[0]
  }
  if (
    lower.includes('exam') ||
    lower.includes('grad') ||
    lower.includes('tough') ||
    lower.includes('hard')
  ) {
    return bank[1]
  }
  if (
    lower.includes('ap') ||
    lower.includes('skip') ||
    lower.includes('transfer') ||
    lower.includes('credit')
  ) {
    return bank[2]
  }
  return bank[Math.floor(Math.random() * bank.length)]
}

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id)
}

export function getMentorById(id: string): Mentor | undefined {
  return mentors.find((m) => m.id === id)
}

export function filterCourses(query: string, tag: FilterTag): Course[] {
  const q = query.trim().toLowerCase()
  return courses.filter((c) => {
    const matchTag =
      tag === 'all' ||
      c.tags.includes(tag) ||
      c.categoryKey === tag
    if (!matchTag) return false
    if (!q) return true
    const haystack = [c.code, c.title, ...c.professors, c.category, c.description]
      .join(' ')
      .toLowerCase()
    return haystack.includes(q)
  })
}

export { ECON_SYLLABI, PUBLIC_SYLLABI }
