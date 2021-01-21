import React from 'react';

// creating a higher order component that exports only its children 
const withClass = (WrappedComponent, className) =>
{
    return props =>(
        <div className={className}> 
            <WrappedComponent/>
        </div>
    );
}
export default withClass;