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
