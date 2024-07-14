import React, { useEffect, useState } from 'react'
import { getProductById } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

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
    <div>
      {product ? <ItemDetail {...product} /> : <p>Loading...</p>}
    </div>
  )
}
