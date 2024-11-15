import React from "react";
import "./Cart.css";
import { useState, useEffect, useContext } from "react";
import { cartContext } from "../App";

const Cart = () => {
  const [total, settotal] = useState(0);
  const { cart } = useContext(cartContext);

  useEffect(() => {
    settotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0));
  }, [cart]);
  return (
    <>
      <h2 className="cartheading">Products on your Cart</h2>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.pic} alt="iiii" />
            </div>
            <div className="cart-product-details">
              <h3>{product.name}</h3>
              <p>Price ₹ {product.amt}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="carttotal"> Total Amount Rs:{total}</h2>
    </>
  );
};

export default Cart;
