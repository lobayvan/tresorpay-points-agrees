import Points from "../../Points";
import { SELECT_POINT, SEARCH_POINT, CLEAR_SEARCH_POINT } from "./actions";

const defaultState = {
    selectedPoint: null,
    points: [...Points]
}

export default (state = defaultState, action) => {
    const {type, payload} = action; 
    console.log("from state: ", action);
    console.log("type check: ", type === SELECT_POINT,  type === SEARCH_POINT);
    switch(type) {
        case SELECT_POINT:
            return {
                ...state,
                selectedPoint: payload
            }
        case SEARCH_POINT:
            return {
                ...state,
                points: state.points.filter((item) => item.situation.toLowerCase().includes(payload.toLowerCase()))
            }
        case CLEAR_SEARCH_POINT:
            return {
                ...state,
                points: [...Points]
            }
        default: 
            return state
    }
}