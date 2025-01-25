import type { Metadata } from "next";
import "./globals.css";
import { Kiwi_Maru } from 'next/font/google'

export const kiwiMaru = Kiwi_Maru({
    subsets: ["latin"],
    weight: ["400"],
    style: "normal",
});
export const metadata: Metadata = {
  title: "彩音のてきとーなサイト",
  description: "プロフィールオンリー",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={kiwiMaru.className}>
      <body>{children}</body>
    </html>
  );
}
