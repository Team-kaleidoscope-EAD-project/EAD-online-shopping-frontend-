import React from "react";
import styles from "./OrderDetails.module.css";
import Grid from "@mui/material/Grid2";
import { Drawer } from "@mui/material";

export default function OrderDetails({ closingController, open, order }) {
  return (
    <>
      <Drawer
        anchor={"bottom"}
        open={open}
        onClose={closingController}
        OrderDetails={order}
      >
        <Grid container sx={{ padding: 5, height: "70vh" }}>
          <Grid size={{ xs: 12 }}></Grid>
        </Grid>
      </Drawer>
    </>
  );
}
