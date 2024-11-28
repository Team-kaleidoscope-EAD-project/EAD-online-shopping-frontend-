// Dinul
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import styles from "./Navbar.module.css";

import logo from "../../assets/images/icons/kalei_logo.png";
import { Link } from "react-router-dom";
import NewArrivals from "./sections/NewArrivals";
import Collections from "./sections/Collections";
import Womens from "./sections/Womens";
import Mens from "./sections/Mens";
import Accessories from "./sections/Accessories";

// icons
import searchIcon from "../../assets/images/icons/search.png";
import cartIcon from "../../assets/images/icons/cart.png";
import hamburger from "../../assets/images/icons/hamburger.png";
// icons

// drawer
import Drawer from "@mui/material/Drawer";
// drawer

// images
import profileImg from "../../assets/images/profile/profileImg.png";
import profileImg2 from "../../assets/images/profile/profileImg2.png";
import { Avatar, Tooltip, Button } from "@mui/material";
// images

import Zoom from "@mui/material/Zoom";

import { auth } from "../../config/auth";
import keycloak from "../../config/keycloak";

export default function Navbar() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const isAuthenticated = await keycloak.init({ onLoad: "check-sso" }); // Check if the user is authenticated
        setAuthenticated(isAuthenticated); // Update state based on Keycloak's status
      } catch (error) {
        console.error("Error during Keycloak initialization:", error);
      }
    };

    initializeAuth();
  }, []);

  // drawer settings
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  // drawer settings

  const [anchorNewArrivalEl, setAnchorNewArrivalEl] = useState();
  const [anchorCollectionEl, setAnchorCollectionEl] = useState();
  const [anchorWomenEl, setAnchorWomenEl] = useState();
  const [anchorMenEl, setAnchorMenEl] = useState();
  const [anchorAccessoriesEl, setAnchorAccessoriesEl] = useState();

  const openNewArrival = Boolean(anchorNewArrivalEl);
  const openCollection = Boolean(anchorCollectionEl);
  const openWomen = Boolean(anchorWomenEl);
  const openMen = Boolean(anchorMenEl);
  const openAccessories = Boolean(anchorAccessoriesEl);

  const handleNewArrivalClick = (event) => {
    setAnchorNewArrivalEl(event.currentTarget);
  };
  const handleNewArrivalClose = () => {
    setAnchorNewArrivalEl(null);
  };
  const handleCollectionClick = (event) => {
    setAnchorCollectionEl(event.currentTarget);
  };
  const handleCollectionClose = () => {
    setAnchorCollectionEl(null);
  };
  const handleWomenClick = (event) => {
    setAnchorWomenEl(event.currentTarget);
  };
  const handleWomenClose = () => {
    setAnchorWomenEl(null);
  };
  const handleMenClick = (event) => {
    setAnchorMenEl(event.currentTarget);
  };
  const handleMenClose = () => {
    setAnchorMenEl(null);
  };
  const handleAccessoriesClick = (event) => {
    setAnchorAccessoriesEl(event.currentTarget);
  };
  const handleAccessoriesClose = () => {
    setAnchorAccessoriesEl(null);
  };

  return (
    <div className={styles.navbarContainer}>
      <Grid container spacing={2}>
        {/* large and extra large devices */}
        <Grid
          container
          size={{ lg: 12 }}
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          <Grid size={{ xs: 6, md: 1, lg: 1 }} className={styles.logoContainer}>
            <img
              src={logo}
              width={60}
              alt="kalei_logo"
              className={styles.logo}
            />
          </Grid>
          <Grid
            size={{ xs: 6, md: 7, lg: 8 }}
            className={styles.sectionLinkContainer}
          >
            <Link to="/">HOME</Link>
            <Link to="/" onMouseOver={handleNewArrivalClick}>
              NEW ARRIVALS
            </Link>
            <Link to="/" onMouseOver={handleCollectionClick}>
              COLLECTIONS
            </Link>
            <Link to="/" onMouseOver={handleWomenClick}>
              WOMEN
            </Link>
            <Link to="/" onMouseOver={handleMenClick}>
              MEN
            </Link>
            <Link to="/" onMouseOver={handleAccessoriesClick}>
              ACCESSORIES
            </Link>
          </Grid>
          <div style={{ display: "none" }}>
            {/* new arrivals section */}
            <NewArrivals
              anchorEl={anchorNewArrivalEl}
              open={openNewArrival}
              handleClose={handleNewArrivalClose}
            />
            {/* new arrivals section */}

            {/* collections section */}
            <Collections
              anchorEl={anchorCollectionEl}
              open={openCollection}
              handleClose={handleCollectionClose}
            />
            {/* collections section */}

            {/* womens section */}
            <Womens
              anchorEl={anchorWomenEl}
              open={openWomen}
              handleClose={handleWomenClose}
            />
            {/* womens section */}

            {/* mens section */}
            <Mens
              anchorEl={anchorMenEl}
              open={openMen}
              handleClose={handleMenClose}
            />
            {/* mens section */}

            {/* accessories section */}
            <Accessories
              anchorEl={anchorAccessoriesEl}
              open={openAccessories}
              handleClose={handleAccessoriesClose}
            />
            {/* accessories section */}
          </div>
          {/* search bar,cart and profile */}
          <Grid
            size={{ xs: 6, md: 2, lg: 3 }}
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div className={styles.searchBarContainer}>
              <img src={searchIcon} alt="search icon" width={15} />
              <span>SEARCH</span>
            </div>
            <>
              <Tooltip title="Cart" arrow TransitionComponent={Zoom}>
                <img
                  src={cartIcon}
                  alt="search icon"
                  width={20}
                  style={{ cursor: "pointer" }}
                />
              </Tooltip>
              <Tooltip title="Profile" arrow TransitionComponent={Zoom}>
                {authenticated ? (
                  <Avatar
                    alt="Profile Picture"
                    src={profileImg}
                    sx={{ cursor: "pointer" }}
                  />
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => auth()}
                  >
                    Login
                  </Button>
                )}
              </Tooltip>
            </>
          </Grid>
          {/* search bar,cart and profile */}
        </Grid>
        {/* large and extra large devices */}
        <Grid
          container
          size={{ xs: 12 }}
          sx={{ display: { xs: "flex", lg: "none" } }}
        >
          <Grid size={{ xs: 4 }} className={styles.logoContainer}>
            <img
              src={hamburger}
              width={20}
              alt="kalei_logo"
              className={styles.logo}
              onClick={toggleDrawer("bottom", true)}
            />
          </Grid>
          <Grid
            size={{ xs: 4 }}
            className={styles.logoContainer}
            sx={{ justifyContent: "center" }}
          >
            <img
              src={logo}
              width={60}
              alt="kalei_logo"
              className={styles.logo}
            />
          </Grid>
          <Grid
            size={{ xs: 4 }}
            sx={{ justifyContent: "end" }}
            className={styles.logoContainer}
          >
            <img
              src={searchIcon}
              width={20}
              alt="kalei_logo"
              className={styles.logo}
            />
          </Grid>
        </Grid>
      </Grid>
      <Drawer
        anchor={"bottom"}
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
      >
        <div
          style={{
            height: "70vh",
            width: "100%",
            backgroundColor: "#FCF2E7",
            paddingTop: "40px",
          }}
        >
          <Grid container sx={{ display: "flex", flexDirection: "column" }}>
            {/* user details */}
            <div className={styles.userDetails}>
              {/* profile picture */}
              <div className={styles.profileImgContainer}>
                <img src={profileImg2} alt="profileImg" width={100} />
              </div>
              {/* profile picture */}
              {/* user information */}
              <div className={styles.profileDetailsContainer}>
                <span style={{ fontSize: "18px" }}>Anonymous user</span>
                <br />
                <span style={{ fontSize: "14px" }}>
                  AnonymousEmail@gmail.com
                </span>
              </div>
              {/* user information */}
            </div>
            {/* user details */}
            {/* navbar options */}
            <Grid
              className={styles.navbarOptions}
              sx={{ alignItems: { xs: "start", md: "center" } }}
            >
              <h4>HOME</h4>
              <h4>NEW ARRIVALS</h4>
              <h4>COLLECTIONS</h4>
              <h4>WOMEN</h4>
              <h4>MEN</h4>
              <h4>ACCESSORIES</h4>
            </Grid>
            {/* navbar options */}
          </Grid>
        </div>
      </Drawer>
    </div>
  );
}
