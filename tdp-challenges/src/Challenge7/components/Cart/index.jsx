import {useDispatch,useSelector} from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  if (cart.length === 0) {
    return <div> Add all the things to your cart</div>;
  }
  
  return (
    <>
     {cart.map((item, index) => (
       <div key={`${item.id}-${index}`}>
        {item}
        <button onClick={() => {}}>Remove</button>
      </div>
     ))}
    </>
  );
};

export default Cart;
