import React from "react";
import styles from "../Navbar.module.css";

import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";

// new arrival images
import img1 from "../../../assets/images/categoryImages/newDenimWear.png";
import img2 from "../../../assets/images/categoryImages/newMenWear.png";
import img3 from "../../../assets/images/categoryImages/newShoeWear.png";
import img4 from "../../../assets/images/categoryImages/newWomenWear.png";
import img5 from "../../../assets/images/categoryImages/watchArrivals.png";
import { useNavigate } from "react-router-dom";
// new arrival images

const newArrivalData = [
  { name: "GYMWARE FOR MEN", image: img1 },
  { name: "GYMWARE FOR MEN", image: img2 },
  { name: "GYMWARE FOR MEN", image: img3 },
  { name: "GYMWARE FOR MEN", image: img4 },
];

export default function NewArrivals({ anchorEl, open, handleClose }) {
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
        <div className={`${styles.megaMenuSection} ${styles.megaMenuSection1}`}>
          <div className={styles.newArrivalContainer}>
            {newArrivalData.map((item, index) => (
              <div className={styles.collectionCard}>
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
                  <img src={item.image} alt="newArrival card img" width={400} />
                </div>
                <span>{item.name.toUpperCase()}</span>
              </div>
            ))}
          </div>
          {/* <div className={styles.viewMoreSection}>
            <div className={styles.viewMoreBtn}>
              <span>VIEW MORE RESULTS</span>
            </div>
          </div> */}
        </div>
      </Menu>
    </div>
  );
}
