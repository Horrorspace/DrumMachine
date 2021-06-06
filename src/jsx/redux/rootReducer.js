import * as Redux from 'redux'
import {soundReducer} from '@redux/reducer.js'

const combineReducers = Redux.combineReducers;


export const rootReducer = combineReducers({
    sound: soundReducer,
  })