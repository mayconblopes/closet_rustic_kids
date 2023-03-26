import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/categories.context'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'

export default function Shop() {
  const context = useContext(CategoriesContext)

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}
