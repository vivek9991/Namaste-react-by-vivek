import { Title } from "./Title";

const Header = () => {
  return (
    <div className="header">
      <Title />
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
