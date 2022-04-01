import React from "react";
import "./Tshirt.css";

const Tshirt = (props) => {
  const { handleAddToCart, tshirt } = props;
  const { name, picture, price } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button onClick={() => handleAddToCart(tshirt)}>Add to Cart</button>
    </div>
  );
};

export default Tshirt;
