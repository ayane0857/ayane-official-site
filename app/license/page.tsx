import { IoReturnUpBackOutline } from "react-icons/io5";

import Link from "next/link";
import { Footer } from "@/components/ui/footer";
import { ExternalLink } from "lucide-react";
export const metadata = {
  title: "ライセンス",
  description: "ライセンス",
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
        <div className="mx-auto max-w-5xl rounded-lg border-2 p-6 lg:p-10 min-h-[600px]">
          <h2
            className="text-center text-4xl font-normal text-black mb-4"
            lang="ja-bold"
          >
            ライセンス
          </h2>

          <div className="text-black pl-4 text-xs md:text-sm lg:text-base space-y-2">
            <p>
              基本的な著作物は
              <a
                href="https://creativecommons.org/licenses/by-nc/4.0/deed.ja"
                target="_blank"
                className="inline-flex items-center gap-1 px-2 py-1 underline hover:opacity-80"
                rel="noopener noreferrer"
              >
                <span>クリエイティブ・コモンズ （表示-非営利 4.0 国際）</span>
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
              のもとで公開しています。
            </p>
            <p>ソースコードの場合は以下のライセンスが適応されます</p>
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#d9d9d9] text-black px-4 py-2 rounded-t-lg border border-gray-300 text-xs md:text-sm lg:text-base">
                <p lang="code">/home/ayane/mit-license</p>
              </div>

              <div className="bg-[#1e2939] text-white p-6 rounded-b-lg font-mono text-sm leading-relaxed">
                <div
                  className="text-gray-200 text-xs md:text-sm lg:text-base"
                  lang="code"
                >
                  The MIT License Copyright (c) 2025 彩音
                  <br />
                  <br />
                  本ソフトウェアおよび関連する文書のファイル（以下「ソフトウェア」）の複製を取得した全ての人物に対し、
                  以下の条件に従うことを前提に、ソフトウェアを無制限に扱うことを無償で許可します。
                  <br />
                  これには、ソフトウェアの複製を使用、複製、改変、結合、公開、頒布、再許諾、およびまたは販売する権利、
                  およびソフトウェアを提供する人物に同様の行為を許可する権利が含まれますが、これらに限定されません。
                  <br />
                  上記の著作権表示および本許諾表示を、ソフトウェアの全ての複製または実質的な部分に記載するものとします。
                  <br />
                  ソフトウェアは「現状有姿」で提供され、商品性、特定目的への適合性、
                  および権利の非侵害性に関する保証を含むがこれらに限定されず、明示的であるか黙示的であるかを問わず、
                  いかなる種類の保証も行われません。著作者または著作権者は、契約、不法行為、またはその他の行為であるかを問わず、
                  ソフトウェアまたはソフトウェアの使用もしくはその他に取り扱いに起因または関連して生じるいかなる請求、損害賠償、
                  その他の責任について、一切の責任を負いません。
                  <br />
                </div>
              </div>
            </div>
            <p>※個別にライセンスページが存在する場合はそちらが優先されます。</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
