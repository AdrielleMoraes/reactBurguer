import React, { useState } from 'react';
import './App.css';
// import my component file 
import Person from "./Person/Person";

const App = props =>{
  const [personsState, setPersonsState] = useState({
      persons:[
                {name:"Adrielle", age: 23},
                {name:"Max", age: 32},
                {name:"Andy", age: 25}
              ],
      other: 1
    });

  const switchNameHandler = (factor)=>
  {
    let temp_persons = personsState.persons.sort(() => Math.random() - factor);
    setPersonsState({
      persons: temp_persons,
      other: personsState.other
    });
  }
  const nameChangedHandler = event =>{
    setPersonsState({
      persons:[
        {name: event.target.value, age: 23},
        {name:"Max", age: 32},
        {name:"Andy", age: 25}
      ],
      other: 1
    });
  }
  return (
    <div className="App">
      <h1>Hello, i am a react app</h1>
      <button onClick={()=> switchNameHandler(0)}>Switch name</button>
      <Person 
        name = {personsState.persons[0].name} 
        age = {personsState.persons[0].age}
        click = {switchNameHandler.bind(this, 1)}
        changed = {nameChangedHandler}
      />
      <Person 
        name = {personsState.persons[1].name} 
        age = {personsState.persons[1].age}
        click = {switchNameHandler.bind(this, 0.5)}
      >My hobbies: Racing </Person>
      <Person 
        name = {personsState.persons[2].name} 
        age = {personsState.persons[2].age}
      />
    </div>
  );
  //return React.createElement("div", {className: "App"}, React.createElement("h1", null,"Hi, I\'m a react app"));
}

export default App;

