import { Zen_Maru_Gothic } from "next/font/google";
import "../globals.css";

const ZenMaru = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
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
    <html lang="ja" className={ZenMaru.className}>
      <body>{children}</body>
    </html>
  );
}
