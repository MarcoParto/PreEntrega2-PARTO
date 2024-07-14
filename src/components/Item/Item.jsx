import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, category, price}) => {
  return (
    <article>
        <h2>{name}</h2>
        <img src={img} style={{width: 250}} />
        <p>Category: {category}</p>
        <h3>{price}</h3>
        <Link to={`/detail/${id}`}>Ver Detalle</Link>
    </article>
  )
}

export default Item

