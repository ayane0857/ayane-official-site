"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { FaGithub, FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa";
import { MdEmail, MdGroups, MdMonitorHeart } from "react-icons/md";
import dynamic from "next/dynamic";

// ServicesSectionを動的にインポート
const DynamicServicesSection = dynamic(
  () => import("@/components/ServicesSection"),
  {
    loading: () => (
      <p className="text-center p-12">サービス一覧を読み込み中...</p>
    ), // ローディング中に表示するコンポーネント (任意)
    ssr: false, // サーバーサイドレンダリングを無効にする場合 (任意、コンテンツによります)
  }
);

export default function Home() {
  return (
    <div className="bg-[#F9F6F7]">
      <div className="flex flex-col md:flex-row min-h-screen w-full p-4 md:p-8">
        <div className="w-full md:w-80 lg:w-96 flex items-center justify-center md:justify-start mb-6 md:mb-0">
          <Card className="w-full h-auto flex flex-col items-center bg-[#D58F99] shadow-lg border-0 p-4">
            <div className="flex flex-col items-center w-full h-full space-y-4">
              <div className="flex justify-between items-center">
                <div className="w-40 h-40 relative">
                  <Image
                    src="/icon.png"
                    alt="アイコン"
                    width={192}
                    height={192}
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">彩音</h2>
                  <div className="flex space-x-4 my-2">
                    <a
                      href="https://github.com/ayane0857"
                      aria-label="GitHub"
                      className="hover:opacity-80"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a
                      href="https://x.com/ayane0857_"
                      aria-label="Twitter"
                      className="hover:opacity-80"
                    >
                      <FaTwitter className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.youtube.com/@ayane0857"
                      aria-label="YouTube"
                      className="hover:opacity-80"
                    >
                      <FaYoutube className="w-6 h-6" />
                    </a>
                    <a
                      href="https://discord.gg/mB3AXgtVEY"
                      aria-label="Discord"
                      className="hover:opacity-80"
                    >
                      <FaDiscord className="w-6 h-6" />
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <a
                      href="mailto:info@ayane0857.net"
                      className="flex items-center space-x-1 hover:opacity-80 text-lg md:text-base"
                    >
                      <MdEmail className="w-5 h-5" />
                      <span className="break-all" lang="en">
                        info@ayane0857.net
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <a
                      href="https://www.uniproject.jp/"
                      className="flex items-center space-x-1 hover:opacity-80 text-lg md:text-base"
                    >
                      <MdGroups className="w-5 h-5" />
                      <span className="break-all" lang="en">
                        UniProject
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <a
                      href="https://ayane.instatus.com/"
                      className="flex items-center space-x-1 hover:opacity-80 text-lg md:text-base"
                    >
                      <MdMonitorHeart className="w-5 h-5" />
                      <span className="break-all" lang="en">
                        Instatus
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-ml leading-relaxed">
                そこらへんにいる階級インフラレッドのぬっこ
                <br />
                動画投稿してるけど、最近あんまりやってない
                <br />
                プログラミングとか暇があったらやってる
                <br />
                <span lang="en">UniProject</span>に所属している
              </p>
              <div className="flex flex-col space-y-2 w-full items-center">
                <p className="text-2xl">相互リンク</p>
                <a
                  href="https://ilovejunkpcnico.netlify.app/"
                  className="flex items-center space-x-2 text-base hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Nicoさん</span>
                </a>
                <a
                  href="https://mellllonsoda.github.io/mellllonsoda-s-page/"
                  className="flex items-center space-x-2 text-base hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>めろんそ〜ださん</span>
                </a>
                <a
                  href="https://www.kaerubasyo.com/"
                  className="flex items-center space-x-2 text-base hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>kaeruさん</span>
                </a>
                <a
                  href="https://www.yuito-it.jp/"
                  className="flex items-center space-x-2 text-base hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>ゆいとさん</span>
                </a>
              </div>
            </div>
          </Card>
        </div>

        <div className="w-full md:w-[calc(100%-20rem)] lg:w-[calc(100%-24rem)] flex items-center justify-start p-4 md:p-12">
          <DynamicServicesSection />
        </div>
      </div>
      <footer className="flex items-center justify-center w-full p-4 gap-4">
        <Link className="text-xl" href={"/terms-of-service"}>
          利用規約
        </Link>
        <Link className="text-xl" href={"/privacy-policy"}>
          プライバシーポリシー
        </Link>
      </footer>
    </div>
  );
}
