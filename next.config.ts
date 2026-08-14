import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    // Vercel's image optimization endpoint hit the account's request quota
    // (402 Payment Required), breaking every <Image> on the deployed site.
    // Serve original files directly instead of relying on that endpoint.
    unoptimized: true,
  },
};

export default nextConfig;
