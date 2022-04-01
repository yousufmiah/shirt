import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  //conditional rendering option== important
  // 1. element variable
  // 2. ternary operator condition ? true : false
  // 3. && and operator (shorthand) sotto hole porertate jabe
  // 4.  || or operator- mittha hole porertate jabe
  let command;
  if (cart.length === 0) {
    command = <p>Please add at list one item!!!.</p>;
  } else if (cart.length === 1) {
    command = <p>Please add more... </p>;
  } else {
    command = (
      <p>
        <small>Thanks for adding item.</small>
      </p>
    );
  }

  return (
    <div>
      <h2>Selected Item: {cart.length}</h2>
      {cart.map((tshirt) => (
        <p className="cart">
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
        </p>
      ))}

      {cart.length === 0 || <p className="orange"> YA! You are buying!! </p>}

      {cart.length === 3 && (
        <div className="orange">
          <h3>Trigonal</h3>
          <p>Tin jon ke ki gift diba</p>
        </div>
      )}
      {command}
      {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button>}
      {cart.length === 4 && <button className="orange">Review Order</button>}
    </div>
  );
};

export default Cart;
