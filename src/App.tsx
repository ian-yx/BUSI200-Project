import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { Navbar, type NavTab } from './components/Navbar'
import { CourseCard } from './components/CourseCard'
import { SyllabusModal } from './components/SyllabusModal'
import { MatchCardModal } from './components/MatchCardModal'
import { ChatPanel } from './components/ChatPanel'
import { ShowcaseInfoModal } from './components/ShowcaseInfoModal'
import { ProfileModal } from './components/ProfileModal'
import { useLocalStorage } from './hooks/useLocalStorage'
import {
  DEFAULT_PROFILE,
  FILTER_OPTIONS,
  filterCourses,
  getCourseById,
  getMentorById,
  type ChatMessage,
  type Course,
  type FilterTag,
  type MatchResult,
  type MatchSession,
  type UserProfile,
} from './data/uncCourses'

export default function App() {
  const [tab, setTab] = useState<NavTab>('courses')
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<FilterTag>('all')
  const [syllabusCourse, setSyllabusCourse] = useState<Course | null>(null)
  const [matchCourse, setMatchCourse] = useState<Course | null>(null)
  const [showShowcase, setShowShowcase] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null)
  const [profile, setProfile] = useLocalStorage<UserProfile>(
    'tarheel-coursematch-profile-v1',
    DEFAULT_PROFILE,
  )
  const [sessions, setSessions] = useLocalStorage<MatchSession[]>(
    'tarheel-coursematch-v3',
    [],
  )

  const filtered = useMemo(() => filterCourses(query, filter), [query, filter])
  const unreadCount = sessions.reduce((sum, s) => sum + s.unread, 0)
  const activeSession = sessions.find((s) => s.id === activeSessionId) ?? null
  const activeCourse = activeSession
    ? getCourseById(activeSession.courseId)
    : null
  const activeMentor = activeSession
    ? getMentorById(activeSession.mentorId)
    : null

  const openMatch = (course: Course) => {
    setSyllabusCourse(null)
    if (!profile.onboardingComplete && !profile.displayName) {
      setShowProfile(true)
      setMatchCourse(course)
      return
    }
    setMatchCourse(course)
  }

  const confirmMatch = (result: MatchResult) => {
    if (!matchCourse) return
    const existing = sessions.find(
      (s) =>
        s.courseId === matchCourse.id && s.mentorId === result.mentor.id,
    )
    if (existing) {
      setMatchCourse(null)
      setActiveSessionId(existing.id)
      setTab('matches')
      return
    }

    const session: MatchSession = {
      id: `s-${Date.now()}`,
      courseId: matchCourse.id,
      mentorId: result.mentor.id,
      createdAt: Date.now(),
      unread: 0,
      messages: [],
      karmaGiven: false,
      matchScore: result.score,
      matchReasons: result.reasons,
    }
    setSessions((prev) => [session, ...prev])
    setMatchCourse(null)
    setActiveSessionId(session.id)
    setTab('matches')
  }

  const updateSession = (
    id: string,
    updater: (s: MatchSession) => MatchSession,
  ) => {
    setSessions((prev) => prev.map((s) => (s.id === id ? updater(s) : s)))
  }

  return (
    <div className="flex min-h-svh flex-col bg-surface">
      <Navbar
        activeTab={tab}
        onTabChange={setTab}
        unreadCount={unreadCount}
        onOpenShowcase={() => setShowShowcase(true)}
        onOpenProfile={() => setShowProfile(true)}
        profileName={profile.displayName}
      />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-5 sm:px-6 sm:py-8">
        {tab === 'courses' ? (
          <section>
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold text-navy sm:text-2xl">
                  First-year course index
                </h2>
                <p className="mt-0.5 text-sm text-slate-500">
                  FBA Year 1 and UBP prerequisites · catalog-backed
                </p>
              </div>
              {!profile.onboardingComplete && (
                <button
                  type="button"
                  onClick={() => setShowProfile(true)}
                  className="rounded-md border border-carolina/40 bg-carolina/10 px-3 py-1.5 text-xs font-semibold text-navy"
                >
                  Set up matching profile
                </button>
              )}
            </div>

            <div className="mb-3">
              <label className="relative block">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search code, title, or instructor"
                  className="w-full rounded-lg border border-border bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-carolina"
                />
              </label>
            </div>

            <div className="mb-5 flex gap-1.5 overflow-x-auto pb-1">
              {FILTER_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setFilter(opt.id)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold ${
                    filter === opt.id
                      ? 'bg-navy text-white'
                      : 'bg-white text-slate-600 ring-1 ring-border'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <p className="rounded-xl border border-dashed border-border bg-white py-16 text-center text-sm text-slate-500">
                No courses match.
              </p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {filtered.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onOpenSyllabus={setSyllabusCourse}
                    onMatch={openMatch}
                  />
                ))}
              </div>
            )}
          </section>
        ) : (
          <MatchesView
            sessions={sessions}
            onOpen={(id) => {
              setActiveSessionId(id)
              updateSession(id, (s) => ({ ...s, unread: 0 }))
            }}
            onGoCourses={() => setTab('courses')}
          />
        )}
      </main>

      <footer className="border-t border-border bg-white px-4 py-3 text-center text-[11px] text-slate-400">
        BUSI 200 Carolina Changemaking Challenge prototype · Official UNC marks
        used under university web-asset guidelines for academic prototype
        context
      </footer>

      {syllabusCourse && (
        <SyllabusModal
          course={syllabusCourse}
          onClose={() => setSyllabusCourse(null)}
          onMatch={openMatch}
        />
      )}

      {matchCourse && (
        <MatchCardModal
          course={matchCourse}
          profile={profile}
          onClose={() => setMatchCourse(null)}
          onConfirmMatch={confirmMatch}
          onEditProfile={() => {
            setMatchCourse(null)
            setShowProfile(true)
          }}
        />
      )}

      {activeSession && activeCourse && activeMentor && (
        <ChatPanel
          course={activeCourse}
          mentor={activeMentor}
          messages={activeSession.messages}
          karmaGiven={activeSession.karmaGiven}
          matchScore={activeSession.matchScore}
          matchReasons={activeSession.matchReasons}
          onClose={() => setActiveSessionId(null)}
          onSend={(text) => {
            const msg: ChatMessage = {
              id: `u-${Date.now()}`,
              role: 'user',
              text,
              timestamp: Date.now(),
            }
            updateSession(activeSession.id, (s) => ({
              ...s,
              messages: [...s.messages, msg],
            }))
          }}
          onMentorReply={(text) => {
            const msg: ChatMessage = {
              id: `m-${Date.now()}`,
              role: 'mentor',
              text,
              timestamp: Date.now(),
            }
            updateSession(activeSession.id, (s) => ({
              ...s,
              messages: [...s.messages, msg],
            }))
          }}
          onGiveKarma={() =>
            updateSession(activeSession.id, (s) => ({
              ...s,
              karmaGiven: true,
            }))
          }
        />
      )}

      {showProfile && (
        <ProfileModal
          profile={profile}
          onChange={setProfile}
          onClose={() => setShowProfile(false)}
        />
      )}

      {showShowcase && (
        <ShowcaseInfoModal onClose={() => setShowShowcase(false)} />
      )}
    </div>
  )
}

function MatchesView({
  sessions,
  onOpen,
  onGoCourses,
}: {
  sessions: MatchSession[]
  onOpen: (id: string) => void
  onGoCourses: () => void
}) {
  if (sessions.length === 0) {
    return (
      <section className="rounded-xl border border-dashed border-border bg-white px-5 py-14 text-center">
        <h2 className="text-lg font-semibold text-navy">No matches yet</h2>
        <p className="mt-1 text-sm text-slate-500">
          Open a course and tap Find my match.
        </p>
        <button
          type="button"
          onClick={onGoCourses}
          className="mt-4 rounded-md bg-carolina px-4 py-2 text-sm font-semibold text-white"
        >
          Browse courses
        </button>
      </section>
    )
  }

  return (
    <section>
      <h2 className="mb-1 text-xl font-semibold text-navy">Matches</h2>
      <p className="mb-4 text-sm text-slate-500">{sessions.length} active</p>
      <div className="space-y-2">
        {sessions.map((session) => {
          const course = getCourseById(session.courseId)
          const mentor = getMentorById(session.mentorId)
          if (!course || !mentor) return null
          const last = session.messages[session.messages.length - 1]
          return (
            <button
              key={session.id}
              type="button"
              onClick={() => onOpen(session.id)}
              className="flex w-full items-center gap-3 rounded-xl border border-border bg-white p-4 text-left hover:border-carolina/40"
            >
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: mentor.avatarColor }}
              >
                {mentor.initials}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-navy">{mentor.name}</p>
                  <span className="font-mono text-xs text-carolina">
                    {course.code}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {session.matchScore}%
                  </span>
                  {session.unread > 0 && (
                    <span className="rounded-full bg-rose-500 px-1.5 text-[10px] font-bold text-white">
                      {session.unread}
                    </span>
                  )}
                </div>
                <p className="truncate text-xs text-slate-500">
                  {last?.text ?? session.matchReasons[0] ?? 'Matched'}
                </p>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
