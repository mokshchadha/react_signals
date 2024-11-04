import './App.css'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { TodoList } from './components/TodoList'
import { LOCAL_STORAGE_KEY } from './constants';
import { effect, signal } from "@preact/signals-react";

function getTodoFromLocalStorage(){
  const value = localStorage.getItem(LOCAL_STORAGE_KEY);
  console.log({value})
  if (value == null) {
    return [];
  }
  return JSON.parse(value);
}

const todos = signal(getTodoFromLocalStorage())

function App() {
  console.log("Render App Component")

  function addTodo(newTodoName) {
    console.log({newTodoName})
    todos.value =  [
      ...todos.value,
      {
        id: crypto.randomUUID(),
        name: newTodoName,
        isCompleted: false,
      },
    ];
 
  }

  function toggleTodo(id, isCompleted) {
    console.log({id, isCompleted})
   const newTodos =  todos.value.map((todo) => {
    if (todo.id === id) {
      return { ...todo, isCompleted };
    }
    return todo;
    });
    console.log({newTodos})
    todos.value = [...newTodos]
  }

  effect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos.value))
  })

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
