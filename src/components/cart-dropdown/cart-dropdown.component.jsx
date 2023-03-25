import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'

export default function CartDropdown() {
  const cartContext = useContext(CartContext)

  const navigate = useNavigate()

  return (
    <div className={'cart-dropdown-container'}>
      <div className='cart-items'>
        {cartContext.cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={() => navigate('/checkout')}>GO TO CHECKOUT</Button>
    </div>
  )
}
