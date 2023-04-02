import { USER_ACTION_TYPES } from './user.types'

const INITIAL_STATE = {
  currentUser: null,
}

// this is the reducer. It receives state and action and returns a new state, based in action
export function userReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload }

    default:
      // in Redux, the default case must returns the default state
      return state
  }
}
