import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, name, img, category, price}) => {
  return (
    <article className='custom-item'>
        <h2>{name}</h2>
        <img src={img} alt={name}/>
        <p>Categoria: {category}</p>
        <h3>${price}</h3>
        <Link to={`/item/${id}`}>Ver Detalle</Link>
    </article>
  )
}

export default Item

