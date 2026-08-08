import Link from "next/link";
import type { Metadata } from "next";
import { getTags } from "@/lib/payload";
import { companyInfo } from "@/lib/data";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "标签 / TAGS — 听山 TIDGE",
  description: `浏览${companyInfo.name}所有文章标签，按标签分类浏览玉石知识、雕刻工艺、鉴赏指南等资讯。`,
  alternates: {
    canonical: `https://${companyInfo.domain}/tags/`,
  },
};

export default async function TagsPage() {
  const tags = await getTags();

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
            <span className="tag-cyber">TAGS</span>
            <span className="h-px w-12 bg-stone" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
              ARTICLE LABELS & CATEGORIES
            </span>
          </div>

          {/* 主标题 */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <h1 className="heading-display text-bone">
                标签
                <span className="text-fade"> /</span>
                <span className="text-liquid"> TAGS</span>
              </h1>
            </div>
            <div className="flex flex-col justify-end lg:col-span-4">
              <div className="mb-4 flex items-center gap-3">
                <span className="neon-line w-12" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
                  BROWSE BY LABEL
                </span>
              </div>
              <p className="max-w-sm font-sans text-sm leading-relaxed text-dust">
                按标签分类浏览玉石知识、雕刻工艺、鉴赏指南等资讯。
              </p>
            </div>
          </div>

          {/* 底部分割线 */}
          <div className="divider-cyber mt-16" />
        </div>
      </section>

      {/* ============================================
          2. 标签列表
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-void py-24 lg:py-32 noise">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* 面包屑 */}
          <nav className="mb-12 flex items-center gap-3 text-xs">
            <Link href="/" className="link-cyber font-mono">
              首页
            </Link>
            <span className="text-fade">/</span>
            <Link href="/articles" className="link-cyber font-mono">
              资讯
            </Link>
            <span className="text-fade">/</span>
            <span className="font-mono text-dust">标签</span>
          </nav>

          {tags.length > 0 ? (
            <>
              {/* 标题行 */}
              <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="section-number">01 / ALL TAGS</span>
                  <h2 className="heading-section mt-3 text-bone">
                    全部标签
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-dust">
                  共 {tags.length} 个标签，点击标签浏览相关文章。
                </p>
              </div>

              {/* 标签网格 */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {tags.map((tag, i) => (
                  <Link
                    key={tag.id}
                    href={`/tags/${tag.slug}`}
                    className="jade-card glass-hover group flex flex-col p-6"
                  >
                    {/* 编号 */}
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                        T{String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-moss-400 transition-colors group-hover:bg-neon-jade" />
                    </div>

                    {/* 标签名 */}
                    <h3 className="heading-song text-xl text-bone transition-colors group-hover:text-neon-jade lg:text-2xl">
                      {tag.name}
                    </h3>

                    {/* 底部装饰 */}
                    <div className="mt-auto flex items-center gap-2 pt-6">
                      <span className="h-1 w-1 rounded-full bg-neon-jade" />
                      <span className="h-px flex-1 bg-stone/50" />
                      <span className="font-mono text-[9px] tracking-[0.2em] text-fade">
                        VIEW →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* 标题行 */}
              <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="section-number">01 / COMING SOON</span>
                  <h2 className="heading-section mt-3 text-bone">
                    全部标签
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-dust">
                  标签功能正在筹备中，敬请期待。
                </p>
              </div>

              {/* 占位区 */}
              <div className="glass relative flex min-h-[400px] flex-col items-center justify-center p-12 text-center">
                <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

                <div className="relative z-10 mb-8">
                  <div className="glow-node mx-auto" />
                </div>

                <span className="relative z-10 font-mono text-[10px] tracking-[0.3em] text-fade">
                  // COMING SOON
                </span>

                <h3 className="relative z-10 mt-6 heading-song text-3xl text-bone lg:text-4xl">
                  标签即将上线
                </h3>

                <p className="relative z-10 mt-4 max-w-md text-sm leading-relaxed text-dust">
                  我们正在整理文章标签分类，很快就会与大家见面，敬请期待。
                </p>

                <div className="relative z-10 mt-10">
                  <Link href="/articles" className="btn-cyber">
                    浏览全部文章
                    <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ============================================
          3. 底部返回
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-carbon noise">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-moss-400/10 blur-[140px]" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

        <div className="relative z-10 mx-auto max-w-[1000px] px-6 py-24 text-center lg:px-12 lg:py-32">
          <span className="section-number">// BACK · 返回</span>

          <h2 className="heading-section mt-6 text-bone">
            探索更多
            <span className="heading-song text-neon-jade"> 玉石之美</span>
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link href="/articles" className="btn-cyber">
              浏览文章
              <span className="ml-1">→</span>
            </Link>

            <Link href="/works" className="link-cyber font-mono text-sm tracking-[0.2em]">
              查看作品 →
            </Link>
          </div>

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
