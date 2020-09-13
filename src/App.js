import React, { Component } from 'react';
import classes from './App.css';
// import my component file 
import Person from "./Person/Person";


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
      let styleButton = []
      let persons = null
      if (this.state.showPersons){
         //change button style
         styleButton.push(classes.red)
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
      let styleClasses = [];
      if(this.state.persons.length <= 2){
         styleClasses.push(classes.red);
      }
      if(this.state.persons.length <= 1){
         styleClasses.push(classes.bold);
      }

      return(
         <div className={classes.App}>
            <h1 className={styleClasses.join(" ")}>Hello, i am a react app</h1>
            <button className={styleButton.join("")} onClick={()=> this.togglePersonsHandler()}>Toggle name</button>
            {persons}

         </div>
      )}
}

export default App;

