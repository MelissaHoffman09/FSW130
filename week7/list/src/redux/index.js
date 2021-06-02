import {createStore, combineReducers} from 'redux';
import {foodReducer} from './foods';
import {todosReducer} from './todos';

const rootReducer = combineReducers({
    foods: foodReducer,
    todos: todosReducer
});

const store = createStore(rootReducer)
store.subscribe(() => console.log(store.getState()))

export default store