import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const count = await prisma.post.count();
    return NextResponse.json({
      status: "ok",
      postCount: count,
      dbUrl: process.env.DATABASE_URL?.replace(/:[^@]+@/, ":***@"),
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      {
        status: "error",
        message,
        dbUrl: process.env.DATABASE_URL?.replace(/:[^@]+@/, ":***@"),
      },
      { status: 500 }
    );
  }
}
