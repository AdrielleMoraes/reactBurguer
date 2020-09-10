import React, { Component } from 'react';
import './App.css';
// import my component file 
import Person from "./Person/Person";

//css styling
import styled from "styled-components";


class App extends Component{

   state = {
      persons:[
         {id: 'dsada', name:"Adrielle", age: 23},
         {id: 'sdasd', name:"Max", age: 32},
         {id: 'ererr', name:"Andy", age: 25}
      ],
      showPersons: true
   }

   deletePersonHandler = (personIndex)=>{
      // fetch all persons from array
		const persons = [...this.state.persons]
      // remove element form array
		persons.splice(personIndex,1);
		
		//update state
      this.setState({persons: persons});
   }
   
   togglePersonsHandler = () =>{

      this.setState({
         showPersons: !this.state.showPersons
      })
   }

   nameChangedHandler = (event, id) =>{

		//find index of the object given an arrow function as the criteria for selecting it
		const personIndex = this.state.persons.findIndex(p =>{
			return p.id === id;
		});

		//copy person to a new variable
		const person = {...this.state.persons[personIndex]};

		// apply event
		person.name = event.target.value;

		//copy all persons 
		const persons = [...this.state.persons];

		// assign updated person to persons list
		persons[personIndex] = person;

		//update state
      this.setState({ persons:persons });
   }

   render (){

      //styled button
      const StyledButton = styled.button`
      color: white;
      border: 1px solid blue;
      padding:8px;
      cursor: pointer;
      background-color: ${props => props.alt? "red":"green"};

      &:hover {
         background-color: ${props => props.alt? "salmon":"lightgreen"}
      }
      `;

      let persons = null
      if (this.state.showPersons){
         persons = (
            <div>
               {this.state.persons.map((person, index) =>{
                  return <Person 
                              changed = {(event)=>this.nameChangedHandler(event, person.id)}
                              click ={()=>this.deletePersonHandler(index)}
                              name = {person.name}
                              age = {person.age}
                              key = {person.id}
                        />
               })}
            </div>
         );	
      }

      // join both classes together
      let classes = [];
      if(this.state.persons.length <= 2){
         classes.push("red");
      }
      if(this.state.persons.length <= 1){
         classes.push("bold");
      }
      classes = classes.join(" ");
      return(
         <div className="App">
            <h1 className={classes}>Hello, i am a react app</h1>
            <StyledButton alt={this.state.showPersons} onClick={()=> this.togglePersonsHandler()}>Toggle name</StyledButton>
            {persons}

         </div>
      )}
}

export default App;
