import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Post } from "@/lib/generated/prisma";

type Props = {
  posts: Post[];
};

export default function CardList({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <p className="text-muted-foreground text-center py-12">
        まだ投稿がありません。最初の投稿を作成しましょう！
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.id} className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription className="line-clamp-3">
              {post.content}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              by {post.username}
            </span>
            <Button asChild variant="outline" size="sm">
              <Link href={`/posts/${post.id}`}>Read More →</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
