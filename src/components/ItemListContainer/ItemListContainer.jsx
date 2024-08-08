import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { dataBase } from '../../services/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    const collectionRef = category
    ? query(collection(dataBase, "products"), where("category", "==",  category)) : collection(dataBase, "products")
    
    getDocs(collectionRef)
      .then((response) => {
        const products = response.docs.map((doc) => {
          return {id: doc.id, ...doc.data()}
        })
        setProducts(products)
      })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
  }, [category]);

  return (
    <div>
      <h1 className='custom-title'>{greetings}</h1>
      {category && <h1 className='category-title'>{category.toUpperCase()}</h1>}
      {loading ? <p className="loading">Loading...</p> : <ItemList products={products} />}
    </div>
  );
}

export default ItemListContainer;
