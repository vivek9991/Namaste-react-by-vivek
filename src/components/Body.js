import RestuarantCard from "./RestuarantCard";
import React from "react";
import DummyRestuarants, { EmptyList } from "./DummyRestuarants";
const Body = () => {
  const [searchText, setSearchText] = React.useState("");
  let [masterRestuarantList, setMasterRestuarantList] = React.useState([]);
  const [restuarantList, setRestuarantList] =
    React.useState(masterRestuarantList);

  React.useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5229107&lng=73.7610241&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    try {
      const data = await response.json();
      setMasterRestuarantList(
        data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
      setRestuarantList(
        data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
    } catch (e) {
      console.log(e);
    }
  }

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
            masterRestuarantList?.filter((restuarant) =>
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
        {masterRestuarantList?.length === 0 ? (
          <DummyRestuarants />
        ) : restuarantList?.length === 0 ? (
          <EmptyList />
        ) : (
          restuarantList?.map((restuarant) => (
            <RestuarantCard {...restuarant.info} key={restuarant.info.id} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
