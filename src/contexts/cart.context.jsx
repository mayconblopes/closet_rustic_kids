import { React, createContext, useState, useEffect } from 'react'

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

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  function calcCartTotal() {
    const total = cartItems.reduce((accumulator, cartItem) => {
      cartItem.quantity * cartItem.price + accumulator, 0
    })
    return total
  }

  useEffect(() => {
    const newCartCount = cartItems.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.quantity
    }, 0)
    setCartCount(newCartCount)
    setCartTotal(calcCartTotal())
  }, [cartItems])

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

  function addItemToCart(productToAdd) {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  function removeItemFromCart(cartItemToRemove) {
    setCartItems(removeCartItem(cartItems, cartItemToRemove))
  }

  function clearItemFromCart(cartItemToClear) {
    setCartItems(clearCartItem(cartItems, cartItemToClear))
  }

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}
