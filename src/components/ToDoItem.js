import React from "react"
import "../Style.css"

function ToDoItem(props){
    return (
    <div  className="todo-item">
    <input type="checkbox" /><p>{props.items.text}</p>
    </div>
    );
}
export default ToDoItem