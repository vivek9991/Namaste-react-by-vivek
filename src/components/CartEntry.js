const CartEntry = ({ restuarantData }) => {
  return (
    <div className="checkoutDish">
      <span>{restuarantData.name}</span>
      <span>
        {restuarantData.defaultPrice
          ? restuarantData.defaultPrice / 100
          : restuarantData.price / 100}
      </span>
    </div>
  );
};
export default CartEntry;
