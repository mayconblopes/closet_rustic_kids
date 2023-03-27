import React from 'react'
import DirectoryItem from '../directory-item/directory-item.component'
import './directory.styles.scss'
import QUEMSOMOS from '../../assets/about.webp'

const categories = [
  {
    id: 1,
    title: 'quem somos',
    imageUrl: QUEMSOMOS,

    route: 'about',
  },
  {
    id: 2,
    title: 'portas',
    imageUrl:
      'https://scontent.fcaw3-1.fna.fbcdn.net/v/t1.6435-9/68471012_647374315739549_1056017760984760320_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=lvEDWCXcobsAX8Lzl4q&_nc_ht=scontent.fcaw3-1.fna&oh=00_AfDiluvrJLZvJzj0B7h8ns0Xqz-kkrQiZrA55erhkbyFvw&oe=64491334',
    route: 'shop/portas',
  },
  {
    id: 3,
    title: 'janelas',
    imageUrl:
      'https://www.homeit.com.br/wp-content/uploads/2020/04/janela-de-madeira-em-casa.jpg',
    route: 'shop/janelas',
  },
  {
    id: 4,
    title: 'mesas',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0762/1353/products/fcd5d8e4-9312-4529-a9ed-8272bb9c5a4e.jpg?v=1610106151',
    route: 'shop/mesas',
  },
  {
    id: 5,
    title: 'catálogo completo',
    imageUrl: 'https://img.freepik.com/fotos-premium/textura-de-tampo-de-mesa-de-madeira-de-perto_172251-2126.jpg',
    route: 'shop/catalogo',
  },
]

function Directory() {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem
          key={category.id}
          category={category}
          route={category.route}
        />
      ))}
    </div>
  )
}

export default Directory
