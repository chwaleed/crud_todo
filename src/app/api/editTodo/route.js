import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import Todo from "@/models/todoModel";
import { connect } from "@/dbconfig/dbconfig";

connect();

export const POST = async (request) => {
  try {
    const req = await request.json();
    const { todo, id } = req;

    if (todo) {
      Todo.findByIdAndUpdate(id);
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Error in Updating Todo" },
      { status: 401 }
    );
  }
};
