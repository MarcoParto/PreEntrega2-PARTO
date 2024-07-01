import React from 'react'
import './ItemListContainer.css'

const categories = [
    {id: 1, name: 'Mangas'},
    {id: 2, name: 'Comics'}, 
    {id: 3, name: 'Libros'},
    {id: 4, name: 'Juegos de Rol'},
    {id: 5, name: 'Figuras'}
]

function ItemListContainer({greetings}) {

  return (
    <>
        <h2 className='custom-title'>{greetings}</h2>
        <ul className='list-group'>
          {categories.map((category) => 
            <li className='list-group-item list-custom-text' key={category.id}>{category.name}</li>
          )} 
        </ul>
    </>
  )
}

export default ItemListContainer