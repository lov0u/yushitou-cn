/* Strapi API 客户端 — 听山 TIDGE */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://strapi.ra0.cn";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || "";

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  publishedAt: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
}

export async function getArticles(
  page = 1,
  pageSize = 20
): Promise<{ articles: Article[]; total: number }> {
  try {
    const url = `${STRAPI_URL}/api/articles?filters[site][slug][$eq]=yushitou&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc&populate=*`;

    const res = await fetch(url, {
      headers: STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {},
      next: { revalidate: 3600 },
    });

    if (!res.ok) return { articles: [], total: 0 };

    const data = await res.json();
    if (!data.data) return { articles: [], total: 0 };

    const articles: Article[] = data.data.map((item: any) => ({
      id: item.id,
      title: item.title || "无标题",
      slug: item.slug || `article-${item.id}`,
      excerpt: item.excerpt || "",
      content: item.content || "",
      coverImage: item.coverImage?.url
        ? `${STRAPI_URL}${item.coverImage.url}`
        : undefined,
      publishedAt: item.publishedAt || new Date().toISOString(),
      metaTitle: item.metaTitle || item.title,
      metaDescription: item.metaDescription || item.excerpt,
      metaKeywords: item.metaKeywords,
    }));

    return { articles, total: data.meta?.pagination?.total || articles.length };
  } catch {
    return { articles: [], total: 0 };
  }
}

export async function getArticle(slug: string): Promise<Article | null> {
  try {
    const url = `${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&filters[site][slug][$eq]=yushitou&populate=*`;

    const res = await fetch(url, {
      headers: STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {},
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const data = await res.json();
    if (!data.data || data.data.length === 0) return null;

    const item = data.data[0];
    return {
      id: item.id,
      title: item.title || "无标题",
      slug: item.slug || `article-${item.id}`,
      excerpt: item.excerpt || "",
      content: item.content || "",
      coverImage: item.coverImage?.url
        ? `${STRAPI_URL}${item.coverImage.url}`
        : undefined,
      publishedAt: item.publishedAt || new Date().toISOString(),
      metaTitle: item.metaTitle || item.title,
      metaDescription: item.metaDescription || item.excerpt,
      metaKeywords: item.metaKeywords,
    };
  } catch {
    return null;
  }
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

/**
 * 获取所有文章 slug（用于 generateStaticParams）
 */
export async function getAllArticleSlugs(): Promise<string[]> {
  try {
    const { articles } = await getArticles(1, 100);
    return articles.map((a) => a.slug);
  } catch {
    return [];
  }
}

/**
 * 获取所有标签（仅返回当前站点下有文章的标签）
 */
export async function getTags(): Promise<Tag[]> {
  try {
    const url = `${STRAPI_URL}/api/tags?filters[articles][site][slug][$eq]=yushitou&fields[0]=name&fields[1]=slug&pagination[pageSize]=100`;

    const res = await fetch(url, {
      headers: STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {},
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const data = await res.json();
    const tags: Tag[] = (data.data || []).map((item: any) => ({
      id: item.id,
      name: item.name || item.slug,
      slug: item.slug || `tag-${item.id}`,
    }));

    return tags;
  } catch {
    return [];
  }
}

/**
 * 获取标签下的文章列表
 */
export async function getArticlesByTag(
  tagSlug: string,
  page = 1,
  pageSize = 20
): Promise<{ articles: Article[]; total: number; tag: Tag | null }> {
  try {
    // 先获取标签信息
    const tagUrl = `${STRAPI_URL}/api/tags?filters[slug][$eq]=${tagSlug}&fields[0]=name&fields[1]=slug`;
    const tagRes = await fetch(tagUrl, {
      headers: STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {},
      next: { revalidate: 3600 },
    });

    let tag: Tag | null = null;
    if (tagRes.ok) {
      const tagData = await tagRes.json();
      if (tagData.data && tagData.data.length > 0) {
        tag = {
          id: tagData.data[0].id,
          name: tagData.data[0].name || tagData.data[0].slug,
          slug: tagData.data[0].slug,
        };
      }
    }

    // 获取该标签下的文章
    const url = `${STRAPI_URL}/api/articles?filters[tags][slug][$eq]=${tagSlug}&filters[site][slug][$eq]=yushitou&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc&populate=*`;

    const res = await fetch(url, {
      headers: STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {},
      next: { revalidate: 3600 },
    });

    if (!res.ok) return { articles: [], total: 0, tag };

    const data = await res.json();
    if (!data.data) return { articles: [], total: 0, tag };

    const articles: Article[] = data.data.map((item: any) => ({
      id: item.id,
      title: item.title || "无标题",
      slug: item.slug || `article-${item.id}`,
      excerpt: item.excerpt || "",
      content: item.content || "",
      coverImage: item.coverImage?.url
        ? `${STRAPI_URL}${item.coverImage.url}`
        : undefined,
      publishedAt: item.publishedAt || new Date().toISOString(),
      metaTitle: item.metaTitle || item.title,
      metaDescription: item.metaDescription || item.excerpt,
      metaKeywords: item.metaKeywords,
    }));

    return {
      articles,
      total: data.meta?.pagination?.total || articles.length,
      tag,
    };
  } catch {
    return { articles: [], total: 0, tag: null };
  }
}

/**
 * 获取所有标签 slug（用于 generateStaticParams）
 */
export async function getAllTagSlugs(): Promise<string[]> {
  try {
    const tags = await getTags();
    return tags.map((t) => t.slug);
  } catch {
    return [];
  }
}
