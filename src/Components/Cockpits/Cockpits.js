import React, { useEffect} from "react";
import classes from "./Cockpits.css"

const Cockpit = (props) => {

   useEffect(()=>{
      console.log("Use effect on [cockpit.js]");
   }) // use this  only when persons change
   // join both classes together
   let styleClasses = [];

   let styleButton = [];

   // change button when toggling persons
   if(props.showPersons){
      //change button style
      styleButton.push(classes.red)
   }

   if(props.personsLength <= 2){
      styleClasses.push(classes.Red);
   }
   if(props.personsLength <= 1){
      styleClasses.push(classes.Bold);
   }

   return(
      <div className={classes.Cockpit}>
         <h1 className={styleClasses.join(" ")}>{props.title}</h1>
         <button className={styleButton.join(" ")} onClick={props.clicked}>Toggle name</button>
      </div>
   )
}

//memo: will re render only if it changes
export default React.memo(Cockpit);