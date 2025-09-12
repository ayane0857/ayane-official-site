import Link from "next/link";

export function Footer() {
  const version = process.env.npm_package_version;
  return (
    <footer className="flex flex-col items-center justify-center w-full p-4 gap-4">
      <div className="flex justify-center space-x-4">
        <Link className="text-lg hover:underline" href={"/license"}>
          ライセンス
        </Link>
      </div>
      <p className="text-center text-gray-500">© 2025 ayane. v{version}</p>
    </footer>
  );
}
