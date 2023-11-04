import './App.css'
import Products from './components/Products';
import { useEffect } from 'react';
import { useFetch } from './hooks/useFetch (1)';

function App() {
   const {data} = useFetch("https://fakestoreapi.com/products")
   
    console.log(data)
   
      
   return (
    <div className="App">
      
       {data && data.map(item => {
        return  <Products key={item.id} {...item}/>
       })}
    </div>
  );
}

export default App
