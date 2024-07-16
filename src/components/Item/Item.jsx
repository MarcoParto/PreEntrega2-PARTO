import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, name, img, category, price}) => {
  return (
    <article className='custom-item'>
        <h2>{name}</h2>
        <img src={img} alt={name}/>
        <p><u>Categoria:</u> {category.toUpperCase()}</p>
        <h3>${price}</h3>
        <Link className="custom-btn" to={`/item/${id}`}>Ver Detalle</Link>
    </article>
  )
}

export default Item

