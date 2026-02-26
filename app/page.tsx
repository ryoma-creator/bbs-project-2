import CardList from "@/components/CardList";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h2 className="mb-6 text-2xl font-bold tracking-tight">Latest Posts</h2>
      <CardList />
    </main>
  );
}
