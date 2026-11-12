import { useMemo, useState } from 'react'
import {
  BadgeCheck,
  CheckCircle2,
  Clock3,
  MessageSquareHeart,
  X,
} from 'lucide-react'
import type { Course, Mentor } from '../data/uncCourses'
import { getMentorsForCourse } from '../data/uncCourses'

interface MatchCardModalProps {
  course: Course
  onClose: () => void
  onConfirmMatch: (mentor: Mentor) => void
}

export function MatchCardModal({
  course,
  onClose,
  onConfirmMatch,
}: MatchCardModalProps) {
  const mentors = useMemo(() => getMentorsForCourse(course.id), [course.id])
  const [selectedId, setSelectedId] = useState(mentors[0]?.id ?? '')
  const [successMentor, setSuccessMentor] = useState<Mentor | null>(null)

  const selected = mentors.find((m) => m.id === selectedId) ?? mentors[0]

  const handleConfirm = () => {
    if (!selected) return
    setSuccessMentor(selected)
    window.setTimeout(() => {
      onConfirmMatch(selected)
    }, 1400)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-navy/50 p-0 sm:items-center sm:p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="animate-slide-up sm:animate-scale-in relative custom-scroll max-h-[92svh] w-full max-w-3xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {successMentor && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/95 p-6 backdrop-blur-sm">
            <div className="animate-scale-in max-w-sm text-center">
              <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" />
              <h3 className="mt-3 text-xl font-bold text-navy">匹配成功！</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                双方已建立课程专属连接
                <br />
                正在进入与 {successMentor.nameZh}（{successMentor.nameEn}）的
                1v1 微聊室…
              </p>
            </div>
          </div>
        )}

        <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-border bg-white/95 px-5 py-4 backdrop-blur">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-carolina">
              Peer Match Cards
            </p>
            <h2 className="text-lg font-bold text-navy sm:text-xl">
              为【{course.code}】匹配修过课的商学院学长学姐
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              支持卡片对比选择 · 轻量微聊 · 无社交压力
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100"
            aria-label="关闭"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
          {mentors.map((mentor) => (
            <MentorCard
              key={mentor.id}
              mentor={mentor}
              course={course}
              selected={selected?.id === mentor.id}
              onSelect={() => setSelectedId(mentor.id)}
            />
          ))}
        </div>

        {selected && (
          <div className="sticky bottom-0 border-t border-border bg-white px-5 py-4">
            <button
              type="button"
              onClick={handleConfirm}
              disabled={!!successMentor}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-carolina py-3 text-sm font-bold text-white transition hover:bg-carolina-dark disabled:opacity-70"
            >
              <MessageSquareHeart className="h-4 w-4" />
              生成匹配卡并开启私信 · {selected.nameZh}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function MentorCard({
  mentor,
  course,
  selected,
  onSelect,
}: {
  mentor: Mentor
  course: Course
  selected: boolean
  onSelect: () => void
}) {
  const history = mentor.courseHistory[course.id]

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`rounded-2xl border p-4 text-left transition ${
        selected
          ? 'border-carolina bg-carolina/5 shadow-md ring-2 ring-carolina/30'
          : 'border-border bg-white hover:border-carolina/40'
      }`}
    >
      <div className="mb-3 flex items-start gap-3">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: mentor.avatarColor }}
        >
          {mentor.initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-bold text-navy">
              {mentor.nameZh}
              <span className="ml-1 font-medium text-slate-500">
                {mentor.nameEn}
              </span>
            </h3>
            <span className="rounded-full bg-navy px-2 py-0.5 text-[10px] font-bold text-white">
              {mentor.matchScore}% 契合度
            </span>
          </div>
          <p className="mt-0.5 text-xs text-slate-600">
            {mentor.year} · {mentor.track}
          </p>
          <p className="mt-1 text-[11px] font-medium text-carolina">
            {mentor.identityTag}
          </p>
        </div>
      </div>

      <div className="mb-3 flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 text-[11px] font-medium text-emerald-800">
        <BadgeCheck className="h-3.5 w-3.5 shrink-0" />
        ✓ @unc.edu 实名认证 · Kenan-Flagler UBP 学长/学姐
      </div>

      {history && (
        <p className="mb-3 rounded-xl bg-navy px-3 py-2 text-xs leading-relaxed text-white">
          <span className="text-carolina">已修读：</span>
          {course.code} · {history.professor}（{history.term} · 成绩{' '}
          {history.grade}）
        </p>
      )}

      <div className="mb-3 flex flex-wrap gap-1.5">
        {mentor.matchReasons.map((r) => (
          <span
            key={r}
            className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-700"
          >
            {r}
          </span>
        ))}
      </div>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {mentor.specialties.map((s) => (
          <span
            key={s}
            className="rounded-md border border-carolina/30 bg-carolina/10 px-2 py-1 text-[10px] font-semibold text-carolina-dark"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex items-start gap-1.5 text-[11px] leading-relaxed text-slate-500">
        <Clock3 className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        支持 10 分钟轻量微聊（最多 5 轮快速问答，无社交压力）·{' '}
        {mentor.replySpeed}
      </div>
    </button>
  )
}
