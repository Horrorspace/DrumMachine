import * as Redux from 'redux'
import * as ReduxThunk from 'redux-thunk'
import {saga} from '@redux/saga/saga.js'
import {rootReducer} from '@redux/rootReducer.js'


const createStore = Redux.createStore;
const compose = Redux.compose;
const applyMiddleware = Redux.applyMiddleware;
const thunk = ReduxThunk.default;

export const store = createStore(rootReducer, compose(
    applyMiddleware(saga, thunk)));