import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import Todo from "@/models/todoModel";
import { connect } from "@/dbconfig/dbconfig";

connect();

export const POST = async (request) => {
  try {
    const req = await request.json();
    const { updatedTodo, id } = req;

    if (!updatedTodo || !id) {
      return NextResponse.json(
        { message: "Missing updatedTodo or id in request" },
        { status: 400 }
      );
    }
    const newTodo = await Todo.findByIdAndUpdate(
      id,
      { $set: { todo: updatedTodo } },
      { new: true }
    );
    return NextResponse.json({
      message: "Todo Updated Succesfly",
      data: newTodo,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error in Updating Todo" },
      { status: 401 }
    );
  }
};
