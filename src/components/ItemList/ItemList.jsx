import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) => {
  return (
    <div className="custom-item-list">
        {products.map( prod => {
            return <Item key={prod.id} {...prod} />
        })}    
    </div>
  )
}

export default ItemList
