import React, { Fragment, useContext } from 'react'
import { CategoriesContext } from '../../contexts/categories.context'
import CategoryPreview from '../../components/category-preview/category-preview.component'

export default function CategoriesPreview() {
  const context = useContext(CategoriesContext)

  return (
    <Fragment>
      {Object.keys(context.categoriesMap).map((title) => {
        const products = context.categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </Fragment>
  )
}
