import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import Button from '../button/button.component'
import './product-card.styles.scss'

export default function ProductCard({ product }) {
  const context = useContext(CartContext)

  return (
    <div className='product-card-container'>
      <img src={product.imageUrl} alt={product.name} />
      <div className='footer'>
        <span className='name'>{product.name}</span>
        <span className='price'>{product.price}</span>
      </div>
      <Button
        buttonType='inverted'
        onClick={() => context.addItemToCart(product)}
      >
        Add to card
      </Button>
    </div>
  )
}
