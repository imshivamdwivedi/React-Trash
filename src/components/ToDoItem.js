import React from "react"
import "../Style.css"

function ToDoItem(props){

   const classStyle = {
       fontStyle:"italic",
       color:"#cdcdcd",
       textDecoration:"line-through"
   } 
    return (
    <div  className="todo-item">
    <input 
       type="checkbox" 
       checked={props.item.completed}
       onChange={()=> props.handleChange(props.item.id)}
    />
    <p style={props.item.completed?classStyle:null}>{props.item.text}</p>
    </div>
    );
}
export default ToDoItem