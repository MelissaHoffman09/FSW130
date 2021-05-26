import {React, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addMovie} from '../redux/movies';
import Card from './card';
import Container from './container';
import Button from './button';
import {Link} from "react-router-dom";
import './styles.css';

const Movies = () => {

    const state = useSelector(state => state);
    const [formField, setFormField] = useState('');
    const dispatch = useDispatch();

    return ( 
        <div className="background">

        <Container>
            <h1>Movies</h1>
            <h3><Link to="/">Go Back</Link></h3>
            <div></div>
            <form className="inputForm"
            onSubmit={e => {
                e.preventDefault();
                dispatch(addMovie(formField));
                setFormField('');
            }}>
                <input type="text" onChange={e => {setFormField(e.target.value)}} value={formField} placeholder="Title of Movie"/>
                <Button>Submit</Button>
            </form>
            <div className="grid">
                {state.movies.map(item => (<Card title={item} type="movie" />))}
            </div>
        </Container>

        </div>
    );

}

export default Movies;