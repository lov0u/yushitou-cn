import Link from "next/link";
import { craftSteps, techniques, companyInfo } from "@/lib/data";

export const metadata = {
  title: "工艺 / CRAFT — 听山 TIDGE 玉石加工工艺流程",
  description:
    "听山 TIDGE 七道玉雕工序：选料、设计、粗坯、细雕、打磨、抛光、配座。涵盖圆雕、浮雕、透雕、镂雕、阴刻、俏色等八种雕刻技法，慢工出细活。",
};

export default function CraftPage() {
  return (
    <div className="min-h-screen bg-void">
      {/* ============================================
          1. Hero Section
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-void grid-bg noise">
        {/* 背景光晕 */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-moss-400/10 blur-[120px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-neon-jade/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-20 pt-24 lg:px-12 lg:pb-28 lg:pt-32">
          {/* 顶部标签行 */}
          <div className="flex items-center gap-4">
            <span className="tag-cyber">CRAFT</span>
            <span className="h-px w-12 bg-stone" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
              {craftSteps.length} STEPS · {techniques.length} TECHNIQUES
            </span>
          </div>

          {/* 主标题 */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <h1 className="heading-display text-bone">
                工艺
                <span className="text-fade"> /</span>
                <span className="text-liquid"> CRAFT</span>
              </h1>
            </div>
            <div className="flex flex-col justify-end lg:col-span-4">
              <div className="mb-4 flex items-center gap-3">
                <span className="neon-line w-12" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
                  FROM STONE TO ART
                </span>
              </div>
              <p className="max-w-sm font-sans text-sm leading-relaxed text-dust">
                七道工序，环环相扣。从原石到成器，慢工出细活，每一刀皆有讲究。
                以匠心守初心，以时光换温润。
              </p>
            </div>
          </div>

          {/* 底部分割线 */}
          <div className="divider-cyber mt-16" />
        </div>
      </section>

      {/* ============================================
          2. 工艺流程区 — 游戏UI风格竖向节点
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-void py-16 lg:py-24 noise">
        {/* 背景网格 */}
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

        <div className="relative z-10 mx-auto max-w-[1100px] px-6 lg:px-12">
          {/* 标题行 */}
          <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-number">01 / PROCESS</span>
              <h2 className="heading-section mt-3 text-bone">
                工艺流程
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-dust">
              从审玉度材到配座成器，七个节点串联起一件玉雕作品的诞生之旅。
            </p>
          </div>

          {/* 节点流程 — 竖向时间线 */}
          <div className="relative">
            {craftSteps.map((step, i) => (
              <div key={step.id} className="relative flex gap-6 lg:gap-10">
                {/* 左侧：节点 + 连接线 */}
                <div className="relative flex flex-col items-center">
                  {/* 发光节点 */}
                  <div className="glow-node z-10 mt-8 flex-shrink-0" />
                  {/* 竖向连接线 */}
                  {i < craftSteps.length - 1 && (
                    <div
                      className="neon-line-v mt-2 w-px flex-1"
                      style={{ minHeight: "3rem" }}
                    />
                  )}
                </div>

                {/* 右侧：毛玻璃卡片 */}
                <div className="glass glass-hover mb-6 flex-1 p-6 lg:mb-8 lg:p-8">
                  {/* 顶部行：编号 + 工期 */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-baseline gap-4">
                      {/* 大编号 */}
                      <span
                        className="font-mono font-bold leading-none text-neon-jade"
                        style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
                      >
                        {step.code}
                      </span>
                      <div className="flex flex-col">
                        <h3 className="heading-song text-2xl text-bone lg:text-3xl">
                          {step.title}
                        </h3>
                        <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-moss-400">
                          {step.titleEn}
                        </span>
                      </div>
                    </div>

                    {/* 工期 */}
                    <div className="flex flex-col items-end flex-shrink-0">
                      <span className="font-mono text-[9px] tracking-[0.2em] text-fade">
                        DURATION
                      </span>
                      <span className="mt-1 font-mono text-sm text-neon-jade">
                        {step.duration}
                      </span>
                    </div>
                  </div>

                  {/* 简短描述 */}
                  <p className="mt-5 font-song text-base text-moss-400 lg:text-lg">
                    {step.description}
                  </p>

                  {/* 分割线 */}
                  <div className="my-5 h-px w-full bg-stone/50" />

                  {/* 详情文字 */}
                  <p className="text-sm leading-loose text-dust">
                    {step.detail}
                  </p>

                  {/* 工具列表 */}
                  <div className="mt-6">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                        TOOLS
                      </span>
                      <span className="h-px flex-1 bg-stone/40" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {step.tools.map((tool, ti) => (
                        <span key={ti} className="tag-cyber">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 底部装饰 */}
                  <div className="mt-6 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-neon-jade" />
                    <span className="h-px flex-1 bg-stone/30" />
                    <span className="font-mono text-[9px] tracking-[0.2em] text-fade">
                      STEP {step.code} / {String(craftSteps.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 底部装饰线 */}
          <div className="mt-8 flex items-center gap-4">
            <span className="neon-line flex-1" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
              PROCESS COMPLETE
            </span>
            <span className="neon-line flex-1" />
          </div>
        </div>
      </section>

      {/* ============================================
          3. 雕刻技法区
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-carbon py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* 标题行 */}
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-number">02 / TECHNIQUES</span>
              <h2 className="heading-section mt-3 text-bone">
                雕刻技法
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-dust">
              八种雕刻技法，各有千秋。匠人因材施艺，灵活运用，
              将玉料的天然秉性发挥到极致。
            </p>
          </div>

          {/* 技法网格 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techniques.map((tech, i) => (
              <div
                key={i}
                className="jade-card glass-hover group relative p-6 lg:p-7"
              >
                {/* 编号 */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                    T{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-moss-400 transition-colors group-hover:bg-neon-jade" />
                </div>

                {/* 中文名 */}
                <h3 className="mt-6 heading-song text-2xl text-bone transition-colors group-hover:text-neon-jade">
                  {tech.name}
                </h3>

                {/* 英文名 */}
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-fade">
                  {tech.nameEn}
                </span>

                {/* 分割线 */}
                <div className="my-4 h-px w-full bg-stone/50" />

                {/* 描述 */}
                <p className="text-xs leading-relaxed text-dust">
                  {tech.desc}
                </p>

                {/* 底部装饰 */}
                <div className="mt-5 flex items-center gap-1">
                  <span className="h-1 w-1 rounded-full bg-neon-jade/60" />
                  <span className="h-1 w-1 rounded-full bg-stone" />
                  <span className="h-1 w-1 rounded-full bg-stone" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          4. 底部 CTA
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-void noise">
        {/* 背景光晕 */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-moss-400/10 blur-[140px]" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

        <div className="relative z-10 mx-auto max-w-[1000px] px-6 py-28 text-center lg:px-12 lg:py-36">
          <span className="section-number">// CUSTOM · 定制服务</span>

          <h2 className="heading-section mt-6 text-bone">
            匠心
            <span className="heading-song text-neon-jade"> 可定制</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-loose text-dust">
            了解工艺，方能懂得作品的价值。如果你有专属的题材与玉料，
            我们将以这七道工序为你雕琢一件独一无二的作品。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link href="/custom" className="btn-cyber">
              开始定制
              <span className="ml-1">→</span>
            </Link>

            <Link href="/works" className="link-cyber font-mono text-sm tracking-[0.2em]">
              查看作品 →
            </Link>
          </div>

          {/* 底部装饰线 */}
          <div className="mx-auto mt-16 flex max-w-md items-center gap-4">
            <span className="neon-line flex-1" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-fade">TIDGE</span>
            <span className="neon-line flex-1" />
          </div>

          {/* 联系方式 */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.2em] text-fade">或邮件</span>
            <a
              href={`mailto:${companyInfo.email}`}
              className="font-mono text-base tracking-wider text-neon-jade transition-colors hover:text-bone"
            >
              {companyInfo.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
