import React, { useState } from 'react'
import Button from '../../../components/button/button.component'
import FormInput from '../../../components/form-input/form-input.component'
import { addCollectionAndDocuments } from '../../../utils/firebase/firebase.utils'

export default function CreateComponent() {
  const [productName, setProductName] = useState('')
  const [productImageUrl, setProductImageUrl] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productCategory, setProductCategory] = useState('')

  function handleInput(event) {
    switch (event.target.name) {
      case 'name':
        setProductName(event.target.value)
        console.log(productPrice)
        break

      case 'imageUrl':
        setProductImageUrl(event.target.value)
        break

      case 'price':
        if (Number(event.target.value)) {
          setProductPrice(event.target.value)
        } else {
          setProductPrice('')
        }
        break

      case 'category':
        setProductCategory(event.target.value)
        break

      default:
        alert('Categoria inválida')
    }
  }

  function saveProduct(event) {
    event.preventDefault()

    addCollectionAndDocuments('categories', [
      {
        title: productCategory,
        items: {
          name: productName,
          price: productPrice,
          imageUrl: productImageUrl,
        },
      },
    ])
  }

  return (
    <div className='sign-up-container'>

      <form>
        <h2>Cadastro de produto</h2>

        <FormInput
          label='Nome'
          name='name'
          type='text'
          required
          onChange={handleInput}
          value={productName}
        />

        <FormInput
          label='Url da imagem'
          name='imageUrl'
          type='url'
          required
          onChange={handleInput}
          value={productImageUrl}
        />

        <FormInput
          label='Preço'
          name='price'
          type='number'
          required
          onChange={handleInput}
          value={productPrice}
        />
        {/* <select name="Categoria" id="">Categoria</select> */}
        <FormInput
          label='Categoria'
          name='category'
          type='text'
          required
          onChange={handleInput}
          value={productCategory}
        />
        <Button onClick={saveProduct}>Salvar</Button>
      </form>
    </div>
  )
}
