import * as types from './userTypes'

const initialState = {}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_INFO:
      return { ...action.payload }
    case types.AUTHENTICATE_USER:
      return {}
    case types.GET_INFO_DONE:
      return { ...action.payload }
    default:
      return state
  }
}

export default userReducer