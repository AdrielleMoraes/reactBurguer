import React from 'react'
import classes from "./BuildControls.css"
import BuildControl from "./BuildControl/BuildControl"

const controls=[
    {label:"Salad", type:"salad"},
    {label:"Bacon", type:"bacon"},
    {label:"Cheese", type:"cheese"},
    {label:"Meat", type:"meat"}
]
const BuildControls = (props) => {

    return(
        <div className={classes.BuildControls}>
            <p>Total Price: <strong>${props.price}</strong></p>
            {controls.map(ingredient=>{
                return <BuildControl 
                addIngredient={()=> props.addIngredient(ingredient.type)}
                removeIngredient = {()=>props.removeIngredient(ingredient.type)}
                disableRemove = {props.disableRemove[ingredient.type]}
                key={ingredient.type} 
                label={ingredient.label} />
            })}
        </div>
    )
}

export default BuildControls