import Link from "next/link";
import { companyInfo } from "@/lib/data";

export const metadata = {
  title: "定制 / CUSTOM — 听山 TIDGE 玉石定制服务",
  description:
    "听山 TIDGE 玉石定制服务：需求沟通、选料、设计确认、制作交付四步流程。支持来料加工与专属定制，涵盖摆件、挂件、手镯、印章、把件等品类，圆雕、浮雕、透雕、镂雕等工艺。",
};

/* 定制流程 */
const customSteps = [
  {
    code: "01",
    title: "需求沟通",
    titleEn: "Consult",
    desc: "了解你的想法——题材偏好、玉料种类、用途场景、预算范围。我们提供专业建议，确定初步方向。",
    duration: "1-2天",
  },
  {
    code: "02",
    title: "选料",
    titleEn: "Selection",
    desc: "根据需求挑选合适的玉料。审玉度材，评估种水、色泽、瑕疵，提供多块备选料供你确认。",
    duration: "2-5天",
  },
  {
    code: "03",
    title: "设计确认",
    titleEn: "Design",
    desc: "依据玉料天然形态构思题材，绘制设计草图。因材施艺，巧妙利用俏色，确认后方可动刀。",
    duration: "3-7天",
  },
  {
    code: "04",
    title: "制作交付",
    titleEn: "Delivery",
    desc: "按七道工序精心雕琢，全程可跟进进度。成器后配座包装，交付一件独一无二的作品。",
    duration: "15-60天",
  },
];

/* 定制能力 */
const capabilities = [
  {
    title: "可加工品类",
    titleEn: "Categories",
    icon: "01",
    items: ["摆件（山子、人物、瑞兽）", "挂件（观音、佛公、平安扣）", "手镯（福镯、平安镯、贵妃镯）", "把件（手把件、文房把件）", "印章（玉印章、闲章、名章）", "珠串（手串、念珠、项链）"],
  },
  {
    title: "工艺范围",
    titleEn: "Techniques",
    icon: "02",
    items: ["圆雕 · 全方位立体雕刻", "浮雕 · 高浮雕与浅浮雕", "透雕 · 镂空背景增强通透", "镂雕 · 多层次立体造型", "阴刻 · 凹入图案刻画", "俏色 · 利用天然多色巧雕"],
  },
  {
    title: "工期说明",
    titleEn: "Timeline",
    icon: "03",
    items: ["小件挂件/把件：15-30天", "中等摆件/手镯：30-45天", "大型山子/复杂件：45-90天", "来料加工视料况而定", "加急服务可协商安排", "全程进度可跟进反馈"],
  },
];

/* 定制案例 */
const customCases = [
  {
    title: "私人定制 · 山子摆件",
    titleEn: "Custom Ornament",
    material: "和田玉 籽料",
    desc: "客户提供籽料原石，依其天然皮色与形态，设计'深山问道'题材。巧妙利用金黄皮色雕刻山径行者，层次深远。",
    duration: "45天",
  },
  {
    title: "婚庆定制 · 对镯",
    titleEn: "Wedding Bracelets",
    material: "翡翠 冰种",
    desc: "为新人定制冰种翡翠对镯，选料讲究种水一致、色泽相近。素面抛光，温润贴肤，寓意圆满长久。",
    duration: "30天",
  },
  {
    title: "收藏定制 · 印章",
    titleEn: "Collectible Seal",
    material: "和田玉 青玉",
    desc: "藏家定制青玉闲章，印钮雕刻瑞兽，印面精工篆刻。整体造型沉稳大气，适合书房案头陈列。",
    duration: "25天",
  },
];

export default function CustomPage() {
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
            <span className="tag-cyber">CUSTOM</span>
            <span className="h-px w-12 bg-stone" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
              BESPOKE JADE ARTISTRY
            </span>
          </div>

          {/* 主标题 */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <h1 className="heading-display text-bone">
                定制
                <span className="text-fade"> /</span>
                <span className="text-liquid"> CUSTOM</span>
              </h1>
            </div>
            <div className="flex flex-col justify-end lg:col-span-4">
              <div className="mb-4 flex items-center gap-3">
                <span className="neon-line w-12" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
                  YOUR UNIQUE JADE
                </span>
              </div>
              <p className="max-w-sm font-sans text-sm leading-relaxed text-dust">
                支持来料加工与专属定制。告诉我们你的想法，
                从选料到成器，为你雕琢一件独一无二的作品。
              </p>
            </div>
          </div>

          {/* 底部分割线 */}
          <div className="divider-cyber mt-16" />
        </div>
      </section>

      {/* ============================================
          2. 定制流程 — glow-node + neon-line
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-void py-24 lg:py-32 noise">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* 标题行 */}
          <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-number">01 / PROCESS</span>
              <h2 className="heading-section mt-3 text-bone">
                定制流程
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-dust">
              四步定制，从想法到成器。每一步都可沟通确认，
              确保最终作品符合你的期待。
            </p>
          </div>

          {/* 流程节点 */}
          <div className="overflow-x-auto pb-4">
            <div className="flex min-w-[680px] items-start">
              {customSteps.map((step, i) => (
                <div key={step.code} className="flex items-start">
                  {/* 节点 + 内容 */}
                  <div className="flex w-44 flex-shrink-0 flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="glow-node" />
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                      STEP {step.code}
                    </span>
                    <h3 className="mt-2 heading-song text-xl text-bone lg:text-2xl">
                      {step.title}
                    </h3>
                    <span className="mt-1 font-mono text-[9px] uppercase tracking-widest text-moss-400">
                      {step.titleEn}
                    </span>
                    <p className="mt-3 text-[11px] leading-relaxed text-fade">
                      {step.desc}
                    </p>
                    <span className="mt-3 font-mono text-[10px] text-neon-jade">
                      {step.duration}
                    </span>
                  </div>

                  {/* 连接线 */}
                  {i < customSteps.length - 1 && (
                    <div className="mt-[5px] flex-1">
                      <div className="neon-line w-full" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 底部装饰线 */}
          <div className="mt-14 flex items-center gap-4">
            <span className="neon-line flex-1" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
              CUSTOM PROCESS
            </span>
            <span className="neon-line flex-1" />
          </div>
        </div>
      </section>

      {/* ============================================
          3. 定制能力说明 — glass 卡片
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-carbon py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* 标题行 */}
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-number">02 / CAPABILITIES</span>
              <h2 className="heading-section mt-3 text-bone">
                定制能力
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-dust">
              涵盖六大品类、八种工艺，灵活满足不同定制需求。
              工期透明，全程可跟进。
            </p>
          </div>

          {/* 能力卡片 */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.icon}
                className="glass glass-hover group flex flex-col p-6 lg:p-8"
              >
                {/* 顶部编号 */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                    {cap.icon}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-moss-400 transition-colors group-hover:bg-neon-jade" />
                </div>

                {/* 标题 */}
                <h3 className="mt-6 heading-song text-2xl text-bone transition-colors group-hover:text-neon-jade lg:text-3xl">
                  {cap.title}
                </h3>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-fade">
                  {cap.titleEn}
                </span>

                {/* 分割线 */}
                <div className="my-5 h-px w-full bg-stone/50" />

                {/* 列表 */}
                <ul className="space-y-3">
                  {cap.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-2 text-xs leading-relaxed text-dust">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-neon-jade/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* 底部装饰 */}
                <div className="mt-auto flex items-center gap-2 pt-6">
                  <span className="h-1 w-1 rounded-full bg-neon-jade" />
                  <span className="h-px flex-1 bg-stone/30" />
                  <span className="font-mono text-[9px] tracking-[0.2em] text-fade">
                    {cap.icon} / 03
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          4. 定制案例
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-void py-24 lg:py-32 noise">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* 标题行 */}
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-number">03 / CASES</span>
              <h2 className="heading-section mt-3 text-bone">
                定制案例
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-dust">
              每一件定制作品，都是一个独特故事的开始。
              以下是部分定制案例，供你参考。
            </p>
          </div>

          {/* 案例卡片 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {customCases.map((item, i) => (
              <div
                key={i}
                className="jade-card glass-hover group flex flex-col p-6 lg:p-7"
              >
                {/* 顶部行 */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                    C{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="tag-cyber">
                    {item.duration}
                  </span>
                </div>

                {/* 标题 */}
                <h3 className="mt-6 heading-song text-xl text-bone transition-colors group-hover:text-neon-jade lg:text-2xl">
                  {item.title}
                </h3>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-fade">
                  {item.titleEn}
                </span>

                {/* 分割线 */}
                <div className="my-4 h-px w-full bg-stone/50" />

                {/* 材料 */}
                <div className="mb-3 flex items-center justify-between text-xs">
                  <span className="font-mono tracking-wider text-fade">MATERIAL</span>
                  <span className="text-dust">{item.material}</span>
                </div>

                {/* 描述 */}
                <p className="mt-2 text-xs leading-relaxed text-dust">
                  {item.desc}
                </p>

                {/* 底部装饰 */}
                <div className="mt-auto flex items-center gap-2 pt-6">
                  <span className="h-1 w-1 rounded-full bg-neon-jade" />
                  <span className="h-px flex-1 bg-stone/30" />
                  <span className="font-mono text-[9px] tracking-[0.2em] text-fade">
                    CASE {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          5. 底部 CTA
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-carbon noise">
        {/* 背景光晕 */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-moss-400/10 blur-[140px]" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

        <div className="relative z-10 mx-auto max-w-[1000px] px-6 py-28 text-center lg:px-12 lg:py-36">
          <span className="section-number">// START · 开始定制</span>

          <h2 className="heading-section mt-6 text-bone">
            定制你的
            <span className="heading-song text-neon-jade"> 专属玉石</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-loose text-dust">
            告诉我们你的想法——题材、玉料、用途、预算，
            我们将从选料到成器，为你雕琢一件独一无二的作品。
          </p>

          {/* 联系邮箱 + 按钮 */}
          <div className="mt-12 flex flex-col items-center justify-center gap-8">
            <a href={`mailto:${companyInfo.email}`} className="group">
              <span className="block font-mono text-[10px] tracking-[0.3em] text-fade mb-2">
                EMAIL US
              </span>
              <span className="font-mono text-3xl tracking-wider text-neon-jade transition-colors group-hover:text-bone lg:text-4xl">
                {companyInfo.email}
              </span>
            </a>

            <Link href="/contact" className="btn-cyber">
              在线咨询
              <span className="ml-1">→</span>
            </Link>
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
