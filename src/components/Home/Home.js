import React, { useState } from "react";
import useTshirts from "../../hooks/useTshirts";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";

const Home = () => {
  const [tshirts, setTshirts] = useTshirts(); // aita holo amade banabo custom hook
  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedItem) => {
    const exist = cart.find((tshirt) => tshirt._id === selectedItem._id);
    if (!exist) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("item already added");
    }
  };

  const handleRemoveFromCart = (selectedItem) => {
    const rest = cart.filter((tshirt) => tshirt._id !== selectedItem._id);
    setCart(rest);
  };

  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tshirts.map((tshirt) => (
          <Tshirt
            key={tshirt.id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
