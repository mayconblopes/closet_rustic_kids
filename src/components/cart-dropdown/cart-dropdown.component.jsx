import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'

export default function CartDropdown() {
  const cartContext = useContext(CartContext)

  return (
    <div className={'cart-dropdown-container'}>
      <div className='cart-items'>
        {cartContext.cartItems.map(item => (
          <CartItem key={item.id} cartItem={item}/>
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}
