// Hirushi
import React from "react";
import CollectionCard from "../../../../components/Cards/CollectionCard2";
import image1 from "../../../../assets/images/collectionImages/collection1.jpg";
import image2 from "../../../../assets/images/collectionImages/collection2.jpg";
import image3 from "../../../../assets/images/collectionImages/collection3.jpg";
import image4 from "../../../../assets/images/collectionImages/collection4.jpg";
import styles from "./Collections.module.css";
import Grid from "@mui/material/Grid2";
import SeeMoreButton from "../../../../components/Buttons/seeMore/SeeMoreButton";

// navigation
import { useNavigate } from "react-router-dom";
// navigation

export default function Collections() {
  const navigate = useNavigate();

  const handleAllCollectionsPageNavigation = () => {
    // Pass the product ID or any relevant data via the route
    navigate(`/collections`);
  };

  const collections = [
    {
      key: 1,
      name: "OVERSIZED",
      image: image1,
    },
    {
      key: 2,
      name: "JACKETS",
      image: image2,
    },
    {
      key: 3,
      name: "MEN'S WEAR",
      image: image3,
    },
    {
      key: 4,
      name: "WOMEN'S WEAR",
      image: image4,
    },
  ];

  return (
    <div>
      <Grid container>
        <Grid
          size={{ xs: 12 }}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "start" },
            alignItems: "center",
          }}
        >
          <h2 className={styles.title}>COLLECTIONS</h2>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <div className={styles.container}>
            {collections.length === 0 ? (
              <div>No collections found.</div>
            ) : (
              collections.map((collection) => (
                <CollectionCard
                  key={collection.key}
                  name={collection.name}
                  image={collection.image}
                />
              ))
            )}
          </div>
        </Grid>
        <Grid
          size={{ xs: 12 }}
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            paddingLeft: "2vw",
            paddingRight: "2vw",
            marginTop: "2vh",
          }}
        >
          <SeeMoreButton
            navigatingFunction={handleAllCollectionsPageNavigation}
          />
        </Grid>
      </Grid>
    </div>
  );
}
