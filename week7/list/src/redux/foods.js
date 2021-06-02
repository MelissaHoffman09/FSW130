export const addFood = title => {
    return {
        type: "ADD_FOOD",
        payload: title
    }
}

export const removeFood = title => {
    return {
        type: "REMOVE_FOOD",
        payload: title
    }
}

export const getFoods = () => {
    return {
        type: "GET_FOODS"
    }
}

const initialState = ["Yogurt", "Almond Milk", "Coffee", "Vanilla Creamer", "Hash Browns", "Avocado"];

export const foodReducer = (foods = initialState, action) => {
    switch(action.type) {
        case "ADD_FOOD":
            return [...foods, action.payload];
        case "REMOVE_FOOD":
            return foods.filter(food => food !== action.payload);
        case "GET_FOODS":
            return foods;
        default:
            return foods;
    }
}