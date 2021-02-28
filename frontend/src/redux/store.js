import {applyMiddleware, createStore} from 'redux'

import logger from 'redux-logger'
 import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const middlewares = [logger, thunk]

if(process.env.NODE_ENV==='developement'){
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))