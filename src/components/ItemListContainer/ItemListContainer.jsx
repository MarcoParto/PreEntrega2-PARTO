import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    if (!category) {
      getProducts()
        .then((res) => {
          setProducts(res);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getProductsByCategory(category)
        .then((res) => {
          setProducts(res);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [category]);

  return (
    <div>
      <h1 className='custom-title'>{greetings}</h1>
      {loading ? <p className="loading">Loading...</p> : <ItemList products={products} />}
    </div>
  );
}

export default ItemListContainer;
