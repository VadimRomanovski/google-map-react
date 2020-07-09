import { REQUEST_COORDS, SHOW_POLYGON, HIDE_POLYGON } from './type'

export const requestCoords = (isActive) => {
    return {
        type: REQUEST_COORDS,
        payload: isActive
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
