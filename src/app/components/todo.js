"use client";
import React from "react";
import axios from "axios";

function Todo(props) {
  const [todoEditable, setTodoEditable] = React.useState(false);
  const [updatedTodo, setUpdatedTodo] = React.useState(props.todo);

  const removeTodo = async (id) => {
    try {
      const response = await axios.post("/api/removeTodo", { id });
      console.log(id);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  const editTodo = async () => {
    try {
      const response = await axios.post("/api/editTodo", {
        id: props.id,
        updatedTodo,
      });
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };
  const onUpdated = (e) => {
    setUpdatedTodo(e.target.value);
  };

  return (
    <div className="flex bg-[#36117e]  w-[30rem]  rounded-md px-3 items-center justify-between ">
      <input
        type="text"
        value={updatedTodo}
        onChange={(e) => onUpdated(e)}
        disabled={!todoEditable}
        className=" outline-none bg-[#36117e]  px-4 py-2 text-[1.2rem]  text-white   "
      ></input>

      <div className="flex gap-3">
        <button
          disabled={!todoEditable}
          onClick={() => {
            editTodo();
            setTodoEditable(false);
          }}
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        >
          📁
        </button>
        <button
          onClick={() => setTodoEditable(true)}
          disabled={todoEditable}
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        >
          ✏️
        </button>
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => removeTodo(props.id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default Todo;
