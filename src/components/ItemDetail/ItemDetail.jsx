import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({name, img, category, price, description, stock}) => {
  return (
    <article className='cutom-item-detail'>
        <h1>{name}</h1>
        <img src={img} alt={name} />
        <p>Categoria: {category}</p>
        <p>{description}</p>
        <h2>${price}</h2>
        <p>Stock: {stock}</p>       
    </article>
  )
}

export default ItemDetail