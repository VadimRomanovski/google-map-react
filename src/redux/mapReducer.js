import { SHOW_POLYGON, HIDE_POLYGON } from './type'

const initialState = {
    polygon: true
}

export const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_POLYGON:
            return {...state, polygon: true}
        case HIDE_POLYGON:
            return {...state, polygon: false}
        default: return state
    }
}