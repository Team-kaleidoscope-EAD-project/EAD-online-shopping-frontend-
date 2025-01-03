import React from "react";
import styles from "../Navbar.module.css";

import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";

// women section images
import img1 from "../../../assets/images/womenSectionImages/women_accessory.png";
import img2 from "../../../assets/images/womenSectionImages/women_gym.png";
import img3 from "../../../assets/images/womenSectionImages/women_skirts.png";
import img4 from "../../../assets/images/womenSectionImages/women_street.png";
import { useNavigate } from "react-router-dom";
// women section images

const womensData = [
  { name: "BOTTOMS FOR WOMEN", image: img1 },
  { name: "BOTTOMS FOR WOMEN", image: img2 },
  { name: "BOTTOMS FOR WOMEN", image: img3 },
  { name: "BOTTOMS FOR WOMEN", image: img4 },
];
export default function Womens({ anchorEl, open, handleClose }) {
  const navigate = useNavigate();
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
            {womensData.map((item, index) => (
              <div className={styles.collectionCard} key={index}>
                <div
                  className={styles.collectionCardImgContainer}
                  onClick={() => {
                    // localStorage.setItem("category", JSON.stringify(item.name));
                    handleClose();
                    navigate("/product-catalog", {
                      state: { category: item.name },
                    });
                  }}
                >
                  <img src={item.image} alt="newArrival card img" width={400} />
                </div>
                <span>{item.name.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>
      </Menu>
    </div>
  );
}
