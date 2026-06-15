import { MdCurrencyRupee } from "react-icons/md";
import { RESTUARANT_IMG_PREFIX } from "../constants";
import * as React from "react";
import { userContext } from "../contextData";
import { useDispatch } from "react-redux";
import { addItem } from "../cartSlice";
const AccordianData = ({ accordianData }) => {
  const userData = React.useContext(userContext);
  const dispatch = useDispatch();
  return (
    <div className="accordianData">
      {accordianData?.itemCards?.map((card) => {
        return (
          <div
            className="border"
            style={{
              padding: "10px",
              borderBottom: "1px solid gray",
              display: "flex",
              justifyContent: "space-between",
            }}
            key={card?.card?.info?.name}
          >
            <span>
              <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
                {card?.card?.info?.name}
              </div>
              <div style={{ display: "flex", marginBottom: "5px" }}>
                <MdCurrencyRupee />
                {isNaN(card?.card?.["info"]?.defaultPrice)
                  ? card?.card?.["info"]?.price / 100
                  : card?.card?.["info"]?.defaultPrice / 100}
              </div>
              <div style={{ fontSize: "13.5px", color: "gray" }}>
                {card?.card?.info?.description}
              </div>
            </span>
            <div>
              <img
                src={RESTUARANT_IMG_PREFIX + card?.card?.info?.imageId}
                alt={card?.card?.info?.name}
                width={"150px"}
                height={"auto"}
                style={{ borderRadius: "10px" }}
              />
              <button
                className="addBtn"
                onClick={() => {
                  dispatch(addItem(card));
                }}
              >
                ADD
              </button>
            </div>
          </div>
        );
      })}
      <span>{userData.loggedInUser}</span>
    </div>
  );
};
export default AccordianData;
