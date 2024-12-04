import React from "react";
import styles from "../Navbar.module.css";

import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";

// men section images
import img1 from "../../../assets/images/menSectionImages/men_gym.png";
import img2 from "../../../assets/images/menSectionImages/men_model.png";
import img3 from "../../../assets/images/menSectionImages/men_street.png";
import img4 from "../../../assets/images/menSectionImages/men_watches.png";
import { useNavigate } from "react-router-dom";
// men section images

const mensData = [
  { name: "GYMWARE FOR MEN", image: img1 },
  { name: "GYMWARE FOR MEN", image: img2 },
  { name: "GYMWARE FOR MEN", image: img3 },
  { name: "GYMWARE FOR MEN", image: img4 },
];

export default function Mens({ anchorEl, open, handleClose }) {
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
        <div className={`${styles.megaMenuSection} ${styles.megaMenuSection4}`}>
          <div className={styles.collectionsContainer}>
            {mensData.map((item, index) => (
              //  mens card
              <div className={styles.collectionCard}>
                <div
                  className={styles.collectionCardImgContainer}
                  onClick={() => {
                    handleClose();
                    localStorage.setItem("category", JSON.stringify(item.name));
                    navigate("/product-catalog", {
                      state: { category: item.name },
                    });
                  }}
                >
                  <img src={item.image} alt="mens card img" width={400} />
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
