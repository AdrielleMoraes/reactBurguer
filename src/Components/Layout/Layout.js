import React from "react";

import Auxiliar from "../../hoc/Auxiliar"

import classes from "./Layout.css"

const Layout = props =>{

    return(
    <Auxiliar>
        <div className={classes.Content}> Toolbar, Side Drawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxiliar>
    )
}

export default Layout;