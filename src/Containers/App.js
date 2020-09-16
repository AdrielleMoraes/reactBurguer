import React, { Component } from 'react';
import classes from './App.css';
// import my component file 
import Persons from "../Components/Persons/Persons"
import Cockpit from "../Components/Cockpits/Cockpits"



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

      let persons = null

      if (this.state.showPersons){
         persons = (
            <div>
               <Persons 
                  persons = {this.state.persons}
                  clicked = {this.deletePersonHandler}
                  changed = {this.nameChangedHandler}
               ></Persons>
            </div>
         );	
      }

      return(
         <div className={classes.App}>
            <Cockpit
               title = {this.props.title}
               persons = {this.state.persons}
               showPersons = {this.state.showPersons}
               clicked = {this.togglePersonsHandler}
            />
            {persons}
         </div>
      )}
}

export default App;

