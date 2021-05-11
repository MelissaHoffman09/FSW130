const redux = require("redux");

function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

function addContact(contact) {
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
}

function removeContact(contact) {
    return {
        type: "REMOVE_CONTACT",
        payload: contact
    }
}

const initialState = {
    count: 0,
    allContacts: [],
    
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return {
                ...state,
                count: state.count + action.payload
            }
        case "ADD_CONTACT":
            return {
                ...state,
                allContacts: [...state.allContacts, action.payload]
            }
        case "REMOVE_CONTACT": 
            const updatedArr = state.allContacts.filter(contact => contact.name !== action.payload)
            return {
                ...state,
                allContacts: updatedArr
            }
        
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addContact({
    name: "Darth Vader", 
    phone: "808-505-2002", 
    email: "darthvader@starwars.com"
}))
store.dispatch(addContact({
    name: "Han Solo", 
    phone: "202-404-7007", 
    email: "hansolo@starwars.com"
}))
store.dispatch(addContact({
    name: "Princess Leia", 
    phone: "101-303-8008", 
    email: "princessleia@starwars.com"
}))
store.dispatch(removeContact("Darth Vader"))