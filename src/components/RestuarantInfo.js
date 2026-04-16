import { useParams } from "react-router-dom";
import React from "react";
import DummyRestuarants from "./DummyRestuarants";
const RestuarantInfo = () => {
  const [restaurantDetails, setRestaurantDetails] = React.useState(null);
  const params = useParams();

  async function getRestuarantDetails() {
    const data = await fetch(
      "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5229107&lng=73.7610241&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    try {
      const response = await data.json();
      const filteredResData =
        response.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle.restaurants.filter(
          (restuarant) => restuarant.info.id === params.id,
        )?.[0]?.info;
      setRestaurantDetails(filteredResData);
    } catch (e) {
      console.log(e);
    }
  }

  React.useEffect(() => {
    getRestuarantDetails();
  }, []);

  return (
    <div>
      {!restaurantDetails ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <DummyRestuarants />
        </div>
      ) : (
        <div>
          <h1>{restaurantDetails.name}</h1>
          <img
            className="restuarantDetailsImg"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              restaurantDetails.cloudinaryImageId
            }
            alt={restaurantDetails.name}
          />
        </div>
      )}
    </div>
  );
};

export default RestuarantInfo;
