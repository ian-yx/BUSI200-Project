import { ExternalLink, FileText, Sparkles } from 'lucide-react'
import type { Course } from '../data/uncCourses'

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
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-4 shadow-sm transition hover:border-carolina/40 hover:shadow-md sm:p-5">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-sm font-bold text-carolina">
              {course.code}
            </span>
            <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-600">
              {course.credits} cr
            </span>
          </div>
          <h3 className="mt-1 text-base font-semibold leading-snug text-navy">
            {course.title}
          </h3>
          <p className="mt-1 text-xs text-slate-500">{course.category}</p>
        </div>
        <DifficultyDots value={course.difficulty} />
      </div>

      <p className="text-xs text-slate-500">{course.professors.join(' · ')}</p>

      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
        {course.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-slate-500">
        <span className="rounded-md bg-surface px-2 py-1">{course.format}</span>
        {course.genEd && (
          <span className="rounded-md bg-surface px-2 py-1">
            {course.genEd}
          </span>
        )}
      </div>

      <p className="mt-3 border-l-2 border-carolina/50 pl-2.5 text-xs leading-relaxed text-slate-600">
        {course.tip}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {course.syllabusUrl && (
          <a
            href={course.syllabusUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:border-carolina/40 hover:text-navy"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Official link
          </a>
        )}
        <button
          type="button"
          onClick={() => onOpenSyllabus(course)}
          className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-navy hover:bg-slate-50"
        >
          <FileText className="h-3.5 w-3.5" />
          Breakdown
        </button>
        <button
          type="button"
          onClick={() => onMatch(course)}
          className="ml-auto inline-flex items-center gap-1.5 rounded-md bg-carolina px-3 py-1.5 text-xs font-semibold text-white hover:bg-carolina-dark"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Find my match
        </button>
      </div>
    </article>
  )
}

function DifficultyDots({ value }: { value: number }) {
  const filled = Math.round(value)
  return (
    <div
      className="shrink-0 text-right"
      title={`Peer difficulty ${value.toFixed(1)} / 5`}
    >
      <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
        Diff {value.toFixed(1)}
      </p>
      <div className="mt-1 flex justify-end gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full ${
              i < filled ? 'bg-navy' : 'bg-slate-200'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
