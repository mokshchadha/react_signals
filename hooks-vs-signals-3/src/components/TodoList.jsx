/* eslint-disable react/prop-types */
import { useState } from "react";
import { todos } from "../signals";

export const TodoList = ({ addTodo, toggleTodo }) => {
  console.log("Rendering Todo List");
  const [newTodoName, setNewTodoName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!newTodoName.trim()) return;
    addTodo(newTodoName);
    setNewTodoName("");
  }

  return (
    <div className="todo">
      <form onSubmit={handleSubmit} className="form">
        <label>New Task</label>
        <input
          type="text"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
          className="input_field"
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.value.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              {todo.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
