import Image from "next/image";
import { Card } from "@/components/ui/card";
import { FaGithub, FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdGroups } from "react-icons/md";

export default async function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-[#F9F6F7] p-4 md:p-8">
      <div className="w-full md:w-80 lg:w-96 flex items-center justify-center md:justify-start mb-6 md:mb-0">
        <Card className="w-full h-auto flex flex-col items-center bg-[#D58F99] shadow-lg border-0 p-4">
          <div className="flex flex-col items-center w-full h-full space-y-4">
            <div className="flex justify-between items-center">
              <div className="w-32 h-32 relative">
                <Image
                  src="/icon.png"
                  alt="アイコン"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <div className="">
                <h2 className="text-xl md:text-2xl font-bold">彩音</h2>
                <div className="flex space-x-4 my-2">
                  <a
                    href="https://github.com/ayane0857"
                    aria-label="GitHub"
                    className="hover:opacity-80"
                  >
                    <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                  <a
                    href="https://x.com/ayane0857_"
                    aria-label="Twitter"
                    className="hover:opacity-80"
                  >
                    <FaTwitter className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                  <a
                    href="https://www.youtube.com/@ayane0857"
                    aria-label="YouTube"
                    className="hover:opacity-80"
                  >
                    <FaYoutube className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                  <a
                    href="https://discord.gg/qyTSUJFctN"
                    aria-label="Discord"
                    className="hover:opacity-80"
                  >
                    <FaDiscord className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href="mailto:info@ayane0857.net"
                    className="flex items-center space-x-1 text-sm md:text-base hover:opacity-80"
                  >
                    <MdEmail className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="break-all">info@ayane0857.net</span>
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href="https://www.uniproject.jp/"
                    className="flex items-center space-x-1 text-sm md:text-base hover:opacity-80"
                  >
                    <MdGroups className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="break-all">UniProject</span>
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
              UniProjectに所属している
            </p>
            <div className="flex flex-col space-y-2 w-full items-center">
              <p className="text-lg">相互リンク</p>
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
            </div>
          </div>
        </Card>
      </div>

      <div className="w-full md:w-[calc(100%-20rem)] lg:w-[calc(100%-24rem)] flex items-center justify-start p-4 md:p-12 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl w-full mx-auto">
          <h1 className="text-4xl font-bold mb-8 pb-3 border-b flex items-center gap-2">
            <span className="text-primary">運営サービス一覧</span>
          </h1>

          <div className="flex flex-col gap-6">
            <a
              href="https://yt.ayane0857.net"
              className="block group transition-all duration-300 hover:scale-105"
            >
              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-slate-800">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
                    YT Downloader
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    広告がないYoutube
                    Downloaderです。シンプルで使いやすいインターフェース。
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
            <a
              href="https://ayano.ayane0857.net"
              className="block group transition-all duration-300 hover:scale-105"
            >
              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-slate-800">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
                    彩乃bot
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    総合型開発中Botです。 ギャンブルできます（）
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
            <div className="border border-dashed rounded-lg overflow-hidden p-6 flex flex-col items-center justify-center h-full bg-gray-50 dark:bg-gray-800/50">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              <p className="mt-4 text-gray-500 dark:text-gray-400 text-center">
                近日公開予定の新サービスなんてないです
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
