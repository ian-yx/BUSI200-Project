import { X } from 'lucide-react'
import {
  AP_OPTIONS,
  GOAL_OPTIONS,
  INTEREST_OPTIONS,
  TOPIC_OPTIONS,
  type UserProfile,
} from '../data/uncCourses'

interface ProfileModalProps {
  profile: UserProfile
  onChange: (profile: UserProfile) => void
  onClose: () => void
}

export function ProfileModal({ profile, onChange, onClose }: ProfileModalProps) {
  const update = (patch: Partial<UserProfile>) =>
    onChange({ ...profile, ...patch, onboardingComplete: true })

  const toggle = (key: 'interests' | 'apCredits' | 'goals' | 'topics', id: string) => {
    const set = new Set(profile[key])
    if (set.has(id)) set.delete(id)
    else set.add(id)
    update({ [key]: Array.from(set) })
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-navy/40 sm:items-center sm:p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="custom-scroll max-h-[92svh] w-full max-w-lg overflow-y-auto rounded-t-xl bg-white shadow-xl sm:rounded-xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="sticky top-0 flex items-start justify-between border-b border-border bg-white px-5 py-4">
          <div>
            <h2 className="text-lg font-semibold text-navy">Your profile</h2>
            <p className="text-xs text-slate-500">
              Powers peer matching · saved on this device
            </p>
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

        <div className="space-y-5 px-5 py-5">
          <Field label="Display name">
            <input
              value={profile.displayName}
              onChange={(e) => update({ displayName: e.target.value })}
              placeholder="How peers should see you"
              className="w-full rounded-md border border-border px-3 py-2 text-sm outline-none focus:border-carolina"
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Class year">
              <select
                value={profile.year}
                onChange={(e) =>
                  update({ year: e.target.value as UserProfile['year'] })
                }
                className="w-full rounded-md border border-border px-3 py-2 text-sm"
              >
                <option value="first-year">First-year</option>
                <option value="sophomore">Sophomore</option>
                <option value="junior">Junior</option>
                <option value="senior">Senior</option>
              </select>
            </Field>
            <Field label="Pathway">
              <select
                value={profile.pathway}
                onChange={(e) =>
                  update({ pathway: e.target.value as UserProfile['pathway'] })
                }
                className="w-full rounded-md border border-border px-3 py-2 text-sm"
              >
                <option value="assured-enrollment">Assured Enrollment / FBA</option>
                <option value="pre-business">Pre-business (apply later)</option>
                <option value="exploring">Exploring business</option>
                <option value="other">Other</option>
              </select>
            </Field>
          </div>

          <Field label="Career interests">
            <ChipGroup
              options={[...INTEREST_OPTIONS]}
              selected={profile.interests}
              onToggle={(id) => toggle('interests', id)}
            />
          </Field>

          <Field label="AP / placement credit">
            <ChipGroup
              options={AP_OPTIONS.map((o) => o.label)}
              selected={profile.apCredits.map(
                (id) => AP_OPTIONS.find((o) => o.id === id)?.label ?? id,
              )}
              onToggle={(label) => {
                const opt = AP_OPTIONS.find((o) => o.label === label)
                if (opt) toggle('apCredits', opt.id)
              }}
            />
          </Field>

          <Field label="Goals">
            <div className="space-y-2">
              {GOAL_OPTIONS.map((g) => (
                <label
                  key={g.id}
                  className="flex cursor-pointer items-start gap-2 text-sm text-slate-700"
                >
                  <input
                    type="checkbox"
                    checked={profile.goals.includes(g.id)}
                    onChange={() => toggle('goals', g.id)}
                    className="mt-0.5"
                  />
                  {g.label}
                </label>
              ))}
            </div>
          </Field>

          <Field label="Chat style">
            <div className="flex flex-wrap gap-2">
              {(
                [
                  ['quick-tips', 'Quick tips'],
                  ['deep-dive', 'Deep dive'],
                  ['either', 'Either'],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => update({ chatStyle: id })}
                  className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
                    profile.chatStyle === id
                      ? 'bg-navy text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </Field>

          <Field label="Topics you care about">
            <ChipGroup
              options={[...TOPIC_OPTIONS]}
              selected={profile.topics}
              onToggle={(id) => toggle('topics', id)}
            />
          </Field>

          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-md bg-carolina py-2.5 text-sm font-semibold text-white hover:bg-carolina-dark"
          >
            Save profile
          </button>
        </div>
      </div>
    </div>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>
      {children}
    </div>
  )
}

function ChipGroup({
  options,
  selected,
  onToggle,
}: {
  options: string[]
  selected: string[]
  onToggle: (id: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => {
        const active = selected.includes(opt)
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onToggle(opt)}
            className={`rounded-full px-2.5 py-1 text-xs font-medium ${
              active
                ? 'bg-carolina text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}
