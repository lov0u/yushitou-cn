import Link from "next/link";
import { Fragment } from "react";
import { works, craftSteps, categories, companyInfo } from "@/lib/data";

export default function HomePage() {
  const featuredWorks = works.slice(0, 3);

  return (
    <div className="bg-void">
      {/* ============================================
          1. Hero Section
          ============================================ */}
      <section className="relative min-h-screen w-full overflow-hidden bg-void grid-bg noise">
        {/* 浮动发光圆点装饰 */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[15%] top-[30%] h-2 w-2 rounded-full bg-neon-jade opacity-60 animate-float" style={{ boxShadow: "0 0 20px 4px rgba(127,219,182,0.5)" }} />
          <div className="absolute right-[20%] top-[25%] h-1 w-1 rounded-full bg-neon-jade opacity-50 animate-float" style={{ animationDelay: "1.5s", boxShadow: "0 0 14px 3px rgba(127,219,182,0.4)" }} />
          <div className="absolute left-[60%] bottom-[28%] h-1.5 w-1.5 rounded-full bg-moss-400 opacity-50 animate-float" style={{ animationDelay: "3s", boxShadow: "0 0 16px 3px rgba(94,143,126,0.4)" }} />
          <div className="absolute left-[8%] bottom-[35%] h-1 w-1 rounded-full bg-neon-jade opacity-40 animate-float" style={{ animationDelay: "0.8s" }} />
        </div>

        {/* 右上角微弱光晕 */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-moss-400/10 blur-[120px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-neon-jade/5 blur-[100px]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col px-6 pb-12 pt-24 lg:px-12 lg:pt-32">
          {/* 顶部标签行 */}
          <div className="flex items-center gap-4">
            <span className="tag-cyber">EST. {companyInfo.established}</span>
            <span className="h-px w-12 bg-stone" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
              JADE ARTISTRY STUDIO · {companyInfo.address.toUpperCase()}
            </span>
          </div>

          {/* 主体内容 */}
          <div className="flex flex-1 flex-col justify-center py-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
              {/* 左侧：听山 + 竖排 TIDGE */}
              <div className="lg:col-span-7">
                <div className="flex items-start gap-6">
                  <h1 className="heading-song text-bone" style={{ fontSize: "clamp(4rem, 12vw, 9rem)", lineHeight: 1 }}>
                    听山
                  </h1>
                  <div className="vertical-text font-mono text-xs tracking-[0.5em] text-moss-400 pt-4">
                    TIDGE
                  </div>
                </div>

                {/* 副标题 + 打字机光标 */}
                <div className="mt-8 flex items-center">
                  <p className="heading-song text-lg text-dust lg:text-xl">
                    以侘寂之心，对话千年玉道
                  </p>
                  <span className="typewriter-cursor" />
                </div>
              </div>

              {/* 右侧：JADE ARTISTRY */}
              <div className="lg:col-span-5 flex flex-col justify-end">
                <div className="mb-4 flex items-center gap-3">
                  <span className="neon-line w-12" />
                  <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
                    {companyInfo.domain.toUpperCase()}
                  </span>
                </div>
                <h2 className="heading-display text-liquid">
                  JADE
                  <br />
                  ARTISTRY
                </h2>
                <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed text-dust">
                  精选和田玉、翡翠、南红等名贵玉料，以匠心工艺雕琢摆件、挂件、手镯、印章等玉石工艺品。
                </p>
              </div>
            </div>
          </div>

          {/* 底部：邮箱 + 按钮 */}
          <div className="flex flex-col gap-6 border-t border-stone/50 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-8">
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-fade">CONTACT</span>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="ml-3 font-mono text-base tracking-wider text-neon-jade transition-colors hover:text-bone"
                >
                  {companyInfo.email}
                </a>
              </div>
              <div className="hidden h-4 w-px bg-stone sm:block" />
              <span className="font-mono text-xs tracking-wider text-dust">
                {companyInfo.address} · 玉石工艺品加工
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/works" className="btn-cyber">
                探索作品
                <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          2. 序言 Section
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-void noise py-32 lg:py-48">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
            {/* 左侧竖排「侘寂」 */}
            <div className="flex justify-center lg:justify-start">
              <div className="heading-song vertical-text text-moss-400" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
                侘寂
              </div>
            </div>

            {/* 右侧文字 */}
            <div className="flex-1 max-w-2xl">
              <span className="section-number">// PROLOGUE · 序</span>
              <h3 className="heading-section mt-4 mb-8 text-bone">
                玉有五德
                <br />
                <span className="text-dust">听山有意</span>
              </h3>
              <div className="space-y-6 text-base leading-loose text-dust">
                <p>
                  <span className="text-neon-jade font-song">{companyInfo.name}</span>
                  ，{companyInfo.nameFull}。{companyInfo.description}
                </p>
                <p>
                  我们不追求繁复的雕饰与张扬的表象，而是以侘寂之心，在玉料天然的肌理与瑕疵中寻找美的秩序。
                  每一件作品，都是玉料与匠人之间一场静默的对话——去料、定形、细琢、抛光，皆因材施艺，顺势而为。
                </p>
                <p className="text-fade">
                  在这里，玉不仅是器物，更是一种被重新诠释的当代生活美学。
                </p>
              </div>
            </div>
          </div>

          {/* 底部分割线 */}
          <div className="divider-cyber mt-20" />
        </div>
      </section>

      {/* ============================================
          3. 精选作品 Section
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-carbon py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* 标题行 */}
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-number">01 / SELECTED WORKS</span>
              <h3 className="heading-section mt-3 text-bone">
                精选作品
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-dust">
              从选料到成器，每一件作品都承载着玉料的天然秉性与匠人的温度。
            </p>
          </div>

          {/* 作品卡片 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredWorks.map((work) => (
              <Link key={work.id} href="/works" className="jade-card group block">
                {/* 图片区 */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ash">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                  />
                  {/* 编号 */}
                  <div className="absolute left-4 top-4">
                    <span className="tag-cyber">{work.year}</span>
                  </div>
                  {/* 分类 */}
                  <div className="absolute bottom-4 left-4">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-neon-jade">
                      {work.category}
                    </span>
                  </div>
                </div>

                {/* 信息区 */}
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="heading-song text-2xl text-bone">{work.title}</h4>
                    <span className="font-mono text-xs text-fade">{work.titleEn}</span>
                  </div>

                  <div className="mt-5 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono tracking-wider text-fade">MATERIAL</span>
                      <span className="text-dust">{work.material}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono tracking-wider text-fade">TECHNIQUE</span>
                      <span className="text-dust">{work.technique}</span>
                    </div>
                  </div>

                  <p className="mt-5 border-t border-stone/50 pt-4 font-song text-sm text-moss-400">
                    {work.meaning}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* 底部链接 */}
          <div className="mt-12 flex justify-center">
            <Link href="/works" className="link-cyber font-mono text-sm tracking-[0.2em]">
              查看全部作品 →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          4. 工艺流程 Section
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-void py-24 lg:py-32 noise">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* 标题行 */}
          <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-number">02 / CRAFT</span>
              <h3 className="heading-section mt-3 text-bone">
                工艺流程
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-dust">
              七道工序，环环相扣。从原石到成器，慢工出细活，每一刀皆有讲究。
            </p>
          </div>

          {/* 节点流程 */}
          <div className="overflow-x-auto pb-4">
            <div className="flex min-w-[760px] items-start">
              {craftSteps.map((step, i) => (
                <Fragment key={step.id}>
                  <div className="flex w-24 flex-shrink-0 flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="glow-node" />
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                      {step.code}
                    </span>
                    <span className="mt-2 heading-song text-lg text-bone">
                      {step.title}
                    </span>
                    <span className="mt-1 font-mono text-[9px] uppercase tracking-widest text-moss-400">
                      {step.titleEn}
                    </span>
                    <p className="mt-3 text-[11px] leading-relaxed text-fade">
                      {step.description}
                    </p>
                  </div>

                  {i < craftSteps.length - 1 && (
                    <div className="mt-[5px] flex-1">
                      <div className="neon-line w-full" />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>

          {/* 底部链接 */}
          <div className="mt-14 flex justify-center">
            <Link href="/craft" className="link-cyber font-mono text-sm tracking-[0.2em]">
              了解工艺详情 →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          5. 玉石分类 Section
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-carbon py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* 标题行 */}
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-number">03 / JADE</span>
              <h3 className="heading-section mt-3 text-bone">
                玉石分类
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-dust">
              按器型分类，涵盖摆件、挂件、手镯、把件、印章、珠串，各有千秋。
            </p>
          </div>

          {/* 分类网格 */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((cat) => (
              <Link key={cat.id} href="/jade" className="jade-card glass-hover group block p-6">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                    {String(cat.id).slice(0, 4).toUpperCase()}
                  </span>
                  <span className="font-mono text-xs text-moss-400">
                    {String(cat.count).padStart(2, "0")}
                  </span>
                </div>

                <h4 className="mt-6 heading-song text-2xl text-bone transition-colors group-hover:text-neon-jade">
                  {cat.name}
                </h4>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-fade">
                  {cat.nameEn}
                </span>

                <p className="mt-4 border-t border-stone/50 pt-4 text-xs leading-relaxed text-dust">
                  {cat.desc}
                </p>

                <div className="mt-5 flex items-center gap-1">
                  <span className="h-1 w-1 rounded-full bg-moss-400" />
                  <span className="h-1 w-1 rounded-full bg-stone" />
                  <span className="h-1 w-1 rounded-full bg-stone" />
                </div>
              </Link>
            ))}
          </div>

          {/* 底部链接 */}
          <div className="mt-12 flex justify-center">
            <Link href="/jade" className="link-cyber font-mono text-sm tracking-[0.2em]">
              探索玉石知识 →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          6. 定制服务 CTA Section
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-void noise">
        {/* 背景光晕 */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-moss-400/10 blur-[140px]" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

        <div className="relative z-10 mx-auto max-w-[1000px] px-6 py-32 text-center lg:px-12 lg:py-44">
          <span className="section-number">// CUSTOM · 定制服务</span>

          <h3 className="heading-section mt-6 text-bone">
            定制你的
            <span className="heading-song text-neon-jade"> 专属玉石</span>
          </h3>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-loose text-dust">
            支持来料加工与专属定制。告诉我们你的想法——题材、玉料、用途、预算，
            我们将从选料到成器，为你雕琢一件独一无二的作品。
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link href="/custom" className="btn-cyber">
              开始定制
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
          <div className="mx-auto mt-20 flex max-w-md items-center gap-4">
            <span className="neon-line flex-1" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-fade">TIDGE</span>
            <span className="neon-line flex-1" />
          </div>
        </div>
      </section>
    </div>
  );
}
