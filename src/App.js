import Products from './components/Products';
import { useEffect } from 'react';
import { useFetch } from './hooks/useFetch (1)';
import { BrowserRouter,Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Create from './pages/create/Create';
import Navbar from './components/Navbar';
function App() {
 
   
      
   return (
    <div className="App">
      <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>

        </Route>
        <Route exact path="/create">
          <Create/>

        </Route>
        <Route exact path="/search">
          <Search/>

        </Route>
        <Route exact path="/recipe">
          <Recipe/>

        </Route>

      </Switch>
      
      
      </BrowserRouter>
  
     
    </div>
  );
}

export default App
