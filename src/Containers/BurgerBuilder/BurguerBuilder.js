import React, {Component} from "react";

import Auxiliar from "../../hoc/Auxiliar"
import Burger from "../../Components/Burger/Burger"
import BuildControls from "../../Components/Burger/BuildControls/BuildControls"

const INGREDIENTS_PRICE ={
    salad: 0.5,
    cheese: 1,
    bacon: 1.5,
    meat: 2
}

const BASE_PRICE = 4

class BurgerBuilder extends Component
{
    state = {
        ingredients:{
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        total_price: BASE_PRICE
    }

    addIngredientHandler = (ingredient)=>{
        //get previous value for that ingredient
        const oldCount = this.state.ingredients[ingredient]
        const newCount = oldCount + 1

        //copy and update total sum for this ingredient type
        let newIngredients = {...this.state.ingredients}
        newIngredients[ingredient] = newCount

        //calculate new total price
        const newPrice = this.state.total_price + INGREDIENTS_PRICE[ingredient]

        //update state
        this.setState({ingredients: newIngredients,total_price: newPrice})
    }

    removeIngredient = (ingredient)=>{
        //first check if we can remove an ingredient
        //get previous value for that ingredient
        const oldCount = this.state.ingredients[ingredient]
        if(oldCount === 0){
            return console.log("Nothing to be removed here!")
        }
        const newCount = oldCount - 1

        //copy and update total sum for this ingredient type
        let newIngredients = {...this.state.ingredients}
        newIngredients[ingredient] = newCount

        //calculate new total price
        const newPrice = this.state.total_price - INGREDIENTS_PRICE[ingredient]

        //update state
        this.setState({ingredients: newIngredients,total_price: newPrice})
    }
    render(){

        //use this to enable or disable the "remove ingredient" button
        const disabledInfo = {...this.state.ingredients}
        for (let key in disabledInfo){
            disabledInfo[key]  = disabledInfo[key] <= 0
        }
        return(
            <Auxiliar>
                <Burger ingredients= {this.state.ingredients}/>
                <BuildControls 
                    price = {this.state.total_price}
                    ingredient
                    addIngredient={this.addIngredientHandler} 
                    removeIngredient={this.removeIngredient}
                    disableRemove = {disabledInfo}/>
            </Auxiliar>
        );
    }

}

export default BurgerBuilder;