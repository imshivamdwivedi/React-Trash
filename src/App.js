import React from "react"
import ToDoItem from "./components/ToDoItem"
import todosData from "./components/ToDoData"


class App extends React.Component {
   
  constructor(){
    super();
    this.state ={
      todos:todosData
    }
  }

  render(){
    const todoComponents = this.state.todos.map(todo=> <ToDoItem key={todo.id} items={todo}/>)
    return (
       <div className="todo-list">
         {todoComponents}
       </div>
    )
  }

}

export default App