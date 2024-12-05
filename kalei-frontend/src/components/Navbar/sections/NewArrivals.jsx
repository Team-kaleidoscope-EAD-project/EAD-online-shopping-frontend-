import React, { useEffect, useState } from "react";
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
import { newArrivals } from "../../../services/products/newArrivals";
import { Height } from "@mui/icons-material";
// new arrival images

const newArrivalData = [
  { name: "GYMWARE FOR MEN", image: img1 },
  { name: "GYMWARE FOR MEN", image: img2 },
  { name: "GYMWARE FOR MEN", image: img3 },
  { name: "GYMWARE FOR MEN", image: img4 },
];

export default function NewArrivals({ anchorEl, open, handleClose }) {
  const navigate = useNavigate();
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      const data = await newArrivals();
      setNewProducts(data);
    };

    fetchNewArrivals();
  }, []);

  const handleViewProduct = (item) => {
    handleClose();
    localStorage.setItem("singleProduct", JSON.stringify(item));
    navigate(`/single-product-view`, {
      state: { id: item.id, item },
    });
  };

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
            {newProducts.slice(0, 4).map((item, index) => (
              <div className={styles.collectionCard}>
                <div
                  className={styles.collectionCardImgContainer}
                  onClick={() => {
                    handleViewProduct(item);
                  }}
                >
                  <img
                    src={item.variants[0].imageUrl}
                    alt="newArrival card img"
                    style={{
                      width: "100%",
                      objectFit: "fill",
                    }}
                  />
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
