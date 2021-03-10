import * as types from './types'

const initialState = {
  cart: []
}

const itemInCart = (cart, item) => {
  let index = -1;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].productId == item.productId) {
        index = i;
        break;
      }
    }
  }
  return index;
};

const decreaseItem = (cart, index) => {
  cart[index].quantity -= 1;
  return cart;
};

const removeItem = (cart, index) => {
  cart.splice(index, 1);

  if (window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  return cart;
};

const removeFromCart = (cart, item) => {
  const indexItem = itemInCart(cart, item);
  const data = item.quantity === 1
    ? [...removeItem(cart, indexItem)]
    : [...decreaseItem(cart, indexItem)];

  if (window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(data))
  }

  return data;
};

const removeWholeItem = (cart, item) => {
  const indexItem = itemInCart(cart, item);
  const data = [...removeItem(cart, indexItem)];

  if (window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(data))
  }

  return data;
};

const addToCart = (state, product) => {
  const cloneState = JSON.parse(JSON.stringify(state));
  const { cart } = cloneState

  if (cart.length > 0) {
    let isExisted = false;

    cart.forEach(item => {
      if (item.productId == product.productId) {
        item.quantity += 1;
        isExisted = true;
      }
    })

    if (!isExisted) {
      const cloneProduct = JSON.parse(JSON.stringify(product));
      cloneProduct.quantity = 1;
      cart.push(cloneProduct)
    }
  } else {
    const cloneProduct = JSON.parse(JSON.stringify(product));
    cloneProduct.quantity = 1;
    cart.push(cloneProduct)
  }

  if (window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  return cart;
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT:
      if (window !== 'undefined') {
        const cart = JSON.parse(localStorage.getItem('cart') || "[]")
        state.cart = cart;
        return { ...state }
      }
      break;
    case types.ADD_TO_CART:
      const cart = addToCart(state, action.payload)
      return { cart }
    case types.REMOVE_FROM_CART:
      return { ...state, cart: removeFromCart(state.cart, action.payload) }
    case types.REMOVE_WHOLE_ITEM:
      return { ...state, cart: removeWholeItem(state.cart, action.payload) }
    default:
      return state
  }
}

export default cartReducer

