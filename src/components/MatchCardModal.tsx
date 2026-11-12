import { useEffect, useMemo, useState } from 'react'
import {
  BadgeCheck,
  CheckCircle2,
  Radar,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
import {
  findTopMatches,
  mentors,
  type Course,
  type MatchResult,
  type UserProfile,
} from '../data/uncCourses'

interface MatchCardModalProps {
  course: Course
  profile: UserProfile
  onClose: () => void
  onConfirmMatch: (result: MatchResult) => void
  onEditProfile: () => void
}

type Phase = 'scanning' | 'ready'

const SCAN_LINES = [
  'Reading your pathway & goals…',
  'Filtering peers who completed this course…',
  'Scoring fit on interests, AP credit, and reply style…',
  'Ranking top matches…',
]

export function MatchCardModal({
  course,
  profile,
  onClose,
  onConfirmMatch,
  onEditProfile,
}: MatchCardModalProps) {
  const [phase, setPhase] = useState<Phase>('scanning')
  const [results, setResults] = useState<MatchResult[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [connecting, setConnecting] = useState(false)
  const [scanLine, setScanLine] = useState(0)
  const [scanPct, setScanPct] = useState(8)

  const previewMentors = useMemo(
    () =>
      mentors
        .filter((m) => m.courseIds.includes(course.id))
        .slice(0, 6),
    [course.id],
  )

  useEffect(() => {
    const matches = findTopMatches(course.id, profile, 3)
    const lineTimer = window.setInterval(() => {
      setScanLine((i) => (i + 1) % SCAN_LINES.length)
    }, 550)
    const pctTimer = window.setInterval(() => {
      setScanPct((p) => Math.min(96, p + 7 + Math.floor(Math.random() * 6)))
    }, 280)
    const doneTimer = window.setTimeout(() => {
      setResults(matches)
      setSelectedId(matches[0]?.mentor.id ?? null)
      setPhase('ready')
      setScanPct(100)
    }, 2400)
    return () => {
      window.clearInterval(lineTimer)
      window.clearInterval(pctTimer)
      window.clearTimeout(doneTimer)
    }
  }, [course.id, profile])

  const selected = results.find((r) => r.mentor.id === selectedId) ?? null

  const handleConnect = () => {
    if (!selected) return
    setConnecting(true)
    window.setTimeout(() => onConfirmMatch(selected), 900)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-navy/40 sm:items-center sm:p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative custom-scroll max-h-[92svh] w-full max-w-lg overflow-y-auto rounded-t-xl bg-white shadow-xl sm:rounded-xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {connecting && selected && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/95 p-6">
            <div className="text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
              <h3 className="mt-2 text-lg font-semibold text-navy">Connected</h3>
              <p className="mt-1 text-sm text-slate-600">
                Opening chat with {selected.mentor.name}…
              </p>
            </div>
          </div>
        )}

        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-border bg-white px-5 py-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-carolina">
              Smart match
            </p>
            <h2 className="text-lg font-semibold text-navy">{course.code}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1.5 text-slate-400 hover:bg-slate-100"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {phase === 'scanning' ? (
          <div className="px-6 py-10 text-center">
            <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
              <div className="absolute inset-0 animate-ping rounded-full bg-carolina/20" />
              <div className="absolute inset-2 animate-pulse rounded-full border-2 border-dashed border-carolina/50" />
              <Radar className="relative h-10 w-10 text-carolina" />
            </div>

            <p className="mt-5 text-sm font-semibold text-navy">
              Matching in progress…
            </p>
            <p className="mt-1 min-h-[1.25rem] text-xs text-slate-500">
              {SCAN_LINES[scanLine]}
            </p>

            <div className="mx-auto mt-5 h-2 w-full max-w-xs overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-carolina transition-all duration-300"
                style={{ width: `${scanPct}%` }}
              />
            </div>
            <p className="mt-2 text-[11px] tabular-nums text-slate-400">
              {scanPct}%
            </p>

            <div className="mt-6 flex justify-center -space-x-2">
              {previewMentors.map((m) => (
                <div
                  key={m.id}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white shadow-sm"
                  style={{ backgroundColor: m.avatarColor }}
                  title={m.name}
                >
                  {m.initials}
                </div>
              ))}
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-[10px] font-bold text-slate-600">
                <Users className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        ) : (
          <div className="px-4 py-4 sm:px-5">
            <p className="mb-3 text-sm text-slate-600">
              We found{' '}
              <span className="font-semibold text-navy">{results.length}</span>{' '}
              strong peer
              {results.length === 1 ? '' : 's'} for {course.code}. Pick one to
              start a 10-min micro-chat.
            </p>

            <div className="space-y-2.5">
              {results.map((result, index) => {
                const active = selectedId === result.mentor.id
                const history = result.mentor.courseHistory[course.id]
                return (
                  <button
                    key={result.mentor.id}
                    type="button"
                    onClick={() => setSelectedId(result.mentor.id)}
                    className={`w-full rounded-xl border p-3.5 text-left transition ${
                      active
                        ? 'border-carolina bg-carolina/5 ring-2 ring-carolina/25'
                        : 'border-border hover:border-carolina/40'
                    }`}
                  >
                    <div className="flex gap-3">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                        style={{ backgroundColor: result.mentor.avatarColor }}
                      >
                        {result.mentor.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {index === 0 && (
                            <span className="rounded bg-navy px-1.5 py-0.5 text-[10px] font-bold text-white">
                              Best fit
                            </span>
                          )}
                          <span className="font-semibold text-navy">
                            {result.mentor.name}
                          </span>
                          <BadgeCheck
                            className="h-3.5 w-3.5 text-carolina"
                            aria-label="Verified"
                          />
                          <span className="ml-auto text-sm font-bold tabular-nums text-carolina">
                            {result.score}%
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs text-slate-500">
                          {result.mentor.year} · {result.mentor.track} ·{' '}
                          {result.mentor.identityTag}
                        </p>
                        {history && (
                          <p className="mt-1.5 text-[11px] text-slate-600">
                            {course.code} · {history.professor} · {history.term}{' '}
                            · {history.grade}
                          </p>
                        )}
                        <div className="mt-2 flex flex-wrap gap-1">
                          {result.reasons.map((r) => (
                            <span
                              key={r}
                              className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-600"
                            >
                              <Sparkles className="h-2.5 w-2.5 text-carolina" />
                              {r}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleConnect}
                disabled={!selected || connecting}
                className="w-full rounded-md bg-carolina py-2.5 text-sm font-semibold text-white hover:bg-carolina-dark disabled:opacity-60"
              >
                Chat with {selected?.mentor.name ?? 'peer'}
              </button>
              <button
                type="button"
                onClick={onEditProfile}
                className="w-full rounded-md border border-border py-2 text-xs font-medium text-slate-600 hover:bg-slate-50"
              >
                Update preferences to rematch
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
