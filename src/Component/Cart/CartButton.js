import classes from "./CartButton.module.css";

import { useDispatch, useSelector } from "react-redux";
import { showMyCartAction } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(showMyCartAction.showCartz());
  };

  // const dispatch = useDispatch();
  const totalQuan = useSelector((state) => state.cart.totalquantity);

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuan}</span>
    </button>
  );
};

export default CartButton;
