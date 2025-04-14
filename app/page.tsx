import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaGithub, FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default async function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-[#F9F6F7] p-4 md:p-8">
      <div className="w-full md:w-64 lg:w-72 flex items-center justify-center md:justify-start mb-6 md:mb-0">
        <Card className="w-full h-auto md:h-[550px] flex flex-col items-center bg-[#D58F99] shadow-lg border-0 p-4">
          <div className="flex flex-col items-center w-full h-full space-y-4">
            <div className="w-32 h-32 relative">
              <Image
                src="/icon.png"
                alt="アイコン"
                width={128}
                height={128}
                className="rounded-full object-cover"
              />
            </div>
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
            <p className="text-ml leading-relaxed">
              そこらへんにいる一般階級インフラレッドのぬっこ
              <br />
              動画編集やプログラミングとか暇があったらやってる
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

      <div className="w-full md:w-[calc(100%-16rem)] lg:w-[calc(100%-18rem)] flex items-center justify-start p-4 md:p-12">
        <div className="max-w-2xl w-full">
          <h1 className="text-3xl font-bold mb-6 pb-2 border-b">最新のお知らせ</h1>
          <div className="space-y-6">
            <Card className="border-t border-b">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">なし</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">データが取得できません</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
