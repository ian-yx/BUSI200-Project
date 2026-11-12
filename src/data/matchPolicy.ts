/** Knowledge-base matching policy (demo-safe, no live LLM required). */

export interface MatchPolicyRule {
  id: string
  title: string
  weight: string
  detail: string
}

export const MATCH_POLICY = {
  version: '1.0',
  name: 'CourseMatch Knowledge-Base Matching Policy',
  summary:
    'Peers are ranked by structured rules over your profile and course history—not by anonymous ratings or an open LLM. Suggested chat answers come from a curated UNC course knowledge base with keyword routing.',
  principles: [
    'Prefer verified UBP / FBA peers who completed the exact course.',
    'Optimize for Assured Enrollment grade-floor questions when that goal is selected.',
    'Keep chats bounded (≈10 minutes / up to 5 turns) to reduce social friction.',
    'Use catalog-backed course facts; label section-specific grading as typical.',
  ],
  rules: [
    {
      id: 'pathway',
      title: 'Pathway affinity',
      weight: 'High',
      detail:
        '+14 if you are Assured Enrollment / FBA and the peer is FBA; +6 for active UBP mentors otherwise.',
    },
    {
      id: 'interest',
      title: 'Career interest overlap',
      weight: 'High',
      detail:
        '+12 when your selected interests overlap the peer’s track (Finance, Consulting, CS-adjacent quant, etc.).',
    },
    {
      id: 'course-history',
      title: 'Course completion quality',
      weight: 'High',
      detail:
        'Bonus scales with the peer’s grade in this course (A ≈ +12). Always show professor + term when available.',
    },
    {
      id: 'assured-goals',
      title: 'Assured Enrollment goals',
      weight: 'Medium',
      detail:
        '+6 when you mark “Protect Assured Enrollment”; peers strong on C-or-better guidance rank up.',
    },
    {
      id: 'ap-placement',
      title: 'AP / placement decisions',
      weight: 'Medium',
      detail:
        '+8 when you have AP credits or an AP-decision goal and the peer lists AP/placement specialties.',
    },
    {
      id: 'chat-style',
      title: 'Chat style & latency',
      weight: 'Low–Medium',
      detail:
        'Quick-tips users prefer peers who usually reply in ≤6 minutes; deep-dive users prefer thorough mentors.',
    },
    {
      id: 'topic-fit',
      title: 'Topic preferences',
      weight: 'Low',
      detail:
        'Small boosts for exams, first-three-weeks, labs, and other topics you selected in Profile.',
    },
    {
      id: 'karma',
      title: 'Mentor karma',
      weight: 'Low',
      detail:
        'Small boost from accumulated Navigator karma so active helpers surface more often.',
    },
  ] as MatchPolicyRule[],
  output: [
    'Return the top 1–3 peers (never a random cold list of everyone).',
    'Show match % and plain-language reasons (“Why this peer”).',
    'Chat replies: keyword-route into the course knowledge base (first weeks, exams, AP, workload, AI/Honor Code, Assured Enrollment, etc.).',
    'If no keyword hits, fall back to a general course tip—never invent official policy.',
  ],
  nonGoals: [
    'Not a replacement for Academic Advising or the Registrar.',
    'Not RateMyProfessors-style anonymous reviews.',
    'Not an unrestricted AI chatbot for the BUSI 200 demo.',
  ],
} as const
