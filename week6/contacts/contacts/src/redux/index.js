import {createStore} from 'redux';
import {contactReducer} from './contacts';

const store = createStore(contactReducer)
store.subscribe(() => console.log(store.getState()))

export default store