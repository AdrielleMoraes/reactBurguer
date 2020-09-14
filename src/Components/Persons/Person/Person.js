// import react 
import React from "react";
import './Person.css';

//css 
import styled from "styled-components";


const StyledDiv = styled.div`
    width: 30%;
    margin:16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px){
        width: 450px;
    }      
`;

// create a person component
const person = (props) =>{

    return(  
    <StyledDiv>
        <p >I'm {props.name} and I am  years {props.age} old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
        <p onClick= {props.click}>delete</p>
    </StyledDiv>);
}


export default person;