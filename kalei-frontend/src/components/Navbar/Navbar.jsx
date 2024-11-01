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
          <Grid size={{ xs: 6, md: 2, lg: 1 }} className={styles.logoContainer}>
            <img
              src={logo}
              width={60}
              alt="kalei_logo"
              className={styles.logo}
            />
          </Grid>
          <Grid
            size={{ xs: 6, md: 8, lg: 9 }}
            className={styles.sectionLinkContainer}
          >
            <Link to="/">HOME</Link>
            <Link to="/" onClick={handleNewArrivalClick}>
              NEW ARRIVALS
            </Link>
            <Link to="/" onClick={handleCollectionClick}>
              COLLECTIONS
            </Link>
            <Link to="/" onClick={handleWomenClick}>
              WOMEN
            </Link>
            <Link to="/" onClick={handleMenClick}>
              MEN
            </Link>
            <Link to="/" onClick={handleAccessoriesClick}>
              ACCESSORIES
            </Link>

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
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
