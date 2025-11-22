import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // SWCによる高速最適化
  swcMinify: true,

  // コンパイラ最適化
  compiler: {
    removeConsole: {
      exclude: ["error", "warn"],
    },
  },

  // 画像最適化
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },

  // 実験的機能 - CSS最適化
  experimental: {
    optimizePackageImports: ["lucide-react", "@/components"],
  },

  // Webフォント最適化
  optimizeFonts: true,

  // 本番ビルド最適化
  reactStrictMode: true,
  poweredByHeader: false,
};

const withNextIntl = createNextIntlPlugin("./app/i18nconfig.tsx");
export default withNextIntl(nextConfig);
