import { X } from 'lucide-react'
import { AI_POLICY_META, type Course } from '../data/uncCourses'

interface SyllabusModalProps {
  course: Course
  onClose: () => void
  onMatch: (course: Course) => void
}

export function SyllabusModal({ course, onClose, onMatch }: SyllabusModalProps) {
  const ai = AI_POLICY_META[course.aiPolicy]

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-navy/50 p-0 sm:items-center sm:p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="animate-slide-up sm:animate-scale-in custom-scroll max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="syllabus-title"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-border bg-white/95 px-5 py-4 backdrop-blur">
          <div>
            <p className="text-sm font-bold text-carolina">{course.code}</p>
            <h2 id="syllabus-title" className="text-xl font-bold text-navy">
              {course.nameZh}
            </h2>
            <p className="text-xs text-slate-500">{course.nameEn}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-navy"
            aria-label="关闭"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-5 px-5 py-5">
          <div className="flex flex-wrap gap-2">
            <Chip>{course.category}</Chip>
            <Chip>{course.credits}</Chip>
            <Chip>授课：{course.professors.join(' / ')}</Chip>
          </div>

          <section>
            <h3 className="mb-2 text-sm font-bold text-navy">Syllabus 硬核指数</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              <InfoRow label="每周真实耗时" value={course.weeklyHours} />
              <InfoRow label="考试形式" value={course.examFormat} />
              <InfoRow label="考勤严格度" value={course.attendance} />
              <InfoRow
                label="AI 使用红绿灯"
                value={
                  <span
                    className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-semibold ${ai.bg} ${ai.color} ${ai.border}`}
                  >
                    {course.aiPolicyLabel}
                  </span>
                }
              />
              <InfoRow
                label="综合难度系数"
                value={`${course.difficulty.toFixed(1)} / 5.0`}
              />
            </div>
          </section>

          <section>
            <h3 className="mb-2 text-sm font-bold text-navy">评分占比拆解</h3>
            <ul className="space-y-2">
              {course.gradingBreakdown.map((g) => (
                <li
                  key={g.item}
                  className="flex items-center justify-between rounded-xl border border-border bg-surface px-3 py-2 text-sm"
                >
                  <span className="text-slate-700">{g.item}</span>
                  <span className="font-bold text-navy">{g.weight}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
            <h3 className="text-sm font-bold text-amber-900">保席成绩底线</h3>
            <p className="mt-1 text-sm leading-relaxed text-amber-900/90">
              {course.gradeFloor}
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-sm font-bold text-navy">往届真实建议</h3>
            <ul className="space-y-2">
              {course.detailedAdvice.map((tip) => (
                <li
                  key={tip}
                  className="rounded-xl border border-border bg-white px-3 py-2 text-sm leading-relaxed text-slate-700"
                >
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          <p className="rounded-xl bg-navy/5 px-4 py-3 text-sm leading-relaxed text-slate-700">
            <span className="font-semibold text-navy">一句话避坑：</span>
            {course.tip}
          </p>
        </div>

        <div className="sticky bottom-0 border-t border-border bg-white px-5 py-4">
          <button
            type="button"
            onClick={() => onMatch(course)}
            className="w-full rounded-xl bg-carolina py-3 text-sm font-bold text-white transition hover:bg-carolina-dark"
          >
            1v1 匹配修过课的商学院学长
          </button>
        </div>
      </div>
    </div>
  )
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
      {children}
    </span>
  )
}

function InfoRow({
  label,
  value,
}: {
  label: string
  value: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-border bg-surface px-3 py-2.5">
      <p className="text-[11px] font-medium text-slate-500">{label}</p>
      <div className="mt-1 text-sm font-medium leading-snug text-navy">
        {value}
      </div>
    </div>
  )
}
