import React from 'react';
import ReactDOM from 'react-dom';
import Form from "./Form"
// import App from "./App"
// import Header from "./components/Header"
// import Footer from "./components/Footer"
// const date = new Date()
// const hours = date.getHours()
// let timeofday

// const styles ={
//   fontSize:30
// }


// if(hours<12){
//   timeofday="Good Morning"
//   styles.color="#B83227"
// }else if(hours>12 && hours<17){
//   timeofday="Good AfterNoon"
//   styles.color="##F4C724"
// }else if(hours>=17 && hours<=
//   22){
//   timeofday="Good Evening"
//   styles.color="#218F76"
// }else{
//   timeofday="Good Night"
//   styles.color="#30336B"
// }

ReactDOM.render(
  <React.StrictMode>
   <Form/>
  </React.StrictMode>,
  document.getElementById('root')
);


