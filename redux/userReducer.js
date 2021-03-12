import * as types from './userTypes'

const initialState = {}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_INFO:
      return { ...action.payload }
    case types.AUTHENTICATE_USER:
      return state
    case types.GET_INFO_DONE:
      return { ...action.payload }
    case types.CLEAR_INFO_USER:
      return {}
    default:
      return state
  }
}

export default userReducer