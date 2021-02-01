import React, { useState, useEffect } from "react";
// import Products from "./Components/Products/Products";
// import Nav from "./Components/Navbar/Nav";
import { commerce } from "./lib/commerce";
import { Nav, Products } from "./Components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    //commerce.products.lists returns a promise which is then destructed
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div>
      <Nav />
      <Products products={products} />
    </div>
  );
};

export default App;
