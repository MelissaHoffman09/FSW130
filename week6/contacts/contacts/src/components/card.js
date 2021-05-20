import React from 'react';

const Card = (props) => {
    return ( 
        <div className="card">
            <h2>Name: {props.name}</h2>
            <h2>Number: {props.number}</h2>
            <h2>Email: {props.email}</h2>
            {props.children}
        </div>
    );
}

export default Card;