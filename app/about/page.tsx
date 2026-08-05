import Link from "next/link";
import { companyInfo } from "@/lib/data";

export const metadata = {
  title: "关于 / ABOUT — 听山 TIDGE",
  description:
    "听山 TIDGE，成立于2015年的玉石工艺品加工品牌。以侘寂之心对话千年玉道，用当代设计语言重塑传统工艺。百件作品，匠人团队，服务众多客户。",
};

/* 品牌数据 */
const stats = [
  { value: companyInfo.established, label: "成立年份", labelEn: "ESTABLISHED" },
  { value: "100+", label: "作品数量", labelEn: "WORKS" },
  { value: "10+", label: "匠人团队", labelEn: "ARTISANS" },
  { value: "500+", label: "服务客户", labelEn: "CLIENTS" },
];

/* 核心价值观 */
const values = [
  {
    title: "匠心",
    titleEn: "Craftsmanship",
    icon: "01",
    desc: "每一刀皆有讲究。从选料到成器，七道工序环环相扣，慢工出细活。我们相信，真正的匠心不在于繁复，而在于对每一处细节的敬畏与坚持。",
  },
  {
    title: "品质",
    titleEn: "Quality",
    icon: "02",
    desc: "玉料的天然秉性不可辜负。我们精选和田玉、翡翠等名贵玉料，因材施艺，化瑕为艺。每一件作品都经得起时间的检验与目光的审视。",
  },
  {
    title: "传承",
    titleEn: "Heritage",
    icon: "03",
    desc: "玉道千年，不应止步于博物馆。我们以当代设计语言重塑传统工艺，让玉文化融入日常生活，让每一件作品成为可触摸的东方美学。",
  },
];

export default function AboutPage() {
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
            <span className="tag-cyber">ABOUT</span>
            <span className="h-px w-12 bg-stone" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
              EST. {companyInfo.established} · {companyInfo.address.toUpperCase()}
            </span>
          </div>

          {/* 主标题 */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <h1 className="heading-display text-bone">
                关于
                <span className="text-fade"> /</span>
                <span className="text-liquid"> ABOUT</span>
              </h1>
            </div>
            <div className="flex flex-col justify-end lg:col-span-4">
              <div className="mb-4 flex items-center gap-3">
                <span className="neon-line w-12" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
                  OUR STORY
                </span>
              </div>
              <p className="max-w-sm font-sans text-sm leading-relaxed text-dust">
                {companyInfo.description}
              </p>
            </div>
          </div>

          {/* 底部分割线 */}
          <div className="divider-cyber mt-16" />
        </div>
      </section>

      {/* ============================================
          2. 品牌故事
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-void py-24 lg:py-40 noise">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
            {/* 左侧竖排「听山」 */}
            <div className="flex justify-center lg:justify-start">
              <div className="heading-song vertical-text text-moss-400" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
                听山
              </div>
            </div>

            {/* 右侧文字 */}
            <div className="flex-1 max-w-2xl">
              <span className="section-number">// BRAND STORY · 品牌故事</span>
              <h2 className="heading-section mt-4 mb-8 text-bone">
                听山有意
                <br />
                <span className="text-dust">玉润无声</span>
              </h2>
              <div className="space-y-6 text-base leading-loose text-dust">
                <p>
                  <span className="text-neon-jade font-song">{companyInfo.name}</span>
                  ，{companyInfo.nameFull}。成立于{companyInfo.established}年，扎根{companyInfo.address}，
                  专注于{companyInfo.business}。
                </p>
                <p>
                  "听山"二字，取自"听山有意"——山无言而有意，玉无声而有魂。
                  我们以侘寂之心，在玉料天然的肌理与瑕疵中寻找美的秩序，
                  用当代设计语言重塑传统工艺。
                </p>
                <p>
                  我们不追求繁复的雕饰与张扬的表象。每一件作品，都是玉料与匠人之间一场静默的对话——
                  去料、定形、细琢、抛光，皆因材施艺，顺势而为。
                </p>
                <p className="text-fade">
                  在这里，玉不仅是器物，更是一种被重新诠释的当代生活美学。
                </p>
              </div>

              {/* 底部装饰 */}
              <div className="mt-10 flex items-center gap-4">
                <span className="neon-line w-16" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
                  {companyInfo.domain.toUpperCase()}
                </span>
                <span className="h-px flex-1 bg-stone/50" />
              </div>
            </div>
          </div>

          <div className="divider-cyber mt-20" />
        </div>
      </section>

      {/* ============================================
          3. 数据展示
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-carbon py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* 标题行 */}
          <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-number">01 / NUMBERS</span>
              <h2 className="heading-section mt-3 text-bone">
                数字听山
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-dust">
              十年深耕，以数字记录成长。每一组数据背后，
              都是对玉道的一份坚持。
            </p>
          </div>

          {/* 数据网格 */}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass glass-hover group relative p-6 lg:p-8 text-center"
              >
                {/* 编号 */}
                <div className="absolute left-4 top-4">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* 大数字 */}
                <div
                  className="font-mono font-bold text-neon-jade transition-colors group-hover:text-bone"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1 }}
                >
                  {stat.value}
                </div>

                {/* 中文标签 */}
                <div className="mt-4 heading-song text-lg text-bone">
                  {stat.label}
                </div>

                {/* 英文标签 */}
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-fade">
                  {stat.labelEn}
                </span>

                {/* 底部装饰 */}
                <div className="mt-5 flex items-center justify-center gap-1">
                  <span className="h-1 w-1 rounded-full bg-neon-jade" />
                  <span className="h-px w-8 bg-stone/50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          4. 价值观
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-void py-24 lg:py-32 noise">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* 标题行 */}
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-number">02 / VALUES</span>
              <h2 className="heading-section mt-3 text-bone">
                核心理念
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-dust">
              匠心、品质、传承——三个关键词，
              定义听山对待每一件作品的态度。
            </p>
          </div>

          {/* 价值观卡片 */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {values.map((val) => (
              <div
                key={val.icon}
                className="glass glass-hover group flex flex-col p-6 lg:p-8"
              >
                {/* 顶部编号 */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                    {val.icon}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-moss-400 transition-colors group-hover:bg-neon-jade" />
                </div>

                {/* 标题 */}
                <h3 className="mt-6 heading-song text-3xl text-bone transition-colors group-hover:text-neon-jade lg:text-4xl">
                  {val.title}
                </h3>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-fade">
                  {val.titleEn}
                </span>

                {/* 分割线 */}
                <div className="my-5 h-px w-full bg-stone/50" />

                {/* 描述 */}
                <p className="text-sm leading-loose text-dust">
                  {val.desc}
                </p>

                {/* 底部装饰 */}
                <div className="mt-auto flex items-center gap-2 pt-6">
                  <span className="h-1 w-1 rounded-full bg-neon-jade" />
                  <span className="h-px flex-1 bg-stone/30" />
                  <span className="font-mono text-[9px] tracking-[0.2em] text-fade">
                    VALUE {val.icon} / 03
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
          <span className="section-number">// CONNECT · 与我们连接</span>

          <h2 className="heading-section mt-6 text-bone">
            听山
            <span className="heading-song text-neon-jade"> 有意</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-loose text-dust">
            如果你也相信玉的力量，欢迎与我们对话。
            无论是欣赏作品、定制咨询，还是单纯聊聊玉道，我们都在这里。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link href="/works" className="btn-cyber">
              探索作品
              <span className="ml-1">→</span>
            </Link>

            <Link href="/contact" className="link-cyber font-mono text-sm tracking-[0.2em]">
              联系我们 →
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
