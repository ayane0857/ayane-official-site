export function Footer() {
  const version = process.env.npm_package_version;
  return (
    <footer className="flex flex-col items-center justify-center w-full p-8">
      <p className="text-center text-gray-500">© 2025 ayane. v{version}</p>
    </footer>
  );
}
