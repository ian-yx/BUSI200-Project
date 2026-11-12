import { X } from 'lucide-react'
import { MATCH_POLICY } from '../data/matchPolicy'

interface ShowcaseInfoModalProps {
  onClose: () => void
}

export function ShowcaseInfoModal({ onClose }: ShowcaseInfoModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-navy/40 sm:items-center sm:p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="custom-scroll max-h-[85svh] w-full max-w-lg overflow-y-auto rounded-t-lg bg-white shadow-xl sm:rounded-lg"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-start justify-between border-b border-border px-5 py-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-carolina">
              BUSI 200 · Changemaking Challenge
            </p>
            <h2 className="text-lg font-semibold text-navy">About</h2>
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

        <div className="space-y-5 px-5 py-5 text-sm leading-relaxed text-slate-700">
          <p>
            CourseMatch surfaces syllabus-level signal for Kenan-Flagler
            first-years (Assured Enrollment / FBA) and connects them to verified
            UBP peers for short, bounded chats.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-navy">Leverage:</strong> structured course
              truth + named peer help—not anonymous ratings or advisor overload.
            </li>
            <li>
              <strong className="text-navy">Anti-awkward:</strong> icebreaker
              prompts, 10-minute micro-chat limits, mentor karma for upperclass
              participation.
            </li>
            <li>
              <strong className="text-navy">Coverage:</strong> FBA Year 1, UBP
              prereqs, First-Year Foundations, and common Business double-major
              intros.
            </li>
          </ul>

          <div className="rounded-lg border border-border bg-slate-50 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-carolina">
              Knowledge-base matching · v{MATCH_POLICY.version}
            </p>
            <h3 className="mt-1 text-sm font-semibold text-navy">
              {MATCH_POLICY.name}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              {MATCH_POLICY.summary}
            </p>

            <ul className="mt-3 space-y-1.5">
              {MATCH_POLICY.principles.map((p) => (
                <li
                  key={p}
                  className="flex gap-2 text-xs text-slate-600 before:mt-1.5 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-carolina before:content-['']"
                >
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-4 space-y-2.5 border-t border-border pt-3">
              {MATCH_POLICY.rules.map((rule) => (
                <div key={rule.id}>
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="text-xs font-semibold text-navy">
                      {rule.title}
                    </p>
                    <span className="shrink-0 text-[10px] font-medium uppercase tracking-wide text-slate-400">
                      {rule.weight}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500">
                    {rule.detail}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-3 text-[11px] text-slate-400">
              Not advising · not RateMyProfessors · not an open LLM for this
              demo.
            </p>
          </div>

          <p className="text-xs text-slate-400">
            Front-end prototype with catalog-based mock data and localStorage.
            Not an official UNC or Kenan-Flagler product.
          </p>
        </div>
      </div>
    </div>
  )
}
