import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-nav">
        <h1>Dictionary App</h1>
      </div>
      <div className="right-nav">
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/history">History</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
