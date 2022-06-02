import React from 'react'
import SulaimanTodo from './Components/SulaimanTodo';
import TusharTodo from './Components/TusharTodo';
// import First from './Components/First'
// import Hookw from './Components/Hookw'



const App = () => {
  return (
    <div className="wrapper">
    <h1>Todo List</h1>
    {/* <TusharTodo/> */}

    <SulaimanTodo />
    </div>

  )
}

export default App