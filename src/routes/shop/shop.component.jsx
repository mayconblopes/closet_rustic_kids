import { React, useContext } from 'react'
import { ProductsContext } from '../../contexts/product.context'
import ProductCard from '../../components/product-card/product-card.component'
import './shop.styles.scss'

export default function Shop() {
  const context = useContext(ProductsContext)
  return (
    <div className='products-container'>
      {context.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
