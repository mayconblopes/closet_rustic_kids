import { React, createContext, useState } from 'react'
import PRODUCTS from '../shopdata.json'

export const ProductsContext = createContext({})

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(PRODUCTS)
  const context = { products, setProducts }

  //   useEffect(() => {
  //     setProducts(PRODUCTS)
  //   }, [])

  return (
    <ProductsContext.Provider value={context}>
      {children}
    </ProductsContext.Provider>
  )
}
