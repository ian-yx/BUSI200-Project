import { useEffect, useState } from 'react'
import { BadgeCheck, CheckCircle2, Loader2, Sparkles, X } from 'lucide-react'
import {
  findBestMatch,
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

export function MatchCardModal({
  course,
  profile,
  onClose,
  onConfirmMatch,
  onEditProfile,
}: MatchCardModalProps) {
  const [phase, setPhase] = useState<Phase>('scanning')
  const [result, setResult] = useState<MatchResult | null>(null)
  const [connecting, setConnecting] = useState(false)

  useEffect(() => {
    const match = findBestMatch(course.id, profile)
    const timer = window.setTimeout(() => {
      setResult(match)
      setPhase('ready')
    }, 1400)
    return () => window.clearTimeout(timer)
  }, [course.id, profile])

  const handleConnect = () => {
    if (!result) return
    setConnecting(true)
    window.setTimeout(() => onConfirmMatch(result), 900)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-navy/40 sm:items-center sm:p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-t-xl bg-white shadow-xl sm:rounded-xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {connecting && result && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/95 p-6">
            <div className="text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
              <h3 className="mt-2 text-lg font-semibold text-navy">Connected</h3>
              <p className="mt-1 text-sm text-slate-600">
                Opening chat with {result.mentor.name}…
              </p>
            </div>
          </div>
        )}

        <div className="flex items-start justify-between border-b border-border px-5 py-4">
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

        {phase === 'scanning' || !result ? (
          <div className="flex flex-col items-center px-6 py-12 text-center">
            <Loader2 className="h-10 w-10 animate-spin text-carolina" />
            <p className="mt-4 text-sm font-medium text-navy">
              Matching you with a peer for {course.code}…
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Using your pathway, interests, AP credits, and goals
            </p>
          </div>
        ) : (
          <div className="px-5 py-5">
            <div className="flex items-center gap-3">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: result.mentor.avatarColor }}
              >
                {result.mentor.initials}
              </div>
              <div className="min-w-0">
                <p className="flex items-center gap-1.5 font-semibold text-navy">
                  {result.mentor.name}
                  <BadgeCheck
                    className="h-4 w-4 text-carolina"
                    aria-label="Verified UNC email"
                  />
                </p>
                <p className="text-xs text-slate-500">
                  {result.mentor.year} · {result.mentor.track} ·{' '}
                  {result.mentor.identityTag}
                </p>
                <p className="mt-1 text-sm font-semibold text-carolina">
                  {result.score}% match
                </p>
              </div>
            </div>

            {result.mentor.courseHistory[course.id] && (
              <p className="mt-4 rounded-lg bg-navy px-3 py-2 text-xs text-white">
                Took {course.code} with{' '}
                {result.mentor.courseHistory[course.id].professor} ·{' '}
                {result.mentor.courseHistory[course.id].term} ·{' '}
                {result.mentor.courseHistory[course.id].grade}
              </p>
            )}

            <div className="mt-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Why this peer
              </p>
              <ul className="mt-2 space-y-1.5">
                {result.reasons.map((r) => (
                  <li
                    key={r}
                    className="flex gap-2 text-sm text-slate-700"
                  >
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-carolina" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              10-min micro-chat · up to 5 turns · no cold-DM pressure
            </p>

            <div className="mt-5 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleConnect}
                disabled={connecting}
                className="w-full rounded-md bg-carolina py-2.5 text-sm font-semibold text-white hover:bg-carolina-dark disabled:opacity-60"
              >
                Start micro-chat
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
