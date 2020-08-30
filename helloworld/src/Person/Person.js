// import react 
import React from "react";
import './Person.css';


// create a person component
const person = (props) =>{
    //let age = Math.floor(Math.random()*30)
    return  <div className="Person">
                <p onClick= {props.click}> I'm {props.name} and I am  years {props.age} old</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}></input>
            </div>
}


export default person;