import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getArticlesByTag, getAllTagSlugs } from "@/lib/payload";
import { companyInfo } from "@/lib/data";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllTagSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { tag } = await getArticlesByTag(slug);

  if (!tag) {
    return {
      title: "标签未找到 — 听山 TIDGE",
    };
  }

  return {
    title: `标签: ${tag.name} — 听山 TIDGE`,
    description: `浏览${companyInfo.name}「${tag.name}」标签下的所有文章`,
    alternates: {
      canonical: `https://${companyInfo.domain}/tags/${tag.slug}/`,
    },
  };
}

export default async function TagArticlesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { articles, total, tag } = await getArticlesByTag(slug);

  if (!tag) {
    notFound();
  }

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
          {/* 面包屑 */}
          <nav className="mb-8 flex items-center gap-3 text-xs">
            <Link href="/" className="link-cyber font-mono">
              首页
            </Link>
            <span className="text-fade">/</span>
            <Link href="/articles" className="link-cyber font-mono">
              资讯
            </Link>
            <span className="text-fade">/</span>
            <Link href="/tags" className="link-cyber font-mono">
              标签
            </Link>
            <span className="text-fade">/</span>
            <span className="font-mono text-dust">{tag.name}</span>
          </nav>

          {/* 顶部标签行 */}
          <div className="flex items-center gap-4">
            <span className="tag-cyber">TAG</span>
            <span className="h-px w-12 bg-stone" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
              {total} ARTICLES
            </span>
          </div>

          {/* 主标题 */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <h1 className="heading-display text-bone">
                {tag.name}
              </h1>
            </div>
            <div className="flex flex-col justify-end lg:col-span-4">
              <div className="mb-4 flex items-center gap-3">
                <span className="neon-line w-12" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
                  FILTERED BY TAG
                </span>
              </div>
              <p className="max-w-sm font-sans text-sm leading-relaxed text-dust">
                共 {total} 篇相关文章，持续更新中。
              </p>
            </div>
          </div>

          {/* 底部分割线 */}
          <div className="divider-cyber mt-16" />
        </div>
      </section>

      {/* ============================================
          2. 文章列表
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-void py-24 lg:py-32 noise">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
          {articles.length > 0 ? (
            <>
              {/* 标题行 */}
              <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="section-number">01 / TAGGED</span>
                  <h2 className="heading-section mt-3 text-bone">
                    「{tag.name}」相关文章
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-dust">
                  共 {articles.length} 篇文章。
                </p>
              </div>

              {/* 文章列表 */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article, i) => (
                  <article
                    key={article.id}
                    className="jade-card glass-hover group flex flex-col"
                  >
                    {/* 封面图 */}
                    {article.coverImage && (
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-ash">
                        <img
                          src={article.coverImage}
                          alt={article.title}
                          loading="lazy"
                          className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-95"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                        <div className="absolute left-4 top-4">
                          <span className="font-mono text-xs tracking-[0.2em] text-neon-jade">
                            A{String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* 信息区 */}
                    <div className="flex flex-1 flex-col p-6">
                      {/* 日期 */}
                      <div className="mb-4 flex items-center gap-3">
                        <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                          {new Date(article.publishedAt).toLocaleDateString("zh-CN", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })}
                        </span>
                        <span className="h-px flex-1 bg-stone/40" />
                      </div>

                      {/* 标题 */}
                      <h3 className="heading-song text-xl text-bone transition-colors group-hover:text-neon-jade lg:text-2xl">
                        {article.title}
                      </h3>

                      {/* 摘要 */}
                      <p className="mt-4 text-sm leading-relaxed text-dust">
                        {article.excerpt}
                      </p>

                      {/* 底部装饰 */}
                      <div className="mt-auto flex items-center gap-2 pt-6">
                        <span className="h-1 w-1 rounded-full bg-neon-jade" />
                        <span className="h-px flex-1 bg-stone/50" />
                        <span className="font-mono text-[9px] tracking-[0.2em] text-fade">
                          READ MORE →
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* 标题行 */}
              <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="section-number">01 / EMPTY</span>
                  <h2 className="heading-section mt-3 text-bone">
                    暂无文章
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-dust">
                  该标签下暂无文章内容。
                </p>
              </div>

              {/* 占位区 */}
              <div className="glass relative flex min-h-[400px] flex-col items-center justify-center p-12 text-center">
                <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

                <div className="relative z-10 mb-8">
                  <div className="glow-node mx-auto" />
                </div>

                <span className="relative z-10 font-mono text-[10px] tracking-[0.3em] text-fade">
                  // NO ARTICLES
                </span>

                <h3 className="relative z-10 mt-6 heading-song text-3xl text-bone lg:text-4xl">
                  暂无文章
                </h3>

                <p className="relative z-10 mt-4 max-w-md text-sm leading-relaxed text-dust">
                  该标签下暂无文章内容，请浏览其他标签或全部文章。
                </p>

                <div className="relative z-10 mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                  <Link href="/articles" className="btn-cyber">
                    浏览全部文章
                    <span className="ml-1">→</span>
                  </Link>

                  <Link href="/tags" className="link-cyber font-mono text-sm tracking-[0.2em]">
                    查看全部标签 →
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
            <span className="heading-song text-neon-jade"> 标签</span>
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link href="/tags" className="btn-cyber">
              查看全部标签
              <span className="ml-1">→</span>
            </Link>

            <Link href="/articles" className="link-cyber font-mono text-sm tracking-[0.2em]">
              浏览全部文章 →
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
