import React from "react";
import styles from "../Navbar.module.css";

import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";

// new arrival images
import newDenimWear from "../../../assets/images/categoryImages/newDenimWear.png";
import newMenWear from "../../../assets/images/categoryImages/newMenWear.png";
import newShoeWear from "../../../assets/images/categoryImages/newShoeWear.png";
import newWomenWear from "../../../assets/images/categoryImages/newWomenWear.png";
import watchArrivals from "../../../assets/images/categoryImages/watchArrivals.png";
// new arrival images

export default function NewArrivals({ anchorEl, open, handleClose }) {
  return (
    <div>
      {" "}
      <Menu
        elevation={0}
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{
          "& .MuiPaper-root": {
            width: "100%",
            marginTop: "20px",
            boxShadow:
              "0px 4px 20px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.05)",
            borderRadius: "8px",
          },
        }}
      >
        <div className={`${styles.megaMenuSection} ${styles.megaMenuSection1}`}>
          <div className={styles.newArrivalContainer}>
            {/* arrival card */}
            <div className={styles.newArrivalCard}>
              <div className={styles.imgContainer}>
                <img src={newWomenWear} width={200} />
              </div>
              <span>NEW WOMEN'S WEAR</span>
            </div>
            {/* arrival card */}
            {/* arrival card */}
            <div className={styles.newArrivalCard}>
              <div className={styles.imgContainer}>
                <img src={newMenWear} width={200} />
              </div>
              <span>NEW MEN'S WEAR</span>
            </div>
            {/* arrival card */}
            {/* arrival card */}
            <div className={styles.newArrivalCard}>
              <div className={styles.imgContainer}>
                <img src={newDenimWear} width={200} />
              </div>
              <span>NEW DENIM WEAR</span>
            </div>
            {/* arrival card */}
            {/* arrival card */}
            <div className={styles.newArrivalCard}>
              <div className={styles.imgContainer}>
                <img src={watchArrivals} width={200} />
              </div>
              <span>WATCH ARRIVALS</span>
            </div>
            {/* arrival card */}
            {/* arrival card */}
            <div className={styles.newArrivalCard}>
              <div className={styles.imgContainer}>
                <img src={newShoeWear} width={200} />
              </div>
              <span>NEW SHOE ARRIVALS</span>
            </div>
            {/* arrival card */}
          </div>
          <div className={styles.viewMoreSection}>
            <div className={styles.viewMoreBtn}>
              <span>VIEW MORE RESULTS</span>
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
}
