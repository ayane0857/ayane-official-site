import Link from "next/link";
import dynamic from "next/dynamic";
import type { Viewport } from "next";
import { Card } from "@/components/ui/card";

const Skills = dynamic(() =>
  import("@/components/ui/skills").then((mod) => mod.Skills)
);

const ReciprocalLink = dynamic(() =>
  import("@/components/ui/reciprocal_link").then((mod) => mod.ReciprocalLink)
);

const Footer = dynamic(() =>
  import("@/components/ui/footer").then((mod) => mod.Footer)
);

const Icon = dynamic(() =>
  import("@/components/animation-icon").then((mod) => mod.Icon)
);

import { FaGithub, FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa";
import { MdEmail, MdOutlineTextSnippet } from "react-icons/md";

export const viewport: Viewport = {
  themeColor: "#D58F99",
};

export default function Home() {
  return (
    <div className="bg-[#F9F6F7]">
      <div className="flex flex-col md:flex-row min-h-screen w-full p-4 md:p-8">
        <div className="w-full md:w-80 lg:w-96 flex items-center justify-center md:justify-start mb-6 md:mb-0 md:fixed md:top-1/2 md:-translate-y-1/2 md:h-screen md:overflow-y-auto">
          <Card className="w-full h-auto flex flex-col items-center bg-[#D58F99] shadow-lg border-0 p-4">
            <div className="flex flex-col items-center w-full h-full space-y-4">
              <div className="flex justify-between items-center">
                <Icon />
                <div>
                  <h2 className="text-3xl font-bold">彩音</h2>
                  <div className="flex space-x-4 my-2">
                    <a
                      href="https://github.com/ayane0857"
                      aria-label="GitHub"
                      className="hover:opacity-80"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a
                      href="https://x.com/ayane0857_"
                      aria-label="Twitter"
                      className="hover:opacity-80"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.youtube.com/@ayane0857"
                      aria-label="YouTube"
                      className="hover:opacity-80"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube className="w-6 h-6" />
                    </a>
                    <a
                      href="https://discord.gg/mB3AXgtVEY"
                      aria-label="Discord"
                      className="hover:opacity-80"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaDiscord className="w-6 h-6" />
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <a
                      href="mailto:info@ayane0857.net"
                      className="flex items-center space-x-1 hover:opacity-80 text-base"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MdEmail className="w-5 h-5" />
                      <span className="break-all" lang="en">
                        info@ayane0857.net
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Link
                      href={"/license"}
                      className="flex items-center space-x-1 hover:opacity-80 text-base"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MdOutlineTextSnippet className="w-5 h-5" />
                      <span className="break-all" lang="en">
                        ライセンス
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <p className="text-base leading-relaxed">
                <span lang="en">2010</span>
                年製の中学生プログラマー兼動画編集者
                <br />
                そこらへんにいる階級インフラレッドな人
                <br />
                動画投稿してるけど、最近あんまりやってない
                <br />
                プログラミングとかやる気があるとやってます
                <br />
                めちゃんこ初心者なので手加減してほしいなぁ
                <br />
                <span lang="en">UniProject</span>
                で普段活動している
                <br />
              </p>
            </div>
          </Card>
        </div>

        <div className="w-full md:w-[calc(100%-20rem)] lg:w-[calc(100%-24rem)] flex items-center justify-start p-12 md:ml-80 lg:ml-96">
          <div className="max-w-4xl w-full mx-auto">
            <h1 className="text-4xl font-bold mb-8 pb-3 border-b flex items-center gap-2">
              <span className="text-primary" lang="en-small">
                Skills
              </span>
            </h1>
            <div className="grid grid-cols-2 mb-8 pb-3 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              <Skills icon="SiJavascript" text="JavaScript" />
              <Skills icon="SiNextdotjs" text="Next.js" />
              <Skills icon="SiNodedotjs" text="Node.js" />
              <Skills icon="SiPython" text="Python" />
              <Skills icon="SiTypescript" text="TypeScript" />
              <Skills icon="SiTailwindcss" text="Tailwind CSS" />
              <Skills icon="SiPostgresql" text="PostgreSQL" />
              <Skills icon="SiKubernetes" text="Kubernetes" />
              <Skills icon="SiGit" text="Git" />
              <Skills icon="SiArgo" text="ArgoCD" />
              <Skills icon="SiLinux" text="Linux" />
              <Skills icon="SiAirplayvideo" text="YMM4" />
            </div>
            <h1 className="text-4xl font-bold mb-8 pb-3 border-b flex items-center gap-2">
              <span className="text-primary" lang="en-small">
                Provided Services
              </span>
            </h1>
            <div className="flex flex-col mb-8 pb-3 gap-6">
              <a
                href="https://ayano.ayane0857.net"
                className="block group transition-all duration-300 hover:scale-105"
              >
                <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-slate-800">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
                      彩乃
                      <span lang="en-bold">bot</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      総合型開発中
                      <span lang="en">Bot</span>
                      です。 <br />
                      様々なことが可能ですが、まだ開発中のため、機能は少ないです。
                    </p>
                    <div className="mt-4 flex items-center text-sm text-primary">
                      <span>詳細を見る</span>
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex flex-col mb-8 pb-3 gap-6">
              <a
                href="https://utau.ayane0857.net"
                className="block group transition-all duration-300 hover:scale-105"
              >
                <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-slate-800">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
                      彩奏 彼方 <span lang="en-bold">(UTAU)</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      単独音で構成された音源
                    </p>
                    <div className="mt-4 flex items-center text-sm text-primary">
                      <span>詳細を見る</span>
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <h1 className="text-4xl font-bold mb-8 pb-3 border-b flex items-center gap-2">
              <span className="text-primary" lang="en-small">
                Reciprocal link
              </span>
            </h1>
            <div className="mb-8 pb-3 gap-4">
              <ReciprocalLink url="https://ilovejunkpcnico.netlify.app/">
                <span lang="en">Nico</span>さん
              </ReciprocalLink>
              <ReciprocalLink url="https://mellllonsoda.github.io/mellllonsoda-s-page/">
                めろんそ〜ださん
              </ReciprocalLink>
              <ReciprocalLink url="https://www.kaerubasyo.com/">
                <span lang="en">kaeru</span>さん
              </ReciprocalLink>
              <ReciprocalLink url="https://www.yuito-it.jp/">
                ゆいとさん
              </ReciprocalLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
