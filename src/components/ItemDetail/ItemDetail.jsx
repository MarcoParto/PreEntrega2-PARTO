import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({name, img, category, price, description, stock}) => {
  return (
    <article className='custom-item-detail'>
        <h1>{name}</h1>
        <img src={img} alt={name} />
        <p className="custom-text"><u>Categoria:</u> {category.toUpperCase()}</p>
        <p>{description}</p>
        <h2>${price}</h2>
        <p className="custom-text">Stock: {stock}</p>       
    </article>
  )
}

export default ItemDetail