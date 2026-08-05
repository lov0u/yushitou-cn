/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "http", hostname: "strapi.ra0.cn" },
      { protocol: "https", hostname: "strapi.ra0.cn" },
    ],
  },
  compress: true,
  poweredByHeader: false,
  trailingSlash: true,
};

module.exports = nextConfig;
