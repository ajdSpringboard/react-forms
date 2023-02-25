import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo({
        task: task.trim(),
        completed: false
      });
      setTask("");
    }
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Todo:
        <input type="text" value={task} onChange={handleChange} />
      </label>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;