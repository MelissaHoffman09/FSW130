export const addTodo = title => {
    return {
        type: "ADD_TODO",
        payload: title
    }
}

export const removeTodo = title => {
    return {
        type: "REMOVE_TODO",
        payload: title
    }
}

export const getTodos = () => {
    return {
        type: "GET_TODOS"
    }
}

const initialState = ["Laundry", "Pick up Dry Cleaning", "Buy Bday Gift for Mom", "Make dish for Pot Luck on Sat", "Make Dr Apt", "Study for exam"];

export const todosReducer = (todos = initialState, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [...todos, action.payload];
        case "REMOVE_TODO":
            return todos.filter(todo => todo !== action.payload);
        case "GET_TODOS":
            return todos;
        default:
            return todos;
    }
}