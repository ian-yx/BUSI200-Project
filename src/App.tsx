import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { Navbar, type NavTab } from './components/Navbar'
import { CourseCard } from './components/CourseCard'
import { SyllabusModal } from './components/SyllabusModal'
import { MatchCardModal } from './components/MatchCardModal'
import { ChatPanel } from './components/ChatPanel'
import { ShowcaseInfoModal } from './components/ShowcaseInfoModal'
import { useLocalStorage } from './hooks/useLocalStorage'
import {
  FILTER_OPTIONS,
  filterCourses,
  getCourseById,
  getMentorById,
  type ChatMessage,
  type Course,
  type FilterTag,
  type MatchSession,
  type Mentor,
} from './data/uncCourses'

export default function App() {
  const [tab, setTab] = useState<NavTab>('courses')
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<FilterTag>('all')
  const [syllabusCourse, setSyllabusCourse] = useState<Course | null>(null)
  const [matchCourse, setMatchCourse] = useState<Course | null>(null)
  const [showShowcase, setShowShowcase] = useState(false)
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null)
  const [sessions, setSessions] = useLocalStorage<MatchSession[]>(
    'tarheel-coursematch-sessions',
    [],
  )

  const filtered = useMemo(
    () => filterCourses(query, filter),
    [query, filter],
  )

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
    setMatchCourse(course)
  }

  const confirmMatch = (mentor: Mentor) => {
    if (!matchCourse) return
    const existing = sessions.find(
      (s) => s.courseId === matchCourse.id && s.mentorId === mentor.id,
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
      mentorId: mentor.id,
      createdAt: Date.now(),
      unread: 0,
      messages: [],
      karmaGiven: false,
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

  const handleUserSend = (text: string) => {
    if (!activeSessionId) return
    const msg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      text,
      timestamp: Date.now(),
    }
    updateSession(activeSessionId, (s) => ({
      ...s,
      messages: [...s.messages, msg],
    }))
  }

  const handleMentorReply = (text: string) => {
    if (!activeSessionId) return
    const msg: ChatMessage = {
      id: `m-${Date.now()}`,
      role: 'mentor',
      text,
      timestamp: Date.now(),
    }
    updateSession(activeSessionId, (s) => ({
      ...s,
      messages: [...s.messages, msg],
      unread: activeSessionId === s.id ? s.unread : s.unread + 1,
    }))
  }

  const openSession = (id: string) => {
    setActiveSessionId(id)
    updateSession(id, (s) => ({ ...s, unread: 0 }))
  }

  return (
    <div className="flex min-h-svh flex-col bg-surface">
      <Navbar
        activeTab={tab}
        onTabChange={setTab}
        unreadCount={unreadCount}
        onOpenShowcase={() => setShowShowcase(true)}
      />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-5 sm:px-6 sm:py-8">
        {tab === 'courses' ? (
          <section>
            <div className="mb-5">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                商科课程指数库
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                聚焦 Kenan-Flagler 大一核心课与 Assured Enrollment
                先修课，一眼看清真实负荷、AI 政策与保席底线。
              </p>
            </div>

            <div className="mb-4">
              <label className="relative block">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="搜索课程代码、中英文课名或教授（如 BUSI 200、ECON 101）"
                  className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 text-sm outline-none ring-carolina placeholder:text-slate-400 focus:ring-2"
                />
              </label>
            </div>

            <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
              {FILTER_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setFilter(opt.id)}
                  className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition sm:text-sm ${
                    filter === opt.id
                      ? 'bg-navy text-white'
                      : 'border border-border bg-white text-slate-600 hover:border-carolina/50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-white px-6 py-16 text-center text-sm text-slate-500">
                没有找到匹配课程，试试更换关键词或筛选标签。
              </div>
            ) : (
              <div className="grid gap-4 lg:grid-cols-2">
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
            onOpen={openSession}
            onGoCourses={() => setTab('courses')}
          />
        )}
      </main>

      <footer className="border-t border-border bg-white px-4 py-4 text-center text-[11px] leading-relaxed text-slate-500 sm:text-xs">
        BUSI 200 Carolina Changemaking Challenge 小组原型项目 · 专为 UNC
        商学院大一新生选课互助设计
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
          onClose={() => setMatchCourse(null)}
          onConfirmMatch={confirmMatch}
        />
      )}

      {activeSession && activeCourse && activeMentor && (
        <ChatPanel
          course={activeCourse}
          mentor={activeMentor}
          messages={activeSession.messages}
          karmaGiven={activeSession.karmaGiven}
          onClose={() => setActiveSessionId(null)}
          onSend={handleUserSend}
          onMentorReply={handleMentorReply}
          onGiveKarma={() =>
            updateSession(activeSession.id, (s) => ({
              ...s,
              karmaGiven: true,
            }))
          }
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
      <section className="rounded-2xl border border-dashed border-border bg-white px-6 py-16 text-center">
        <h2 className="text-xl font-bold text-navy">还没有匹配卡</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
          去课程指数库选择一门课，点击「1v1 匹配修过课的商学院学长」，即可生成专属连接。
        </p>
        <button
          type="button"
          onClick={onGoCourses}
          className="mt-5 rounded-xl bg-carolina px-5 py-2.5 text-sm font-bold text-white hover:bg-carolina-dark"
        >
          前往商科课程指数库
        </button>
      </section>
    )
  }

  return (
    <section>
      <h2 className="mb-1 text-2xl font-bold text-navy">我的匹配卡与私信</h2>
      <p className="mb-5 text-sm text-slate-600">
        已建立的课程专属连接，点击即可继续微聊。
      </p>
      <div className="space-y-3">
        {sessions.map((session) => {
          const course = getCourseById(session.courseId)
          const mentor = getMentorById(session.mentorId)
          if (!course || !mentor) return null
          return (
            <button
              key={session.id}
              type="button"
              onClick={() => onOpen(session.id)}
              className="flex w-full items-center gap-3 rounded-2xl border border-border bg-white p-4 text-left transition hover:border-carolina/40 hover:shadow-sm"
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: mentor.avatarColor }}
              >
                {mentor.initials}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="truncate font-bold text-navy">
                    {mentor.nameZh} · {course.code}
                  </p>
                  {session.unread > 0 && (
                    <span className="rounded-full bg-rose-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                      {session.unread}
                    </span>
                  )}
                </div>
                <p className="truncate text-xs text-slate-500">
                  {mentor.year} · {mentor.track} ·{' '}
                  {session.messages.length > 0
                    ? session.messages[session.messages.length - 1].text
                    : '匹配成功，点击开启破冰微聊'}
                </p>
              </div>
              <span className="shrink-0 text-xs font-semibold text-carolina">
                进入聊天
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
