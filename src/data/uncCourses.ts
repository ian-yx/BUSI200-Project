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

export { MATCH_POLICY } from './matchPolicy'
export type { MatchPolicyRule } from './matchPolicy'

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
  { id: 'fyf', label: 'First-Year Foundations' },
  { id: 'double', label: 'Double-major intros' },
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
    id: 'data-110',
    code: 'DATA 110',
    title: 'Introduction to Data Science',
    category: 'UBP Prerequisite · Statistics option',
    categoryKey: 'prereq',
    credits: '3.0',
    professors: ['School of Data Science & Society instructors vary'],
    format: 'Lecture / applied intro (section-specific)',
    examFormat: 'Assignments, quizzes, and exams (section-specific)',
    attendance: 'Section-dependent',
    aiPolicy: 'yellow',
    aiNote: 'Follow syllabus AI rules; graded analyses must be your own work.',
    difficulty: 2.9,
    tip: 'Current Assured Enrollment / UBP stats option alongside STOR 120 and STOR 155—compare teaching style before you pick.',
    description:
      'Broad survey of data science: ethics, visualization/communication, math/stat concepts, and computational thinking. Counts as a business statistics prerequisite option (C or better). FC-QUANT. Also a gateway toward Data Science pathways.',
    gradingBreakdown: [
      { item: 'Assignments / projects', weight: 'Section-specific' },
      { item: 'Quizzes / exams', weight: 'Section-specific' },
      { item: 'Participation', weight: 'Section-specific' },
    ],
    gradeFloor: 'C or better for Assured Enrollment / UBP (not C-).',
    detailedAdvice: [
      'Official AE/UBP stats choices: DATA 110, STOR 120, or STOR 155.',
      'Useful if you like visualization + ethics + coding concepts more than classic inference.',
      'Also feeds interest in Business + Data Science / analytics doubles.',
      'Confirm section attributes in ConnectCarolina (honors versions exist).',
    ],
    genEd: 'FC-QUANT',
    sourceNote: 'UNC Catalog (DATA); Kenan-Flagler Assured Enrollment / UBP prereqs',
    tags: ['prereq', 'double'],
    catalogUrl: 'https://catalog.unc.edu/search/?P=DATA+110',
    syllabusUrl: 'https://catalog.unc.edu/courses/data/',
    syllabusLabel: 'DATA course listing',
  },
  {
    id: 'idst-101',
    code: 'IDST 101',
    title: 'College Thriving',
    category: 'First-Year Foundations · Required',
    categoryKey: 'fyf',
    credits: '1.0',
    professors: ['College of Arts & Sciences instructional team'],
    format: 'Small / discussion-oriented first-year course',
    examFormat: 'Reflection, participation, and short assignments (section-specific)',
    attendance: 'Expect regular attendance—this is a transition course',
    aiPolicy: 'yellow',
    aiNote: 'Personal reflections should be your own voice.',
    difficulty: 1.6,
    tip: 'Must be completed in your first academic year (two semesters). Pair it with another FY Foundation so you finish on time.',
    description:
      'Part of UNC’s IDEAs in Action First-Year Foundations. Helps first-years navigate the transition to college, take ownership of learning, and engage Carolina opportunities. Honors students may use HNRS 101 for this requirement.',
    gradingBreakdown: [
      { item: 'Participation / engagement', weight: 'Section-specific' },
      { item: 'Reflections / short assignments', weight: 'Section-specific' },
    ],
    gradeFloor: 'Required First-Year Foundation (complete within year 1).',
    detailedAdvice: [
      'Advising tip: take ~2 First-Year Foundations per semester (~4 credits total) to finish on schedule.',
      'Treat it as onboarding, not an afterthought—calendar conflicts bite later.',
      'If you’re Honors, ask about HNRS 101 as an alternate path.',
    ],
    genEd: 'FY-THRIVE',
    sourceNote: 'UNC Catalog · IDEAs in Action First-Year Foundations',
    tags: ['fyf'],
    catalogUrl: 'https://catalog.unc.edu/undergraduate/ideas-in-action/',
    syllabusUrl: 'https://advising.unc.edu/first-year-students/course-planning-first-semester/',
    syllabusLabel: 'First-semester planning (Advising)',
  },
  {
    id: 'idst-111l',
    code: 'IDST 111L',
    title: 'Data Literacy Lab',
    category: 'First-Year Foundations · Required',
    categoryKey: 'fyf',
    credits: '1.0',
    professors: ['Section instructors vary'],
    format: 'Lab / applied data literacy',
    examFormat: 'Lab exercises and short assessments (section-specific)',
    attendance: 'Lab attendance is typically required',
    aiPolicy: 'yellow',
    aiNote: 'Use tools as instructed; don’t outsource required lab work.',
    difficulty: 2.0,
    tip: 'Another Year-1 Foundation—often paired with ENGL 105 in the same semester.',
    description:
      'Required First-Year Foundations lab (FY-DATA) introducing practical data literacy for Carolina students. Complete within your first two semesters.',
    gradingBreakdown: [
      { item: 'Lab exercises', weight: 'Section-specific' },
      { item: 'Quizzes / participation', weight: 'Section-specific' },
    ],
    gradeFloor: 'Required First-Year Foundation (complete within year 1).',
    detailedAdvice: [
      'Does not replace STOR 155 / STOR 120 / DATA 110 for the business stats prereq.',
      'Useful warm-up before heavier quant courses.',
      'Check ConnectCarolina for open lab sections early—seats move fast.',
    ],
    genEd: 'FY-DATA',
    sourceNote: 'UNC Catalog · IDEAs in Action',
    tags: ['fyf'],
    catalogUrl: 'https://catalog.unc.edu/undergraduate/ideas-in-action/',
    syllabusUrl: 'https://ideasinaction.unc.edu/about/navigating-at-a-glance-fall25/',
    syllabusLabel: 'IDEAs at a glance',
  },
  {
    id: 'engl-105',
    code: 'ENGL 105',
    title: 'English Composition and Rhetoric',
    category: 'First-Year Foundations · Required',
    categoryKey: 'fyf',
    credits: '3.0',
    professors: ['Writing Program instructors vary'],
    format: 'Seminar-style writing workshops',
    examFormat: 'Portfolios, drafts, peer review, presentations (section-specific)',
    attendance: 'Workshop attendance and peer review are usually critical',
    aiPolicy: 'red',
    aiNote: 'Writing must be your own; follow the Writing Program / syllabus AI policy strictly.',
    difficulty: 2.5,
    tip: 'Required in year 1. Draft early—peer-review culture rewards revision, not one-night papers.',
    description:
      'FY-WRITING First-Year Foundation. Builds research-university writing and rhetoric skills. Must be completed during the first academic year on campus.',
    gradingBreakdown: [
      { item: 'Major writing projects / portfolio', weight: 'Typically majority' },
      { item: 'Drafts, peer review, participation', weight: 'Significant' },
    ],
    gradeFloor: 'Required First-Year Foundation (complete within year 1).',
    detailedAdvice: [
      'Common pairing: ENGL 105 + IDST 111L in one semester.',
      'Use the Writing Center early, not the night before a deadline.',
      'Business students: treat this as communication skill-building for BUSI 401 later.',
    ],
    genEd: 'FY-WRITING',
    sourceNote: 'UNC Catalog · IDEAs in Action First-Year Foundations',
    tags: ['fyf'],
    catalogUrl: 'https://catalog.unc.edu/search/?P=ENGL+105',
    syllabusUrl: 'https://englishcomplit.unc.edu/writing-program/',
    syllabusLabel: 'UNC Writing Program',
  },
  {
    id: 'comp-110',
    code: 'COMP 110',
    title: 'Introduction to Programming',
    category: 'Double-major intro · Computer Science',
    categoryKey: 'double',
    credits: '3.0',
    professors: ['Alyssa Byrnes', 'Section instructors vary'],
    format: 'Large lecture + programming assignments',
    examFormat: 'Programming projects + exams (section-specific)',
    attendance: 'Lecture policies vary; project deadlines are strict',
    aiPolicy: 'yellow',
    aiNote: 'Follow CS department / syllabus rules—many forbid AI-generated code on graded work.',
    difficulty: 3.4,
    tip: 'Popular Business + CS pathway starter. Prereq math/stats gate—check catalog before registering. Cannot take after COMP 210 credit.',
    description:
      'Introduces programming from a computational perspective (problem decomposition, data analysis, abstraction, ethics). No prior coding expected. FC-QUANT. Common first CS course for students exploring a Business + Computer Science double major.',
    gradingBreakdown: [
      { item: 'Programming assignments / projects', weight: 'Often heavy' },
      { item: 'Exams / quizzes', weight: 'Section-specific' },
    ],
    gradeFloor: 'CS majors typically need C or better in gateway sequences—check CS advising.',
    detailedAdvice: [
      'Catalog prereq: C or better in MATH 130/152/210/231/129P, PHIL 155, or STOR 120/151/155.',
      'Start early on projects; debugging time explodes near deadlines.',
      '~60% of KFBS majors double major/minor—CS is a high-ROI pairing for product/fintech paths.',
    ],
    genEd: 'FC-QUANT',
    sourceNote: 'UNC Catalog (COMP); Kenan-Flagler notes ~60% of majors double major/minor',
    tags: ['double'],
    catalogUrl: 'https://catalog.unc.edu/search/?P=COMP+110',
    syllabusUrl: 'https://cs.unc.edu/',
    syllabusLabel: 'UNC Computer Science',
  },
  {
    id: 'psyc-101',
    code: 'PSYC 101',
    title: 'General Psychology',
    category: 'Double-major intro · Psychology',
    categoryKey: 'double',
    credits: '3.0',
    professors: ['Section instructors vary'],
    format: 'Large lecture; sometimes with discussion components',
    examFormat: 'Multiple exams / quizzes common',
    attendance: 'Section-dependent; some use clickers/polls',
    aiPolicy: 'red',
    aiNote: 'Graded quizzes/exams are individual Honor Code work.',
    difficulty: 2.6,
    tip: 'Useful for consulting/marketing/people-analytics interest; also a common Arts & Sciences pairing.',
    description:
      'Survey of major areas in psychology. Frequently used by students exploring Psychology as a second major or Gen Ed Ways of Knowing / social science distribution alongside Business.',
    gradingBreakdown: [
      { item: 'Exams', weight: 'Typically majority' },
      { item: 'Quizzes / assignments', weight: 'Section-specific' },
    ],
    gradeFloor: 'Check Psychology major gateway rules if you plan to continue.',
    detailedAdvice: [
      'Read before lecture—exam questions often test application, not vocab lists alone.',
      'Pairs well with BUSI people/leadership courses later.',
      'Confirm how it maps to IDEAs Focus Capacities in your degree audit.',
    ],
    genEd: 'Often FC-KNOWING / social science (confirm section)',
    sourceNote: 'UNC Catalog (PSYC); UNC Admissions Major Mashup popular pairings',
    tags: ['double'],
    catalogUrl: 'https://catalog.unc.edu/search/?P=PSYC+101',
    syllabusUrl: PUBLIC_SYLLABI,
    syllabusLabel: 'UNC public syllabi portal',
  },
  {
    id: 'poli-100',
    code: 'POLI 100',
    title: 'American Democracy in Changing Times',
    category: 'Double-major intro · Political Science',
    categoryKey: 'double',
    credits: '3.0',
    professors: ['Section instructors vary'],
    format: 'Lecture / discussion',
    examFormat: 'Exams, quizzes, and writing (section-specific)',
    attendance: 'Section-dependent',
    aiPolicy: 'yellow',
    aiNote: 'Cite sources on writing; no AI on closed assessments.',
    difficulty: 2.7,
    tip: 'Business + Econ students often add Poli Sci / Public Policy—this is a common first political science foothold.',
    description:
      'Introductory political science course on American democratic institutions and change. Useful for Business students exploring Political Science or policy-oriented double majors (Econ+Poli Sci is a frequent Carolina pairing).',
    gradingBreakdown: [
      { item: 'Exams / quizzes', weight: 'Section-specific' },
      { item: 'Writing / participation', weight: 'Section-specific' },
    ],
    gradeFloor: 'Follow Political Science major requirements if continuing.',
    detailedAdvice: [
      'Good companion to ECON 101 if you like markets + institutions.',
      'Watch for Foundations of American Democracy Gen Ed overlays on some sections.',
      'Use office hours for essay prompts—rubrics reward clear thesis structure.',
    ],
    genEd: 'Varies by section (check IDEAs attributes)',
    sourceNote: 'UNC Catalog (POLI); Econ department notes Poli Sci as a common second major',
    tags: ['double'],
    catalogUrl: 'https://catalog.unc.edu/courses/poli/',
    syllabusUrl: PUBLIC_SYLLABI,
    syllabusLabel: 'UNC public syllabi portal',
  },
  {
    id: 'stor-120',
    code: 'STOR 120',
    title: 'Foundations of Statistics and Data Science',
    category: 'Double-major intro · Statistics option',
    categoryKey: 'double',
    credits: '3.0',
    professors: ['Section instructors vary'],
    format: 'Lecture + computational labs (section-specific)',
    examFormat: 'Homework, midterms, final (section-specific)',
    attendance: 'Lab/lecture policies vary',
    aiPolicy: 'yellow',
    aiNote: 'Debugging help may be OK; graded solutions must be yours.',
    difficulty: 3.0,
    tip: 'Alternate UBP stats option alongside STOR 155 / DATA 110—and a natural on-ramp toward Statistics & Analytics.',
    description:
      'Introductory statistics / data science foundations. Counts among business statistics prerequisite options and supports students eyeing a Business + Statistics & Analytics path (a top Carolina double-major mashup with CS as well).',
    gradingBreakdown: [
      { item: 'Homework / labs', weight: 'Often substantial' },
      { item: 'Exams', weight: 'Section-specific' },
    ],
    gradeFloor: 'C or better for Assured Enrollment / UBP stats requirement.',
    detailedAdvice: [
      'Compare STOR 120 vs STOR 155 vs DATA 110 for teaching style and schedule.',
      'If you like coding + stats, this pairs nicely with later COMP coursework.',
      'Stay current weekly—computational labs compound.',
    ],
    genEd: 'Often FC-QUANT (confirm section)',
    sourceNote: 'UNC Catalog (STOR); KFBS prereq list; Admissions Major Mashup',
    tags: ['double', 'prereq'],
    catalogUrl: 'https://catalog.unc.edu/search/?P=STOR+120',
    syllabusUrl: 'https://stor.unc.edu/undergraduate/courses/',
    syllabusLabel: 'STOR course listing',
  },
  {
    id: 'plcy-101',
    code: 'PLCY 101',
    title: 'Making Public Policy',
    category: 'Double-major intro · Public Policy',
    categoryKey: 'double',
    credits: '3.0',
    professors: ['Section instructors vary'],
    format: 'Lecture / discussion',
    examFormat: 'Exams, memos, and projects (section-specific)',
    attendance: 'Discussion participation often matters',
    aiPolicy: 'yellow',
    aiNote: 'Policy memos must be your analysis; cite evidence.',
    difficulty: 2.8,
    tip: 'Public Policy is a frequent companion field for Econ/Business students interested in consulting, government, or social impact.',
    description:
      'Introduction to how public problems are defined and how policy is designed and debated. Strong exploratory course for Business students considering Public Policy as a second major.',
    gradingBreakdown: [
      { item: 'Exams / quizzes', weight: 'Section-specific' },
      { item: 'Memos / projects / participation', weight: 'Section-specific' },
    ],
    gradeFloor: 'Check Public Policy major gateway if you continue.',
    detailedAdvice: [
      'Practice writing concise policy memos—transferable to consulting case communication.',
      'Pairs thematically with ECON 101 (incentives + institutions).',
      'Ask advisors how PLCY courses interact with IDEAs Focus Capacities.',
    ],
    genEd: 'Varies by section',
    sourceNote: 'UNC Catalog (PLCY); common Arts & Sciences pairing patterns',
    tags: ['double'],
    catalogUrl: 'https://catalog.unc.edu/courses/plcy/',
    syllabusUrl: 'https://publicpolicy.unc.edu/',
    syllabusLabel: 'UNC Public Policy',
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
    courseIds: ['data-110', 'econ-101', 'math-231'],
    courseHistory: {
      'data-110': { professor: 'SDSS section', term: 'Spring 2024', grade: 'A' },
      'econ-101': { professor: 'Kalina Staub', term: 'Fall 2023', grade: 'A-' },
      'math-231': { professor: 'Linda Green', term: 'Fall 2023', grade: 'B+' },
    },
    specialties: ['DATA 110', 'AP credit decisions', 'C-or-better strategy'],
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
    courseIds: ['data-110', 'busi-100', 'math-231'],
    courseHistory: {
      'data-110': {
        professor: 'Charles Skender',
        term: 'Spring 2025',
        grade: 'A',
      },
      'busi-100': { professor: 'Section', term: 'Spring 2024', grade: 'A-' },
      'math-231': { professor: 'Section', term: 'Fall 2024', grade: 'B+' },
    },
    specialties: ['DATA 110 vs STOR', 'Quant options', 'Recruiting grades'],
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
    courseIds: ['busi-200', 'econ-101', 'data-110'],
    courseHistory: {
      'busi-200': { professor: 'Shimul Melwani', term: 'Fall 2023', grade: 'A' },
      'econ-101': { professor: 'Rita Balaban', term: 'Fall 2023', grade: 'B+' },
      'data-110': { professor: 'SDSS section', term: 'Spring 2024', grade: 'A-' },
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
    courseIds: ['math-231', 'data-110', 'econ-101'],
    courseHistory: {
      'math-231': { professor: 'Linda Green', term: 'Fall 2025', grade: 'A-' },
      'data-110': { professor: 'SDSS section', term: 'Spring 2026', grade: 'A' },
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
    courseIds: ['data-110', 'stor-155', 'busi-200'],
    courseHistory: {
      'data-110': {
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
    specialties: ['Mentor karma', 'McColl resources', 'DATA 110 pacing'],
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
    courseIds: ['econ-101', 'data-110', 'stor-155'],
    courseHistory: {
      'econ-101': { professor: 'Rita Balaban', term: 'Fall 2023', grade: 'B+' },
      'data-110': { professor: 'SDSS section', term: 'Spring 2024', grade: 'A' },
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
    courseIds: ['busi-200', 'stor-155', 'data-110'],
    courseHistory: {
      'busi-200': { professor: 'Shimul Melwani', term: 'Fall 2023', grade: 'A' },
      'stor-155': { professor: 'Mario Giacomazzo', term: 'Spring 2024', grade: 'A' },
      'data-110': { professor: 'SDSS section', term: 'Fall 2024', grade: 'A-' },
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
    courseIds: ['data-110', 'econ-101', 'busi-200'],
    courseHistory: {
      'data-110': { professor: 'SDSS section', term: 'Spring 2024', grade: 'A' },
      'econ-101': { professor: 'Kalina Staub', term: 'Fall 2023', grade: 'B+' },
      'busi-200': { professor: 'Shimul Melwani', term: 'Fall 2023', grade: 'A-' },
    },
    specialties: ['DATA 110 projects', 'Stats option pick', 'Interview stories'],
    strengths: ['recruiting', 'deep-dive', 'exams'],
    karma: 198,
    replyMinutes: 8,
  },
  {
    id: 'm21',
    name: 'Zoe Harper',
    year: "Sophomore '29",
    track: 'Consulting',
    identityTag: 'FBA',
    avatarColor: '#0891b2',
    initials: 'ZH',
    courseIds: ['idst-101', 'idst-111l', 'engl-105'],
    courseHistory: {
      'idst-101': { professor: 'CAS section', term: 'Fall 2025', grade: 'A' },
      'idst-111l': { professor: 'Lab section', term: 'Fall 2025', grade: 'A' },
      'engl-105': { professor: 'Writing Program', term: 'Spring 2026', grade: 'A-' },
    },
    specialties: ['First-Year Foundations timing', 'ENGL 105 workshops', 'Semester balance'],
    strengths: ['first-weeks', 'quick-tips', 'keep-assured'],
    karma: 112,
    replyMinutes: 5,
  },
  {
    id: 'm22',
    name: 'Kenji Sato',
    year: "Junior '28",
    track: 'Computer Science',
    identityTag: 'UBP',
    avatarColor: '#4338ca',
    initials: 'KS',
    courseIds: ['comp-110', 'stor-120', 'math-231'],
    courseHistory: {
      'comp-110': { professor: 'Alyssa Byrnes', term: 'Fall 2024', grade: 'A' },
      'stor-120': { professor: 'STOR section', term: 'Spring 2025', grade: 'A-' },
      'math-231': { professor: 'Linda Green', term: 'Fall 2024', grade: 'B+' },
    },
    specialties: ['Business + CS double', 'COMP 110 projects', 'Debugging habits'],
    strengths: ['deep-dive', 'study-system', 'exams'],
    karma: 186,
    replyMinutes: 7,
  },
  {
    id: 'm23',
    name: 'Riley Quinn',
    year: "Junior '28",
    track: 'Psychology',
    identityTag: 'UBP',
    avatarColor: '#c026d3',
    initials: 'RQ',
    courseIds: ['psyc-101', 'engl-105', 'busi-100'],
    courseHistory: {
      'psyc-101': { professor: 'PSYC section', term: 'Fall 2024', grade: 'A' },
      'engl-105': { professor: 'Writing Program', term: 'Fall 2024', grade: 'A-' },
      'busi-100': { professor: 'Section', term: 'Spring 2025', grade: 'A' },
    },
    specialties: ['PSYC 101 exams', 'Business + Psych path', 'Writing Center'],
    strengths: ['exams', 'quick-tips', 'first-weeks'],
    karma: 129,
    replyMinutes: 6,
  },
  {
    id: 'm24',
    name: 'Taylor Brooks',
    year: "Senior '27",
    track: 'Economics',
    identityTag: 'UBP',
    avatarColor: '#0f766e',
    initials: 'TB',
    courseIds: ['poli-100', 'plcy-101', 'econ-101'],
    courseHistory: {
      'poli-100': { professor: 'POLI section', term: 'Fall 2023', grade: 'A-' },
      'plcy-101': { professor: 'PLCY section', term: 'Spring 2024', grade: 'A' },
      'econ-101': { professor: 'Rita Balaban', term: 'Fall 2023', grade: 'A' },
    },
    specialties: ['Poli Sci second major', 'Public Policy intros', 'Econ + policy'],
    strengths: ['explore-track', 'deep-dive', 'recruiting'],
    karma: 204,
    replyMinutes: 9,
  },
  {
    id: 'm25',
    name: 'Ava Chen',
    year: "Sophomore '29",
    track: 'Statistics',
    identityTag: 'FBA',
    avatarColor: '#1d4ed8',
    initials: 'AC',
    courseIds: ['stor-120', 'idst-111l', 'idst-101'],
    courseHistory: {
      'stor-120': { professor: 'STOR section', term: 'Fall 2025', grade: 'A' },
      'idst-111l': { professor: 'Lab section', term: 'Fall 2025', grade: 'A' },
      'idst-101': { professor: 'CAS section', term: 'Spring 2026', grade: 'A' },
    },
    specialties: ['STOR 120 vs STOR 155', 'Data literacy lab', 'Quant double major'],
    strengths: ['ap-decision', 'labs', 'study-system'],
    karma: 147,
    replyMinutes: 5,
  },
  {
    id: 'm26',
    name: 'Miles Jordan',
    year: "Junior '28",
    track: 'Public Policy',
    identityTag: 'UBP',
    avatarColor: '#b45309',
    initials: 'MJ',
    courseIds: ['plcy-101', 'poli-100', 'engl-105'],
    courseHistory: {
      'plcy-101': { professor: 'PLCY section', term: 'Fall 2024', grade: 'A' },
      'poli-100': { professor: 'POLI section', term: 'Spring 2025', grade: 'A-' },
      'engl-105': { professor: 'Writing Program', term: 'Fall 2024', grade: 'B+' },
    },
    specialties: ['Policy memos', 'Business + PLCY', 'Consulting writing'],
    strengths: ['deep-dive', 'explore-track', 'first-weeks'],
    karma: 161,
    replyMinutes: 8,
  },
  {
    id: 'm27',
    name: 'Nina Volkov',
    year: "Senior '27",
    track: 'Computer Science',
    identityTag: 'UBP',
    avatarColor: '#7c3aed',
    initials: 'NV',
    courseIds: ['comp-110', 'stor-120', 'psyc-101'],
    courseHistory: {
      'comp-110': { professor: 'Alyssa Byrnes', term: 'Fall 2023', grade: 'A-' },
      'stor-120': { professor: 'STOR section', term: 'Spring 2024', grade: 'A' },
      'psyc-101': { professor: 'PSYC section', term: 'Fall 2023', grade: 'B+' },
    },
    specialties: ['CS Honor Code / AI', 'Project deadlines', 'Double-major pacing'],
    strengths: ['exams', 'time-management', 'deep-dive'],
    karma: 219,
    replyMinutes: 10,
  },
  {
    id: 'm28',
    name: 'Grace Lin',
    year: "Sophomore '29",
    track: 'Finance',
    identityTag: 'FBA',
    avatarColor: '#be123c',
    initials: 'GL',
    courseIds: ['engl-105', 'idst-101', 'stor-120'],
    courseHistory: {
      'engl-105': { professor: 'Writing Program', term: 'Fall 2025', grade: 'A' },
      'idst-101': { professor: 'CAS section', term: 'Fall 2025', grade: 'A' },
      'stor-120': { professor: 'STOR section', term: 'Spring 2026', grade: 'A-' },
    },
    specialties: ['Year-1 Foundations checklist', 'Peer review tips', 'FBA schedule'],
    strengths: ['keep-assured', 'quick-tips', 'first-weeks'],
    karma: 108,
    replyMinutes: 4,
  },
]

type ReplyTopic =
  | 'greeting'
  | 'thanks'
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
  | 'double'
  | 'syllabus'
  | 'general'

const GLOBAL_REPLIES: Partial<Record<ReplyTopic, string[]>> = {
  greeting: [
    'Hey! Happy to help with this class—ask about first weeks, grading, workload, Assured Enrollment, or anything else on your mind.',
    'Hi! Fire away. Short questions are great: exams, weekly rhythm, AP credit, or “what surprised you?”',
    'Hello! I’ve got you. What’s the #1 thing you’re unsure about for this course?',
  ],
  thanks: [
    'Anytime—glad it helped. Ping me if another question pops up before registration.',
    'You’re welcome! Mark the chat resolved when you’re set so I get a little Navigator karma.',
    'No problem. You’ve got this—ask again if the syllabus still feels fuzzy.',
  ],
  double: [
    'A lot of KFBS students double major or minor. Common first-year explores: COMP 110 (CS), PSYC 101, POLI 100, PLCY 101, plus stats options like STOR 120 / DATA 110.',
    'If you’re testing a second major, take one intro this year without overloading Assured Enrollment C-or-better courses.',
  ],
}

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
  'data-110': {
    first_weeks: [
      'Skim the ethics + visualization modules early—DATA 110 is a survey course, so falling behind on weekly labs snowballs.',
      'Decide in week 1 whether you prefer DATA 110 vs STOR 120 vs STOR 155 for your Assured Enrollment stats slot.',
    ],
    exams: [
      'Expect a mix of assignments/projects plus quizzes or exams. Practice explaining a chart in plain English—communication is part of the point.',
      'Don’t treat it as pure coding bootcamp or pure stats class; graded work often blends both.',
    ],
    ap: [
      'AP Stats doesn’t automatically equal DATA 110. Confirm UNC credit tables and whether you still need a C-or-better stats option for Assured Enrollment.',
    ],
    workload: [
      'Steady weekly assignments beat weekend cram. Budget like a 3-credit quant/intro-CS hybrid.',
    ],
    attendance: [
      'Section policies vary—if there are labs or in-class activities, show up; catch-up is painful.',
    ],
    professor: [
      'Instructors differ in coding depth vs conceptual survey. Read the syllabus for software tools (Python/R/spreadsheets) before shopping sections.',
    ],
    resources: [
      'SDSS advising + peer study groups. Catalog: Introduction to Data Science, FC-QUANT.',
    ],
    ai: [
      'Follow the syllabus AI clause. Using tools to explore ideas may be OK; submitting AI-written analyses usually isn’t.',
    ],
    assured: [
      'Yes—DATA 110 is an official Assured Enrollment / UBP statistics prerequisite option (C or better, not C-).',
    ],
    format: [
      '3 credits, broad data-science survey (ethics, viz, stats concepts, computational thinking). Honors sections exist.',
    ],
    general: [
      'DATA 110 is a strong pick if you want modern data literacy and a path toward analytics / Data Science alongside Business.',
    ],
  },
  'idst-101': {
    first_weeks: [
      'Treat College Thriving as onboarding: show up, engage, and finish reflections on time. It’s 1 credit but still required in year 1.',
    ],
    exams: [
      'Usually no giant final—expect participation, reflections, and short assignments. Check your section Canvas.',
    ],
    ap: [
      'No AP skip. Honors students should ask about HNRS 101 as an alternate path for this Foundation.',
    ],
    workload: [
      'Light weekly load if you stay current. Don’t stack all four First-Year Foundations into one overloaded semester alone—spread them.',
    ],
    attendance: [
      'Discussion / engagement matters. Missing early sessions makes later reflections harder.',
    ],
    resources: [
      'Advising’s first-semester planning page + your College Advisor are the ground truth for Foundation timing.',
    ],
    assured: [
      'Separate from Assured Enrollment C-or-better rules, but still required for graduation timing—finish Foundations in year 1.',
    ],
    format: [
      'Small / discussion-oriented. Pair with another Foundation (often ENGL 105 or IDST 111L) the same term.',
    ],
    general: [
      'IDST 101 is about thriving at Carolina, not memorizing content. Take it seriously as transition support.',
    ],
  },
  'idst-111l': {
    first_weeks: [
      'Find your lab room early and bring a laptop if required. Data Literacy Lab is short but paced weekly.',
    ],
    exams: [
      'Expect lab exercises / short assessments more than a high-stakes comprehensive final—confirm with your syllabus.',
    ],
    workload: [
      '1 credit, but labs punish falling behind. Finish each module the week it’s assigned.',
    ],
    resources: [
      'This does NOT replace STOR 155 / STOR 120 / DATA 110 for the business stats prereq—plan both if needed.',
    ],
    assured: [
      'Required First-Year Foundation (FY-DATA). Finish within your first two semesters.',
    ],
    format: [
      'Lab format. Common pairing: ENGL 105 + IDST 111L in one semester.',
    ],
    general: [
      'Useful warm-up before heavier quant. Treat it as literacy practice, not a substitute for STOR.',
    ],
  },
  'engl-105': {
    first_weeks: [
      'Week 1–2: learn draft deadlines and peer-review norms. Writing courses reward early drafts, not Sunday-night heroes.',
    ],
    exams: [
      'Assessment is usually portfolios / major papers, not a classic sit-down final. Rubrics matter—read them.',
    ],
    ai: [
      'Writing must be yours. Follow the Writing Program / syllabus AI policy strictly—Honor Code territory.',
    ],
    workload: [
      'Front-loaded around major writing projects. Block revision time after peer review, not just first-draft time.',
    ],
    attendance: [
      'Workshop / peer-review days are usually critical. Missing them hurts both grade and draft quality.',
    ],
    resources: [
      'Writing Center appointments fill up before deadlines—book early.',
    ],
    assured: [
      'Required Year-1 Foundation (FY-WRITING). Plan it even if your Assured Enrollment focus is quant courses.',
    ],
    general: [
      'ENGL 105 builds communication muscle you’ll reuse in BUSI 401 and recruiting writing.',
    ],
  },
  'comp-110': {
    first_weeks: [
      'Start the first programming assignment the day it drops. Debugging time explodes near deadlines.',
    ],
    exams: [
      'Projects + exams are common. Practice writing code without autocomplete crutches before timed assessments.',
    ],
    ap: [
      'Check catalog prereqs (math/stats/PHIL gates). You generally cannot take COMP 110 after earning COMP 210 credit.',
    ],
    workload: [
      'Expect heavier weeks around projects. Pair with lighter Gen Eds if this is your first coding course.',
    ],
    ai: [
      'Many CS sections forbid AI-generated code on graded work. Read the syllabus Honor Code / AI clause carefully.',
    ],
    resources: [
      'Office hours + peer study > last-minute Stack Overflow spirals. CS help resources are listed on the department site.',
    ],
    assured: [
      'Not an Assured Enrollment required course, but a strong Business + CS double-major on-ramp. Still protect C-or-better on actual AE courses.',
    ],
    format: [
      'Large lecture + programming assignments. FC-QUANT for many sections.',
    ],
    general: [
      'No prior coding expected. Business students eyeing product/fintech often start here for a CS double.',
    ],
  },
  'psyc-101': {
    first_weeks: [
      'Read before lecture—early quizzes often test application, not just vocabulary lists.',
    ],
    exams: [
      'Multiple midterms / quizzes are common in large sections. Practice retrieval, not re-reading alone.',
    ],
    workload: [
      'Steady weekly reading beats cramming three chapters the night before.',
    ],
    resources: [
      'Confirm how your section maps to IDEAs Focus Capacities in your degree audit.',
    ],
    assured: [
      'Optional for Assured Enrollment, useful if you’re exploring Psychology as a second major or people-analytics interest.',
    ],
    general: [
      'Popular companion field for consulting/marketing-minded Business students.',
    ],
  },
  'poli-100': {
    first_weeks: [
      'Skim the syllabus for Foundations of American Democracy overlays and writing expectations.',
    ],
    exams: [
      'Mix of exams and short writing is common. Thesis clarity beats long vague paragraphs.',
    ],
    workload: [
      'Reading load can spike before exams—outline chapters as you go.',
    ],
    resources: [
      'Office hours help a lot on essay prompts. Econ + Poli Sci is a frequent Carolina pairing.',
    ],
    assured: [
      'Not an AE requirement—use it to explore Political Science / policy double-major interest.',
    ],
    general: [
      'Good institutional complement to ECON 101 if you like markets + government.',
    ],
  },
  'stor-120': {
    first_weeks: [
      'Compare STOR 120 vs STOR 155 vs DATA 110 for style and schedule before you commit.',
    ],
    exams: [
      'Homework/labs often compound—miss a week and exam prep gets painful.',
    ],
    ap: [
      'If you have AP Stats credit, talk to advising before auto-skipping; confirm UBP / Assured Enrollment rules for your catalog year.',
    ],
    workload: [
      'Computational labs take real time. Budget like a quant course, not a fluff elective.',
    ],
    resources: [
      'STOR department course pages + peer tutors. Also counts among business stats prereq options.',
    ],
    assured: [
      'C or better matters if you’re using it for Assured Enrollment / UBP statistics requirement.',
    ],
    format: [
      'Lecture + computational work. Natural on-ramp toward Statistics & Analytics as a second major.',
    ],
    general: [
      'Strong pick if you want Business + Stats / data science without jumping straight to STOR 155’s style.',
    ],
  },
  'plcy-101': {
    first_weeks: [
      'Learn the memo format early—Public Policy grades often reward concise evidence-based writing.',
    ],
    exams: [
      'Expect exams plus memos/projects. Practice writing tight recommendations, not just summarizing readings.',
    ],
    workload: [
      'Reading + writing combo. Block drafting time the way you’d block problem sets.',
    ],
    resources: [
      'UNC Public Policy site + advisors for major gateway rules if you continue.',
    ],
    assured: [
      'Optional explore course for AE students considering Public Policy as a double major.',
    ],
    ai: [
      'Policy memos must be your analysis—cite evidence; follow syllabus AI rules.',
    ],
    general: [
      'Pairs thematically with ECON 101. Useful for consulting, government, and social-impact paths.',
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

  const interestHit = profile.interests.find((i) => {
    const interest = i.toLowerCase()
    const track = mentor.track.toLowerCase()
    return (
      track.includes(interest) ||
      interest.includes(track) ||
      mentor.specialties.some((s) => s.toLowerCase().includes(interest))
    )
  })
  if (interestHit) {
    score += 12
    reasons.push(`Shared focus: ${mentor.track}`)
  }

  const course = courses.find((c) => c.id === courseId)
  if (course?.categoryKey === 'fyf' && profile.year === 'first-year') {
    score += 5
    reasons.push('First-year Foundations timing')
  }
  if (
    course?.categoryKey === 'double' &&
    (profile.goals.includes('explore-track') ||
      profile.interests.some((i) =>
        [
          'computer science',
          'economics',
          'public policy',
          'psychology',
          'statistics',
        ].includes(i.toLowerCase()),
      ))
  ) {
    score += 5
    if (!reasons.some((r) => r.includes('Shared focus'))) {
      reasons.push('Double-major exploration fit')
    }
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
  const shared = [
    `Hey! Quick intro—what should I know about ${code}?`,
    `What should I watch for in the first 3 weeks of ${code}?`,
    `How are exams / grading structured for a solid grade?`,
    `What’s the real weekly workload like outside of lecture?`,
    `Anything about AI / Honor Code I should know?`,
    `How does this course matter for Assured Enrollment / UBP?`,
  ]

  const byCategory: Record<string, string[]> = {
    fba: [
      `Is the FBA-reserved section of ${code} worth prioritizing?`,
      `What does a typical week look like (lecture + ULA / cohort)?`,
    ],
    prereq: [
      `AP or transfer credit—skip ${code}, or take it at UNC?`,
      `Where did you get help (tutoring, peers, office hours)?`,
      `Any tips for protecting the C-or-better grade floor?`,
    ],
    fyf: [
      `When should first-years finish ${code} in the Foundations timeline?`,
      `Can I pair ${code} with another Foundation the same semester?`,
    ],
    double: [
      `Is ${code} a good first step toward a Business double major?`,
      `What surprised you most after week 3?`,
    ],
    explore: [
      `Who is this course best for among first-years?`,
      `Any tips on the professor’s style or office hours?`,
    ],
  }

  const extras = byCategory[course.categoryKey] ?? byCategory.explore
  return [...shared.slice(0, 4), ...extras, ...shared.slice(4)].slice(0, 10)
}

const TOPIC_RULES: { topic: ReplyTopic; keys: string[]; weight: number }[] = [
  {
    topic: 'greeting',
    weight: 40,
    keys: [
      'hello',
      'hi ',
      'hi!',
      'hey',
      'howdy',
      'good morning',
      'good afternoon',
      'good evening',
      "what's up",
      'whats up',
      'quick intro',
      'nice to meet',
    ],
  },
  {
    topic: 'thanks',
    weight: 45,
    keys: [
      'thank',
      'thanks',
      'thx',
      'ty ',
      'appreciate',
      'that helps',
      'got it',
    ],
  },
  {
    topic: 'first_weeks',
    weight: 30,
    keys: [
      'first 3',
      'first three',
      'week 1',
      'week one',
      'watch for',
      'start',
      'begin',
      'early on',
      'getting started',
      'should i know',
    ],
  },
  {
    topic: 'exams',
    weight: 32,
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
      'curve',
      'quiz',
      'test',
    ],
  },
  {
    topic: 'ap',
    weight: 34,
    keys: [
      'ap ',
      'ap?',
      'transfer',
      'skip',
      'place out',
      'placement',
      'credit',
      'ib ',
      'exempt',
    ],
  },
  {
    topic: 'workload',
    weight: 28,
    keys: [
      'workload',
      'hours',
      'outside of',
      'how much time',
      'busy',
      'weekly',
      'time-consuming',
      'heavy',
    ],
  },
  {
    topic: 'attendance',
    weight: 26,
    keys: [
      'attend',
      'participation',
      'poll',
      'recitation',
      'ula',
      'absent',
      'clicker',
      'show up',
    ],
  },
  {
    topic: 'professor',
    weight: 26,
    keys: [
      'professor',
      'prof',
      'instructor',
      'teaching',
      'office hour',
      'style',
      'who teaches',
    ],
  },
  {
    topic: 'resources',
    weight: 24,
    keys: [
      'help',
      'tutor',
      'econaid',
      'resource',
      'video',
      'where did you',
      'study',
      'practice',
      'office hours',
    ],
  },
  {
    topic: 'ai',
    weight: 36,
    keys: [
      ' ai',
      'ai ',
      'chatgpt',
      'honor code',
      'llm',
      'copilot',
      'claude',
      'gemini',
      'generative',
    ],
  },
  {
    topic: 'assured',
    weight: 34,
    keys: [
      'assured',
      'fba',
      'ubp',
      'enrollment',
      'c or better',
      'c-or-better',
      'seat',
      'prerequisite',
      'prereq',
      'grade floor',
    ],
  },
  {
    topic: 'format',
    weight: 22,
    keys: [
      'typical week',
      'format',
      'lecture',
      'lab',
      'mod',
      'structure',
      'syllabus overview',
      'what does a week',
    ],
  },
  {
    topic: 'double',
    weight: 30,
    keys: [
      'double major',
      'double-major',
      'second major',
      'minor',
      'cs ',
      'computer science',
      'psychology',
      'public policy',
      'poli sci',
      'statistics',
    ],
  },
  {
    topic: 'syllabus',
    weight: 20,
    keys: ['syllabus', 'canvas', 'rubric', 'grading breakdown', 'breakdown'],
  },
]

function pick(lines: string[] | undefined, fallback: string): string {
  if (!lines || lines.length === 0) return fallback
  return lines[Math.floor(Math.random() * lines.length)]
}

function normalizeChatText(text: string): string {
  const cleaned = text
    .toLowerCase()
    .replace(/[^a-z0-9\s'+]/g, ' ')
    .replace(/\s+/g, ' ')
  return ` ${cleaned} `
}

function scoreTopic(haystack: string, keys: string[]): number {
  let hits = 0
  for (const key of keys) {
    if (haystack.includes(key)) hits += 1
  }
  return hits
}

function isGreetingOnly(text: string): boolean {
  const stripped = text.trim().toLowerCase().replace(/[!?.]+$/g, '')
  const greetings = new Set([
    'hi',
    'hey',
    'hello',
    'howdy',
    'yo',
    'sup',
    'hi there',
    'hey there',
    'hello there',
    'good morning',
    'good afternoon',
    'good evening',
    "what's up",
    'whats up',
    'quick intro',
  ])
  if (greetings.has(stripped)) return true
  const words = stripped.split(/\s+/).filter(Boolean)
  return (
    words.length <= 5 &&
    (stripped.startsWith('hi ') ||
      stripped.startsWith('hey ') ||
      stripped.startsWith('hello ') ||
      stripped.includes('quick intro') ||
      stripped.includes('nice to meet'))
  )
}

export function getMentorReply(courseId: string, userText: string): string {
  const course = courses.find((c) => c.id === courseId)
  const bank = REPLY_BANK[courseId] ?? REPLY_BANK['busi-200']
  const haystack = normalizeChatText(userText)
  const fallback =
    pick(bank.general, '') ||
    `Happy to help with ${course?.code ?? 'this course'}—ask about first weeks, exams, AP credit, workload, attendance, or Assured Enrollment.`

  if (isGreetingOnly(userText)) {
    return pick(GLOBAL_REPLIES.greeting, fallback)
  }

  let best: { topic: ReplyTopic; score: number } | null = null
  for (const rule of TOPIC_RULES) {
    const hits = scoreTopic(haystack, rule.keys)
    if (hits === 0) continue
    const score = hits * rule.weight
    if (!best || score > best.score) best = { topic: rule.topic, score }
  }

  if (!best) {
    return pick(bank.general, fallback)
  }

  if (best.topic === 'greeting') {
    return pick(GLOBAL_REPLIES.greeting, fallback)
  }
  if (best.topic === 'thanks') {
    return pick(GLOBAL_REPLIES.thanks, fallback)
  }
  if (best.topic === 'double') {
    return pick(
      [
        ...(GLOBAL_REPLIES.double ?? []),
        ...(course?.categoryKey === 'double'
          ? [
              `${course.code} is a common first foothold for Business students exploring a second major—use it to test fit before overcommitting.`,
            ]
          : []),
      ],
      fallback,
    )
  }
  if (best.topic === 'syllabus') {
    return pick(
      [
        ...(bank.format ?? []),
        ...(bank.exams ?? []),
        `Check the official syllabus / Canvas for section-specific weights—I can still share what was typical when I took ${course?.code ?? 'it'}.`,
      ],
      fallback,
    )
  }

  return pick(bank[best.topic], pick(GLOBAL_REPLIES[best.topic], fallback))
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
