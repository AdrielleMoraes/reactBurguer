import React from 'react'
import classes from "./BuildControl.css"

const BuildControl = (props) => {
    return(
        <div className={classes.BuildControl}>
            <label className={classes.Label}>{props.label}</label>
            <button className={classes.Less}>-</button>
            <button className={classes.More}>+</button>
        </div>
    )
}

export default BuildControl