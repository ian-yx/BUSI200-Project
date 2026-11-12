import { BadgeCheck, BookOpen, Info, MessageCircle, UserRound } from 'lucide-react'

export type NavTab = 'courses' | 'matches'

interface NavbarProps {
  activeTab: NavTab
  onTabChange: (tab: NavTab) => void
  unreadCount: number
  onOpenShowcase: () => void
  onOpenProfile: () => void
  profileName: string
}

export function Navbar({
  activeTab,
  onTabChange,
  unreadCount,
  onOpenShowcase,
  onOpenProfile,
  profileName,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-navy text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src="./unc-logo.svg"
            alt="University of North Carolina at Chapel Hill"
            className="h-9 w-auto shrink-0 sm:h-10"
          />
          <div className="min-w-0 border-l border-white/20 pl-3">
            <p className="truncate text-sm font-semibold tracking-tight sm:text-base">
              TarHeel CourseMatch
            </p>
            <p className="hidden truncate text-[11px] text-white/65 sm:block">
              Kenan-Flagler · First-year course intel
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onOpenShowcase}
            className="rounded-md p-2 text-white/80 hover:bg-white/10 hover:text-white"
            title="About"
            aria-label="About"
          >
            <Info className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onOpenProfile}
            className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-white/15"
            title="Profile & matching preferences"
          >
            <UserRound className="h-3.5 w-3.5" />
            <span className="hidden max-w-[120px] truncate sm:inline">
              {profileName || 'Profile'}
            </span>
          </button>
          <span
            className="ml-1 inline-flex items-center rounded-md bg-white/10 p-1.5"
            title="Assured Enrollment verified (demo)"
          >
            <BadgeCheck className="h-4 w-4 text-carolina" />
          </span>
        </div>
      </div>

      <nav className="mx-auto flex max-w-6xl border-t border-white/10 px-2 sm:px-4">
        <TabButton
          active={activeTab === 'courses'}
          onClick={() => onTabChange('courses')}
          icon={<BookOpen className="h-3.5 w-3.5" />}
          label="Courses"
        />
        <TabButton
          active={activeTab === 'matches'}
          onClick={() => onTabChange('matches')}
          icon={<MessageCircle className="h-3.5 w-3.5" />}
          label="Matches"
          badge={unreadCount}
        />
      </nav>
    </header>
  )
}

function TabButton({
  active,
  onClick,
  icon,
  label,
  badge,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
  badge?: number
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative inline-flex items-center gap-1.5 border-b-2 px-4 py-2.5 text-sm font-medium transition ${
        active
          ? 'border-carolina text-white'
          : 'border-transparent text-white/65 hover:text-white'
      }`}
    >
      {icon}
      {label}
      {badge != null && badge > 0 && (
        <span className="ml-0.5 rounded-full bg-rose-500 px-1.5 text-[10px] font-bold leading-4 text-white">
          {badge > 9 ? '9+' : badge}
        </span>
      )}
    </button>
  )
}
