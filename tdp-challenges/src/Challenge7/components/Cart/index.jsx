import { useDispatch, useSelector, connect } from "react-redux";
import { removeFromCart } from "../../store/cart/actions";

export const Cart = ({ cart = [], removeFromCart }) => {
  // const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart);
  if (cart.length === 0) {
    return <div> Add all the things to your cart</div>;
  }

  return (
    <>
      {cart.map((item, index) => (
        <div key={`${item.id}-${index}`}>
          {item}
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
