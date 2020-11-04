import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';

import { rootReducer } from './reducers/index'

const enhancer = applyMiddleware(thunk, logger)

const store = createStore(rootReducer, enhancer)

export default store
