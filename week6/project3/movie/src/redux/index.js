import {createStore, combineReducers} from 'redux';
import {movieReducer} from './movies';
import {showsReducer} from './shows';

const rootReducer = combineReducers({
    movies: movieReducer,
    shows: showsReducer
});

const store = createStore(rootReducer)
store.subscribe(() => console.log(store.getState()))

export default store