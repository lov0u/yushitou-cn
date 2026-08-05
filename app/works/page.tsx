import Link from "next/link";
import { works, companyInfo } from "@/lib/data";

export const metadata = {
  title: "作品 / WORKS — 听山 TIDGE 玉石工艺品",
  description:
    "听山 TIDGE 精选作品：和田玉摆件、翡翠挂件、碧玉手镯、南红把件、平安扣等玉石工艺品。以匠心工艺雕琢，因材施艺，化瑕为艺。",
};

/* 筛选分类标签 */
const filterTags = [
  { id: "all", label: "全部", labelEn: "ALL" },
  { id: "ornament", label: "摆件", labelEn: "ORNAMENT" },
  { id: "pendant", label: "挂件", labelEn: "PENDANT" },
  { id: "bracelet", label: "手镯", labelEn: "BRACELET" },
  { id: "plaything", label: "把件", labelEn: "PLAYTHING" },
  { id: "pingan", label: "平安扣", labelEn: "PING'AN" },
];

export default function WorksPage() {
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
            <span className="tag-cyber">WORKS</span>
            <span className="h-px w-12 bg-stone" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
              SELECTED JADE ARTISTRY · {works.length} PIECES
            </span>
          </div>

          {/* 主标题 */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <h1 className="heading-display text-bone">
                作品
                <span className="text-fade"> /</span>
                <span className="text-liquid"> WORKS</span>
              </h1>
            </div>
            <div className="flex flex-col justify-end lg:col-span-4">
              <div className="mb-4 flex items-center gap-3">
                <span className="neon-line w-12" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
                  CRAFTED WITH INTENT
                </span>
              </div>
              <p className="max-w-sm font-sans text-sm leading-relaxed text-dust">
                每一件作品，都是玉料与匠人之间一场静默的对话。从选料到成器，
                因材施艺，顺势而为，承载着玉料的天然秉性与匠人的温度。
              </p>
            </div>
          </div>

          {/* 底部分割线 */}
          <div className="divider-cyber mt-16" />
        </div>
      </section>

      {/* ============================================
          2. 筛选标签区
          ============================================ */}
      <section className="relative w-full bg-void">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-4 py-8 lg:flex-row lg:items-center lg:justify-between">
            {/* 标签组 */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                FILTER //
              </span>
              {filterTags.map((tag, i) => (
                <button
                  key={tag.id}
                  className={`tag-cyber transition-all duration-300 ${
                    i === 0
                      ? "border-neon-jade/60 bg-neon-jade/10 text-neon-jade"
                      : "hover:border-neon-jade/40 hover:text-neon-jade"
                  }`}
                >
                  {tag.label}
                  <span className="ml-1.5 text-[9px] opacity-50">{tag.labelEn}</span>
                </button>
              ))}
            </div>

            {/* 统计 */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                TOTAL
              </span>
              <span className="font-mono text-lg text-neon-jade">
                {String(works.length).padStart(2, "0")}
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                PIECES
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          3. 作品列表
          ============================================ */}
      <section className="relative w-full bg-void pb-24 pt-4 lg:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((work, i) => (
              <article
                key={work.id}
                className="jade-card glass-hover group flex flex-col"
              >
                {/* 图片区 */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ash">
                  <img
                    src={work.image}
                    alt={`${work.title} - ${work.titleEn}`}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-95"
                  />
                  {/* 渐变遮罩 */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />

                  {/* 编号 */}
                  <div className="absolute left-4 top-4">
                    <span className="font-mono text-xs tracking-[0.2em] text-neon-jade">
                      W{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* 年份 */}
                  <div className="absolute right-4 top-4">
                    <span className="tag-cyber">{work.year}</span>
                  </div>

                  {/* 分类 */}
                  <div className="absolute bottom-4 left-4">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-dust">
                      {work.category}
                    </span>
                  </div>
                </div>

                {/* 信息区 */}
                <div className="flex flex-1 flex-col p-6">
                  {/* 标题 */}
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="heading-song text-2xl text-bone transition-colors group-hover:text-neon-jade">
                      {work.title}
                    </h3>
                    <span className="font-mono text-[11px] tracking-wider text-fade">
                      {work.titleEn}
                    </span>
                  </div>

                  {/* 寓意 */}
                  <p className="mt-4 border-l-2 border-moss-400/40 pl-3 font-song text-sm text-moss-400">
                    {work.meaning}
                  </p>

                  {/* 参数信息 */}
                  <div className="mt-5 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono tracking-wider text-fade">MATERIAL</span>
                      <span className="text-dust">{work.material}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono tracking-wider text-fade">SIZE</span>
                      <span className="text-dust">{work.size}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono tracking-wider text-fade">WEIGHT</span>
                      <span className="text-dust">{work.weight}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono tracking-wider text-fade">TECHNIQUE</span>
                      <span className="text-right text-dust">{work.technique}</span>
                    </div>
                  </div>

                  {/* 分割线 */}
                  <div className="my-5 h-px w-full bg-stone/50" />

                  {/* 描述 */}
                  <p className="text-sm leading-relaxed text-dust">
                    {work.description}
                  </p>

                  {/* 底部装饰 */}
                  <div className="mt-auto flex items-center gap-2 pt-6">
                    <span className="h-1 w-1 rounded-full bg-neon-jade" />
                    <span className="h-px flex-1 bg-stone/50" />
                    <span className="font-mono text-[9px] tracking-[0.2em] text-fade">
                      {work.id.toUpperCase()}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          4. 底部 CTA
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-carbon noise">
        {/* 背景光晕 */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-moss-400/10 blur-[140px]" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

        <div className="relative z-10 mx-auto max-w-[1000px] px-6 py-28 text-center lg:px-12 lg:py-36">
          <span className="section-number">// CUSTOM · 定制咨询</span>

          <h2 className="heading-section mt-6 text-bone">
            未找到心仪之作？
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-loose text-dust">
            支持来料加工与专属定制。告诉我们你的想法——题材、玉料、用途、预算，
            我们将从选料到成器，为你雕琢一件独一无二的作品。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link href="/custom" className="btn-cyber">
              定制咨询
              <span className="ml-1">→</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.2em] text-fade">或邮件</span>
              <a
                href={`mailto:${companyInfo.email}`}
                className="font-mono text-base tracking-wider text-neon-jade transition-colors hover:text-bone"
              >
                {companyInfo.email}
              </a>
            </div>
          </div>

          {/* 底部装饰线 */}
          <div className="mx-auto mt-16 flex max-w-md items-center gap-4">
            <span className="neon-line flex-1" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-fade">TIDGE</span>
            <span className="neon-line flex-1" />
          </div>
        </div>
      </section>
    </div>
  );
}
