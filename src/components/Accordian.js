import * as React from "react";
import { IoChevronDown } from "react-icons/io5";
import AccordianData from "./AccordianData";
export const Accordian = ({
  accordianData,
  idx,
  showMenu,
  setShowMenu,
  showMenuIdx,
  setShowMenuIdx,
}) => {
  return (
    <div className="accordian" key={accordianData?.title}>
      <div
        className="accordianHeader"
        onClick={() => {
          if (idx === showMenuIdx) {
            setShowMenu(!showMenu);
          } else {
            setShowMenu(true);
            setShowMenuIdx(idx);
          }
        }}
      >
        {accordianData?.title} ({accordianData?.itemCards?.length})
        <IoChevronDown
          style={{
            transform:
              showMenu && idx === showMenuIdx
                ? "rotate(180deg)"
                : "rotate(0deg",
            transition: "0.3s",
          }}
        />
      </div>
      {showMenu && idx === showMenuIdx && (
        <AccordianData accordianData={accordianData} />
      )}
      <div className="accordianFooter"></div>
    </div>
  );
};
