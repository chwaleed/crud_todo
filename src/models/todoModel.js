import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: [true, "Please Provide any message"],
  },
});

const Todo = mongoose.models.todos || mongoose.model("todos", todoSchema);

export default Todo;
