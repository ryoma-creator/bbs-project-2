import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const posts = [
  {
    id: 1,
    title: "はじめての投稿",
    description: "これはBBSの最初のテスト投稿です。shadcn/uiのCardコンポーネントを使っています。",
  },
  {
    id: 2,
    title: "Next.js App Router",
    description: "App Routerを使ったモダンなBBSを構築中です。TypeScriptとTailwindで型安全に。",
  },
  {
    id: 3,
    title: "掲示板の未来",
    description: "リアルタイム更新やリッチテキストなど、今後の機能追加に向けた土台作りです。",
  },
];

export default function CardList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.id} className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="outline" size="sm">
              <Link href={`/posts/${post.id}`}>Read More →</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
