import {React, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addTodo} from '../redux/todos';
import Card from './card';
import Container from './container';
import Button from './button';
import {Link} from "react-router-dom";
import './styles.css';

const Todos = () => {

    const state = useSelector(state => state);
    const [formField, setFormField] = useState('');
    const dispatch = useDispatch();

    return ( 
        <div className="background">

        <Container>
            <h1>To-do List</h1>
            <h3 className='back'><Link to="/">Go Back</Link></h3>
            <div></div>
            <form className="inputForm"
            onSubmit={e => {
                e.preventDefault();
                dispatch(addTodo(formField));
                setFormField('');
            }}>
                <input type="text" onChange={e => {setFormField(e.target.value)}} value={formField} placeholder="To-do Task"/>
                <Button>Submit</Button>
            </form>
            <div className="grid">
                {state.todos.map(item => (<Card title={item} type="todo"/>))}
            </div>
        </Container>

        </div>
    );

}

export default Todos;