import React from "react"
function Conditional(props){
    return (
        <div>
            <h1>Navbar</h1>
            {props.isLoading===false?<h1>you Just Learned About Conditional Rendering . Happy Coding!</h1>:<h1>Loading...</h1>}
            <h1>Footer</h1>
        </div>
    )
}

export default Conditional