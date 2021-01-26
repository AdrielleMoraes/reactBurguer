import React, {Component} from "react";

import Auxiliar from "../../hoc/Auxiliar"
import Burger from "../../Components/Burger/Burger"
import BuildControls from "../../Components/Burger/BuildControls/BuildControls"

class BurgerBuilder extends Component
{
    state = {
        ingredients:{
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        }
    }
    render(){
        return(
            <Auxiliar>
                <Burger ingredients= {this.state.ingredients}/>
                <BuildControls>Build controls</BuildControls>
            </Auxiliar>
        );
    }

}

export default BurgerBuilder;