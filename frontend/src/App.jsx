import React from 'react';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from './pages/Product';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {

  return (
    <>
    <div className='root'>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route exact path="/:subcategory_slug/" element={<ProductList/>} />
          <Route exact path="/:subcategory_slug/:product_slug/" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />

        </Routes>  
      </Router>
    </div>
    </>
  )
}

export default App