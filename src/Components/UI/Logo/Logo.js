import React from 'react'
import classes from "./Logo.css"
import burgerLogo from "../../../Assets/burger-logo.png"

const Logo = (props) => {

    return(
        <div className={classes.Logo}>
            <img src={burgerLogo}></img>
        </div>
    )
}

export default Logo