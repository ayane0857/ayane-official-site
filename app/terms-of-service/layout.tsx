import { Zen_Maru_Gothic } from "next/font/google";
import { Inter } from "next/font/google";
import "../globals.css";

const ZenMaru_font = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
  variable: "--font-jp",
});

const Inter_font = Inter({
  subsets: ["latin"],
  weight: ["300"],
  style: "normal",
  variable: "--font-en",
});

export const metadata = {
  title: "利用規約",
  description: "利用規約",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${ZenMaru_font.variable} ${Inter_font.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
