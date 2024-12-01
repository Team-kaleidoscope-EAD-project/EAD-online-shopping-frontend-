import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import Dialog from "../../components/Dialog/Dialog";
import profileStyle from "./profile.module.css";
import DialogAddress from "../../components/Dialog/DialogAdress";
import Link from "@mui/material/Link";

export default function Profile() {
  const details = [
    {
      key: 1,
      firstName: "John",
      lastName: "Doe",
      country: "USA",
      email: "johndoe@gmail.com",
      address: "123, Main Street, New York",
      city: "New York",
      zip: "10001",
      phone: "1234567890",
    },
  ];

  return (
    <div>
      <Typography
        key="3"
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
          key="4"
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
                  <h4 className={profileStyle}>{details[0].firstName}</h4>
                </Grid>
                <Grid item>
                  <h4 className={profileStyle}>{details[0].lastName}</h4>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs>
                  <TextField
                    disabled
                    defaultValue={details[0].email}
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <Dialog
                    value={[
                      details[0].firstName,
                      details[0].lastName,
                      details[0].email,
                    ]}
                    message={<ModeEditOutlineIcon sx={{ fontSize: 18 }} />}
                    dialogTitle="Edit Profile"
                    dialogContent={["First Name", "Last Name", "Email"]}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            backgroundColor: "#f9f9f9",
            border: "1px solid #f9f9f9",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
            borderRadius: 2,
            padding: 2,
            maxWidth: 800,
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <h4 className={profileStyle}>Address</h4>
                </Grid>
                <Grid item>
                  <DialogAddress
                    message={<div className={profileStyle.add}>+ Add</div>}
                    dialogTitle="Add New Address"
                    dialogContent={[
                      "Country/Region",
                      "First Name",
                      "Last Name",
                      "Address",
                      "City",
                      "Zip Code",
                      "Phone Number",
                    ]}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs>
                  <TextField
                    disabled
                    id="outlined-disabled-address"
                    defaultValue={details[0].address}
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <DialogAddress
                    value={[
                      details[0].country,
                      details[0].firstName,
                      details[0].lastName,
                      details[0].address,
                      details[0].city,
                      details[0].zip,
                      details[0].phone,
                    ]}
                    message={<ModeEditOutlineIcon sx={{ fontSize: 18 }} />}
                    dialogTitle="Edit Address"
                    dialogContent={[
                      "Country/Region",
                      "First Name",
                      "Last Name",
                      "Address",
                      "City",
                      "State",
                      "Zip Code",
                      "Phone Number",
                    ]}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
