import React from "react";
import styles from "../Navbar.module.css";

import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";

// collections images
import img1 from "../../../assets/images/collectionImages/customerFavorites.png";
import img2 from "../../../assets/images/collectionImages/specialOffers_forwomen.png";
import img3 from "../../../assets/images/collectionImages/women_newArrivals.png";
import img4 from "../../../assets/images/collectionImages/favorites.png";
import { useNavigate } from "react-router-dom";
// collections images

const collectionData = [
  { name: "SPECIAL OFFERS FOR WOMEN", image: img1 },
  { name: "SPECIAL OFFERS FOR WOMEN", image: img2 },
  { name: "SPECIAL OFFERS FOR WOMEN", image: img3 },
  { name: "SPECIAL OFFERS FOR WOMEN", image: img4 },
];

export default function Collections({ anchorEl, open, handleClose }) {
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
        <div className={`${styles.megaMenuSection} ${styles.megaMenuSection2}`}>
          <div className={styles.collectionsContainer}>
            {collectionData.map((item, index) => (
              //  collection card
              <div className={styles.collectionCard} key={index}>
                <div
                  className={styles.collectionCardImgContainer}
                  onClick={() => {
                    handleClose();
                    // localStorage.setItem("category", JSON.stringify(item.name));
                    navigate("/product-catalog", {
                      state: { category: item.name },
                    });
                  }}
                >
                  <img src={item.image} alt="collection card img" width={400} />
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
