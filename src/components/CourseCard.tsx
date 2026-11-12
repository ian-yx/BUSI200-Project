import { Clock3, FileText, Sparkles, Users } from 'lucide-react'
import {
  AI_POLICY_META,
  type Course,
} from '../data/uncCourses'

interface CourseCardProps {
  course: Course
  onOpenSyllabus: (course: Course) => void
  onMatch: (course: Course) => void
}

export function CourseCard({
  course,
  onOpenSyllabus,
  onMatch,
}: CourseCardProps) {
  const ai = AI_POLICY_META[course.aiPolicy]
  const difficultyPct = (course.difficulty / 5) * 100

  return (
    <article className="animate-fade-in flex flex-col rounded-2xl border border-border bg-card p-4 shadow-sm transition hover:border-carolina/40 hover:shadow-md sm:p-5">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-sm font-bold text-carolina">{course.code}</p>
          <h3 className="mt-0.5 text-lg font-bold leading-snug text-navy">
            {course.nameZh}
          </h3>
          <p className="mt-0.5 text-xs text-slate-500">{course.nameEn}</p>
        </div>
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${ai.bg} ${ai.color} ${ai.border}`}
        >
          {ai.label}
        </span>
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        <span className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700">
          {course.category}
        </span>
        <span className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700">
          {course.credits}
        </span>
      </div>

      <p className="mb-4 text-sm text-slate-600">
        授课：{course.professors.join(' / ')}
      </p>

      <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Metric
          icon={<Clock3 className="h-3.5 w-3.5" />}
          label="每周耗时"
          value={course.weeklyHours}
        />
        <Metric
          icon={<FileText className="h-3.5 w-3.5" />}
          label="考试次数"
          value={
            course.examCount === 0 ? '无闭卷考试' : `${course.examCount} 场`
          }
        />
        <Metric
          icon={<Sparkles className="h-3.5 w-3.5" />}
          label="AI 政策"
          value={
            course.aiPolicy === 'green'
              ? '绿灯'
              : course.aiPolicy === 'yellow'
                ? '黄灯'
                : '红灯'
          }
        />
        <div className="rounded-xl border border-border bg-surface px-2.5 py-2">
          <p className="text-[10px] font-medium text-slate-500">综合难度</p>
          <p className="mt-1 text-sm font-bold text-navy">
            {course.difficulty.toFixed(1)} / 5.0
          </p>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-200">
            <div
              className={`h-full rounded-full ${
                course.difficulty < 2.8
                  ? 'bg-emerald-500'
                  : course.difficulty < 3.5
                    ? 'bg-amber-500'
                    : 'bg-rose-500'
              }`}
              style={{ width: `${difficultyPct}%` }}
            />
          </div>
        </div>
      </div>

      <p className="mb-4 line-clamp-2 rounded-xl bg-navy/5 px-3 py-2 text-xs leading-relaxed text-slate-700">
        <span className="font-semibold text-navy">学长避坑：</span>
        {course.tip}
      </p>

      <div className="mt-auto flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => onOpenSyllabus(course)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border bg-white px-3 py-2.5 text-sm font-semibold text-navy transition hover:border-navy/30 hover:bg-slate-50"
        >
          <FileText className="h-4 w-4" />
          查看完整 Syllabus 拆解
        </button>
        <button
          type="button"
          onClick={() => onMatch(course)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-carolina px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-carolina-dark"
        >
          <Users className="h-4 w-4" />
          1v1 匹配修过课的商学院学长
        </button>
      </div>
    </article>
  )
}

function Metric({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="rounded-xl border border-border bg-surface px-2.5 py-2">
      <p className="flex items-center gap-1 text-[10px] font-medium text-slate-500">
        {icon}
        {label}
      </p>
      <p className="mt-1 text-xs font-bold leading-snug text-navy sm:text-sm">
        {value}
      </p>
    </div>
  )
}
