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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
})

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.quantity
    }, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  const context = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  }

  function addItemToCart(productToAdd) {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}
