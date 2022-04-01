import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h2>Welcome to T-shirt site</h2>
      {/* <nav>
        <Link to="/home">Home</Link>
        <Link to="/Orderreview">Order Review</Link>
        <Link to="/Grandpa">Grandpa</Link>
        
      </nav> */}
      <nav className="header">
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/Orderreview">Order Review</CustomLink>
        <CustomLink to="/Grandpa">Grandpa</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
