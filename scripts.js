import React from "react";
import ReactDOM from "react-dom/client";
import { restuarantData } from "./data";

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhTMxvzg3AyWrX7Fvd7gNQb-tQSadgZiIwA&s"
          alt="Food villa"
        />
      </a>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const RestuarantCard = ({ name, avgRating, cloudinaryImageId, cuisines }) => {
  return (
    <div className="restuarantCard">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt={name}
      />
      <div>{name}</div>
      <div>{avgRating}</div>
      <div>{cuisines.join(", ")}</div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      {restuarantData.infoWithStyle.restaurants.map((restuarant) => (
        <RestuarantCard {...restuarant.info} key={restuarant.info.id} />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Body />
      {/* Footer */}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
