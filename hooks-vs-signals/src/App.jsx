import './App.css'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { TodoList } from './components/TodoList'

function App() {
  console.log("Render App Component")

  return (
   <div className="wrapper">
    <Navbar/>
    <main>
      <TodoList/>
    </main>
    <Sidebar/>
   </div>
  )
}

export default App
