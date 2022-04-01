import React from "react";
import Special from "../Special/Special";

const Myself = ({ house }) => {
  return (
    <div>
      <h5>Myself</h5>
      <p>House: {house}</p>
      <Special></Special>
    </div>
  );
};

export default Myself;
