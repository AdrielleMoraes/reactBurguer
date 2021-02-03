import React from 'react'
import classes from "./NavigationItems.css"
import NavigationItem from "./NavigationItem/NavigationItem"

const NavigationItems = (props) => {

    return(<ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burguer Builder</NavigationItem>
        <NavigationItem link="/">Go to Checkout</NavigationItem>
    </ul>)
}

export default NavigationItems