import cookies from 'js-cookie'
import { callApi } from '../utils/callApi'
import { getCookie } from '../utils/cookies'
import { verifyToken } from '../utils/token'
import * as types from './userTypes'

export const initInfo = (user) => {
  return {
    type: types.INIT_INFO,
    payload: user
  }
}

export const authenticateUser = () => {

  return dispatch => {
    dispatch({
      type: types.AUTHENTICATE_USER,
      payload: {}
    })

    return checkUser().then(res => {
      dispatch({ type: types.GET_INFO_DONE, payload: res })
    }).catch(err => {
      console.log('err ===>', err);
      dispatch({ type: types.GET_INFO_DONE, payload: {} })
    })
  }

}

const checkUser = async () => {
  const token = getCookie('token');

  if (token) {
    const decode = verifyToken(token)
    const { userId, exp } = decode

    if (userId && parseInt(exp) >= (Date.now() / 1000)) {
      const res = await callApi(`https://5e1fc92ee31c6e0014c6000e.mockapi.io/api/user/${userId}`);

      if (res) {
        return res.data
      }
    }
  }

  return {}
}