import React from 'react'
import { useNavigate } from 'react-router-dom'
import './directory-item.styles.jsx'
import { BackgroundImageStyle, BodyStyle, DirectoryItemContainerStyle } from './directory-item.styles.jsx'

function DirectoryItem({ category, route }) {
  const navigate = useNavigate()

  function navigateHandler(){
    navigate(route)
    console.log(route)
  }

  return (
    <DirectoryItemContainerStyle onClick={navigateHandler}>
      <BackgroundImageStyle imageUrl={category.imageUrl}/>
      <BodyStyle>
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </BodyStyle>
    </DirectoryItemContainerStyle>
  )
}
export default DirectoryItem
