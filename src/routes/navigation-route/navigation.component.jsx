import React from "react";
import { Link } from "react-router-dom";
import "./navbar.component.scss";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__link">
          Home
        </Link>
        <Link to="/shop" className="navbar__link">
          Shop
        </Link>
        <Link to="/signin" className="navbar__link">
          Sign-in
        </Link>
      </div>
    </nav>
    <Outlet/>
    </div>
  );
};

export default Navigation;
