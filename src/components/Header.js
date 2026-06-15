import { Title } from "./Title";
import React from "react";
import { Link } from "react-router-dom";
import { userContext } from "../contextData";
import { useSelector } from "react-redux";

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
  const handleUserLoginLogout = () => setIsUserLoggedIn(!isUserLoggedIn);
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
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
          <li>Cart - {cartItems.length}</li>
        </Link>
        <button onClick={handleUserLoginLogout}>
          {isUserLoggedIn ? "Logout" : "Login"}
        </button>
        {isUserLoggedIn && (
          <userContext.Consumer>
            {(data) => data.loggedInUser + " " + data.loggedInPlace}
          </userContext.Consumer>
        )}
      </ul>
    </div>
  );
};

export default Header;
