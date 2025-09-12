import { Zen_Maru_Gothic } from "next/font/google";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import type { Viewport } from "next";
import { LenisProvider } from "@/components/lenis";
import ProgressProviders from "@/components/ProgressBarProvider";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  userScalable: false,
};

const ZenMaru_font = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
  variable: "--font-jp",
});

const Inter_font = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: "normal",
  variable: "--font-en",
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
        className={`${ZenMaru_font.variable} ${Inter_font.variable}`}
      >
        <LenisProvider />
        <ProgressProviders>{children}</ProgressProviders>
        <GoogleAnalytics gaId="G-XN8KR4DZ8E" />
      </body>
    </html>
  );
}
