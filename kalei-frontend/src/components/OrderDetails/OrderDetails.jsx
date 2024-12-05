import React, { useEffect, useState } from "react";
import styles from "./OrderDetails.module.css";
import Grid from "@mui/material/Grid2";
import { Chip, Drawer, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { getOrderItemsByOrderId } from "../../services/orderItems/orderItemsService";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "orderId", headerName: "ORDER ID", width: 100 },
  { field: "productId", headerName: "PRODUCT ID", width: 150 },
  {
    field: "productName",
    headerName: "Product name",
    width: 550,
    sortable: false,
  },
  {
    field: "unitPrice",
    headerName: "Unit Price",
    type: "",
    width: 150,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "",
    width: 90,
  },
  {
    field: "totalPrice",
    headerName: "Total Price",
    type: "",
    width: 190,
  },
];

const paginationModel = { page: 0, pageSize: 5 };

const theme = createTheme({
  palette: {
    danger: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export default function OrderDetails({ closingController, open, order }) {
  const rows = [
    { id: "1", orderId: order.id, lastName: "Snow", firstName: "Jon", age: 35 },
    {
      id: "2",
      orderId: order.id,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
    },
    {
      id: "3",
      orderId: order.id,
      lastName: "Lannister",
      firstName: "Jaime",
      age: 45,
    },
    {
      id: "4",
      orderId: order.id,
      lastName: "Stark",
      firstName: "Arya",
      age: 16,
    },
    {
      id: "5",
      orderId: order.id,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: null,
    },
    {
      id: "6",
      orderId: order.id,
      lastName: "Melisandre",
      firstName: null,
      age: 150,
    },
    {
      id: "7",
      orderId: order.id,
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 44,
    },
    {
      id: "8",
      orderId: order.id,
      lastName: "Frances",
      firstName: "Rossini",
      age: 36,
    },
    {
      id: "9",
      orderId: order.id,
      lastName: "Roxie",
      firstName: "Harvey",
      age: 65,
    },
  ];

  const [orderItemList, setOrderItemList] = useState([]);

  useEffect(() => {
    const getOrderItems = async () => {
      try {
        const orderItems = await getOrderItemsByOrderId(order.id);
        setOrderItemList(orderItems);
      } catch (error) {
        console.error("error in fetching order items:" + error.message);
      }
    };
    getOrderItems();
  }, []);

  return (
    <>
      <Drawer
        anchor={"bottom"}
        open={open}
        onClose={closingController}
        OrderDetails={order}
      >
        <Grid container sx={{ padding: 5, height: "70vh" }}>
          <Grid size={{ xs: 12 }}>
            <Typography
              variant="h6"
              sx={{
                color: "#000000",
                fontFamily: "amiko",
                fontWeight: "800",
                fontSize: "1.5rem",
              }}
            >
              ORDER ID : {order.id}
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <span style={{ fontSize: "0.9rem" }}>Order placed on </span>
                <span style={{ fontSize: "0.9rem" }}>{order.orderDate}</span>
              </div>
              {order.status == "Completed" ? (
                <Chip label={"Completed"} color="success" />
              ) : (
                <Chip
                  label={"Incomplete"}
                  sx={{
                    backgroundColor: theme.palette.danger.main,
                    color: "white",
                  }}
                />
              )}
            </div>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Paper sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                sx={{ border: 0 }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
}
