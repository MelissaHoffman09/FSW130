import React from 'react';
import Button from './button';
import {useDispatch} from 'react-redux';
import {removeFood} from '../redux/foods';
import './styles.css';
import { removeTodo } from '../redux/todos';

const Card = (props) => {
    const dispatch = useDispatch();

    return ( 
        <div className="cardBox">
            <h2>{props.title}</h2>
            <Button onClick={() => {
                dispatch(props.type === "food" ? removeFood(props.title) : removeTodo(props.title))
            }}>Delete</Button>
        </div>
    );
}

export default Card;