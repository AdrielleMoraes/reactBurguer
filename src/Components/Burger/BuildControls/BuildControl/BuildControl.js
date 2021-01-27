import React from 'react'
import classes from "./BuildControl.css"

const BuildControl = (props) => {
    return(
        <div className={classes.BuildControl}>
            <label className={classes.Label}>{props.label}</label>
            <button className={classes.Less} onClick={props.removeIngredient} disabled={props.disableRemove}>-</button>
            <button className={classes.More} onClick={props.addIngredient}>+</button>
        </div>
    )
}

export default BuildControl