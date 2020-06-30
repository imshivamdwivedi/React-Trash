import React from "react"
import "../Style.css"

function ToDoItem(props){
    return (
    <div  className="todo-item">
    <input type="checkbox" checked={props.items.completed}/><p>{props.items.text}</p>
    </div>
    );
}
export default ToDoItem