import React from 'react'

const Button = (props) => (
    <button onClick={props.onClick}>
        {props.name}
    </button>
);

export default Button;