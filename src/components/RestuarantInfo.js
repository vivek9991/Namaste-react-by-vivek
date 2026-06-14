import { useParams } from "react-router-dom";
import React from "react";
import DummyRestuarants from "./DummyRestuarants";
import useRestuarantAPI from "./useRestuarantAPI";
import { Accordian } from "./Accordian";
const RestuarantInfo = () => {
  const params = useParams();
  let restaurantDetails;
  if (true) {
    restaurantDetails = useRestuarantAPI(params.id)?.data?.cards;
  }

  const menuCard =
    restaurantDetails?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  const [showMenu, setShowMenu] = React.useState(false);
  const [showMenuIdx, setShowMenuIdx] = React.useState(-1);

  return (
    <div>
      {!restaurantDetails ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <DummyRestuarants />
        </div>
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>
            {restaurantDetails?.[2]?.card?.card?.info?.name}
          </h1>
          <div className="menuCards">
            {menuCard.map((menucard, idx) => (
              <Accordian
                key={menucard?.card?.card?.title}
                accordianData={menucard?.card?.card}
                idx={idx}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                showMenuIdx={showMenuIdx}
                setShowMenuIdx={setShowMenuIdx}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestuarantInfo;
