import RestuarantCard from "./RestuarantCard";
import React from "react";
import DummyRestuarants, { EmptyList } from "./DummyRestuarants";
import { Link } from "react-router-dom";
import useIsOnline from "./useIsOnline";
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
      "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5229107&lng=73.7610241&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
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

  const isOnline = useIsOnline();

  return !isOnline ? (
    <h1>"You are currently offline, please check your internet connection"</h1>
  ) : (
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
            <Link
              key={restuarant.info.id}
              to={"/restuarant/" + restuarant.info.id}
            >
              {" "}
              <RestuarantCard {...restuarant.info} key={restuarant.info.id} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
