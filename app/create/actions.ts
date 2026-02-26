"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { postSchema } from "@/lib/validations/post";

export type FormState = {
  success: boolean;
  errors?: Record<string, string[]>;
};

export async function createPost(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = {
    username: formData.get("username"),
    title: formData.get("title"),
    content: formData.get("content"),
  };

  const result = postSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  await prisma.post.create({
    data: result.data,
  });

  revalidatePath("/");
  redirect("/");
}
