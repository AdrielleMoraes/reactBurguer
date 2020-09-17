import React, { useEffect} from "react";
import classes from "./Cockpits.css"

const Cockpit = (props) => {

   useEffect(()=>{
      console.log("Use effect on [cockpit.js]");
   })
   // join both classes together
   let styleClasses = [];

   let styleButton = [];

   // change button when toggling persons
   if(props.showPersons){
      //change button style
      styleButton.push(classes.red)
   }

   if(props.persons.length <= 2){
      styleClasses.push(classes.Red);
   }
   if(props.persons.length <= 1){
      styleClasses.push(classes.Bold);
   }

   return(
      <div className={classes.Cockpit}>
         <h1 className={styleClasses.join(" ")}>{props.title}</h1>
         <button className={styleButton.join(" ")} onClick={props.clicked}>Toggle name</button>
      </div>
   )
}
export default Cockpit;