"use client";

import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema, type PostFormValues } from "@/lib/validations/post";
import { createPost, type FormState } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const initialState: FormState = { success: false };

export default function PostForm() {
  const [serverState, formAction, isPending] = useActionState(
    createPost,
    initialState
  );

  const {
    register,
    formState: { errors },
  } = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    mode: "onBlur",
  });

  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader>
        <CardTitle className="text-xl">新しい投稿を作成</CardTitle>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-4">
          {/* Username */}
          <div className="space-y-1">
            <label htmlFor="username" className="text-sm font-medium">
              ユーザー名
            </label>
            <Input
              id="username"
              placeholder="名前を入力"
              {...register("username")}
            />
            {errors.username && (
              <p className="text-sm text-destructive">
                {errors.username.message}
              </p>
            )}
            {serverState.errors?.username && (
              <p className="text-sm text-destructive">
                {serverState.errors.username[0]}
              </p>
            )}
          </div>

          {/* Title */}
          <div className="space-y-1">
            <label htmlFor="title" className="text-sm font-medium">
              タイトル
            </label>
            <Input
              id="title"
              placeholder="タイトルを入力"
              {...register("title")}
            />
            {errors.title && (
              <p className="text-sm text-destructive">
                {errors.title.message}
              </p>
            )}
            {serverState.errors?.title && (
              <p className="text-sm text-destructive">
                {serverState.errors.title[0]}
              </p>
            )}
          </div>

          {/* Content */}
          <div className="space-y-1">
            <label htmlFor="content" className="text-sm font-medium">
              本文（10〜140文字）
            </label>
            <Textarea
              id="content"
              placeholder="本文を入力"
              rows={4}
              {...register("content")}
            />
            {errors.content && (
              <p className="text-sm text-destructive">
                {errors.content.message}
              </p>
            )}
            {serverState.errors?.content && (
              <p className="text-sm text-destructive">
                {serverState.errors.content[0]}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "送信中…" : "投稿する"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
