import React from "react"

class Forms extends React.Component{

    constructor(){
        super()
        this.state=
        {
            firstname:"",
            lastname:"",
            age:"",
            gender:"",
            destination:""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const{name,value,type,checked}  = event.target
        type==="checkbox" ?
         this.setState({
             [name]:checked
         })
        :this.setState({
            [name]:value
        })
    }
    render(){
        return(
            <div>
            <form>
               FirstName:- <input type="text" value={this.handleChange.firstname} name="firstname" onChange={this.handleChange} />
                 <br/>
                 LastName:- <input type="text" value={this.handleChange.lastname} name="lastname" onChange={this.handleChange}/>
                 <br/>
                 Age:-<input type="text" value={this.handleChange.age} name="age" onChange={this.handleChange}/>
                     <br/>
                     <label>
                    <input 
                     type="radio"
                     name="gender"
                     value="male"
                     checked={this.state.gender==="male"}
                     onChange={this.handleChange}
                     /> Male-:
                    </label> 
                     <br/>
                    <label>
                     <input 
                     type="radio"
                     name="gender"
                     value="female"
                     checked={this.state.gender==="female"}
                     onChange={this.handleChange}
                     />Female:-
                 </label>
                 <br/>
                 <select value={this.state.destination} name="destination" onChange={this.handleChange}>Destination:-
                    <option value="">please Select Destination</option>
                     <option value="germany">Germany</option>
                     <option value="norway">Norway</option>
                     <option value="india">India</option>
                     <option value="north pole">North Pole</option>
                     <option value="south pole">South Pole</option>
                 </select>
                 <br/>
                 <label>
                     <input 
                     type="checkbox"
                     name="student"
                     onChange={this.handleChange}
                     checked={this.state.student} 
                     />Student ?
                 </label>
                 <br/>
                 <label>
                     <input 
                     type="checkbox"
                     name="teacher"
                     onChange={this.handleChange}
                     checked={this.state.teacher} 
                     />Teacher ?
                 </label>
                  <br/>
                  <label>
                     <input 
                     type="checkbox"
                     name="freelancer"
                     onChange={this.handleChange}
                     checked={this.state.freelancer} 
                     />Freelancer ?
                 </label>
                 <br/>
                   <button>Submit</button>
            </form>
                 <div>
                   <h1>Enterd Information</h1>  
                  <p>Firstname:{this.state.firstname}</p>
                  <p>Lastname:{this.state.lastname}</p>
                  <p>Age:{this.state.age}</p>
                  <p>Gender:{this.state.gender}</p>
                  <p>Destination:{this.state.destination}</p>
                  <p>Student:{this.state.student ? "YES":"NO"}</p>
                  <p>Teacher:{this.state.teacher ?"YES":"NO"}</p>
                  <p>Freelancer:{this.state.freelancer? "YES":"NO"}</p>
                 </div>
            </div>
        )
    }
}

export default Forms