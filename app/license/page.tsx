import { IoReturnUpBackOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";
import Link from "next/link";
import type { Viewport } from "next";
import { Footer } from "@/components/ui/footer";
import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "ライセンス",
  description: "ライセンス",
};

export const viewport: Viewport = {
  themeColor: "#D58F99",
  width: "device-width",
  initialScale: 1.0,
};

export default function Home() {
  const t = useTranslations("license");
  return (
    <div className="min-h-screen bg-[#F9F6F7]">
      <header className="flex p-5 max-w-6xl mx-auto">
        <Link
          href={"/"}
          className="flex items-center space-x-2 whitespace-nowrap"
        >
          <IoReturnUpBackOutline className="h-8 w-8 text-black" />
          <h2 className="">{t("go_home")}</h2>
        </Link>
      </header>

      <main className="px-5 py-10">
        <div className="mx-auto max-w-5xl rounded-lg border-2 p-6 lg:p-10 min-h-[600px] bg-[#fafafa]">
          <h2 className="text-center font-bold text-4xl font-normal text-black mb-4">
            {t("title")}
          </h2>

          <div className="text-black pl-4 text-xs md:text-sm lg:text-base space-y-2">
            <p>{t("description")}</p>
            <a
              href="https://creativecommons.org/licenses/by-nc/4.0/deed.ja"
              target="_blank"
              className="inline-flex items-center gap-1 px-2 py-1 underline hover:opacity-80"
              rel="noopener noreferrer"
            >
              <span>{t("creative_commons")}</span>
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
            <p>{t("source_code_license")}</p>
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#d9d9d9] text-black px-4 py-2 rounded-t-lg border border-gray-300 text-xs md:text-sm lg:text-base">
                <p lang="code">/home/ayane/mit-license</p>
              </div>

              <div
                className="bg-[#1e2939] break-keep text-white p-6 rounded-b-lg font-mono text-gray-200 text-xs md:text-sm lg:text-base leading-relaxed"
                lang="code"
              >
                The MIT License Copyright (c) 2025 &lt;Ayane&gt;
                <br />
                Permission is hereby granted, free of charge, to any person
                obtaining a copy of this software and associated documentation
                files (the “Software”), to deal in the Software without
                restriction, including without limitation the rights to use,
                copy, modify, merge, publish, distribute, sublicense, and/or
                sell copies of the Software, and to permit persons to whom the
                Software is furnished to do so, subject to the following
                conditions: The above copyright notice and this permission
                notice shall be included in all copies or substantial portions
                of the Software. THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT
                WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
                LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
                OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
