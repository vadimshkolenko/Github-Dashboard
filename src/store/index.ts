import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from './reducers/index'

const enhancer = applyMiddleware(thunk)

const store = createStore(rootReducer, enhancer)

export default store
