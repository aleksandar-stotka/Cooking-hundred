import React from 'react';
import { useFetch } from '../hooks/useFetch (1)';
import ProductList from './ProductList';
const Products = () => {
  
    const {data} = useFetch("https://fakestoreapi.com/products")
   
    return (
        <div>
    {data && data.map(item => {
        return  <ProductList key={item.id} {...item}/>
       })}
        </div>
    );
}

export default Products;
