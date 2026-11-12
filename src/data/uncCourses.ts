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
  {
    id: 'm13',
    name: 'Hannah Kim',
    year: "Junior '28",
    track: 'Consulting',
    identityTag: 'FBA',
    avatarColor: '#db2777',
    initials: 'HK',
    courseIds: ['busi-200', 'econ-101', 'math-231'],
    courseHistory: {
      'busi-200': { professor: 'Shimul Melwani', term: 'Fall 2024', grade: 'A' },
      'econ-101': { professor: 'Kalina Staub', term: 'Spring 2025', grade: 'A-' },
      'math-231': { professor: 'Linda Green', term: 'Fall 2024', grade: 'B+' },
    },
    specialties: ['Case prep', 'ULA tips', 'Balanced schedule'],
    strengths: ['quick-tips', 'study-system', 'exams'],
    karma: 151,
    replyMinutes: 5,
  },
  {
    id: 'm14',
    name: 'Diego Alvarez',
    year: "Senior '27",
    track: 'Finance',
    identityTag: 'UBP',
    avatarColor: '#15803d',
    initials: 'DA',
    courseIds: ['econ-101', 'busi-102', 'stor-155'],
    courseHistory: {
      'econ-101': { professor: 'Rita Balaban', term: 'Fall 2023', grade: 'B+' },
      'busi-102': { professor: 'Charles Skender', term: 'Spring 2024', grade: 'A' },
      'stor-155': { professor: 'Section', term: 'Fall 2024', grade: 'A-' },
    },
    specialties: ['EconAid', 'Accounting basics', 'Recruiting timeline'],
    strengths: ['deep-dive', 'recruiting', 'exams'],
    karma: 188,
    replyMinutes: 8,
  },
  {
    id: 'm15',
    name: 'Olivia Bennett',
    year: "Sophomore '29",
    track: 'Marketing',
    identityTag: 'FBA',
    avatarColor: '#7c2d12',
    initials: 'OB',
    courseIds: ['busi-100', 'busi-200', 'math-231'],
    courseHistory: {
      'busi-100': { professor: 'Paul Friga', term: 'Spring 2026', grade: 'A' },
      'busi-200': { professor: 'Shimul Melwani', term: 'Fall 2025', grade: 'A-' },
      'math-231': { professor: 'Section', term: 'Fall 2025', grade: 'B' },
    },
    specialties: ['FBA section check', 'Networking nights', 'Reflection writing'],
    strengths: ['first-weeks', 'quick-tips', 'professor-style'],
    karma: 102,
    replyMinutes: 4,
  },
  {
    id: 'm16',
    name: 'Jamal Carter',
    year: "Junior '28",
    track: 'Investment Banking',
    identityTag: 'UBP',
    avatarColor: '#1e3a8a',
    initials: 'JC',
    courseIds: ['math-231', 'econ-101', 'busi-100'],
    courseHistory: {
      'math-231': { professor: 'Linda Green', term: 'Fall 2024', grade: 'A-' },
      'econ-101': { professor: 'Rita Balaban', term: 'Spring 2025', grade: 'A' },
      'busi-100': { professor: 'Section', term: 'Fall 2024', grade: 'A' },
    },
    specialties: ['Common Final drills', 'GPA strategy', 'Office hours'],
    strengths: ['exams', 'keep-assured', 'deep-dive'],
    karma: 173,
    replyMinutes: 7,
  },
  {
    id: 'm17',
    name: 'Elena Rossi',
    year: "Senior '27",
    track: 'Strategy',
    identityTag: 'UBP',
    avatarColor: '#6d28d9',
    initials: 'ER',
    courseIds: ['busi-200', 'stor-155', 'busi-102'],
    courseHistory: {
      'busi-200': { professor: 'Shimul Melwani', term: 'Fall 2023', grade: 'A' },
      'stor-155': { professor: 'Mario Giacomazzo', term: 'Spring 2024', grade: 'A' },
      'busi-102': { professor: 'Courtney Knoll', term: 'Fall 2024', grade: 'A-' },
    },
    specialties: ['Team projects', 'Spreadsheet fluency', 'McColl study spots'],
    strengths: ['study-system', 'labs', 'explore-track'],
    karma: 220,
    replyMinutes: 11,
  },
  {
    id: 'm18',
    name: 'Noah Feldman',
    year: "Sophomore '29",
    track: 'Entrepreneurship',
    identityTag: 'FBA',
    avatarColor: '#0f766e',
    initials: 'NF',
    courseIds: ['busi-200', 'busi-100', 'stor-155'],
    courseHistory: {
      'busi-200': { professor: 'Shimul Melwani', term: 'Fall 2025', grade: 'A' },
      'busi-100': { professor: 'Paul Friga', term: 'Spring 2026', grade: 'A-' },
      'stor-155': { professor: 'Section', term: 'Spring 2026', grade: 'B+' },
    },
    specialties: ['Prototype mindset', 'Peer labs', 'Time boxing'],
    strengths: ['quick-tips', 'time-management', 'first-weeks'],
    karma: 91,
    replyMinutes: 5,
  },
  {
    id: 'm19',
    name: 'Amara Diallo',
    year: "Junior '28",
    track: 'Operations',
    identityTag: 'UBP',
    avatarColor: '#b45309',
    initials: 'AD',
    courseIds: ['stor-155', 'math-231', 'busi-100'],
    courseHistory: {
      'stor-155': { professor: 'Mario Giacomazzo', term: 'Fall 2024', grade: 'A-' },
      'math-231': { professor: 'Section', term: 'Spring 2025', grade: 'B+' },
      'busi-100': { professor: 'Section', term: 'Fall 2024', grade: 'A' },
    },
    specialties: ['WebAssign pacing', 'Recitation value', 'Quant options'],
    strengths: ['study-system', 'exams', 'ap-decision'],
    karma: 140,
    replyMinutes: 9,
  },
  {
    id: 'm20',
    name: 'Chris Nguyen',
    year: "Senior '27",
    track: 'Accounting',
    identityTag: 'UBP',
    avatarColor: '#475569',
    initials: 'CN',
    courseIds: ['busi-102', 'econ-101', 'busi-200'],
    courseHistory: {
      'busi-102': { professor: 'Charles Skender', term: 'Spring 2024', grade: 'A' },
      'econ-101': { professor: 'Kalina Staub', term: 'Fall 2023', grade: 'B+' },
      'busi-200': { professor: 'Shimul Melwani', term: 'Fall 2023', grade: 'A-' },
    },
    specialties: ['MOD calendar', 'Practice packets', 'Interview stories'],
    strengths: ['recruiting', 'deep-dive', 'exams'],
    karma: 198,
    replyMinutes: 8,
  },
]

type ReplyTopic =
  | 'first_weeks'
  | 'exams'
  | 'ap'
  | 'workload'
  | 'attendance'
  | 'professor'
  | 'resources'
  | 'ai'
  | 'assured'
  | 'format'
  | 'general'

const REPLY_BANK: Record<string, Partial<Record<ReplyTopic, string[]>>> = {
  'busi-200': {
    first_weeks: [
      'Week 1–3: learn your ULA cohort rhythm, reflection expectations, and any networking / experiential events. Treat recitation as required culture-building, not optional TA time.',
      'Early on, figure out team norms and where you will do project work (Bell Hall is popular). Don’t wait until mid-semester to meet teammates outside class.',
    ],
    exams: [
      'There isn’t a classic closed-book final—assessment leans projects, reflection, participation, and ULA engagement. “Grading” rewards showing up prepared and writing in your own voice.',
      'If you’re hunting for an A: consistent peer-lab energy + honest reflections beat last-minute heroics. Professors can tell when AI wrote your personal essay.',
    ],
    ap: [
      'No AP skip for BUSI 200—it’s the FBA Year 1 required leadership course. Plan to take it even if you have lots of AP credit elsewhere.',
    ],
    workload: [
      'Workload is front-loaded around reflections, team deliverables, and event prep—not weekly problem sets. Block 2–4 focused hours most weeks, more before presentations.',
      'Biggest time sinks: team coordination and polishing reflections. Put a recurring calendar hold after ULA section.',
    ],
    attendance: [
      'ULA recitations (~50 min, often Thu/Fri) are central. Missing them hurts more than missing a random large lecture seat.',
      'Some sections are strict about participation / tech policies—read the syllabus once and follow it literally the first two weeks.',
    ],
    professor: [
      'Melwani’s design is practice-first: listening, perspective-taking, trying leadership behaviors. Expect experiential moments, not only slides.',
      'Office hours / instructional team are useful for project framing—bring a draft, not a blank page.',
    ],
    resources: [
      'Bell Hall and McColl are the usual hangouts for rehearsal and group work. UBP peers / ULAs are your fastest “what’s due” channel.',
      'Use Kenan-Flagler career / UBP emails—this course often ties into real alumni or employer touchpoints.',
    ],
    ai: [
      'AI for brainstorming a prototype idea can be fine; AI writing your personal reflection is a hard no. Keep a paper trail of your own drafts.',
    ],
    assured: [
      'BUSI 200 is required for Assured Enrollment Year 1. Take it seriously as onboarding into Kenan-Flagler culture, not a GPA side quest.',
    ],
    format: [
      'Format: large lecture + weekly ULA-led recitation cohorts (~20–25). That’s where relationships and accountability form.',
    ],
    general: [
      'Think of BUSI 200 as leadership gym class for FBA—reps matter more than memorizing definitions.',
    ],
  },
  'busi-100': {
    first_weeks: [
      'Confirm you’re in the FBA-reserved section if you’re Assured Enrollment. Then skim the five themes: people, customers, firms, markets, society.',
      'First weeks are orientation to business language and career paths—easy to underestimate because it’s only 1.5 credits.',
    ],
    exams: [
      'Assessments vary by section (quizzes/exams/cases). Aim C or better (not C-) for Assured Enrollment / UBP—don’t treat it as automatic.',
      'If your section uses cases, speak once early. Participation grades often separate B from A-.',
    ],
    ap: [
      'This isn’t a typical “AP out” course like calc/econ. Even with lots of AP, you usually still take BUSI 100 (or an approved UNC equivalent).',
    ],
    workload: [
      'Lighter than ECON/MATH most weeks, but case weeks spike. Put readings on calendar the night before lecture.',
    ],
    attendance: [
      'Large lecture—policies vary. Still, sitting near the front helps if polls or cold-calls happen in your section.',
    ],
    professor: [
      'Friga and other instructors emphasize how disciplines fit together and how business can drive change. Listen for career pathway language—it’s intentional.',
    ],
    resources: [
      'Catalog entry + your section Canvas/Sakai is source of truth. For Assured Enrollment rules, also check Kenan-Flagler’s FBA pages.',
    ],
    ai: [
      'Using AI to find company facts for a case is usually OK if you cite; using AI to fabricate analysis you don’t understand will backfire in discussion.',
    ],
    assured: [
      'C or better (not C-) is the Assured Enrollment / UBP floor. Pair this with your quant prereqs so you’re not overloaded one semester.',
    ],
    format: [
      '1.5 credits, large lecture; FBA students get a reserved Year 1 cohort section—double-check the section code at registration.',
    ],
    general: [
      'BUSI 100 is the map of the business school—use it to pick which concentration stories you want to explore next.',
    ],
  },
  'econ-101': {
    first_weeks: [
      'Week 1: set up Achieve, Poll Everywhere, and Gradescope exactly as the syllabus says (email mismatches break poll sync). Do the math/graph review early.',
      'Start a formula + graph cheat-sheet for yourself (even if exams are closed-note)—writing it is the study method.',
    ],
    exams: [
      'Many sections: 2 midterms + heavy cumulative final, often multiple choice and timed. Practice exams beat rereading the textbook.',
      'Higher/lower midterm weighting exists in some syllabi—don’t panic after midterm 1; execute the recovery plan immediately.',
    ],
    ap: [
      'AP Macro + Micro can place you out if UNC awards credit. If you need a secure C for Assured Enrollment and feel shaky, taking ECON 101 at Carolina is often safer.',
      'Check UNC’s credit tables, not Reddit rumors, before you skip.',
    ],
    workload: [
      '4 credits with weekly Achieve / Learning Curve + recitation work. Plan 6–8 hours in tough weeks, especially before exams.',
    ],
    attendance: [
      'Poll Everywhere in lecture often counts. Bring a charged phone and register with the exact directory email.',
      'Recitation worksheets are easy points—treat them as mandatory practice.',
    ],
    professor: [
      'Balaban/Staub-style sections are active-learning heavy: prep videos/readings before class, practice in class. Falling behind on prep makes lecture feel impossible.',
    ],
    resources: [
      'EconAid Center (Gardner 009) peer tutoring is the underrated move. Piazza + office hours before the first midterm, not after.',
      'Public syllabi: econ.unc.edu undergraduate syllabi archive.',
    ],
    ai: [
      'Graded Achieve/homework and exams are Honor Code individual work—no AI shortcuts. Use tutoring humans instead.',
    ],
    assured: [
      'Need C or better (not C-) for Assured Enrollment / UBP. Economics majors also need ≥ C as a gateway.',
    ],
    format: [
      'Lecture + weekly recitation; often Achieve + Poll Everywhere + Gradescope. FC-KNOWING Gen Ed.',
    ],
    general: [
      'ECON 101 filters hard—consistency beats cramming. If you’re drowning by week 3, get to EconAid the same week.',
    ],
  },
  'stor-155': {
    first_weeks: [
      'Confirm MATH 110 prereq/exemption, join WebAssign immediately, and do the first homeworks on time—the course punishes falling a week behind.',
      'Skim OpenIntro (often used) and learn where your section posts lab/tutorial hours.',
    ],
    exams: [
      'Common pattern: 2 midterms + final, with homework sometimes ~40%. Exams reward fluent interpretation of output, not only formulas.',
      'Make an “errors I keep making” list after each WebAssign set—those show up on exams.',
    ],
    ap: [
      'AP Stats may help placement depending on UNC credit. Still compare STOR 155 vs STOR 120 vs DATA 110 for schedule fit.',
    ],
    workload: [
      'Steady weekly WebAssign is the real workload. Budget time every week so exam weeks don’t explode.',
    ],
    attendance: [
      'Policies vary; still go—examples mirror homework language. Evening open tutorials are worth it even if lecture feels optional.',
    ],
    professor: [
      'Giacomazzo sections often get strong student feedback for clarity/energy. Regardless of instructor, ask about calculator / software rules early.',
    ],
    resources: [
      'STOR open tutorials most evenings + instructor office hours. Spreadsheet fluency matters as much as theory.',
    ],
    ai: [
      'OK to use AI to decode a spreadsheet error message in some sections; not OK to paste graded answers. When unsure, assume Honor Code = solo.',
    ],
    assured: [
      'Any of STOR 155 / STOR 120 / DATA 110 can satisfy the stats prereq with C or better—pick the teaching style you’ll actually attend.',
    ],
    format: [
      '3 credits, FC-QUANT, MATH 110 prereq. Lecture + WebAssign is the usual spine.',
    ],
    general: [
      'STOR 155 rewards weekly discipline. If you only “study for midterms,” the homework weight will hurt.',
    ],
  },
  'math-231': {
    first_weeks: [
      'Get MyLab/WebAssign running day one. Recitation starts counting immediately—bring attempts, not blank paper.',
      'If algebra/trig is rusty, ask about MATH 231L corequisite support early.',
    ],
    exams: [
      'Typical: 3 midterms + department Common Final. Practice prior common-final style problems under time.',
      'Section averages often sit around C/C+. An A requires weekly reps, not exam-week miracles.',
    ],
    ap: [
      'AP Calc can place you out—verify UNC tables. Calc options for business: MATH 152, MATH 231, or STOR 113.',
      'Retake only if you need the foundation for later quant/finance coursework.',
    ],
    workload: [
      '4 credits with homework + recitation + exams. Expect heavy weeks before each midterm and the Common Final.',
    ],
    attendance: [
      'Recitation is usually graded/required. Skipping it is the fastest way to lose “easy” points.',
    ],
    professor: [
      'Linda Green’s Calc 1 videos are widely used supplements even if she’s not your lecturer. Pair them with your section’s pacing.',
    ],
    resources: [
      'Math help center / tutoring + Green videos + old common finals. Registrar sets common-final time for the sequence.',
    ],
    ai: [
      'No AI on graded calc work. Using AI as a “second tutor” for concepts is a gray area—safer to use human tutoring and official videos.',
    ],
    assured: [
      'C or better (not C-) for Assured Enrollment. Don’t stack MATH 231 + ECON 101 lightly without a study plan.',
    ],
    format: [
      'Lecture + recitation, often MyLab/WebAssign, Common Final across sections. FC-QUANT.',
    ],
    general: [
      'MATH 231 is marathon training—short daily practice beats weekend binges.',
    ],
  },
  'busi-102': {
    first_weeks: [
      'If it’s a MOD, mark the compressed calendar now. Master debits/credits in week 1–2 or the rest snowballs.',
      'Buy/print the practice packet if your instructor uses one—Skender-style classes reward reps that look like exams.',
    ],
    exams: [
      'Often 2 exams + participation. Exams are application of statement relationships, not memorizing definitions alone.',
      'Redo every in-class example the same night. That’s the whole game.',
    ],
    ap: [
      'Not an Assured Enrollment Year 1 requirement (that’s BUSI 100). Take it if you want accounting/finance signal or later BUSI 407 prep.',
    ],
    workload: [
      '1.5 credits but MOD pace can feel intense. Daily short practice > long weekend cram.',
    ],
    attendance: [
      'Participation is often graded. Sit where you can see the board; accounting is visual.',
    ],
    professor: [
      'Knoll/Skender and others differ in vibe, but all expect clean statement logic. Ask which financial statements appear on exam 1.',
    ],
    resources: [
      'Practice packets, peer study, and catalog notes (no double credit with BUSI 106/107). Public syllabi portal for section PDFs when available.',
    ],
    ai: [
      'Calculation/exam work is individual—no AI. Use it only to quiz yourself on definitions if your syllabus allows.',
    ],
    assured: [
      'Optional explore course for many FBAs. Useful résumé language for accounting/finance recruiting later.',
    ],
    format: [
      'Often half-semester MOD, 1.5 credits, lecture. Watch Kenan-Flagler module dates—drop rules differ.',
    ],
    general: [
      'BUSI 102 is “learn to read the company’s scoreboard.” If debits/credits click, everything else gets easier.',
    ],
  },
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

function scoreMentor(
  mentor: Mentor,
  courseId: string,
  profile: UserProfile,
): MatchResult {
  let score = 62
  const reasons: string[] = []
  const history = mentor.courseHistory[courseId]
  const courseCode =
    courses.find((c) => c.id === courseId)?.code ?? 'this course'

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
      `Completed ${courseCode} with ${history.professor} (${history.grade})`,
    )
  }

  if (profile.goals.includes('keep-assured')) {
    score += 6
    if (!reasons.some((r) => r.includes('Assured'))) {
      reasons.push('Strong on Assured Enrollment grade floors')
    }
  }

  if (profile.goals.includes('ap-decision') || profile.apCredits.length > 0) {
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

  if (
    profile.topics.includes('Exams & grading') &&
    mentor.strengths.includes('exams')
  ) {
    score += 4
  }
  if (
    profile.topics.includes('First 3 weeks') &&
    mentor.strengths.includes('first-weeks')
  ) {
    score += 4
  }

  score += Math.min(6, Math.floor(mentor.karma / 50))

  const hash =
    (profile.displayName.length * 17 +
      mentor.id.charCodeAt(mentor.id.length - 1) * 13 +
      courseId.length * 7) %
    5
  score += hash

  if (reasons.length === 0) {
    reasons.push(`Took ${courseCode}`, mentor.specialties[0] ?? mentor.track)
  }

  return {
    mentor,
    score: Math.min(99, Math.max(70, score)),
    reasons: reasons.slice(0, 3),
  }
}

/** Top 1–3 peer matches for a course (algorithmic, profile-aware). */
export function findTopMatches(
  courseId: string,
  profile: UserProfile,
  limit = 3,
): MatchResult[] {
  const pool = mentors.filter((m) => m.courseIds.includes(courseId))
  if (pool.length === 0) return []

  const scored = pool
    .map((m) => scoreMentor(m, courseId, profile))
    .sort(
      (a, b) =>
        b.score - a.score || a.mentor.name.localeCompare(b.mentor.name),
    )

  const n = Math.max(1, Math.min(limit, scored.length, 3))
  return scored.slice(0, n)
}

export function findBestMatch(
  courseId: string,
  profile: UserProfile,
): MatchResult | null {
  return findTopMatches(courseId, profile, 1)[0] ?? null
}

export function getIcebreakers(course: Course): string[] {
  const code = course.code
  return [
    `What should I watch for in the first 3 weeks of ${code}?`,
    `How are exams / grading structured, and what’s realistic for a solid grade?`,
    `AP or transfer credit—skip ${code}, or take it at UNC?`,
    `What’s the real weekly workload like outside of lecture?`,
    `How strict is attendance / participation in your section?`,
    `Any tips on the professor’s style or how to use office hours?`,
    `Where did you get help (tutoring, EconAid, peers, videos)?`,
    `Anything about AI / Honor Code I should know for this class?`,
    `How does this course matter for Assured Enrollment / UBP?`,
    `What does a typical week look like (lecture, recitation, homework)?`,
  ]
}

const TOPIC_RULES: { topic: ReplyTopic; keys: string[] }[] = [
  {
    topic: 'first_weeks',
    keys: ['first 3', 'first three', 'week 1', 'watch for', 'start', 'begin'],
  },
  {
    topic: 'exams',
    keys: [
      'exam',
      'midterm',
      'final',
      'grading',
      'grade',
      'tough',
      'hard',
      'difficult',
      'a solid',
      'get an a',
    ],
  },
  {
    topic: 'ap',
    keys: ['ap ', 'ap?', 'transfer', 'skip', 'place out', 'placement', 'credit'],
  },
  {
    topic: 'workload',
    keys: ['workload', 'hours', 'outside of', 'how much time', 'busy', 'weekly'],
  },
  {
    topic: 'attendance',
    keys: ['attend', 'participation', 'poll', 'recitation', 'ula', 'absent'],
  },
  {
    topic: 'professor',
    keys: ['professor', 'prof', 'instructor', 'teaching', 'office hour', 'style'],
  },
  {
    topic: 'resources',
    keys: [
      'help',
      'tutor',
      'econaid',
      'resource',
      'video',
      'where did you',
      'study',
    ],
  },
  {
    topic: 'ai',
    keys: ['ai', 'chatgpt', 'honor code', 'chatgpt', 'llm'],
  },
  {
    topic: 'assured',
    keys: ['assured', 'fba', 'ubp', 'enrollment', 'c or better', 'seat'],
  },
  {
    topic: 'format',
    keys: ['typical week', 'format', 'lecture', 'lab', 'mod', 'structure'],
  },
]

function pick(lines: string[] | undefined, fallback: string): string {
  if (!lines || lines.length === 0) return fallback
  return lines[Math.floor(Math.random() * lines.length)]
}

export function getMentorReply(courseId: string, userText: string): string {
  const bank = REPLY_BANK[courseId] ?? REPLY_BANK['busi-200']
  const lower = ` ${userText.toLowerCase()} `
  const fallback =
    pick(bank.general, '') ||
    'Happy to help—ask about first weeks, exams, AP credit, workload, attendance, or resources.'

  for (const rule of TOPIC_RULES) {
    if (rule.keys.some((k) => lower.includes(k))) {
      return pick(bank[rule.topic], fallback)
    }
  }
  return pick(bank.general, fallback)
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
