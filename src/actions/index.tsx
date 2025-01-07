"use server";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
export async function createTodo(formData: FormData) {
  const input = formData.get("input") as string;
  const desc = formData.get("desc") as string;
  if (!input.trim) {
    return;
  }
  await prisma.todo.create({
    data: {
      title: input,
      description: desc,
    },
  });
  revalidatePath("/");
}
