// import react 
import React, {useEffect} from "react";
import './Person.css';
import Proptypes from "prop-types";

import Aux from "../../../hoc/Auxiliar";
import withClass from "../../../hoc/withClass";

//css 
import classes from "./Person.css";


// create a person component
const person = (props) =>{

    const inputElementRef = React.createRef();
    useEffect(()=>
    {
        // this.inputElement.focus();
        inputElementRef.current.focus();
        console.log("Use Effect on person")
    })
    return(  
    <Aux>
        <p >I'm {props.name} and I am  years {props.age} old!</p>
        <p>{props.children}</p>
        <input type="text" 
                // ref = {(inputelm)=>{this.inputElement = inputelm}}
                ref={inputElementRef}
                onChange={props.changed}    
                value={props.name}>
        </input>
        <p onClick= {props.click}>delete</p>
    </Aux>);
}

person.proptypes = {
    click: Proptypes.func,
    name: Proptypes.string,
    age: Proptypes.number,
    changed: Proptypes.func
};
export default withClass(person, classes.Person);