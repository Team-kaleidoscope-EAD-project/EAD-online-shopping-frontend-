import React from "react";
import styles from "../Navbar.module.css";

import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";

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
              "0px 4px 20px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.05)", // Custom shadow
            borderRadius: "8px",
          },
        }}
      >
        <div
          className={
            (`${styles.megaMenuSection} ${styles.megaMenuSection3}`)
          }
        ></div>
      </Menu>
    </div>
  );
}
