import React from "react";
import { Zen_Kaku_Gothic_New, M_PLUS_1_Code } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
const LenisProvider = dynamic(() =>
  import("@/components/lenis").then((mod) => mod.LenisProvider)
);
import ProgressProviders from "@/components/ProgressBarProvider";

const ZenMaru_font = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: "normal",
  variable: "--font-jp",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const M_PLUS_1_Code_font = M_PLUS_1_Code({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
  variable: "--font-code",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "ほーむ",
  description: "あやねのてきとーなさいとのほーむだよ！",
  keywords: ["プログラマー", "動画編集者", "中学生", "ねむたい", "彩音"],
  openGraph: {
    title: "ほーむ",
    description: "あやねのてきとーなさいとのほーむだよ！",
    url: "https://ayane0857.net/",
    siteName: "彩音のてきとーなサイト",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ほーむ",
    description: "あやねのてきとーなさいとのほーむだよ！",
    creator: "@ayane0857_",
    images: ["https://ayane0857.net/icon.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#D58F99",
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${ZenMaru_font.variable} ${M_PLUS_1_Code_font.variable}`}
      >
        <LenisProvider />
        <ProgressProviders>{children}</ProgressProviders>
        <GoogleAnalytics gaId="G-XN8KR4DZ8E" />
      </body>
    </html>
  );
}
