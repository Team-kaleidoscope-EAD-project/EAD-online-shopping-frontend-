// Dinul
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import styles from "./Navbar.module.css";

import logo from "../../assets/images/icons/kalei_logo.png";
import { Link, useNavigate } from "react-router-dom";
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
import { Box, Tooltip, Button } from "@mui/material";
// images

// search modal
import Modal from "@mui/material/Modal";
// search modal

import Zoom from "@mui/material/Zoom";

import { auth } from "../../auth/auth";
import keycloak from "../../auth/keycloak";
import ProfileMenu from "./sections/ProfileMenu";

// dummy product list
import { fakeProductNames } from "../../data/productFilters";

export default function Navbar() {
  // search modal controls
  const [keyword, setKeyword] = React.useState("");
  const [openSearchModal, setSearchModal] = React.useState(false);
  const handleSearchModalOpen = () => setSearchModal(true);
  const handleSearchModalClose = () => setSearchModal(false);
  // search modal controls

  const handleSearchBar = (event) => {
    setKeyword(event.target.value);
  };

  const navigate = useNavigate();
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

  const handleViewProduct = (singleProduct) => {
    // Pass the product ID or any relevant data via the route
    navigate(`/single-product-view`, {
      state: { id: singleProduct.id, singleProduct },
    });
  };

  const handleNavigation = (path) => {
    navigate(path);
    setState({ ...state, ["bottom"]: false });
  };

  // drawer settings
  const [state, setState] = React.useState({
    bottom: false,
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
    <>
      {/* search modal */}
      <Modal
        open={openSearchModal}
        onClose={handleSearchModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
        }}
      >
        <Box className={styles.searchBoxContainer}>
          <Grid container>
            {/* search bar */}
            <Grid size={{ xs: "12" }} className={styles.searchBar}>
              <input placeholder="Search..." onChange={handleSearchBar} />
              <div
                style={{
                  width: "5%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={searchIcon}
                  alt="search icon"
                  width={18}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </Grid>
            {/* search bar */}
            {/* Searched products */}
            <Grid size={{ xs: "12" }} className={styles.searchedProducts}>
              {fakeProductNames.map((item, index) => {
                const match = item.slice(0, keyword.length);
                const remaining = item.slice(keyword.length);

                return (
                  <div
                    key={index}
                    className={styles.suggestion}
                    onClick={() => {
                      handleViewProduct(item);
                    }}
                  >
                    <span style={{ color: "#be8748", fontWeight: "bold" }}>
                      {match}
                    </span>
                    <span>{remaining}</span>
                  </div>
                );
              })}
            </Grid>
            {/* Searched products */}
          </Grid>
        </Box>
      </Modal>
      {/* search modal */}

      <div className={styles.navbarContainer}>
        <Grid container spacing={2}>
          {/* large and extra large devices */}
          <Grid
            container
            size={{ lg: 12 }}
            sx={{ display: { xs: "none", lg: "flex" } }}
          >
            <Grid
              size={{ xs: 6, md: 1, lg: 1 }}
              className={styles.logoContainer}
            >
              <img
                src={logo}
                width={60}
                alt="kalei_logo"
                className={styles.logo}
                onClick={() => {
                  navigate(`/`);
                }}
              />
            </Grid>
            <Grid
              size={{ xs: 6, md: 7, lg: 8 }}
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
              <div
                className={styles.searchBarContainer}
                onClick={handleSearchModalOpen}
              >
                <img src={searchIcon} alt="search icon" width={15} />
                <span>SEARCH</span>
              </div>
              <>
                <Tooltip
                  title="Cart"
                  arrow
                  TransitionComponent={Zoom}
                  onClick={() => navigate("/add-to-cart")}
                >
                  <img
                    src={cartIcon}
                    alt="search icon"
                    width={20}
                    style={{ cursor: "pointer" }}
                  />
                </Tooltip>
                <Tooltip title="Profile" arrow TransitionComponent={Zoom}>
                  {authenticated ? (
                    <ProfileMenu profileImg={profileImg} />
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => auth()}
                      sx={{
                        backgroundColor: "#A6742B",
                      }}
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
                onClick={handleSearchModalOpen}
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
              height: "65vh",
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
                <h4
                  onClick={() => {
                    toggleDrawer("bottom", false);
                    handleNavigation("/");
                  }}
                >
                  HOME
                </h4>
                <h4
                  onClick={() => {
                    toggleDrawer("bottom", false);
                    handleNavigation("/collections");
                  }}
                >
                  COLLECTIONS
                </h4>
                <h4
                  onClick={() => {
                    setState({ ...state, ["bottom"]: false });
                    navigate("/product-catalog", {
                      state: { category: "BOTTOMS FOR WOMEN" },
                    });
                  }}
                >
                  WOMEN
                </h4>
                <h4
                  onClick={() => {
                    setState({ ...state, ["bottom"]: false });
                    navigate("/product-catalog", {
                      state: { category: "GYMWARE FOR MEN" },
                    });
                  }}
                >
                  MEN
                </h4>
                <h4
                  onClick={() => {
                    setState({ ...state, ["bottom"]: false });
                    navigate("/product-catalog", {
                      state: { category: "MEN'S WATCHES" },
                    });
                  }}
                >
                  ACCESSORIES
                </h4>
              </Grid>
              {/* navbar options */}
            </Grid>
          </div>
        </Drawer>
      </div>
    </>
  );
}
