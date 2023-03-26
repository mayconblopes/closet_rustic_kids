import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './card-icon.styles.jsx'
import { CartIconContainerStyle, ItemCountStyle, ShoppingIconStyle } from './card-icon.styles.jsx'

export default function CartIcon() {
  const context = useContext(CartContext)

  function toggleIsCartOpen() {
    context.setIsCartOpen(!context.isCartOpen)
  }

  return (
    <CartIconContainerStyle>
      <ShoppingIconStyle onClick={toggleIsCartOpen} />
      <ItemCountStyle onClick={toggleIsCartOpen}>{context.cartCount}</ItemCountStyle>
    </CartIconContainerStyle>
  )
}
