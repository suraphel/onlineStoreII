// holds the information that goes into the display cart

import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../store/cart-slice";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.cart.quantity);
  console.log(counter);

  // this  is a function that is coming from the slice page
  const incrementHandler = () => {
    // when click increase item # and price\
    dispatch(cartAction.increment());
  };

  const decrementHandler = () => {
    // when click decrease item # and price
    dispatch(cartAction.decrement());
    console.log("going down");
  };

  const addItemToCart = () => {
    // when click increase item # and price\
    dispatch(cartAction.addItemToCart());
  };

  const removeItemFromCart = () => {
    // when click decrease item # and price
    dispatch(cartAction.removeItemFromCart());
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2) + quantity} {/* toFixed(number of decimals ) */}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.adder}>
          <button onClick={decrementHandler}>-</button>
        </div>
        <div className={classes.quantity}>
          <span>{counter}</span>

          {/* // quantity displayed on the screen */}
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromCart}>x</button>
          {/* <button onClick={addItemToCart}>++</button> */}
        </div>
        <div className={classes.adder}>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
