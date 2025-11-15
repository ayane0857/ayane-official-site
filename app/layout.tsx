import React from "react";
import { Zen_Maru_Gothic, Inter, M_PLUS_1_Code } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import type { Viewport } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
const LenisProvider = dynamic(() =>
  import("@/components/lenis").then((mod) => mod.LenisProvider)
);

import LoadingWithTrivia from "@/components/LoadingWithTrivia";
import MinimumLoadingWrapper from "@/components/MinimumLoadingWrapper";
import ProgressProviders from "@/components/ProgressBarProvider";
export const viewport: Viewport = {
  themeColor: "#D58F99",
  width: "device-width",
  initialScale: 1.0,
};

const ZenMaru_font = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: "normal",
  variable: "--font-jp",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const Inter_font = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: "normal",
  variable: "--font-en",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const M_PLUS_1_Code_font = M_PLUS_1_Code({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: "normal",
  variable: "--font-code",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata = {
  title: "彩音のてきとーなサイト",
  description: "プロフィールオンリー",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        lang="ja"
        className={`${ZenMaru_font.variable} ${Inter_font.variable} ${M_PLUS_1_Code_font.variable}`}
      >
        <Suspense fallback={<LoadingWithTrivia />}>
          <MinimumLoadingWrapper>
            <LenisProvider />
            <ProgressProviders>{children}</ProgressProviders>
            <GoogleAnalytics gaId="G-XN8KR4DZ8E" />
          </MinimumLoadingWrapper>
        </Suspense>
      </body>
    </html>
  );
}
