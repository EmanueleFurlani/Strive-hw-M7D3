import { createStore } from "redux"
import { mainReducer } from "../reducers"

export const intialState = {
    likes: []
}

const configureStore = createStore(
    mainReducer,
    intialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore