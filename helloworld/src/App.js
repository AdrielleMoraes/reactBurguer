import React, { Component } from 'react';
import './App.css';
// import my component file 
import Person from "./Person/Person";

class App extends Component{

  state = {
    persons:[
      {name:"Adrielle", age: 23},
      {name:"Max", age: 32},
      {name:"Andy", age: 25}
    ],
    showPersons: false
  }


  switchNameHandler = (factor)=>
  {
    let temp_persons = this.state.persons.sort(() => Math.random() - factor);

    //update props
    this.setState({
      persons: temp_persons
    });
  };

  togglePersonsHandler = () =>{

    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  nameChangedHandler = event =>{
    this.setState({
      persons:[
        {name: event.target.value, age: 23},
        {name:"Max", age: 32},
        {name:"Andy", age: 25}
      ]
    });
  }

  render (){
    const style ={
      color: "Black"
    }


  let persons = null
  if (this.state.showPersons){
    persons = (
      <div  >
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}
          click = {this.switchNameHandler.bind(this, 1)}
          changed = {this.nameChangedHandler}
        />
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, 0.5)}
        >My hobbies: Racing </Person>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}
        />
      </div>
    );
  }

  return(
    <div className="App">
      <h1>Hello, i am a react app</h1>
      <button style={style} onClick={()=> this.togglePersonsHandler()}>Toggle name</button>

      {persons}
      
    </div>
  )};

  //return React.createElement("div", {className: "App"}, React.createElement("h1", null,"Hi, I\'m a react app"));
}

export default App;

