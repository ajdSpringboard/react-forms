import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const renderTodos = () => {
    return todos.map((todo, index) => (
      <Todo key={index} todo={todo} removeTodo={() => removeTodo(index)} />
    ));
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {renderTodos()}
    </div>
  );
};

export default TodoList;