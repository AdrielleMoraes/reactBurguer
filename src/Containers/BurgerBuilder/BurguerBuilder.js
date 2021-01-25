import React, {Component} from "react";

import Auxiliar from "../../hoc/Auxiliar"
import burger from "../../Components/Burger/Burger"

class BurgerBuilder extends Component
{
    render(){
        return(
            <Auxiliar>
                <div>Burger</div>
                <div>Build controls</div>
            </Auxiliar>
        );
    }

}

export default BurgerBuilder;