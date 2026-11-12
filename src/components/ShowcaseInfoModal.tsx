import { X } from 'lucide-react'

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

        <div className="space-y-4 px-5 py-5 text-sm leading-relaxed text-slate-700">
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
              <strong className="text-navy">Demo path:</strong> filter a prereq →
              open syllabus → match → send a prompt → mark resolved.
            </li>
          </ul>
          <p className="text-xs text-slate-400">
            Front-end prototype with catalog-based mock data and localStorage.
            Not an official UNC or Kenan-Flagler product.
          </p>
        </div>
      </div>
    </div>
  )
}
