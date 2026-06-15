import { useDispatch, useSelector } from "react-redux";
import CartEntry from "./CartEntry";
import { clearCart } from "../cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart?.items);
  const dispatch = useDispatch();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Cart({cartItems?.length})</h2>
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <CartEntry key={item.card.info.id} restuarantData={item.card.info} />
        ))}
      {cartItems.length > 0 && (
        <div
          style={{
            marginTop: "50px",
            marginBottom: "10px",
          }}
        >
          Total cart value :{" "}
          {cartItems?.reduce((acc, val) => {
            return (
              acc +
              (val.card.info.defaultPrice
                ? val.card.info.defaultPrice
                : val.card.info.price) /
                100
            );
          }, 0)}
        </div>
      )}

      {cartItems.length > 0 ? (
        <button
          onClick={() => {
            dispatch(clearCart());
          }}
          className="clearBtn"
        >
          Clear cart
        </button>
      ) : (
        <div>Cart is empty, add items!!!!</div>
      )}
    </div>
  );
};
export default Cart;
