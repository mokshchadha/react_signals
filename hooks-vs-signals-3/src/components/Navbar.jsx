/* eslint-disable react/prop-types */
 

export const Navbar = ({todos}) => {
  console.log('Rendering Navbar')
  return (
    <nav className="nav">
          Completed : {todos.value.filter(e=> e.isCompleted).length}
        <a href="/">Todo List</a>
        <a href="/settings">Settings</a>
    </nav>
  )
}

 