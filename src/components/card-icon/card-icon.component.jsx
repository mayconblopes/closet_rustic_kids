import React, { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'
import './card-icon.styles.scss'

export default function CartIcon() {
  const context = useContext(CartContext)

  function toggleIsCartOpen() {
    context.setIsCartOpen(!context.isCartOpen)
  }

  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' onClick={toggleIsCartOpen} />
      <span className='item-count' onClick={toggleIsCartOpen}>{context.cartCount}</span>
    </div>
  )
}
