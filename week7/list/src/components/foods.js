import {React, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addFood} from '../redux/foods';
import Card from './card';
import Container from './container';
import Button from './button';
import {Link} from "react-router-dom";
import './styles.css';

const Foods = () => {

    const state = useSelector(state => state);
    const [formField, setFormField] = useState('');
    const dispatch = useDispatch();

    return ( 
        <div className="background">
        <Container>
            <h1>Grocercy List</h1>
            <h3><Link to="/">Go Back</Link></h3>
            <div></div>
            <form className="inputForm"
            onSubmit={e => {
                e.preventDefault();
                dispatch(addFood(formField));
                setFormField('');
            }}>
                <input type="text" onChange={e => {setFormField(e.target.value)}} value={formField} placeholder="Grocery Item"/>
                <Button>Submit</Button>
            </form>
            <div className="grid">
                {state.foods.map(item => (<Card title={item} type="food" />))}
            </div>
        </Container>

        </div>
    );

}

export default Foods;