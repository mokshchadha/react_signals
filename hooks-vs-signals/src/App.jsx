import './App.css'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { TodoList } from './components/TodoList'

function App() {
  console.log("Render App Component")

  return (
   <div className="column">
    <Navbar/>
    <main className='row'>
      <TodoList/>
      <Sidebar/>
    </main>
    
   </div>
  )
}

export default App
