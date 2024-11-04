/* eslint-disable react/prop-types */

import {  useState } from "react";

export const TodoList = ({todos, addTodo, toggleTodo}) => {
  console.log("Rendering Todo List");
  const [newTodoName, setNewTodoName] = useState("");
  function handleSubmit(e){
    e.preventDefault()
    addTodo(newTodoName)
    setNewTodoName("")
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
        {todos && todos.map((todo) => (
          <li key={todo.id}>
            <label htmlFor="">
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
