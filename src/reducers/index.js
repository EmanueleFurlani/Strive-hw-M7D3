import { intialState } from "../store";

export const mainReducer = (state = intialState, action) => {
    const { type, payload} = action
    switch (type) {
        case "ADD_TO_FAVORITE": 
            return {
                ...state,
                likes: [...state.likes, payload]
            }
        case "REMOVE_FROM_FAVORITE":
            return {
                ...state,
                likes: state.likes.filter(company => company !== payload)
            }
        default:
            return state
    }
}