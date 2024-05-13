"use client";
import { useEffect, useState } from "react";
import Todo from "../app/components/todo";
import axios from "axios";

function page() {
  const [todo, setTodo] = useState("");
  const [data, setData] = useState([]);

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };
  console.log(todo);
  const addTodo = async () => {
    try {
      const response = await axios.post("/api/addTodo", { todo: todo });
      const { data } = response.data;
      setData(data);
      setTodo("");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    addTodo();
  }, []);

  return (
    <div className="bg-[#6918b4] flex flex-col items-center py-12">
      <h1 className="text-white text-[4rem] font-semibold">Todo App</h1>
      <div className="flex w-[30rem]  mt-9 items-center justify-center">
        <input
          placeholder="Add Task"
          type="text"
          value={todo}
          onChange={(e) => handleInputChange(e)}
          className="bg-[#36117e]  px-4 py-2 text-[1.2rem] text-white  rounded-md "
        ></input>
        <button
          onClick={addTodo}
          className="bg-[#b691ff] px-3 py-2 hover:scale-105 transition-all  font-bold rounded-md ml-3 text-white"
        >
          Add Todo
        </button>
      </div>

      {data.map((item, index) => (
        <Todo todo={item.todo} id={item._id} key={index} />
      ))}
    </div>
  );
}

export default page;
