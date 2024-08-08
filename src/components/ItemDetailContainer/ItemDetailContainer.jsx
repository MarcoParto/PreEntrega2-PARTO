import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { dataBase } from '../../services/firebase'
import { doc, getDoc } from 'firebase/firestore'

export const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    getDoc(doc(dataBase, "products", id))
      .then((res) => {
        const product = {id: res.id, ...res.data()}
        setProduct(product)
      })
      .catch((err) => console.log(err))
  }, [id])

  return (
    <div className='custom-item-detail-container'>
      {product ? <ItemDetail {...product} /> : <p className="loading" >Loading...</p>}
    </div>
  )
}
