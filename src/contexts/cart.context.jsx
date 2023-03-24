import { React, createContext, useState } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
})

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const context = { isCartOpen, setIsCartOpen }

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}
