import React from 'react';

// creating a higher order component that exports only its children 
const Aux = props =>(
    <div className={props.classes}>{ props.children}</div>
);

export default Aux;