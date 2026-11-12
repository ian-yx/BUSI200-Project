import { useEffect, useMemo, useRef, useState } from 'react'
import { Award, BadgeCheck, Send, X } from 'lucide-react'
import {
  getIcebreakers,
  getMentorReply,
  type ChatMessage,
  type Course,
  type Mentor,
} from '../data/uncCourses'

interface ChatPanelProps {
  course: Course
  mentor: Mentor
  messages: ChatMessage[]
  karmaGiven: boolean
  matchScore?: number
  matchReasons?: string[]
  onClose: () => void
  onSend: (text: string) => void
  onMentorReply: (text: string) => void
  onGiveKarma: () => void
}

export function ChatPanel({
  course,
  mentor,
  messages,
  karmaGiven,
  matchScore,
  matchReasons = [],
  onClose,
  onSend,
  onMentorReply,
  onGiveKarma,
}: ChatPanelProps) {
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const icebreakers = useMemo(() => getIcebreakers(course), [course])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const sendText = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || typing) return
    onSend(trimmed)
    setInput('')
    setTyping(true)
    window.setTimeout(() => {
      onMentorReply(getMentorReply(course.id, trimmed))
      setTyping(false)
    }, 1200)
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-navy/35">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close chat"
        onClick={onClose}
      />
      <aside className="animate-slide-in-right relative flex h-full w-full max-w-md flex-col border-l border-border bg-white shadow-xl">
        <div className="flex items-start justify-between gap-2 border-b border-border px-4 py-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: mentor.avatarColor }}
            >
              {mentor.initials}
            </div>
            <div className="min-w-0">
              <p className="flex items-center gap-1 truncate font-semibold text-navy">
                {mentor.name}
                <BadgeCheck
                  className="h-3.5 w-3.5 shrink-0 text-carolina"
                  aria-label="Verified"
                />
                {matchScore != null && (
                  <span className="text-xs font-semibold text-carolina">
                    {matchScore}%
                  </span>
                )}
              </p>
              <p className="truncate text-xs text-slate-500">
                {course.code} · {mentor.year} · {mentor.track}
              </p>
            </div>
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

        <div className="flex items-center justify-between gap-2 border-b border-border bg-surface px-4 py-2 text-xs text-slate-500">
          <span className="truncate">
            {matchReasons[0] ?? 'Micro-chat · ~10 min'}
          </span>
          <button
            type="button"
            onClick={() => {
              if (karmaGiven) return
              onGiveKarma()
              setShowThanks(true)
            }}
            disabled={karmaGiven}
            className={`inline-flex shrink-0 items-center gap-1 rounded px-2 py-1 font-medium ${
              karmaGiven
                ? 'text-emerald-700'
                : 'text-amber-800 hover:bg-amber-50'
            }`}
          >
            <Award className="h-3.5 w-3.5" />
            {karmaGiven ? 'Thanks sent' : 'Resolved'}
          </button>
        </div>

        <div className="custom-scroll flex-1 space-y-2.5 overflow-y-auto px-4 py-4">
          {messages.length === 0 && (
            <p className="text-center text-xs text-slate-400">
              Pick a prompt below or type your own.
            </p>
          )}

          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[88%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-carolina text-white'
                    : 'border border-border bg-white text-slate-800'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="inline-flex items-center gap-0.5 rounded-lg border border-border px-3 py-2 text-sm text-slate-400">
                <span className="typing-dot">·</span>
                <span className="typing-dot">·</span>
                <span className="typing-dot">·</span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="border-t border-border px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2">
          <div className="mb-2 flex gap-1.5 overflow-x-auto pb-1">
            {icebreakers.map((pill) => (
              <button
                key={pill}
                type="button"
                disabled={typing}
                onClick={() => sendText(pill)}
                className="shrink-0 rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] text-slate-700 hover:border-carolina/40 disabled:opacity-50"
              >
                {pill.length > 42 ? `${pill.slice(0, 42)}…` : pill}
              </button>
            ))}
          </div>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault()
              sendText(input)
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              className="flex-1 rounded-md border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-carolina"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-carolina text-white hover:bg-carolina-dark disabled:opacity-50"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>

        {showThanks && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-navy/30 p-6">
            <div className="w-full max-w-xs rounded-lg bg-white p-5 text-center shadow-lg">
              <Award className="mx-auto h-10 w-10 text-amber-500" />
              <h3 className="mt-2 font-semibold text-navy">Karma sent</h3>
              <p className="mt-1 text-sm text-slate-600">
                {mentor.name} earned a Kenan-Flagler Navigator badge (
                {mentor.karma + 1}).
              </p>
              <button
                type="button"
                onClick={() => setShowThanks(false)}
                className="mt-4 w-full rounded-md bg-navy py-2 text-sm font-semibold text-white"
              >
                Back to chat
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  )
}
