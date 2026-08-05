import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-void grid-bg noise">
      {/* 背景光晕 */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-moss-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-neon-jade/5 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-moss-400/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[800px] px-6 text-center lg:px-12">
        {/* 顶部标签 */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="tag-cyber">ERROR 404</span>
          <span className="h-px w-12 bg-stone" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
            PAGE NOT FOUND
          </span>
        </div>

        {/* 404 大字 */}
        <h1 className="heading-display text-liquid" style={{ fontSize: "clamp(5rem, 18vw, 12rem)" }}>
          404
        </h1>

        {/* 分割线 */}
        <div className="mx-auto mt-8 flex max-w-xs items-center gap-4">
          <span className="neon-line flex-1" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
            LOST
          </span>
          <span className="neon-line flex-1" />
        </div>

        {/* 提示文字 */}
        <h2 className="mt-8 heading-song text-2xl text-bone lg:text-3xl">
          页面未找到
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-dust">
          你所寻找的页面不存在，或已被移至别处。
          如同迷失在深山中的行者，不妨循着来路返回。
        </p>

        {/* 返回首页按钮 */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Link href="/" className="btn-cyber">
            返回首页
            <span className="ml-1">→</span>
          </Link>

          <Link href="/works" className="link-cyber font-mono text-sm tracking-[0.2em]">
            查看作品 →
          </Link>
        </div>

        {/* 底部装饰线 */}
        <div className="mx-auto mt-20 flex max-w-md items-center gap-4">
          <span className="neon-line flex-1" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-fade">TIDGE</span>
          <span className="neon-line flex-1" />
        </div>
      </div>
    </div>
  );
}
