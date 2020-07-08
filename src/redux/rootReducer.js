import { combineReducers } from 'redux'
import { coordReducer } from './coordReducer'
import { mapReducer } from './mapReducer'

export const rootReducer = combineReducers({
    coords: coordReducer,
    map: mapReducer
})
