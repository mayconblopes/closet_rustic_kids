import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'
import { CategoriesContext } from '../../contexts/categories.context'

import './category.styles.scss'

export default function Category() {
  const params = useParams()
  const categoriesContext = useContext(CategoriesContext)
  const [products, setProducts] = useState(
    categoriesContext.categoriesMap[params.category]
  )

  useEffect(() => {
    setProducts(categoriesContext.categoriesMap[params.category])
  }, [params.category, categoriesContext.categoriesMap])

  return (
    <Fragment>
      <h2 className='title'>{params.category.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  )
}
