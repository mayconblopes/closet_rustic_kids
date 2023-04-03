import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../../store/categories/category.selector'

import './category.styles.scss'

export default function Category() {
  const params = useParams()
  const categoriesMap = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(
    categoriesMap[params.category]
  )

  useEffect(() => {
    setProducts(categoriesMap[params.category])
  }, [params.category, categoriesMap])

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
