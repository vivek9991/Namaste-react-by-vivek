import React from "react";

const useRestuarantAPI = (resId) => {
  const [restaurantDetails, setRestaurantDetails] = React.useState(null);
  React.useEffect(() => {
    getRestuarantDetails();
  }, []);

  async function getRestuarantDetails() {
    const data = await fetch(
      "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5229107&lng=73.7610241&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    try {
      const response = await data.json();
      const filteredResData =
        response.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle.restaurants.filter(
          (restuarant) => restuarant.info.id === resId,
        )?.[0]?.info;
      setRestaurantDetails(filteredResData);
    } catch (e) {
      console.log(e);
    }
  }
  return restaurantDetails;
};

export default useRestuarantAPI;
