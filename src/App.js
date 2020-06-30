import React from "react"
import ToDoItem from "./components/ToDoItem"
import todosData from "./components/ToDoData"



class App extends React.Component {
 //event handler  
 constructor(props){
   super(props);
   this.state = {
     isToggleIn :true
    };
   this.handleClick = this.handleClick.bind(this);
 }

 handleClick(){
   this.setState(state=>({
     isToggleIn:!state.isToggleIn
   }))
 }
  // constructor(){
  //   super();
  //   this.state ={
  //     todos:todosData
  //   }
  // }

  render(){
    // const todoComponents = this.state.todos.map(todo=> <ToDoItem key={todo.id} items={todo}/>)
    return (
       <div className="todo-list">
         {/* {todoComponents} */}
         <button onClick={this.handleClick}>
           {this.state.isToggleIn?'ON':'Off'}
         </button>
       </div>
    )
  }

}

export default App