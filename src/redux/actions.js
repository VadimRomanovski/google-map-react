import { REQUEST_COORDS, SHOW_POLYGON, HIDE_POLYGON } from './type'

export const fetchCoords = () => {
    return {
        type: REQUEST_COORDS
    }
}

export const showPolygon = () => {
    return {
        type: SHOW_POLYGON
    }
}

export const hidePolygon = () => {
    return {
        type: HIDE_POLYGON
    }
}
