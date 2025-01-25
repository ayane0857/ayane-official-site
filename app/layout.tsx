import { Kiwi_Maru } from "next/font/google";
import "global.css";

const kiwiMaru = Kiwi_Maru({
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
    <html lang="ja" className={kiwiMaru.className}>
      <body>{children}</body>
    </html>
  );
}
