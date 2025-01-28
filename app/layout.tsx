import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const ZenMaru = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
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
    <html lang="ja" className={ZenMaru.className}>
      <body>{children}</body>
    </html>
  );
}
