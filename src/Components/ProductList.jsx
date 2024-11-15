import React from "react";
import { useContext } from "react";
import { cartContext } from "../App";

import "./ProductList.css";
const ProductList = ({ product }) => {
  const { cart, setcart } = useContext(cartContext);

  const addcart = () => {
    setcart([...cart, product]);
  };
  const removecart = () => {
    setcart(cart.filter((e) => e.id !== product.id));
  };

  return (
    <>
      <div className="product">
        <div className="img">
          <img src={product.pic} alt={product.name} />
        </div>

        <div className="details">
          <h3>{product.name}</h3>
          <p>Price ₹:{product.amt}</p>

          {cart.includes(product) ? (
            <button onClick={removecart}>Remove from Cart</button>
          ) : (
            <button onClick={addcart}>Add to Cart</button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
