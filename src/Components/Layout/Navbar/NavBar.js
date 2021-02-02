import React from 'react'
import classes from "./NavBar.css"
import Logo from "./Logo/Logo"
import NavigationItems from "./NavigationItems/NavigationItems"

const NavBar = (props) => {
    return(<header className={classes.NavBar}>
      <div>Menu</div>
      <Logo/>
      <nav><NavigationItems/></nav>
    </header>);
}

export default NavBar