import React from "react";
import { useState, useEffect } from "react";

function SetTodos({ todos, setTodos, selected, setSelected }) {
  const handleAll = () => {
    const newTodos = [...todos];
    setSelected(newTodos);
  };
  const handleActive = () => {
    const newTodos = [...todos];
    setSelected(newTodos.filter((item) => item.completed === false));
  };
  const handleCompleted = () => {
    const newTodos = [...todos];
    setSelected(newTodos.filter((item) => item.completed === true));
  };

  const clearCompleted = () => {
    const newTodos = [...todos];
    setTodos(newTodos.filter((item) => item.completed === false));
  };

  useEffect(() => {
    handleAll();
  }, [todos]);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {todos.filter((todo) => todo.completed === false).length}
        </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" onClick={handleAll} className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/" onClick={handleActive}>
            Active
          </a>
        </li>
        <li>
          <a href="#/" onClick={handleCompleted}>
            Completed
          </a>
        </li>
      </ul>

      <div>
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </div>
    </footer>
  );
}

export default SetTodos;
