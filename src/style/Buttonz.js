import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
//  import classes from '*.module.css';
import Paper from "@material-ui/core/Paper";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { Container } from "@material-ui/core";
import Header from "../style/Header";
// import Carts from '../Carts'
import Content from "../Content";

const Buttonz = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={1} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
          <Grid />
          <Grid item xs={1} sm={2} />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Buttonz;
