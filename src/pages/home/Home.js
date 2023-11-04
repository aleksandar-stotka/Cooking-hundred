import React from 'react';
import Products from '../../components/Products';
import { useFetch } from '../../hooks/useFetch (1)';
const Home = () => {
   const {data, error, isPending} = useFetch("  http://localhost:3000/recipes")

    return (
        <div className='home'>
           home
      <Products/>
        </div>
    );
}

export default Home;
