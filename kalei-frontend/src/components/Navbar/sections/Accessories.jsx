import React from "react";
import styles from "../Navbar.module.css";

import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";

export default function Accessories({ anchorEl, open, handleClose }) {
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
        <div className={`${styles.megaMenuSection} ${styles.megaMenuSection5}`}>
          {/* accessory section - 1 */}
          <div className={styles.accessorySection}>
            <div className={styles.accessoryHeader}>
              <span>WATCHES</span>
            </div>
            <div className={styles.accessoryContent}>
              <h4>MEN'S WATCHES</h4>
              <h4>WOMEN'S WATCHES</h4>
              <h4>SMART WATCHES</h4>
              <h4>QUARTZ WATCHES</h4>
              <h4>MECHANICAL WATCHES</h4>
              <h4>SPORTS WATCHES</h4>
              <h4>CASUAL WATCHES</h4>
            </div>
          </div>
          {/* accessory section - 1 */}
          {/* accessory section - 2 */}
          <div className={styles.accessorySection}>
            <div className={styles.accessoryHeader}>
              <span>HEAD WEAR</span>
            </div>
            <div className={styles.accessoryContent}>
              <h4>CAPS</h4>
              <h4>HATS</h4>
              <h4>SPORTS HEAD WEAR</h4>
            </div>
          </div>
          {/* accessory section - 2 */}
          {/* accessory section - 3 */}
          <div className={styles.accessorySection}>
            <div className={styles.accessoryHeader}>
              <span>EYE WEAR</span>
            </div>
            <div className={styles.accessoryContent}>
              <h4>SUN GLASSES</h4>
              <h4>BLUE LIGHT GLASSES</h4>
              <h4>OVERSIZED GLASSES</h4>
              <h4>BROWNLINE GLASSES</h4>
            </div>
          </div>
          {/* accessory section - 3 */}
          {/* accessory section - 4 */}
          <div className={styles.accessorySection}>
            <div className={styles.accessoryHeader}>
              <span>SHOE WEAR</span>
            </div>
            <div className={styles.accessoryContent}>
              <h4>MEN'S SHOES</h4>
              <h4>WOMEN'S SHOES</h4>
              <h4>RUNNING SHOES</h4>
              <h4>BOOTS</h4>
            </div>
          </div>
          {/* accessory section - 4 */}
        </div>
      </Menu>
    </div>
  );
}
