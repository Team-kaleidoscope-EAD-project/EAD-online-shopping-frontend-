import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import Dialog from "../../components/Dialog/Dialog";
import profileStyle from "./profile.module.css";
import Link from "@mui/material/Link";
import { useState } from "react";

export default function Profile() {
  const [details, setDetails] = useState([
    {
      key: 1,
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      address: "123, Main Street, Colombo 05",
      city: "Colombo",
      zip: "10001",
      phone: "0771234567",
    },
  ]);

  const handleSave = (updatedValues) => {
    setDetails((prevDetails) => [
      {
        ...prevDetails[0],
        firstName: updatedValues[0],
        lastName: updatedValues[1],
        email: updatedValues[2],
        address: updatedValues[3],
        city: updatedValues[4],
        zip: updatedValues[5],
        phone: updatedValues[6],
      },
    ]);
  };

  return (
    <div>
      <Typography
        sx={{
          color: "text.primary",
          marginBottom: 2,
          fontSize: 24,
          fontFamily: "amiko",
          textAlign: "start",
          marginLeft: "20px",
        }}
      >
        Profile
      </Typography>
      <Link href="/orders" underline="hover" color="inherit">
        <Typography
          sx={{
            color: "text.primary",
            marginBottom: 2,
            fontSize: 18,
            fontFamily: "amiko",
            textAlign: "start",
            marginLeft: "20px",
          }}
        >
          Orders
        </Typography>
      </Link>
      <div className={profileStyle.box}>
        <Box
          sx={{
            backgroundColor: "#f9f9f9",
            border: "1px solid #f9f9f9",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
            borderRadius: 2,
            padding: 2,
            maxWidth: 800,
            marginLeft: "20px",
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <h4 className={profileStyle.name}>
                    {details[0].firstName} {details[0].lastName}
                  </h4>
                </Grid>
                <Grid item>
                  <Dialog
                    value={[
                      details[0].firstName,
                      details[0].lastName,
                      details[0].email,
                      details[0].address,
                      details[0].city,
                      details[0].zip,
                      details[0].phone,
                    ]}
                    message={<ModeEditOutlineIcon sx={{ fontSize: 16 }} />}
                    dialogTitle="Edit Details"
                    dialogContent={[
                      "First Name",
                      "Last Name",
                      "Email",
                      "Address",
                      "City",
                      "Zip Code",
                      "Phone Number",
                    ]}
                    onSave={handleSave}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs>
                  <h4 className={profileStyle.title}>Email</h4>
                  <h4 className={profileStyle.email}>{details[0].email}</h4>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <hr />

          <Grid item>
            <h4 className={profileStyle.title}>Address</h4>
          </Grid>

          <Grid item>
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs>
                <h4>{details[0].address}</h4>
                <h4>{details[0].city}</h4>
                <h4>{details[0].zip}</h4>
                <h4>{details[0].phone}</h4>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
