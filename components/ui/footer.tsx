import Link from "next/link";

export function Footer() {
  const version = process.env.npm_package_version;
  return (
    <footer className="flex flex-col items-center justify-center w-full p-8">
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-12 mb-2 text-gray-700 items-center justify-center">
        <div className="flex flex-col space-y-2">
          <p className="">サイトマップ</p>
          <nav className="flex flex-col space-y-1 text-sm">
            <Link href={"/"}>ホーム</Link>
            <Link href={"/license"}>ライセンス</Link>
            <Link href={"/super_thanks"}>謝辞</Link>
          </nav>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="">SNS各種リンク</p>
          <nav className="flex flex-col space-y-1 text-sm">
            <a>X(旧Twitter)</a>
            <a>Github</a>
            <a>Youtube</a>
          </nav>
        </div>
      </div>
      <p className="text-center text-gray-500 p-2">© 2025 ayane. v{version}</p>
    </footer>
  );
}
