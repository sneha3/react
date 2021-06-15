import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
function App(){
    const currtime=new Date().getHours();
let greetings="";
const obColor={};
if(currtime>=1 && currtime<=12){
    greetings="good morning";
    obColor.color='green';
}
else if(currtime>=12 && currtime<=19){
    greetings="good afternoon";
    obColor.color='yellow';
}
else{
    greetings="good night";
    obColor.color='blue';
}
return (
    <>
    <div>
    <h1>
    hello sir, 
    <span style={obColor}> {greetings}</span>
    </h1>
    </div>
    </>
);
}
export default App;