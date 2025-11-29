import React from "react";
import { Zen_Kaku_Gothic_New, M_PLUS_1_Code } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "@/app/globals.css";
import type { Metadata, Viewport } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { LenisProvider } from "@/components/lenis";
import ProgressProviders from "@/components/ProgressBarProvider";
import { PageTransition } from "@/components/PageTransition";

const ZenMaru_font = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("metadata");

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords")
      .split(", ")
      .map((k: string) => k.trim()),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://ayane0857.net/",
      siteName: t("siteName"),
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: t("title"),
      description: t("description"),
      creator: "@ayane0857_",
      images: ["https://ayane0857.net/icon.png"],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#D58F99",
  width: "device-width",
  initialScale: 1.0,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body
        className={`${ZenMaru_font.variable} ${M_PLUS_1_Code_font.variable}`}
      >
        <LenisProvider />
        <ProgressProviders>
          <PageTransition>{children}</PageTransition>
        </ProgressProviders>
        <GoogleAnalytics gaId="G-XN8KR4DZ8E" />
      </body>
    </html>
  );
}
