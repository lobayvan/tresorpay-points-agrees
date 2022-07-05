
export const SELECT_POINT = "SELECT_POINT";
export const SEARCH_POINT = "SEARCH_POINT";
export const CLEAR_SEARCH_POINT = "CLEAR_SEARCH_POINT";

export const selectionnerPoint = (point)  => {
    return {
        type: SELECT_POINT,
        payload: point
    }
}

export const rechercherPoint = (text) => {
    return {
        type: SEARCH_POINT,
        payload: text
    }
}

export const reInitialiserPoints = () => {
    return {
        type: CLEAR_SEARCH_POINT,
    }
}