import { React, createContext, useState, useEffect } from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js'

export const CategoriesContext = createContext({
  categoriesMap: {}
})

export function CategoriesProvider({ children }) {
  const [categoriesMap, setCategoriesMap] = useState({})
  const context = { categoriesMap, setCategoriesMap }

  useEffect(() => {
    async function getCategoriesMap() {
      const categoriesMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoriesMap)
    }

    getCategoriesMap()
  }, [])

  return (
    <CategoriesContext.Provider value={context}>
      {children}
    </CategoriesContext.Provider>
  )
}
