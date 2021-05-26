export const addMovie = title => {
    return {
        type: "ADD_MOVIE",
        payload: title
    }
}

export const removeMovie = title => {
    return {
        type: "REMOVE_MOVIE",
        payload: title
    }
}

export const getMovies = () => {
    return {
        type: "GET_MOVIES"
    }
}

const initialState = ["Another Earth", "I Orgins", "The Eternals", "Mimic", "Eternal Sunshine", "Vertigo"];

export const movieReducer = (movies = initialState, action) => {
    switch(action.type) {
        case "ADD_MOVIE":
            return [...movies, action.payload];
        case "REMOVE_MOVIE":
            return movies.filter(movie => movie !== action.payload);
        case "GET_MOVIES":
            return movies;
        default:
            return movies;
    }
}