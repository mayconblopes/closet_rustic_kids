import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import { rootReducer } from './root-reducer'

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action)
  }

  console.log('type', action.type)
  console.log('payload', action.payload)
  console.log('currentState', action.getState())

  next(action)

  console.log('next state: ', store.getState())
}

const middlewares = [logger]
const composedEnhancers = compose(applyMiddleware(...middlewares))

// middlewares must be the third argument for createStore
export const store = createStore(rootReducer, undefined, composedEnhancers)
