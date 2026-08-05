import Link from "next/link";
import { jadeTypes, techniques, companyInfo } from "@/lib/data";

export const metadata = {
  title: "玉石 / JADE — 听山 TIDGE 玉石知识",
  description:
    "听山 TIDGE 玉石知识：和田玉、翡翠、独山玉、岫玉、南红玛瑙、绿松石六大名玉详解。涵盖产地、硬度、特点与颜色分类，以及玉文化神玉、礼玉、德玉三阶段演变。",
};

/* 玉色名称 → 色值映射 */
const colorMap: Record<string, string> = {
  羊脂白: "#f5f5f0",
  青白: "#c8d6c8",
  碧绿: "#4a7d6c",
  蜜黄: "#d4a857",
  墨黑: "#2a2a2e",
  糖色: "#8b5a3c",
  帝王绿: "#1d6b48",
  阳绿: "#52b788",
  紫罗兰: "#9d8fb5",
  无色: "#e8e6e3",
  红翡: "#c1554a",
  黄翡: "#d4a857",
  绿白: "#c5d9cf",
  紫绿: "#7a8fa5",
  黄褐: "#8b7355",
  墨色: "#1c1c1f",
  杂色: "#6a6a6e",
  淡绿: "#9bbfac",
  深绿: "#3a6655",
  黄绿: "#a8b87a",
  白色: "#e8e6e3",
  灰色: "#6a6a6e",
  柿子红: "#b5422e",
  玫瑰红: "#a8455a",
  樱桃红: "#c1554a",
  冰飘: "#d4e8e0",
  高蓝: "#2d7a9e",
  天蓝: "#5dade2",
  绿蓝: "#4a9e8f",
  菜籽黄: "#b5c24a",
};

/* 玉文化三阶段 */
const jadeCulture = [
  {
    phase: "神玉时代",
    phaseEn: "Divine Jade",
    era: "新石器时代 — 商",
    desc: "玉为通神之物，巫觋以玉祭祀天地山川。红山玉龙、良渚玉琮，皆是沟通神灵的礼器，承载着先民对天地的敬畏。",
  },
  {
    phase: "礼玉时代",
    phaseEn: "Ritual Jade",
    era: "周 — 春秋战国",
    desc: "玉成为礼制象征，'以玉作六器，以礼天地四方'。璧、琮、圭、璋、琥、璜，各有规制，玉的等级与秩序确立。",
  },
  {
    phase: "德玉时代",
    phaseEn: "Virtue Jade",
    era: "春秋战国 — 至今",
    desc: "孔子赋予玉以道德内涵，'君子比德于玉'。玉有十一德，仁、义、智、勇、洁，玉从神器走向人格象征，融入文人精神。",
  },
];

export default function JadePage() {
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
            <span className="tag-cyber">JADE</span>
            <span className="h-px w-12 bg-stone" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
              {jadeTypes.length} TYPES · {techniques.length} TECHNIQUES
            </span>
          </div>

          {/* 主标题 */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <h1 className="heading-display text-bone">
                玉石
                <span className="text-fade"> /</span>
                <span className="text-liquid"> JADE</span>
              </h1>
            </div>
            <div className="flex flex-col justify-end lg:col-span-4">
              <div className="mb-4 flex items-center gap-3">
                <span className="neon-line w-12" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
                  KNOWLEDGE OF JADE
                </span>
              </div>
              <p className="max-w-sm font-sans text-sm leading-relaxed text-dust">
                玉者，石之美也。从神玉到德玉，千年玉道承载着东方美学的精髓。
                认识玉料，方能懂得作品的价值。
              </p>
            </div>
          </div>

          {/* 底部分割线 */}
          <div className="divider-cyber mt-16" />
        </div>
      </section>

      {/* ============================================
          2. 名玉展示区
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-void py-24 lg:py-32 noise">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* 标题行 */}
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-number">01 / JADE TYPES</span>
              <h2 className="heading-section mt-3 text-bone">
                名玉图鉴
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-dust">
              六大名玉，各有秉性。从温润的和田玉到通透的翡翠，
              每一种玉料都有其独特的质地、色泽与文化内涵。
            </p>
          </div>

          {/* 玉石卡片网格 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jadeTypes.map((jade, i) => (
              <div
                key={jade.id}
                className="jade-card glass-hover group flex flex-col p-6 lg:p-7"
              >
                {/* 顶部行：编号 + 硬度 */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                    J{String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-fade">
                      HARDNESS
                    </span>
                    <span className="font-mono text-sm text-neon-jade">
                      {jade.hardness}
                    </span>
                  </div>
                </div>

                {/* 中文名 */}
                <h3 className="mt-6 heading-song text-2xl text-bone transition-colors group-hover:text-neon-jade lg:text-3xl">
                  {jade.name}
                </h3>

                {/* 英文名 */}
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-fade">
                  {jade.nameEn}
                </span>

                {/* 分割线 */}
                <div className="my-5 h-px w-full bg-stone/50" />

                {/* 产地 */}
                <div className="mb-3 flex items-center justify-between text-xs">
                  <span className="font-mono tracking-wider text-fade">ORIGIN</span>
                  <span className="text-dust">{jade.origin}</span>
                </div>

                {/* 特点 */}
                <div className="mb-4 flex items-center justify-between text-xs">
                  <span className="font-mono tracking-wider text-fade">FEATURE</span>
                  <span className="text-right text-dust">{jade.features}</span>
                </div>

                {/* 描述 */}
                <p className="mt-2 text-xs leading-relaxed text-dust">
                  {jade.description}
                </p>

                {/* 颜色范围 */}
                <div className="mt-auto pt-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                      COLOR RANGE
                    </span>
                    <span className="h-px flex-1 bg-stone/40" />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {jade.colorRange.map((color, ci) => (
                      <div key={ci} className="flex items-center gap-1.5">
                        <span
                          className="block h-3 w-3 rounded-full border border-stone"
                          style={{
                            backgroundColor: colorMap[color] || "#5a5a5e",
                            boxShadow: `0 0 6px ${colorMap[color] || "#5a5a5e"}40`,
                          }}
                        />
                        <span className="font-mono text-[10px] text-fade">
                          {color}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 底部装饰 */}
                <div className="mt-6 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-neon-jade" />
                  <span className="h-px flex-1 bg-stone/30" />
                  <span className="font-mono text-[9px] tracking-[0.2em] text-fade">
                    {jade.id.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          3. 玉文化简述 — 时间轴
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-carbon py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          {/* 标题行 */}
          <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-number">02 / JADE CULTURE</span>
              <h2 className="heading-section mt-3 text-bone">
                玉道千年
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-dust">
              从通神之器到君子之德，玉文化的三阶段演变，
              映照着东方文明对玉的认知升华。
            </p>
          </div>

          {/* 时间轴 */}
          <div className="relative">
            {jadeCulture.map((item, i) => (
              <div key={i} className="relative flex gap-6 lg:gap-10">
                {/* 左侧：节点 + 连接线 */}
                <div className="relative flex flex-col items-center">
                  {/* 发光节点 */}
                  <div className="glow-node z-10 mt-8 flex-shrink-0" />
                  {/* 竖向连接线 */}
                  {i < jadeCulture.length - 1 && (
                    <div
                      className="neon-line-v mt-2 w-px flex-1"
                      style={{ minHeight: "3rem" }}
                    />
                  )}
                </div>

                {/* 右侧：内容卡片 */}
                <div className="glass glass-hover mb-8 flex-1 p-6 lg:p-8">
                  {/* 顶部行：阶段 + 时代 */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono font-bold text-neon-jade" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="heading-song text-2xl text-bone lg:text-3xl">
                          {item.phase}
                        </h3>
                      </div>
                      <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-moss-400">
                        {item.phaseEn}
                      </span>
                    </div>
                    <span className="tag-cyber flex-shrink-0">
                      {item.era}
                    </span>
                  </div>

                  {/* 分割线 */}
                  <div className="my-5 h-px w-full bg-stone/50" />

                  {/* 描述 */}
                  <p className="text-sm leading-loose text-dust lg:text-base">
                    {item.desc}
                  </p>

                  {/* 底部装饰 */}
                  <div className="mt-6 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-neon-jade" />
                    <span className="h-px flex-1 bg-stone/30" />
                    <span className="font-mono text-[9px] tracking-[0.2em] text-fade">
                      PHASE {String(i + 1).padStart(2, "0")} / {String(jadeCulture.length).padStart(2, "0")}
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
              JADE CULTURE TIMELINE
            </span>
            <span className="neon-line flex-1" />
          </div>
        </div>
      </section>

      {/* ============================================
          4. 雕刻技法区
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-void py-24 lg:py-32 noise">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* 标题行 */}
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-number">03 / TECHNIQUES</span>
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
          5. 底部 CTA
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-carbon noise">
        {/* 背景光晕 */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-moss-400/10 blur-[140px]" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

        <div className="relative z-10 mx-auto max-w-[1000px] px-6 py-28 text-center lg:px-12 lg:py-36">
          <span className="section-number">// EXPLORE · 探索更多</span>

          <h2 className="heading-section mt-6 text-bone">
            懂玉
            <span className="heading-song text-neon-jade"> 方能赏玉</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-loose text-dust">
            认识每一种玉料的秉性，理解每一道工艺的讲究。
            带着这份认知，去欣赏听山的每一件作品。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link href="/works" className="btn-cyber">
              探索作品
              <span className="ml-1">→</span>
            </Link>

            <Link href="/craft" className="link-cyber font-mono text-sm tracking-[0.2em]">
              了解工艺 →
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
