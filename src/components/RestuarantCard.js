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

export default RestuarantCard;
