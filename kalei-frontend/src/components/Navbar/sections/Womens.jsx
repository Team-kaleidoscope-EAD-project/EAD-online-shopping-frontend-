import React from "react";
import styles from "../Navbar.module.css";

import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";

// women section images
import img1 from "../../../assets/images/womenSectionImages/women_accessory.png";
import img2 from "../../../assets/images/womenSectionImages/women_gym.png";
import img3 from "../../../assets/images/womenSectionImages/women_skirts.png";
import img4 from "../../../assets/images/womenSectionImages/women_street.png";
// women section images

export default function Womens({ anchorEl, open, handleClose }) {
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
        <div className={`${styles.megaMenuSection} ${styles.megaMenuSection3}`}>
          <div className={styles.collectionsContainer}>
            {/* womens card */}
            <div className={styles.collectionCard}>
              <div className={styles.collectionCardImgContainer}>
                <img src={img1} alt="collection card image" width={400} />
              </div>
              <span>ACCESSORIES FOR WOMEN</span>
            </div>
            {/* womens card */}
            {/* womens card */}
            <div className={styles.collectionCard}>
              <div className={styles.collectionCardImgContainer}>
                <img src={img3} alt="collection card image" width={400} />
              </div>
              <span>BOTTOMS FOR WOMEN</span>
            </div>
            {/* womens card */}
            {/* womens card */}
            <div className={styles.collectionCard}>
              <div className={styles.collectionCardImgContainer}>
                <img src={img2} alt="collection card image" width={400} />
              </div>
              <span>GYMWARE FOR WOMEN</span>
            </div>
            {/* womens card */}
            {/* womens card */}
            <div className={styles.collectionCard}>
              <div className={styles.collectionCardImgContainer}>
                <img src={img4} alt="collection card image" width={400} />
              </div>
              <span>STREETWARE FOR WOMEN</span>
            </div>
            {/* womens card */}
          </div>
        </div>
      </Menu>
    </div>
  );
}
