import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "听山 TIDGE — 玉石工艺品加工 | 和田玉 翡翠 玉雕定制",
  description:
    "听山 TIDGE，专业玉石工艺品加工。精选和田玉、翡翠、南红等名贵玉料，以匠心工艺雕琢摆件、挂件、手镯、印章、把件等玉石工艺品。支持来料加工、专属定制。",
  keywords: "玉石加工,玉雕,和田玉,翡翠,玉石工艺品,玉器定制,听山,TIDGE,烟台玉石,玉石摆件,玉石挂件,玉手镯",
  authors: [{ name: "听山 TIDGE" }],
  creator: "听山 TIDGE",
  publisher: "听山 TIDGE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "https://yushitou.cn/" },
  openGraph: {
    title: "听山 TIDGE — 玉石工艺品加工",
    description: "以侘寂之心对话千年玉道，用当代设计语言重塑传统工艺。",
    url: "https://yushitou.cn/",
    siteName: "听山 TIDGE",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "听山 TIDGE — 玉石工艺品加工",
    description: "以侘寂之心对话千年玉道，用当代设计语言重塑传统工艺。",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Serif+SC:wght@400;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "听山 TIDGE",
              alternateName: "听山玉石工艺品",
              url: "https://yushitou.cn",
              email: "lov0u@foxmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "烟台",
                addressCountry: "CN",
              },
              description: "玉石工艺品加工，精选和田玉、翡翠等名贵玉料，匠心雕琢。",
            }),
          }}
        />
      </head>
      <body>
        <div className="scanline" />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
