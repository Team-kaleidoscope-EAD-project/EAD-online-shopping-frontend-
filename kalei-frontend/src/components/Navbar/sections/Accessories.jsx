import React from "react";
import styles from "../Navbar.module.css";

import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";

import { useNavigate } from "react-router-dom";

const accessories = [
  {
    watches: [
      "MEN'S WATCHES",
      "MEN'S WATCHES",
      "MEN'S WATCHES",
      "MEN'S WATCHES",
    ],
  },

  { headWare: ["CAPS", "CAPS", "CAPS"] },

  { eyeWare: ["SUN GLASSES", "SUN GLASSES", "SUN GLASSES"] },

  { shoeWare: ["MEN'S SHOES", "MEN'S SHOES", "MEN'S SHOES"] },
];

export default function Accessories({ anchorEl, open, handleClose }) {
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
        <div className={`${styles.megaMenuSection} ${styles.megaMenuSection5}`}>
          {/* accessory section - 1 */}

          {accessories.map((item, index) => (
            <div className={styles.accessorySection}>
              <div className={styles.accessoryHeader}>
                <span key={index}>{Object.keys(item)[0]}</span>
              </div>

              <div className={styles.accessoryContent}>
                {Object.values(item)[0].map((name, index) => (
                  <h4
                    onClick={() => {
                      handleClose();
                      // localStorage.setItem("category", JSON.stringify(name));
                      navigate("/product-catalog", {
                        state: { category: name },
                      });
                    }}
                    key={index}
                  >
                    {name}
                  </h4>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Menu>
    </div>
  );
}
