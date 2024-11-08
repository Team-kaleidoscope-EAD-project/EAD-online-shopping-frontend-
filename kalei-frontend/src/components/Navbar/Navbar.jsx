// Dinul
import React, { useState } from "react";
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
// icons

// images
import profileImg from "../../assets/images/profile/profileImg.png";
import { Avatar, Tooltip } from "@mui/material";
// images

import Zoom from "@mui/material/Zoom";

export default function Navbar() {
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
        <Grid container size={{ xs: 12 }}>
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
                <Avatar
                  alt="Profile Picture"
                  src={profileImg}
                  sx={{ cursor: "pointer" }}
                />
              </Tooltip>
            </>
          </Grid>
          {/* search bar,cart and profile */}
        </Grid>
      </Grid>
    </div>
  );
}
