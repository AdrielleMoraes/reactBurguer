import React from 'react'
import classes from "./Modal.css"
import Auxiliar from "../../../hoc/Auxiliar"
import BackDrop from "../BackDrop/BackDrop"

const Modal = (props) => {
    return(
        <Auxiliar>
            <BackDrop show={props.show} onClickBackDrop={()=> props.onClickBackDrop()}></BackDrop>
            <div style={{transform: props.show? "translateY(0)": "translateY(-100)",
                        opacity: props.show? "1":"0"}} className={classes.Modal}>
                {props.children}
            </div>
        </Auxiliar>
    )
}

export default Modal