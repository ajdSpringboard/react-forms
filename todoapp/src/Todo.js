import React from "react";

const Todo = ({ todo, removeTodo }) => {
  const handleRemoveTodo = () => {
    removeTodo(todo.id);
  };

  return (
    <div>
      {todo.task}
      <button onClick={handleRemoveTodo}>X</button>
    </div>
  );
};

export default Todo;
