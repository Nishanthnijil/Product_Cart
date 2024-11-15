import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import Cart from "./Components/Cart";
import { useState, createContext } from "react";
import Header from "./Components/Header";

//creating context
export const cartContext = createContext();

function App() {
  const [cart, setcart] = useState([]);
  return (
    <>
      <cartContext.Provider value={{ cart, setcart }}>
        <BrowserRouter>
         <Header cart={cart}/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </cartContext.Provider>
    </>
  );
}

export default App;
