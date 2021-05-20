import React from 'react';

const Button = (props) => {
    return ( 
        <button className={`${props.color}-button`} {...props} >{props.children}</button>
    );
}

Button.defaultProps = {
    color: "black"
}

export default Button;