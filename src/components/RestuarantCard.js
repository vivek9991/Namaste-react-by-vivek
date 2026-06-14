const RestuarantCard = ({ name, avgRating, cloudinaryImageId, cuisines }) => {
  return (
    <div className="restuarantCard">
      <img
        style={{ borderRadius: 10 }}
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

export const getRestuarantCardTopRated = (RestuarantCard) => {
  return (props) => {
    return (
      <div>
        <span className="ratedPill">High rated</span>
        <RestuarantCard {...props} />
      </div>
    );
  };
};

export default RestuarantCard;
