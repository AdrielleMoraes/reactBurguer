import React from 'react'
import Auxiliar from "../../../hoc/Auxiliar"
import Button from "../../UI/Button/Button"

const OrderSummary = (props) => {

    //get a summary of all ingredients
    const ingredients_list =  Object.keys(props.ingredients).map(igKey=>{
        return(
                <li key={igKey}>
                    <span style={{textTransform: "capitalize"}}>{igKey}</span> x {props.ingredients[igKey]}
                </li>)
    })

    return(
        <Auxiliar>
            <h3>Your Order</h3>
            <p>You have chosen all those delicious items</p>
            <ul>
                {ingredients_list}
            </ul>
            <p><strong>Total price: ${props.totalPrice}</strong></p>
            <p>Go to checkout?</p>
            <Button button_type="Danger" clicked={()=>props.btnCancel()} >Cancel</Button>
            <Button button_type="Success" clicked={()=>{props.btnContinue()}} >Continue</Button>
        </Auxiliar>
    )
}

export default OrderSummary