import React from 'react'
import Auxiliar from "../../../hoc/Auxiliar"

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
            <p>Go to checkout?</p>
            <button>Cancel</button>
            <button>Continue</button>
        </Auxiliar>
    )
}

export default OrderSummary