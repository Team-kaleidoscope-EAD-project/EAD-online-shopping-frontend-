import React from "react";
import Grid from "@mui/material/Grid2";
import styles from "./Navbar.module.css";

import logo from "../../assets/images/icons/kalei_logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
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
            <Link to="/">NEW ARRIVALS</Link>
            <Link to="/">COLLECTIONS</Link>
            <Link to="/">WOMEN</Link>
            <Link to="/">MEN</Link>
            <Link to="/">ACCESSORIES</Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
