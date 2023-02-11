import { useState } from "react";

function AddTodo({ addTodo }) {
  const [task, setTask] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    const result = { [`task`]: task, completed: false };
    addTodo((prevState) => [...prevState, result]);
    setTask("");
  };

  const changeInput = (e) => {
    setTask(e.target.value);
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          name="add-task"
          className="new-todo"
          value={task}
          placeholder="What needs to be done?"
          onChange={changeInput}
          autoFocus
        />
      </form>
    </header>
  );
}

export default AddTodo;
