import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/actions";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(addToCart(product.title))}>
        Add to Cart
      </button>{" "}
      {product.title}
    </>
  );
};

export default Product;
