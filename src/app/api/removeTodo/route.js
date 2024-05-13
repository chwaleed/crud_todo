import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbconfig";
import Todo from "@/models/todoModel";

connect();

export const POST = async (request) => {
  try {
    const req = await request.json();
    const { id } = req;
    const res = await Todo.deleteOne({ _id: id });
    return NextResponse.json({
      message: "Todo deleted Successfully",
      data: res,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error in Deleting todo",
      },
      {
        status: 401,
      }
    );
  }
};
