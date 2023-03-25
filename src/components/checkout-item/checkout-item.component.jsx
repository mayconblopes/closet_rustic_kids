import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './checkout-item.styles.scss'

export default function CheckoutItem({ cartItem }) {
  const cartContext = useContext(CartContext)

  function addItemToCart() {
    cartContext.addItemToCart(cartItem)
  }

  function removeItemFromCart() {
    cartContext.removeItemFromCart(cartItem)
  }

  function clearItemFromCart() {
    cartContext.clearItemFromCart(cartItem)
  }

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </div>
      <span className='name'>{cartItem.name}</span>

      <span className='quantity'>
        <div className='arrow' onClick={removeItemFromCart}>
          &#10094; {/* left arrow "<"*/}
        </div>
        <div className='value'>{cartItem.quantity}</div>
        <div className='arrow' onClick={addItemToCart}>
          &#10095; {/* right arrow ">"*/}
        </div>
      </span>

      <span className='price'>{cartItem.price}</span>

      <div className='remove-button' onClick={clearItemFromCart}>
        &#10005;
      </div>
    </div>
  )
}
