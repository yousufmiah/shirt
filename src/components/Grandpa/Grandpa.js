import React, { createContext, useState } from "react";
import "./Grandpa.css";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";

// context api
//1. call create a context with a default value
//2. set a variable of the context with upper case
//3. make sure you export the context to use it in other places.
//4. wrap your child content using RingContext.Provider
//5. provide a value
//6. to consume the context from child component
//7. useContext hook and you will you need to pass the contextname
//8. can pas variable, single value, multiple value, array, function, etc.

export const RingContext = createContext("Ring");

const Grandpa = () => {
  const [house, setHouse] = useState(1);

  const ornament = "Kada matir Ring";

  const handleBuyAHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };

  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div className="grandpa">
        <h3>Grand Pa</h3>

        <p>
          House: {house} <button onClick={handleBuyAHouse}>Buy A House</button>
        </p>
        <section style={{ display: "flex" }}>
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
