import React from "react";
import styles from "../Navbar.module.css";

import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";

// collections images
import img1 from "../../../assets/images/collectionImages/customerFavorites.png";
import img2 from "../../../assets/images/collectionImages/specialOffers_forwomen.png";
import img3 from "../../../assets/images/collectionImages/women_newArrivals.png";
import img4 from "../../../assets/images/collectionImages/favorites.png";
// collections images

export default function Collections({ anchorEl, open, handleClose }) {
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
        <div className={`${styles.megaMenuSection} ${styles.megaMenuSection2}`}>
          <div className={styles.collectionsContainer}>
            {/* collection card */}
            <div className={styles.collectionCard}>
              <div className={styles.collectionCardImgContainer}>
                <img src={img1} alt="collection card img" width={400} />
              </div>
              <span>SPECIAL OFFERS FOR WOMEN</span>
            </div>
            {/* collection card */}
            {/* collection card */}
            <div className={styles.collectionCard}>
              <div className={styles.collectionCardImgContainer}>
                <img src={img3} alt="collection card img" width={400} />
              </div>
              <span>CUSTOMER FAVORITES</span>
            </div>
            {/* collection card */}
            {/* collection card */}
            <div className={styles.collectionCard}>
              <div className={styles.collectionCardImgContainer}>
                <img src={img2} alt="collection card img" width={400} />
              </div>
              <span>NEW PRODUCTS FOR WOMEN</span>
            </div>
            {/* collection card */}
            {/* collection card */}
            <div className={styles.collectionCard}>
              <div className={styles.collectionCardImgContainer}>
                <img src={img4} alt="collection card img" width={400} />
              </div>
              <span>TRENDING PRODUCTS</span>
            </div>
            {/* collection card */}
          </div>
        </div>
      </Menu>
    </div>
  );
}
