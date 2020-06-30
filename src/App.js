import React from "react"
import ToDoItem from "./components/ToDoItem"
import todosData from "./components/ToDoData"


export default function App(){
  const todoComponents = todosData.map(todo=> <ToDoItem key={todo.id} items={todo}/>)
  return (
     <div className="todo-list">
       {todoComponents}
     </div>
  )
}