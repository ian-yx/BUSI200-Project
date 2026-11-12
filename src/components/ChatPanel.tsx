import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Award,
  Send,
  Sparkles,
  Timer,
  X,
} from 'lucide-react'
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
      const reply = getMentorReply(course.id, trimmed)
      onMentorReply(reply)
      setTyping(false)
    }, 1200)
  }

  const handleGiveKarma = () => {
    if (karmaGiven) return
    onGiveKarma()
    setShowThanks(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-navy/40">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="关闭聊天"
        onClick={onClose}
      />
      <aside className="animate-slide-up relative flex h-full w-full max-w-md flex-col bg-white shadow-2xl sm:animate-fade-in">
        <div className="border-b border-border bg-navy px-4 py-3 text-white">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold"
                  style={{ backgroundColor: mentor.avatarColor }}
                >
                  {mentor.initials}
                </div>
                <div className="min-w-0">
                  <p className="truncate font-bold">
                    {mentor.nameZh} · {mentor.nameEn}
                  </p>
                  <p className="truncate text-xs text-white/70">
                    {mentor.year} · {mentor.track}
                  </p>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
              aria-label="关闭"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-3 rounded-xl bg-white/10 px-3 py-2 text-xs leading-relaxed text-white/95">
            <p className="flex items-start gap-1.5">
              <Timer className="mt-0.5 h-3.5 w-3.5 shrink-0 text-carolina" />
              正在围绕【{course.code} - {course.professors[0].replace('Prof. ', 'Prof. ')}】进行
              1v1 咨询 | 轻量微聊模式（10分钟快速答疑）
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 border-b border-border bg-surface px-4 py-2">
          <button
            type="button"
            onClick={handleGiveKarma}
            disabled={karmaGiven}
            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition ${
              karmaGiven
                ? 'bg-emerald-50 text-emerald-700'
                : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
            }`}
          >
            <Award className="h-3.5 w-3.5" />
            {karmaGiven ? '已赠送导师积分' : '问题已解决 · 赠送 Tar Heel 导师积分'}
          </button>
          <span className="text-[11px] text-slate-500">
            勋章 {mentor.karma + (karmaGiven ? 1 : 0)}
          </span>
        </div>

        <div className="custom-scroll flex-1 space-y-3 overflow-y-auto px-4 py-4">
          <div className="rounded-xl border border-dashed border-border bg-surface px-3 py-2 text-center text-xs text-slate-500">
            微聊边界：建议控制在 5 轮快速问答内，尊重学长时间
          </div>

          {messages.length === 0 && (
            <div className="rounded-xl bg-carolina/10 px-3 py-3 text-sm text-navy">
              还不知道怎么开口？点下面的破冰话题胶囊即可一键发送。
            </div>
          )}

          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'rounded-br-md bg-carolina text-white'
                    : 'rounded-bl-md border border-border bg-white text-slate-800'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="inline-flex items-center gap-1 rounded-2xl rounded-bl-md border border-border bg-white px-3.5 py-2.5 text-sm text-slate-500">
                学长正在输入中
                <span className="typing-dot">.</span>
                <span className="typing-dot">.</span>
                <span className="typing-dot">.</span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="border-t border-border bg-white px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2">
          <div className="mb-2 flex gap-2 overflow-x-auto pb-1">
            {icebreakers.map((pill) => (
              <button
                key={pill}
                type="button"
                disabled={typing}
                onClick={() => sendText(pill)}
                className="inline-flex shrink-0 items-center gap-1 rounded-full border border-carolina/30 bg-carolina/10 px-3 py-1.5 text-[11px] font-medium text-navy transition hover:bg-carolina/20 disabled:opacity-50"
              >
                <Sparkles className="h-3 w-3 text-carolina" />
                {pill.length > 28 ? `${pill.slice(0, 28)}…` : pill}
              </button>
            ))}
          </div>

          <form
            className="flex items-end gap-2"
            onSubmit={(e) => {
              e.preventDefault()
              sendText(input)
            }}
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={2}
              placeholder="输入你的问题（中英文均可）…"
              className="flex-1 resize-none rounded-xl border border-border bg-surface px-3 py-2 text-sm outline-none ring-carolina focus:ring-2"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-carolina text-white transition hover:bg-carolina-dark disabled:opacity-50"
              aria-label="发送"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>

        {showThanks && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-navy/40 p-6">
            <div className="animate-scale-in w-full max-w-sm rounded-2xl bg-white p-5 text-center shadow-xl">
              <Award className="mx-auto h-12 w-12 text-amber-500" />
              <h3 className="mt-3 text-lg font-bold text-navy">感谢已送达！</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {mentor.nameZh} 累计获得「Kenan-Flagler 领航员徽章」。
                高年级学长入驻平台可积累领导力履历，写入简历 / LinkedIn。
              </p>
              <button
                type="button"
                onClick={() => setShowThanks(false)}
                className="mt-4 w-full rounded-xl bg-navy py-2.5 text-sm font-semibold text-white"
              >
                继续微聊
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  )
}
