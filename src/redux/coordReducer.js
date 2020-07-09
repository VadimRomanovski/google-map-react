import { FETCHED_COORDS } from './type'

const initalState = {
    locations: [],
    polygonCoords: []
}

export const coordReducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCHED_COORDS:
            return { ...state, locations: action.response.locations, polygonCoords: action.response.polygonCoords}
        default: return state
    }
}
