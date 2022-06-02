// The layout part of the site

import React from "react";
import LocalCarts from "./LocalCarts";
import { Grid } from "@material-ui/core";
import { useEffect, useState, useCallback } from "react";

import Data from "./Data";

const Content = () => {
  const [initdata, setInintdata] = useState([]);

  const fetchdata = useCallback(async () => {
    const response = await fetch(
      "https://firetest-a4733-default-rtdb.europe-west1.firebasedatabase.app/product.json"
    );
    const data = await response.json();
    // console.log(data);

    const DataWare = [];

    for (const keys in data) {
      DataWare.push(data[keys]);
      // in here I will destruct the arrray
    }

    // DataWare.map((ele) => {
    //   console.log(ele.title);
    // });

    console.log(DataWare);

    setInintdata(DataWare);
  }, []);

  // this will run the first time the dom loads and based on the dependancy array

  useEffect(() => {
    fetchdata();
  }, [fetchdata]);
  const getData = (DataObject) => {
    return (
      <Grid item xs={12} sm={4}>
        <LocalCarts {...DataObject} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={3}>
      {initdata.map((DataObject) => getData(DataObject))}
    </Grid>
  );
};

export default Content;
