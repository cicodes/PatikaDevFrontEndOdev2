import { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

const devTodos = [
  {
    task: "Learn JS",
    completed: true,
  },
  {
    task: "Learn React",
    completed: false,
  },
  {
    task: "Learn Shopify",
    completed: true,
  },
  {
    task: "Learn Analytics",
    completed: false,
  },
];

function TodoComp() {
  const [todos, setTodos] = useState(devTodos);

  console.log(todos);
  return (
    <div className="todo-comp todoapp">
      <AddTodo addTodo={setTodos} />
      <ListTodo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodoComp;
