// import { useEffect, useState } from 'react';
import './App.css';
import Product from './components/product';
import {Switch, Route} from 'react-router-dom';
// import { ProductService } from './services/productService';



function App() {
//   const [product, setProduct] =  useState(null);
//   useEffect(() => {
// const productService = new ProductService();
// productService.getProduct(1).then((products: any) => {
// setProduct(products);
// console.log(products);
// })
// .catch((error: any) => {console.log(error)});
//   }, []);
  return (
    <div className="App">
      <header className="App-header">

        <Switch>
          <Route path="/product/:id">
          <Product />
            </Route>
          </Switch>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
