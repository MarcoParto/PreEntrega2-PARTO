import React, { useEffect, useState } from 'react'
import { getProductById } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setProduct(res)
      })
      .catch((err) => console.log(err))
  }, [id])

  return (
    <div className='custom-item-detail-container'>
      {product ? <ItemDetail {...product} /> : <p className="loading" >Loading...</p>}
    </div>
  )
}
