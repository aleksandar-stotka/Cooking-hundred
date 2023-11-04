import React from 'react';
import { useFetch } from '../hooks/useFetch (1)';
import ProductList from './ProductList';
const Products = () => {
  
    const {data,error,isPending} = useFetch( '  http://localhost:3000/recipes' )

    
   console.log(data)
    return (
        <div>
       {error && <p>{error}</p>}
       {isPending && <p>loading...</p>}
      {data && <ProductList recipes={data}/>} 
    
        </div>
    );
}

export default Products;
