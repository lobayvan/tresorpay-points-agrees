import {combineReducers, createStore} from "redux"; 
import points from "./points";

const reducers = combineReducers({
    points
})
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;