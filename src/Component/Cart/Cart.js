// This is the layout page

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{
            title: "Product title",
            quantity: 5,
            total: 350.1,
            //${`{price} * {quantity}`},
            price: 6,
            img: "",
          }}
        />
      </ul>
      <button
        onClick={() => {
          console.log("Welcome to check out PAGE ");
        }}
      >
        Check out
      </button>
    </Card>
  );
};

export default Cart;
