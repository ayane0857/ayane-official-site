import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import dynamic from "next/dynamic";
const Footer = dynamic(() =>
  import("@/components/ui/footer").then((mod) => mod.Footer)
);
export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#F9F6F7]">
      <Card className="max-w-2xl w-full bg-[#D58F99] border-none shadow-none flex items-center justify-center">
        <CardContent className="p-16 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-figma-text">
            404 Not Found
          </h1>

          <div className="mb-12 space-y-2">
            <p className="text-xl md:text-2xl text-figma-text">
              このページはどこかへ冒険に出かけてしまったようです。
            </p>
            <p className="text-xl md:text-2xl text-figma-text">
              ホームページに戻ってみてください。
            </p>
          </div>
          <Link href="/">
            <Button
              className="px-8 py-4 text-lg font-medium rounded-full flex items-center gap-2 mx-auto bg-[#eae2e8] text-figma-text hover:bg-[#eae2e8]/90 border-none shadow-none"
              variant="outline"
            >
              <ChevronLeft className="w-5 h-5" />
              ホームに戻る
            </Button>
          </Link>
        </CardContent>
      </Card>
      <Footer />
    </div>
  );
}
