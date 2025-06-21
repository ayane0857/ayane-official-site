import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/ui/footer";
import { ExternalLink } from "lucide-react";
export const metadata = {
  title: "ライセンス",
  description: "ライセンス",
  themeColor: "#D58F99",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F6F7]">
      <Link href={"/"}>
        <header className="flex items-center p-5">
          <div className="w-[60px] h-[60px]">
            <Image
              src="/icon.png"
              alt="アイコン"
              width={192}
              height={192}
              className="object-cover"
              priority
            />
          </div>
          <h1 className="ml-4 text-lg font-normal text-black">彩音サイト</h1>
        </header>
      </Link>
      <main className="px-5 py-10">
        <div className="mx-auto max-w-5xl rounded-lg bg-[#f9f6f7] border-2 p-10 min-h-[600px]">
          <div className="text-black mb-2 pl-2 text-xs lg:text-lg" lang="en">
            /<Link href={"/"}>home</Link>/license
          </div>

          <h2 className="text-center text-4xl font-normal text-black mb-4">
            ライセンス
          </h2>

          <div className="text-black pl-4 text-xs md:text-sm lg:text-base space-y-4">
            <p>以下の異なるライセンスに基づいて提供されます。</p>
            <p className="text-lg md:text-xl">プログラムコード：</p>
            <div className="mb-1">
              <span lang="en">The MIT License Copyright (c) 2025 </span>彩音
            </div>
            <p>
              本ソフトウェアおよび関連する文書のファイル（以下「ソフトウェア」）の複製を取得した全ての人物に対し、
              <br />
              以下の条件に従うことを前提に、ソフトウェアを無制限に扱うことを無償で許可します。
              <br />
              これには、ソフトウェアの複製を使用、複製、改変、結合、公開、頒布、再許諾、およびまたは販売する権利、
              <br />
              およびソフトウェアを提供する人物に同様の行為を許可する権利が含まれますが、これらに限定されません。
              <br />
              上記の著作権表示および本許諾表示を、ソフトウェアの全ての複製または実質的な部分に記載するものとします。
              <br />
              ソフトウェアは「現状有姿」で提供され、商品性、特定目的への適合性、
              <br />
              および権利の非侵害性に関する保証を含むがこれらに限定されず、明示的であるか黙示的であるかを問わず、
              <br />
              いかなる種類の保証も行われません。著作者または著作権者は、契約、不法行為、またはその他の行為であるかを問わず、
              <br />
              ソフトウェアまたはソフトウェアの使用もしくはその他に取り扱いに起因または関連して生じるいかなる請求、損害賠償、
              <br />
              その他の責任について、一切の責任を負いません。
              <br />
            </p>
            <p className="text-lg md:text-xl">画像等プログラムコード以外：</p>
            <p>
              <a
                href="https://creativecommons.org/licenses/by-nc/4.0/deed.ja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                クリエイティブ・コモンズ 表示 非営利<span lang="en"> 4.0 </span>
                国際<span lang="en"> (CC BY-NC 4.0)</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
