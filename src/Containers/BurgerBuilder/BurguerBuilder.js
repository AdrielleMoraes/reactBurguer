import React, {Component} from "react";

import Auxiliar from "../../hoc/Auxiliar"
import Burger from "../../Components/Burger/Burger"

class BurgerBuilder extends Component
{
    render(){
        return(
            <Auxiliar>
                <Burger></Burger>
                <div>Build controls</div>
            </Auxiliar>
        );
    }

}

export default BurgerBuilder;