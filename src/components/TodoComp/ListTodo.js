import React from "react";
import { useState } from "react";

import SetTodos from "./SetTodos";

function ListTodo({ todos, setTodos }) {
  const [selected, setSelected] = useState([]);
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const toggleAll = () => {
    const allCompleted = todos.every((todo) => todo.completed);
    const newTodos = todos.map((todo) => {
      todo.completed = !allCompleted;
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <section className="main">
        <input
          className="toggle-all"
          id="toggle-all"
          type="checkbox"
          onChange={toggleAll}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {selected.map((todo, i) => (
            <li key={i} className={(todo.completed && "completed") || null}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => completeTodo(i)}
                />
                <label>{todo.task}</label>
                <button
                  className="destroy"
                  onClick={() => deleteTodo(i)}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <SetTodos
        todos={todos}
        setTodos={setTodos}
        selected={selected}
        setSelected={setSelected}
      />
    </>
  );
}

export default ListTodo;
