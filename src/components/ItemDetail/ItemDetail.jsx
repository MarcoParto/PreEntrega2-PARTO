import React from 'react'

const ItemDetail = ({name, img, category, price, description, stock}) => {
  return (
    <article>
        <h1>{name}</h1>
        <img src={img} style={{width: 500}} />
        <p>Category: {category}</p>
        <p>{description}</p>
        <h2>{price}</h2>
        <p>{stock}</p>       
    </article>
  )
}

export default ItemDetail