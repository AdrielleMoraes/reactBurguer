import React, {Component} from "react";

import Auxiliar from "../../hoc/Auxiliar"

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