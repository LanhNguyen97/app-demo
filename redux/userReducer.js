import * as types from './userTypes'

const initialState = {}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_INFO:
      return { ...action.payload }
    default:
      return state
  }
}

export default userReducer