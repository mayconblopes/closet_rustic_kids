import React, { useContext } from 'react'
import { CategoriesContext } from '../../../contexts/categories.context'
import { deleteProduct, updateProduct } from '../../../utils/firebase/firebase.utils'

export default function ReaderComponent() {
  const { categoriesMap, setCategoriesMap } = useContext(CategoriesContext)
  

  console.log('--DOCS--', categoriesMap)

  async function handleUpdate(event, item, category) {
    event.preventDefault()
    setCategoriesMap(await updateProduct(categoriesMap, item, category))
  }
  
  async function handleDelete(event, item, category) {
    event.preventDefault()
    setCategoriesMap(await deleteProduct(categoriesMap, item, category))

  }

  return (
    <div>
      <h1>Produtos cadastrados</h1>
      <p></p>
      {Object.keys(categoriesMap).map((category) => (
        <div key={category + String(Date())}>
          <h3>{category.toUpperCase()}</h3>
          {categoriesMap[category].map((item) => (
            <form key={item.id}>
              <input defaultValue={item.name} onChange={(e) => item.name = e.target.value}/>
              <input defaultValue={item.price} onChange={(e) => item.price = e.target.value} />
              <input defaultValue={item.imageUrl} onChange={(e) => item.imageUrl = e.target.value} />
              <input defaultValue={category} onChange={(e) => category = e.target.value} />
              <img
                src={item.imageUrl}
                alt={item.name}
                style={{ width: '100px' }}
              />
              <button onClick={(event) => handleUpdate(event, item, category)}>
                Salvar
              </button>
              <button onClick={(event) => handleDelete(event, item, category)}>
                Excluir
              </button>
            </form>
          ))}
        </div>
      ))}
    </div>
  )
}
