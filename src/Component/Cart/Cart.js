// Shopping cart : POP UPX

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

import Content from "../../Content";

const Cart = (props) => {
  // get the data  from the state
  const theData = useSelector((state) => state.cart.items);

  const {
    id,
    avatarSrc,
    avatarUrl,
    title,
    subtitle,
    price,
    imgSrc,
    imageUrl,
    description,
  } = props;
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>

      <ul>
        {theData.map((item) => (
          // console.log("item.id"),

          <CartItem
            // key={item.id}
            // in here goes the value of the cart
            item={{
              id: item.id,
              title: item.title,
              price: item.totalprice,
              quantity: item.quantity,
              description: item.description,
              total: item.total,
              //${`{price} * {quantity}`},
              img: item.img,
            }}
          />
        ))}
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
