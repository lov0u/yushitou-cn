import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getArticle,
  getAllArticleSlugs,
  getArticles,
} from "@/lib/payload";
import { companyInfo } from "@/lib/data";

export const revalidate = 3600; // ISR

// 构建时预生成所有文章页
export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

// 动态生成 SEO 元数据
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return {
      title: "文章未找到 — 听山 TIDGE",
    };
  }

  return {
    title: `${article.metaTitle || article.title} — 听山 TIDGE`,
    description: article.metaDescription || article.excerpt,
    keywords: article.metaKeywords?.split(",") || [],
    alternates: {
      canonical: `https://${companyInfo.domain}/articles/${article.slug}/`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      images: article.coverImage ? [{ url: article.coverImage }] : [],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  // 获取所有文章用于相关文章和上下篇导航
  const { articles } = await getArticles(1, 100);

  // 相关文章（排除当前文章，最多3篇）
  const relatedArticles = articles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  // 上一篇/下一篇导航
  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  // Article Schema JSON-LD
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: companyInfo.name,
    },
    publisher: {
      "@type": "Organization",
      name: companyInfo.name,
    },
  };

  // Breadcrumb Schema JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首页",
        item: `https://${companyInfo.domain}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "资讯",
        item: `https://${companyInfo.domain}/articles/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://${companyInfo.domain}/articles/${article.slug}/`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-void">
      {/* JSON-LD 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ============================================
          1. 面包屑导航
          ============================================ */}
      <section className="relative w-full bg-carbon border-b border-stone/30">
        <div className="mx-auto max-w-[1000px] px-6 py-4 lg:px-12">
          <nav className="flex items-center gap-3 text-xs">
            <Link href="/" className="link-cyber font-mono">
              首页
            </Link>
            <span className="text-fade">/</span>
            <Link href="/articles" className="link-cyber font-mono">
              资讯
            </Link>
            <span className="text-fade">/</span>
            <span className="font-mono text-dust line-clamp-1">
              {article.title}
            </span>
          </nav>
        </div>
      </section>

      {/* ============================================
          2. 文章头部
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-void grid-bg noise">
        {/* 背景光晕 */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-moss-400/10 blur-[120px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-neon-jade/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[900px] px-6 pb-12 pt-20 lg:px-12 lg:pb-16 lg:pt-28">
          {/* 顶部标签行 */}
          <div className="mb-8 flex items-center gap-4">
            <span className="tag-cyber">ARTICLE</span>
            <span className="h-px w-12 bg-stone" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
              {new Date(article.publishedAt).toLocaleDateString("zh-CN", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </span>
          </div>

          {/* 标题 */}
          <h1 className="heading-song text-3xl text-bone lg:text-4xl xl:text-5xl">
            {article.title}
          </h1>

          {/* 摘要 */}
          {article.excerpt && (
            <p className="mt-6 text-base leading-loose text-dust lg:text-lg">
              {article.excerpt}
            </p>
          )}

          {/* 作者信息 */}
          <div className="mt-8 flex items-center gap-4">
            <span className="neon-line w-16" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
              {companyInfo.name}
            </span>
          </div>

          {/* 封面图 */}
          {article.coverImage && (
            <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden bg-ash">
              <img
                src={article.coverImage}
                alt={article.title}
                className="h-full w-full object-cover opacity-80"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
            </div>
          )}
        </div>
      </section>

      {/* ============================================
          3. 文章正文
          ============================================ */}
      <section className="relative w-full overflow-hidden bg-void py-16 noise lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-10" />

        <div className="relative z-10 mx-auto max-w-[800px] px-6 lg:px-12">
          <div
            className="article-content text-bone"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* 底部装饰线 */}
          <div className="mt-16 flex items-center gap-4">
            <span className="neon-line flex-1" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
              END OF ARTICLE
            </span>
            <span className="neon-line flex-1" />
          </div>

          {/* 上一篇 / 下一篇 导航 */}
          {(prevArticle || nextArticle) && (
            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
              {prevArticle ? (
                <Link
                  href={`/articles/${prevArticle.slug}/`}
                  className="glass glass-hover group flex items-center gap-4 p-5"
                >
                  <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                    ← 上一篇
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="heading-song text-sm text-bone transition-colors group-hover:text-neon-jade line-clamp-2">
                      {prevArticle.title}
                    </h4>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextArticle ? (
                <Link
                  href={`/articles/${nextArticle.slug}/`}
                  className="glass glass-hover group flex items-center gap-4 p-5 text-right"
                >
                  <div className="min-w-0 flex-1">
                    <h4 className="heading-song text-sm text-bone transition-colors group-hover:text-neon-jade line-clamp-2">
                      {nextArticle.title}
                    </h4>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                    下一篇 →
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          )}

          {/* 相关文章 */}
          {relatedArticles.length > 0 && (
            <div className="mt-20">
              {/* 标题行 */}
              <div className="mb-8 flex items-center gap-4">
                <span className="tag-cyber">RELATED</span>
                <span className="h-px w-12 bg-stone" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
                  相关文章
                </span>
              </div>

              {/* 相关文章列表 */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {relatedArticles.map((relArticle, i) => (
                  <article
                    key={relArticle.id}
                    className="jade-card glass-hover group flex flex-col"
                  >
                    {/* 封面图 */}
                    {relArticle.coverImage && (
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-ash">
                        <img
                          src={relArticle.coverImage}
                          alt={relArticle.title}
                          loading="lazy"
                          className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-95"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                        <div className="absolute left-4 top-4">
                          <span className="font-mono text-xs tracking-[0.2em] text-neon-jade">
                            R{String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* 信息区 */}
                    <div className="flex flex-1 flex-col p-5">
                      {/* 日期 */}
                      <div className="mb-3 flex items-center gap-3">
                        <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
                          {new Date(relArticle.publishedAt).toLocaleDateString(
                            "zh-CN",
                            {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            }
                          )}
                        </span>
                        <span className="h-px flex-1 bg-stone/40" />
                      </div>

                      {/* 标题 */}
                      <h3 className="heading-song text-base text-bone transition-colors group-hover:text-neon-jade lg:text-lg">
                        {relArticle.title}
                      </h3>

                      {/* 摘要 */}
                      <p className="mt-3 text-xs leading-relaxed text-dust line-clamp-2">
                        {relArticle.excerpt}
                      </p>

                      {/* 底部装饰 */}
                      <div className="mt-auto flex items-center gap-2 pt-4">
                        <span className="h-1 w-1 rounded-full bg-neon-jade" />
                        <span className="h-px flex-1 bg-stone/50" />
                        <span className="font-mono text-[9px] tracking-[0.2em] text-fade">
                          READ →
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* 返回列表 */}
          <div className="mt-12 text-center">
            <Link
              href="/articles/"
              className="link-cyber font-mono text-sm tracking-[0.2em]"
            >
              ← 返回文章列表
            </Link>
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

        <div className="relative z-10 mx-auto max-w-[1000px] px-6 py-24 text-center lg:px-12 lg:py-32">
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
            <Link href="/works/" className="btn-cyber">
              探索作品
              <span className="ml-1">→</span>
            </Link>

            <Link
              href="/contact/"
              className="link-cyber font-mono text-sm tracking-[0.2em]"
            >
              联系我们 →
            </Link>
          </div>

          {/* 邮箱 */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.2em] text-fade">
              或邮件
            </span>
            <a
              href={`mailto:${companyInfo.email}`}
              className="font-mono text-base tracking-wider text-neon-jade transition-colors hover:text-bone"
            >
              {companyInfo.email}
            </a>
          </div>

          {/* 底部装饰线 */}
          <div className="mx-auto mt-16 flex max-w-md items-center gap-4">
            <span className="neon-line flex-1" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-fade">
              TIDGE
            </span>
            <span className="neon-line flex-1" />
          </div>
        </div>
      </section>
    </div>
  );
}
