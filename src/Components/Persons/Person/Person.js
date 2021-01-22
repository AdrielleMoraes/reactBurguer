// import react 
import React from "react";
import './Person.css';

import Aux from "../../../hoc/Auxiliar";
import withClass from "../../../hoc/withClass";

//css 
import classes from "./Person.css";


// create a person component
const person = (props) =>{

    return(  
    <Aux>
        <p >I'm {props.name} and I am  years {props.age} old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
        <p onClick= {props.click}>delete</p>
    </Aux>);
}


export default withClass(person, classes.Person);