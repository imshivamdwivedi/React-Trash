import React from "react"
import ToDoItem from "./components/ToDoItem"
import todosData from "./components/ToDoData"



class App extends React.Component {

  constructor(){
    super();
    this.state ={
      todos:todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id){
  //update state
   this.setState(prevState=>{
     const updateTodos = prevState.todos.map(todo=>{
       if(todo.id===id){
         todo.completed = !todo.completed
       }
       return todo
     })

      return { todos: updateTodos }
   })
   
    
  }

  render(){
    const todoComponents = this.state.todos.map(todo=> <ToDoItem key={todo.id} item={todo} handleChange={this.handleChange}/>)
    return (
       <div className="todo-list">
         {todoComponents}
       </div>
    )
  }

}

export default App