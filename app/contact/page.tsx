import Link from "next/link";
import { companyInfo } from "@/lib/data";

export const metadata = {
  title: "联系 / CONTACT — 听山 TIDGE",
  description:
    "联系听山 TIDGE。邮箱：lov0u@foxmail.com，地址：烟台。支持玉石定制咨询、来料加工、作品鉴赏，欢迎留言。",
};

export default function ContactPage() {
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
            <span className="tag-cyber">CONTACT</span>
            <span className="h-px w-12 bg-stone" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
              GET IN TOUCH · {companyInfo.address.toUpperCase()}
            </span>
          </div>

          {/* 主标题 */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <h1 className="heading-display text-bone">
                联系
                <span className="text-fade"> /</span>
                <span className="text-liquid"> CONTACT</span>
              </h1>
            </div>
            <div className="flex flex-col justify-end lg:col-span-4">
              <div className="mb-4 flex items-center gap-3">
                <span className="neon-line w-12" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
                  TALK TO US
                </span>
              </div>
              <p className="max-w-sm font-sans text-sm leading-relaxed text-dust">
                无论是定制咨询、来料加工，还是单纯聊聊玉道，
                我们都欢迎你的联系。
              </p>
            </div>
          </div>

          {/* 底部分割线 */}
          <div className="divider-cyber mt-16" />
        </div>
      </section>

      {/* ============================================
          2. 联系方式
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-void py-24 lg:py-32 noise">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* 标题行 */}
          <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-number">01 / INFO</span>
              <h2 className="heading-section mt-3 text-bone">
                联系方式
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-dust">
              以下方式均可联系到我们。
              邮件为最快捷的联系方式，欢迎随时来信。
            </p>
          </div>

          {/* 联系方式网格 */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* 邮箱 */}
            <div className="glass glass-hover group relative flex flex-col p-6 lg:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                  01
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-moss-400 transition-colors group-hover:bg-neon-jade" />
              </div>
              <span className="mt-6 font-mono text-[10px] uppercase tracking-widest text-fade">
                EMAIL
              </span>
              <a
                href={`mailto:${companyInfo.email}`}
                className="mt-3 font-mono text-2xl tracking-wider text-neon-jade transition-colors group-hover:text-bone lg:text-3xl"
              >
                {companyInfo.email}
              </a>
              <span className="mt-2 text-xs text-dust">邮件为最快捷的联系方式</span>
              <div className="mt-auto flex items-center gap-2 pt-6">
                <span className="h-1 w-1 rounded-full bg-neon-jade" />
                <span className="h-px flex-1 bg-stone/30" />
                <span className="font-mono text-[9px] tracking-[0.2em] text-fade">
                  CALL
                </span>
              </div>
            </div>

            {/* 邮箱 */}
            <div className="glass glass-hover group relative flex flex-col p-6 lg:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                  02
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-moss-400 transition-colors group-hover:bg-neon-jade" />
              </div>
              <span className="mt-6 font-mono text-[10px] uppercase tracking-widest text-fade">
                EMAIL
              </span>
              <a
                href={`mailto:${companyInfo.email}`}
                className="mt-3 font-mono text-base tracking-wider text-neon-jade transition-colors group-hover:text-bone lg:text-lg break-all"
              >
                {companyInfo.email}
              </a>
              <span className="mt-2 text-xs text-dust">邮件咨询请说明需求详情</span>
              <div className="mt-auto flex items-center gap-2 pt-6">
                <span className="h-1 w-1 rounded-full bg-neon-jade" />
                <span className="h-px flex-1 bg-stone/30" />
                <span className="font-mono text-[9px] tracking-[0.2em] text-fade">
                  MAIL
                </span>
              </div>
            </div>

            {/* 地址 */}
            <div className="glass glass-hover group relative flex flex-col p-6 lg:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                  03
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-moss-400 transition-colors group-hover:bg-neon-jade" />
              </div>
              <span className="mt-6 font-mono text-[10px] uppercase tracking-widest text-fade">
                ADDRESS
              </span>
              <p className="mt-3 heading-song text-2xl text-bone transition-colors group-hover:text-neon-jade lg:text-3xl">
                {companyInfo.address}
              </p>
              <span className="mt-2 text-xs text-dust">欢迎预约到店品鉴交流</span>
              <div className="mt-auto flex items-center gap-2 pt-6">
                <span className="h-1 w-1 rounded-full bg-neon-jade" />
                <span className="h-px flex-1 bg-stone/30" />
                <span className="font-mono text-[9px] tracking-[0.2em] text-fade">
                  VISIT
                </span>
              </div>
            </div>
          </div>

          {/* 底部装饰线 */}
          <div className="mt-12 flex items-center gap-4">
            <span className="neon-line flex-1" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
              CONTACT INFO
            </span>
            <span className="neon-line flex-1" />
          </div>
        </div>
      </section>

      {/* ============================================
          3. 留言表单 + 地图
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-carbon py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-number">02 / MESSAGE</span>
              <h2 className="heading-section mt-3 text-bone">
                在线留言
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-dust">
              填写以下信息，我们将在收到留言后尽快与你联系。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            {/* 留言表单 */}
            <div className="lg:col-span-7">
              <form className="glass space-y-6 p-6 lg:p-8">
                {/* 姓名 */}
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-fade">
                    姓名 / NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="请输入你的姓名"
                    className="w-full border border-stone/50 bg-ash/50 px-4 py-3 font-sans text-sm text-bone placeholder-fade transition-colors focus:border-neon-jade/50 focus:outline-none"
                  />
                </div>

                {/* 邮箱 */}
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-fade">
                    邮箱 / EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="请输入你的邮箱地址"
                    className="w-full border border-stone/50 bg-ash/50 px-4 py-3 font-sans text-sm text-bone placeholder-fade transition-colors focus:border-neon-jade/50 focus:outline-none"
                  />
                </div>

                {/* 需求描述 */}
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-fade">
                    需求描述 / MESSAGE
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="请描述你的需求——题材偏好、玉料种类、用途场景、预算范围等"
                    className="w-full resize-none border border-stone/50 bg-ash/50 px-4 py-3 font-sans text-sm text-bone placeholder-fade transition-colors focus:border-neon-jade/50 focus:outline-none"
                  />
                </div>

                {/* 提交按钮 */}
                <div className="flex items-center justify-between">
                  <p className="text-xs text-fade">
                    * 表单为静态展示，请直接邮件联系
                  </p>
                  <button type="submit" className="btn-cyber">
                    提交留言
                    <span className="ml-1">→</span>
                  </button>
                </div>
              </form>
            </div>

            {/* 地图占位区 */}
            <div className="lg:col-span-5">
              <div className="glass relative flex h-full min-h-[320px] flex-col p-6 lg:p-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fade">
                  LOCATION / 地图
                </span>
                <h3 className="mt-3 heading-song text-xl text-bone lg:text-2xl">
                  {companyInfo.address}
                </h3>

                {/* 地图占位 */}
                <div className="relative mt-6 flex-1 overflow-hidden border border-stone/50 bg-ash/30">
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  {/* 中心标记 */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative flex flex-col items-center">
                      <div className="glow-node" />
                      <span className="mt-3 font-mono text-[10px] tracking-[0.2em] text-neon-jade">
                        {companyInfo.address.toUpperCase()}
                      </span>
                      <span className="mt-1 font-mono text-[9px] text-fade">
                        {companyInfo.domain}
                      </span>
                    </div>
                  </div>
                  {/* 四角装饰 */}
                  <div className="absolute left-3 top-3 h-3 w-3 border-l border-t border-neon-jade/40" />
                  <div className="absolute right-3 top-3 h-3 w-3 border-r border-t border-neon-jade/40" />
                  <div className="absolute left-3 bottom-3 h-3 w-3 border-b border-l border-neon-jade/40" />
                  <div className="absolute right-3 bottom-3 h-3 w-3 border-b border-r border-neon-jade/40" />
                </div>

                {/* 底部信息 */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-neon-jade" />
                  <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                    MAP PLACEHOLDER
                  </span>
                  <span className="h-px flex-1 bg-stone/30" />
                </div>
              </div>
            </div>
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
          <span className="section-number">// EMAIL · 直接来信</span>

          <h2 className="heading-section mt-6 text-bone">
            最快捷的
            <span className="heading-song text-neon-jade"> 联系方式</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-loose text-dust">
            有任何关于玉石的问题，欢迎直接发邮件。
            我们期待与你对话。
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-8">
            <a href={`mailto:${companyInfo.email}`} className="group">
              <span className="block font-mono text-[10px] tracking-[0.3em] text-fade mb-2">
                EMAIL US
              </span>
              <span className="font-mono text-3xl tracking-wider text-neon-jade transition-colors group-hover:text-bone lg:text-4xl">
                {companyInfo.email}
              </span>
            </a>

            <Link href="/custom" className="btn-cyber">
              定制咨询
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
