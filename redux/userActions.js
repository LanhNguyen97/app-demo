import * as types from './userTypes'

export const initInfo = (user) => {
  return {
    type: types.INIT_INFO,
    payload: user
  }
}
