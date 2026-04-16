import { Title } from "./Title";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
  const handleUserLoginLogout = () => setIsUserLoggedIn(!isUserLoggedIn);
  return (
    <div className="header">
      <Title />
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About us</li>
        </Link>
        <Link to="/contact-us">
          <li>Contact</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
        <button onClick={handleUserLoginLogout}>
          {isUserLoggedIn ? "Logout" : "Login"}
        </button>
      </ul>
    </div>
  );
};

export default Header;
