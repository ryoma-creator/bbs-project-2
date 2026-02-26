import CardList from "@/components/CardList";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h2 className="mb-6 text-2xl font-bold tracking-tight">Latest Posts</h2>
      <CardList posts={posts} />
    </main>
  );
}
