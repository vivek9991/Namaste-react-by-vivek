import RestuarantCard from "./RestuarantCard";
import { restuarantData } from "../../data";
import React from "react";
const Body = () => {
  const [searchText, setSearchText] = React.useState("");
  const masterRestuarantList = restuarantData.infoWithStyle.restaurants;
  const [restuarantList, setRestuarantList] =
    React.useState(masterRestuarantList);
  return (
    <>
      <input
        type="text"
        placeholder="Search for a restuarant"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setRestuarantList(
            masterRestuarantList.filter((restuarant) =>
              restuarant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase()),
            ),
          );
        }}
      >
        Search
      </button>
      <div className="body">
        {restuarantList.map((restuarant) => (
          <RestuarantCard {...restuarant.info} key={restuarant.info.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
