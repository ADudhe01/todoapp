import { useState } from "react";
import Form from "./Form.jsx";
import ToDoList from "./ToDoList.jsx";
import Footer from "./Footer.jsx";

export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
