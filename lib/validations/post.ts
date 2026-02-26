import { z } from "zod/v4";

export const postSchema = z.object({
  username: z.string().min(2, "ユーザー名は2文字以上で入力してください"),
  title: z.string().min(2, "タイトルは2文字以上で入力してください"),
  content: z
    .string()
    .min(10, "本文は10文字以上で入力してください")
    .max(140, "本文は140文字以内で入力してください"),
});

export type PostFormValues = z.infer<typeof postSchema>;
