import './App.css'
import { useEffect, useState } from "react";
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { TodoList } from './components/TodoList'
import { LOCAL_STORAGE_KEY } from './constants';

function App() {
  console.log("Render App Component")

  const [todos, setTodos] = useState(() => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log({value})
    if (value == null) {
      return [];
    }
    return JSON.parse(value);
  });



  function addTodo(newTodoName) {
 
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
   <div className="column">
    <Navbar todos={todos}/>
    <main className='row'>
      <TodoList addTodo={addTodo} toggleTodo={toggleTodo} todos={todos}/>
      <Sidebar/>
    </main>
    
   </div>
  )
}

export default App
