import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-primary hover:underline">
            /home/1
          </Link>
          <h1 className="text-2xl font-bold text-center flex-grow">
            お知らせ作ってみた
          </h1>
          <div className="text-sm text-muted-foreground">01/28/2025</div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <article className="prose dark:prose-invert mx-auto">
          <p>いえーいみってる～？</p>
        </article>
      </main>
    </div>
  );
}
