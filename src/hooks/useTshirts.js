import { useEffect, useState } from "react";

const useTshirts = () => {
  const [tshirts, setTshirts] = useState([]);

  //   console.log(tshirts);
  useEffect(() => {
    fetch("tshirtsData.json")
      .then((res) => res.json())
      .then((data) => setTshirts(data));
  }, []);

  return [tshirts, setTshirts];
  //return kore useTshirts function rakha holo
};

export default useTshirts; // home componente patano holo
