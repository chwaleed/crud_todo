import { connect } from "@/dbconfig/dbconfig";
import Todo from "@/models/todoModel";
import { NextResponse, NextRequest } from "next/server";

connect();
export async function POST(request) {
  try {
    const req = await request.json();
    const { todo } = req;
    if (todo) {
      const newTodo = new Todo({
        todo,
      });
      const saveTodo = await newTodo.save();
    }
    const allTodos = await Todo.find();
    return NextResponse.json({
      message: "New Todo Added successfully.",
      data: allTodos,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Faliled to add Todo" },
      { status: 400 }
    );
  }
}
