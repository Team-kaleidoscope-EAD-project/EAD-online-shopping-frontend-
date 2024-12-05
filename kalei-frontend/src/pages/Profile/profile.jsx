import React, { useContext, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import Dialog from "../../components/Dialog/Dialog";
import profileStyle from "./profile.module.css";
import Link from "@mui/material/Link";
import { KeycloakContext } from "../../auth/KeycloakProvider";
import { useNavigate } from "react-router-dom";
import Orders from "../UserOrders/Orders";
import Footer from "../../components/Footer/Footer";

export default function Profile() {
  const navigate = useNavigate();
  const { keycloak } = useContext(KeycloakContext);
  console.log(keycloak);
  // State to manage user details
  const [details, setDetails] = useState([
    {
      key: 1,
      firstName: "",
      lastName: "",
      email: "",
      address: "123, Main Street, Colombo 05",
      city: "Colombo",
      zip: "10001",
      phone: "0771234567",
    },
  ]);

  // Fetch token and parse user details
  useEffect(() => {
    const initializeKeycloak = async () => {
      if (keycloak) {
        try {
          // Check if token exists and is valid
          const tokenFromStorage = localStorage.getItem("keycloakToken");
          if (tokenFromStorage) {
            keycloak.token = tokenFromStorage;
            keycloak.tokenParsed = JSON.parse(
              localStorage.getItem("keycloakTokenParsed")
            );
          }

          // Update the token if about to expire
          const refreshed = await keycloak.updateToken(30);
          if (refreshed) {
            localStorage.setItem("keycloakToken", keycloak.token);
            localStorage.setItem(
              "keycloakTokenParsed",
              JSON.stringify(keycloak.tokenParsed)
            );
          }

          // Set user details in the state
          setDetails((prevDetails) => [
            {
              ...prevDetails[0],
              firstName: keycloak.tokenParsed?.given_name,
              lastName: keycloak.tokenParsed?.family_name,
              email: keycloak.tokenParsed?.email,
            },
          ]);
        } catch (error) {
          console.error("Error initializing Keycloak:", error);
          keycloak.login(); // Redirect to login if token is invalid
        }
      }
    };

    initializeKeycloak();
  }, [keycloak]);

  const handleSave = (updatedValues) => {
    setDetails((prevDetails) => [
      {
        ...prevDetails[0],
        firstName: updatedValues[0],
        lastName: updatedValues[1],
        email: updatedValues[2],
      },
    ]);
  };

  const handleOrderPageNavigation = () => {
    navigate(`/orders`, {
      state: { userId: keycloak.tokenParsed?.sub },
    });
  };

  return (
    <div>
      <Typography
        sx={{
          color: "text.primary",
          marginTop: 5,
          marginBottom: 2,
          fontSize: 24,
          fontFamily: "amiko",
          textAlign: "start",
          marginLeft: "20px",
        }}
      >
        Profile
      </Typography>
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
        </Box>
      </div>
      <Grid container>
        <Grid size={{ xs: 12 }}>
          <Orders />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
