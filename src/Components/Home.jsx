import React from "react";
import { useState } from "react";
import "./Home.css";

import data from "../Components/Products.json";
import ProductList from "../Components/ProductList";
const Home = () => {
  const [productslist] = useState(data);
  return (
    <>
      <div className="prodContainer">
        {productslist.map((product) => (
          <ProductList key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
