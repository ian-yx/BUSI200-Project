import { useState } from 'react'
import { ExternalLink, X } from 'lucide-react'
import { AI_POLICY_META, type Course } from '../data/uncCourses'

interface SyllabusModalProps {
  course: Course
  onClose: () => void
  onMatch: (course: Course) => void
}

export function SyllabusModal({ course, onClose, onMatch }: SyllabusModalProps) {
  const ai = AI_POLICY_META[course.aiPolicy]
  const [showEmbed, setShowEmbed] = useState(false)
  const embedUrl = course.syllabusUrl

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-navy/40 sm:items-center sm:p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="custom-scroll max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-t-xl bg-white shadow-xl sm:rounded-xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-border bg-white px-5 py-4">
          <div>
            <p className="font-mono text-sm font-bold text-carolina">
              {course.code}
            </p>
            <h2 className="text-lg font-semibold text-navy">{course.title}</h2>
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

        <div className="space-y-5 px-5 py-5 text-sm">
          <div className="flex flex-wrap gap-2">
            <a
              href={course.catalogUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-navy hover:border-carolina/40"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              UNC Catalog
            </a>
            {course.syllabusUrl && (
              <>
                <a
                  href={course.syllabusUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-navy hover:border-carolina/40"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {course.syllabusLabel ?? 'Official syllabus'}
                </a>
                <button
                  type="button"
                  onClick={() => setShowEmbed((v) => !v)}
                  className="rounded-md bg-navy px-2.5 py-1.5 text-xs font-semibold text-white"
                >
                  {showEmbed ? 'Hide preview' : 'Preview official page'}
                </button>
              </>
            )}
          </div>

          {showEmbed && embedUrl && (
            <div className="overflow-hidden rounded-lg border border-border">
              <div className="flex items-center justify-between border-b border-border bg-surface px-3 py-2 text-[11px] text-slate-500">
                <span className="truncate">{embedUrl}</span>
                <a
                  href={embedUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 font-medium text-carolina"
                >
                  Open
                </a>
              </div>
              <iframe
                title={`${course.code} official resource`}
                src={embedUrl}
                className="h-[360px] w-full bg-white"
              />
            </div>
          )}

          <p className="leading-relaxed text-slate-700">{course.description}</p>

          <dl className="grid gap-3 sm:grid-cols-2">
            <Fact label="Credits" value={course.credits} />
            <Fact label="Category" value={course.category} />
            <Fact label="Instructors" value={course.professors.join(', ')} />
            <Fact label="Format" value={course.format} />
            <Fact label="Assessments" value={course.examFormat} />
            <Fact label="Attendance" value={course.attendance} />
            {course.genEd && <Fact label="Gen Ed" value={course.genEd} />}
            <Fact
              label="AI policy"
              value={
                <span className={ai.color}>
                  {ai.label} — {course.aiNote}
                </span>
              }
            />
          </dl>

          <section>
            <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">
              Typical grading mix
            </h3>
            <ul className="divide-y divide-border rounded border border-border">
              {course.gradingBreakdown.map((g) => (
                <li
                  key={g.item}
                  className="flex items-center justify-between px-3 py-2"
                >
                  <span className="text-slate-700">{g.item}</span>
                  <span className="font-medium tabular-nums text-navy">
                    {g.weight}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded border border-amber-200 bg-amber-50 px-3 py-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wide text-amber-800">
              Grade floor
            </h3>
            <p className="mt-1 text-amber-950">{course.gradeFloor}</p>
          </section>

          <section>
            <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">
              Peer notes
            </h3>
            <ul className="space-y-2">
              {course.detailedAdvice.map((tip) => (
                <li
                  key={tip}
                  className="border-l-2 border-slate-200 pl-3 text-slate-700"
                >
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          <p className="text-[11px] text-slate-400">
            Sources: {course.sourceNote}. Embedded pages are official UNC
            resources; some sites may block framing—use Open if preview is blank.
          </p>
        </div>

        <div className="sticky bottom-0 border-t border-border bg-white px-5 py-3">
          <button
            type="button"
            onClick={() => onMatch(course)}
            className="w-full rounded-md bg-carolina py-2.5 text-sm font-semibold text-white hover:bg-carolina-dark"
          >
            Find my match for this course
          </button>
        </div>
      </div>
    </div>
  )
}

function Fact({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <dt className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </dt>
      <dd className="mt-0.5 text-navy">{value}</dd>
    </div>
  )
}
