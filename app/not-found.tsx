import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function Custom404() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#f9f6f7] p-4">
      <Card className="h-[550px] w-[400px] flex flex-col items-center bg-[#D58F99] p-4 shadow-lg">
        <h1 className="text-4xl font-bold mb-4">まだ何もないよ！</h1>
        <p className="text-xl mb-6">迷子かな？下でホームに戻れるよ！</p>

        <Link
          href="/"
          className="bg-[#eae2e8] px-6 py-2 rounded-full hover:bg-[#D3C4CF]"
        >
          ホームに戻る
        </Link>
      </Card>
    </div>
  );
}
