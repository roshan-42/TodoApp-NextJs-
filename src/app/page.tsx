import AddTodo from "@/components/todos/AddTodo";
import Image from "next/image";
import { prisma } from "@/utils/prisma";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      description: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-4xl font-extrabold uppercase">Todo App</span>
      <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">
        <span className="lowercase">w/</span> ServerActions
      </h1>
      <div>
        {/* add todo items */}
        <AddTodo />
        {/* map todos */}
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
          {data.map((todo, id) => (
            <div key={id}>
              <p className="font-bold text-2xl">{todo.title}</p>
              <p>{todo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
