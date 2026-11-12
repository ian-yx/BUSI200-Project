import { Lightbulb, Shield, Target, X } from 'lucide-react'

interface ShowcaseInfoModalProps {
  onClose: () => void
}

export function ShowcaseInfoModal({ onClose }: ShowcaseInfoModalProps) {
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
      >
        <div className="sticky top-0 flex items-start justify-between gap-3 border-b border-border bg-white/95 px-5 py-4 backdrop-blur">
          <div>
            <p className="text-xs font-semibold text-carolina">
              BUSI 200 · Carolina Changemaking Challenge
            </p>
            <h2 className="text-xl font-bold text-navy">项目设计理念（Demo 说明）</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
            aria-label="关闭"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 px-5 py-5">
          <p className="text-sm leading-relaxed text-slate-700">
            TarHeel CourseMatch
            专为 UNC Kenan-Flagler 商学院大一新生（尤其是 FBA Assured
            Enrollment）设计：把「看不清真实工作量」的 Syllabus
            变成可对比指数，并把「不敢私信学长」变成有边界的 10
            分钟微聊。
          </p>

          <IdeaCard
            icon={<Target className="h-5 w-5 text-carolina" />}
            title="系统思考杠杆点"
            body="不试图替代 Academic Advisor，也不复制 RateMyProfessors 的匿名极端评价；杠杆放在「结构化课程真相 + 实名学长短连接」——用最少社交成本，打通新生与 UBP 学长之间的信息不对称。"
          />

          <IdeaCard
            icon={<Shield className="h-5 w-5 text-emerald-600" />}
            title="防尴尬机制"
            body="破冰话题胶囊一键发送、微聊轮次与 10 分钟边界提示、Mentor Karma 勋章激励学长参与。新生不怕冷开场，学长不怕被无限打扰。"
          />

          <IdeaCard
            icon={<Lightbulb className="h-5 w-5 text-amber-600" />}
            title="原型演示路径建议"
            body="① 在指数库筛选 ECON 101 / BUSI 200 → ② 打开 Syllabus 拆解看保席底线 → ③ 匹配学长卡片 → ④ 点破冰胶囊体验拟真回复 → ⑤ 赠送导师积分查看激励闭环。"
          />

          <div className="rounded-xl border border-border bg-surface px-4 py-3 text-xs leading-relaxed text-slate-600">
            本原型为纯前端演示：内置 UNC 商学院大一核心/先修模拟数据，匹配与私信状态保存在浏览器
            localStorage，无需后端即可部署到 GitHub Pages。
          </div>
        </div>
      </div>
    </div>
  )
}

function IdeaCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode
  title: string
  body: string
}) {
  return (
    <section className="rounded-2xl border border-border bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center gap-2">
        {icon}
        <h3 className="font-bold text-navy">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-slate-600">{body}</p>
    </section>
  )
}
