import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
//  import classes from '*.module.css';
import Paper from "@material-ui/core/Paper";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import CartButton from "../Component/Cart/CartButton";
import { Link } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  TypographyStyles: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <p>Welcome to my Online store built with Material-ui by SM</p>
          <Typography className={classes.TypographyStyles}>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
              //   color="white"
            >
              <ul className="right">
                <li>
                  <Link to="/" color="red">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" color="white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" color="black">
                    Contact
                  </Link>
                </li>
              </ul>
              Button Link
            </Link>
          </Typography>
          <CartButton />
          <AcUnitIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;

{
  /*<Link
		component="button"
		variant="body2"
		color="white"
		onClick={() => {
			console.info("I'm a button.");
		}}
		color="white"
	>
		<ul className="right">
			<li>
				<Link to="/" color="red">
					Home
				</Link>
			</li>
			<li>
				<Link to="/about" color="white">
					About
				</Link>
			</li>
			<li>
				<Link to="/contact" color="black">
					Contact
				</Link>
			</li>
		</ul>
		Button Link
	</Link>;*/
}
