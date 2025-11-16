import React from "react";
import { Zen_Kaku_Gothic_New, M_PLUS_1_Code } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import type { Viewport } from "next";
import dynamic from "next/dynamic";
const LenisProvider = dynamic(() =>
  import("@/components/lenis").then((mod) => mod.LenisProvider)
);
import ProgressProviders from "@/components/ProgressBarProvider";
export const viewport: Viewport = {
  themeColor: "#D58F99",
  width: "device-width",
  initialScale: 1.0,
};

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

export const metadata = {
  title: "ほーむ",
  description: "あやねのてきとーなさいとのほーむだよ！",
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
