import { BookOpen, Info, MessageCircle, ShieldCheck } from 'lucide-react'

export type NavTab = 'courses' | 'matches'

interface NavbarProps {
  activeTab: NavTab
  onTabChange: (tab: NavTab) => void
  unreadCount: number
  onOpenShowcase: () => void
}

export function Navbar({
  activeTab,
  onTabChange,
  unreadCount,
  onOpenShowcase,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy text-sm font-bold text-white">
                TH
              </div>
              <div className="min-w-0">
                <h1 className="truncate text-base font-bold tracking-tight text-navy sm:text-lg">
                  TarHeel CourseMatch
                </h1>
                <p className="truncate text-xs text-slate-500 sm:text-sm">
                  UNC 商学院大一选课互助与大纲指数库
                </p>
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={onOpenShowcase}
              className="hidden items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-2 text-xs font-medium text-navy transition hover:border-carolina hover:text-carolina sm:inline-flex"
            >
              <Info className="h-3.5 w-3.5" />
              项目设计理念（Demo 说明）
            </button>
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 text-[11px] font-medium text-emerald-800 sm:text-xs">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
              <span className="hidden max-w-[220px] truncate sm:inline">
                Onyen 已认证：大一新生 (KFBS Assured Enrollment)
              </span>
              <span className="sm:hidden">Onyen 已认证</span>
            </div>
          </div>
        </div>

        <nav className="flex gap-1 overflow-x-auto pb-0.5">
          <TabButton
            active={activeTab === 'courses'}
            onClick={() => onTabChange('courses')}
            icon={<BookOpen className="h-4 w-4" />}
            label="商科课程指数库"
          />
          <TabButton
            active={activeTab === 'matches'}
            onClick={() => onTabChange('matches')}
            icon={<MessageCircle className="h-4 w-4" />}
            label="我的匹配卡与私信"
            badge={unreadCount}
          />
          <button
            type="button"
            onClick={onOpenShowcase}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 sm:hidden"
          >
            <Info className="h-4 w-4" />
            Demo 说明
          </button>
        </nav>
      </div>
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
      className={`relative inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
        active
          ? 'bg-navy text-white shadow-sm'
          : 'text-slate-600 hover:bg-slate-100'
      }`}
    >
      {icon}
      {label}
      {badge != null && badge > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
          {badge > 9 ? '9+' : badge}
        </span>
      )}
    </button>
  )
}
