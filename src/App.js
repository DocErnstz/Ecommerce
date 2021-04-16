import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart/Cart";
import { commerce } from './components/lib/commerce';

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };


 

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


  return (
    <div>
        <Navbar totalItems={cart.total_items}/>
        <Products products={products}  onAddToCart={handleAddToCart}  />
        <Cart cart={cart}/>
    </div>
  );
};

export default App;