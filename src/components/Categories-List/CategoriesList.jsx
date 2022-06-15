
import './CategoriesList.styles.scss'
import React from 'react'
import CategoryItem from '../category-item/category-item'


const CategoriesList = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map((category)=> (
  <CategoryItem  category={category}/>
      ))}
    </div>
  )
}

export default CategoriesList