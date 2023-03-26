import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartDropdownContainerStyle, CartItemsStyle, EmptyMessageStyle } from './cart-dropdown.styles'
import './cart-dropdown.styles'

export default function CartDropdown() {
  const cartContext = useContext(CartContext)

  const navigate = useNavigate()

  return (
    <CartDropdownContainerStyle>
      <CartItemsStyle>
        {cartContext.cartItems.length ? (
          cartContext.cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))
        ) : (
          <EmptyMessageStyle>Your cart is empty</EmptyMessageStyle>
        )}
      </CartItemsStyle>
      <Button onClick={() => navigate('/checkout')}>GO TO CHECKOUT</Button>
    </CartDropdownContainerStyle>
  )
}
