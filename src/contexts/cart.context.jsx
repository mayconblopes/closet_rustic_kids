import { React, createContext, useReducer } from 'react'

function addCartItem(cartItems, productToAdd) {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

function removeCartItem(cartItems, cartItemToRemove) {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  )

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

function clearCartItem(cartItems, cartItemToClear) {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
}



export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
})

const CART_CONTEXT_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_COUNT: 'SET_CART_COUNT',
  SET_CART_TOTAL: 'SET_CART_TOTAL',
}

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}
function cartReducer(state, action) {
  const { type, payload } = action

  switch (type) {
    case CART_CONTEXT_ACTION_TYPES.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload }

    case CART_CONTEXT_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, ...payload }

    case CART_CONTEXT_ACTION_TYPES.SET_CART_COUNT:
      return { ...state, cartCount: payload }

    case CART_CONTEXT_ACTION_TYPES.SET_CART_TOTAL:
      return { ...state, cartTotal: payload }

    default:
      throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
  const { isCartOpen, cartItems, cartCount, cartTotal } = state

  function setIsCartOpen(isCartOpen) {
    dispatch({
      type: CART_CONTEXT_ACTION_TYPES.SET_IS_CART_OPEN,
      payload: isCartOpen,
    })
  }

  function setCartItems(cartItems) {
    dispatch({
      type: CART_CONTEXT_ACTION_TYPES.SET_CART_ITEMS,
      payload: cartItems,
    })
  }

  function setCartCount(cartCount) {
    dispatch({
      type: CART_CONTEXT_ACTION_TYPES.SET_CART_TOTAL,
      payload: cartCount,
    })
  }

  const context = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  }

  function updateCartItemsReducer(newCartItems) {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )

    dispatch({
      type: CART_CONTEXT_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      },
    })
  }

  function addItemToCart(productToAdd) {
    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  }

  function removeItemFromCart(cartItemToRemove) {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove)
    updateCartItemsReducer(newCartItems)
  }

  function clearItemFromCart(cartItemToClear) {
    const newCartItems = clearCartItem(cartItems, cartItemToClear)
    updateCartItemsReducer(newCartItems)
  }

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}
