export type AiPolicy = 'green' | 'yellow' | 'red'
export type FilterTag = 'all' | 'fba' | 'prereq' | 'fyf' | 'double' | 'explore'
export type CourseCategoryKey = 'fba' | 'prereq' | 'fyf' | 'double' | 'explore'
export type Pathway =
  | 'assured-enrollment'
  | 'pre-business'
  | 'exploring'
  | 'other'
export type ClassYear = 'first-year' | 'sophomore' | 'junior' | 'senior'
export type ChatStyle = 'quick-tips' | 'deep-dive' | 'either'

export interface Course {
  id: string
  code: string
  title: string
  category: string
  categoryKey: CourseCategoryKey
  credits: string
  professors: string[]
  format: string
  examFormat: string
  attendance: string
  aiPolicy: AiPolicy
  aiNote: string
  difficulty: number
  tip: string
  description: string
  gradingBreakdown: { item: string; weight: string }[]
  gradeFloor: string
  detailedAdvice: string[]
  genEd?: string
  sourceNote: string
  tags: FilterTag[]
  catalogUrl: string
  syllabusUrl?: string
  syllabusLabel?: string
}

export interface Mentor {
  id: string
  name: string
  year: string
  track: string
  identityTag: 'FBA' | 'UBP'
  avatarColor: string
  initials: string
  courseIds: string[]
  courseHistory: Record<
    string,
    { professor: string; term: string; grade: string }
  >
  specialties: string[]
  strengths: string[]
  karma: number
  replyMinutes: number
}

export interface UserProfile {
  displayName: string
  year: ClassYear
  pathway: Pathway
  interests: string[]
  apCredits: string[]
  goals: string[]
  chatStyle: ChatStyle
  topics: string[]
  onboardingComplete: boolean
}

export interface ChatMessage {
  id: string
  role: 'user' | 'mentor'
  text: string
  timestamp: number
}

export interface MatchSession {
  id: string
  courseId: string
  mentorId: string
  createdAt: number
  unread: number
  messages: ChatMessage[]
  karmaGiven: boolean
  matchScore: number
  matchReasons: string[]
}

export interface MatchResult {
  mentor: Mentor
  score: number
  reasons: string[]
}

export const DEFAULT_PROFILE: UserProfile = {
  displayName: '',
  year: 'first-year',
  pathway: 'assured-enrollment',
  interests: [],
  apCredits: [],
  goals: ['keep-assured'],
  chatStyle: 'either',
  topics: [],
  onboardingComplete: false,
}

export const INTEREST_OPTIONS = [
  'Finance',
  'Consulting',
  'Accounting',
  'Marketing',
  'Entrepreneurship',
  'Operations',
  'Investment Banking',
  'Strategy',
  'Real Estate',
  'International Business',
  'Computer Science',
  'Economics',
  'Public Policy',
  'Psychology',
  'Statistics',
] as const

export const AP_OPTIONS = [
  { id: 'calc', label: 'AP Calculus' },
  { id: 'econ', label: 'AP Macro / Micro' },
  { id: 'stats', label: 'AP Statistics' },
] as const

export const GOAL_OPTIONS = [
  { id: 'keep-assured', label: 'Protect Assured Enrollment (C or better)' },
  { id: 'high-grade', label: 'Aim for a strong grade' },
  { id: 'ap-decision', label: 'Decide AP / transfer credit vs. take at UNC' },
  { id: 'explore-track', label: 'Explore concentration / career track' },
  { id: 'study-system', label: 'Build a sustainable study system' },
] as const

export const TOPIC_OPTIONS = [
  'Exams & grading',
  'First 3 weeks',
  'Recitation / labs',
  'Professor style',
  'Recruiting impact',
  'Time management',
] as const
