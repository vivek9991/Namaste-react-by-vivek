import { useParams } from "react-router-dom";
import React from "react";
import DummyRestuarants from "./DummyRestuarants";
import useRestuarantAPI from "./useRestuarantAPI";
const RestuarantInfo = () => {
  const params = useParams();
  let restaurantDetails;
  if (true) {
    restaurantDetails = useRestuarantAPI(params.id);
  }

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
