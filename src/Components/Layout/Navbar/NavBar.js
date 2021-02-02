import React from 'react'
import classes from "./NavBar.css"
import Logo from "../../UI/Logo/Logo"

const NavBar = (props) => {
    return(<header className={classes.NavBar}>
      <div>Menu</div>
      <Logo/>
      <nav>...</nav>
    </header>);
}

export default NavBar