import React, { useState, useEffect } from "react"
import Products from "./components/Products";
import Navbar from "./components/Navbar/Navbar";
import { commerce } from './components/lib/commerce.js';
const App = () => {
    const [products, setProducts] = useState([]);
    
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
    
  }, []);
  
    return (
        <div>
            <Navbar/>
            <Products products={products} />
        </div>
    )
}

export default App;