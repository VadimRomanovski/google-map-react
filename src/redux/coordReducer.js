import { FETCH_COORDS } from './type'

const initalState = {
    locations: [],
    polygonCoords: []
}

export const coordReducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_COORDS:
            return { ...state, locations: action.payload.locations, polygonCoords: action.payload.polygonCoords}
        default: return state
    }
}
