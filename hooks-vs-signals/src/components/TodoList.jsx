import { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "../constants";

export const TodoList = () => {
  console.log("Rendering Todo List");

  const [todos, setTodos] = useState(() => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value == null) {
      return [];
    }
    return JSON.parse(value);
  });

  const [newTodoName, setNewTodoName] = useState("");

  function addTodo(e) {
    e.preventDefault();
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: crypto.randomUUID(),
          name: newTodoName,
          isCompleted: false,
        },
      ];
    });
    setNewTodoName("");
  }

  function toggleTodo(id, isCompleted) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted };
        }
        return todo;
      });
    });
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo">
      <form onSubmit={addTodo} className="form">
        <label>New Task</label>
        <input
          type="text"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label htmlFor="">
              <input
                type="checkbox"
                checked={todo.completed}
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
