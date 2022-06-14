// Main display page

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, IconButton } from "@material-ui/core";
import { MoreVertIcon } from "@material-ui/icons/MoreVert";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { AddShoppingCartSharp, Email } from "@material-ui/icons";
import ShareIcon from "@material-ui/icons/Share";
import CardMedia from "@material-ui/core/CardMedia";

import { cartAction } from "./store/cart-slice";
import { useDispatch } from "react-redux";

const LocalCarts = (props) => {
  const dispatch = useDispatch();

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

  const addToCartHandler = (id) => {
    dispatch(
      cartAction.addItemToCart({
        id: id,
        title: title,
        price: price,
        description: description,
      })
    );
    console.log("we here");
  };

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon
            //  onClick={() => console.log("SHARED")}
            />
          </IconButton>
        }
        title={title}
        subheader={"subtitle"}
      />
      <CardMedia style={{ height: "400px", width: "400px" }} image={imageUrl} />

      <CardContent>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small" onClick={addToCartHandler}>
          Add to cart
        </Button>
        price={price}
      </CardActions>
    </Card>
  );
};

export default LocalCarts;
