import { Title } from "./Title";
import React from "react";

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
  const handleUserLoginLogout = () => setIsUserLoggedIn(!isUserLoggedIn);
  return (
    <div className="header">
      <Title />
      {console.log("sh")}
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
        <li>Cart</li>
        <button onClick={handleUserLoginLogout}>
          {isUserLoggedIn ? "Logout" : "Login"}
        </button>
      </ul>
    </div>
  );
};

export default Header;
