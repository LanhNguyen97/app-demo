import * as types from './types'

export const addToCart = (product) => {
  return {
    type: types.ADD_TO_CART,
    payload: product
  }
}

export const init = () => {
  return {
    type: types.INIT
  }
}

export const removeFromCart = (product) => ({
  type: types.REMOVE_FROM_CART,
  payload: product,
});

export const removeWholeItem = (product) => ({
  type: types.REMOVE_WHOLE_ITEM,
  payload: product,
});

export const clearAllCart = () => ({
  type: types.CLEAR_ALL_CART,
});