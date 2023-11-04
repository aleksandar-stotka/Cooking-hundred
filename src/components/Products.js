import React from 'react';
import { useFetch } from '../hooks/useFetch (1)';
import ProductList from './ProductList';
const Products = () => {
  
    const {data} = useFetch( '  http://localhost:3000/recipes' )

    
   console.log(data)
    return (
        <div>
    {data && data.map(item => {
        return  <ProductList key={item.id} {...item}/>
       })}
        </div>
    );
}

export default Products;
