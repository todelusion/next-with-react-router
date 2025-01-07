/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // 確保客戶端路由可以正常工作
  async rewrites() {
    return [
      {
        source: "/spa/:path*",
        destination: "/spa",
      },
    ];
  },
};

module.exports = nextConfig;
