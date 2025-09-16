import { IoReturnUpBackOutline } from "react-icons/io5";
import Image from "next/image";
import type { Viewport } from "next";
import Link from "next/link";
import { Footer } from "@/components/ui/footer";
import { ExternalLink, Twitter, Youtube, Github } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Contributor {
  name: string;
  contribution: string;
  icon: string;
  socialLinks: {
    platform: "twitter" | "youtube" | "github" | "website";
    url: string;
    handle?: string;
  }[];
}

// Sample contributors - replace with your actual contributors
const contributors: Contributor[] = [
  {
    name: "さ",
    contribution: "アイコン等イラストの制作",
    icon: "/sa.png",
    socialLinks: [],
  },
  {
    name: "ユネ",
    contribution: "アイコン等イラストの制作",
    icon: "/yune.jpg",
    socialLinks: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/@yune0330-j1w",
        handle: "@yune0330-j1w",
      },
      {
        platform: "twitter",
        url: "https://x.com/ym92ABKh5j91499",
        handle: "@ym92ABKh5j91499",
      },
    ],
  },
  {
    name: "あかつき ゆいと",
    contribution: "デザインやコードのレビュー",
    icon: "/yuito.png",
    socialLinks: [
      {
        platform: "github",
        url: "https://github.com/yuito-it",
        handle: "@yuito-it",
      },
      {
        platform: "twitter",
        url: "https://x.com/yuito_it_",
        handle: "@yuito_it_",
      },
      { platform: "website", url: "https://www.yuito-it.jp/ja" },
    ],
  },
];

function getSocialIcon(platform: string) {
  switch (platform) {
    case "twitter":
      return <Twitter className="h-4 w-4" />;
    case "youtube":
      return <Youtube className="h-4 w-4" />;
    case "github":
      return <Github className="h-4 w-4" />;
    case "website":
      return <ExternalLink className="h-4 w-4" />;
    default:
      return <ExternalLink className="h-4 w-4" />;
  }
}
export const metadata = {
  title: "謝辞",
  description: "手伝ってくれた人々全員！！！",
};

export const viewport: Viewport = {
  themeColor: "#D58F99",
  width: "device-width",
  initialScale: 1.0,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F6F7]">
      <header className="flex p-5 max-w-6xl mx-auto">
        <Link
          href={"/"}
          className="flex items-center space-x-2 whitespace-nowrap"
        >
          <IoReturnUpBackOutline className="h-8 w-8 text-black" />
          <h2 className="">ホームに戻る</h2>
        </Link>
      </header>

      <main className="px-5 py-10">
        <div className="mx-auto max-w-5xl rounded-lg bg-[#f9f6f7] border-2 p-10 min-h-[600px]">
          <h2
            className="text-center font-bold text-4xl font-normal text-black mb-4"
            lang="ja-big-bold"
          >
            謝辞
          </h2>

          <div className="text-black pl-4 text-xs md:text-sm lg:text-base space-y-2 text-center">
            <p className="text-lg max-w-2xl mx-auto text-pretty">
              手伝ってくれた人々全員に感謝します！！
            </p>

            <section className="mb-12">
              <h2
                className="text-3xl text-center text-foreground mb-8"
                lang="ja-bold"
              >
                寄稿者
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contributors.map((contributor, index) => (
                  <Card
                    key={index}
                    className="border-border hover:shadow-lg transition-shadow duration-200"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2 gap-4">
                        {contributor.icon && (
                          <Image
                            src={contributor.icon}
                            alt={`${contributor.name}さんのアイコン`}
                            className="w-16 h-16 rounded-full mb-4 object-cover"
                            width={64}
                            height={64}
                          />
                        )}
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {contributor.name}
                        </h3>
                      </div>
                      <p className="mb-2 leading-relaxed">
                        {contributor.contribution}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {contributor.socialLinks.map((link, linkIndex) => (
                          <Button
                            key={linkIndex}
                            variant="outline"
                            size="sm"
                            asChild
                            className="hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
                          >
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              {getSocialIcon(link.platform)}
                              <span className="text-sm">
                                {link.handle || link.platform}
                              </span>
                            </a>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* LICENSE */}
            <div className="max-w-4xl mx-auto py-8">
              <p className="text-lg">ライセンス</p>
              <p className="text-muted-foreground text-sm mb-4">
                ゆいとさんのアイコンは(c) 2023-2025 Yuito Akatsuki{" "}
                <a href="https://github.com/yuito-it/yuito.work/blob/main/LICENSE">
                  CC BY-NC-SA 4.0
                </a>
                です。
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
