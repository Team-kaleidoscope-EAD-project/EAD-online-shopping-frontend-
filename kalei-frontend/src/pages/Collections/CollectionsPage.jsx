import React from "react";
import Grid from "@mui/material/Grid2";
import Footer from "../../components/Footer/Footer";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import image1 from "../../assets/images/collectionImages/collection1.jpg";
import image2 from "../../assets/images/collectionImages/collection2.jpg";
import image3 from "../../assets/images/collectionImages/collection3.jpg";
import image4 from "../../assets/images/collectionImages/collection4.jpg";
import image5 from "../../assets/images/collectionImages/collection5.jpg";
import image6 from "../../assets/images/collectionImages/collection6.jpg";
import image7 from "../../assets/images/collectionImages/collection7.jpg";
import image8 from "../../assets/images/collectionImages/collection8.jpg";
import image9 from "../../assets/images/collectionImages/collection9.jpg";
import image10 from "../../assets/images/collectionImages/collection10.jpg";

import styles from "./CollectionPage.module.css";
import CollectionCard from "../../components/Cards/CollectionCard2";

// navigation
import { useNavigate } from "react-router-dom";
// navigation

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
  {
    key: 5,
    name: "DENIMS",
    image: image5,
  },
  {
    key: 6,
    name: "FOOT WEAR",
    image: image6,
  },
  {
    key: 7,
    name: "SPORTS WEAR",
    image: image7,
  },
  {
    key: 8,
    name: "WATCHES",
    image: image8,
  },
  {
    key: 9,
    name: "HEAD WEAR",
    image: image9,
  },
  {
    key: 10,
    name: "GLASSES",
    image: image10,
  },
];

export default function CollectionsPage() {
  const navigate = useNavigate();
  // price range
  const breadcrumbs = [
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/"
      // onClick={handleClick}
    >
      Home
    </Link>,
    <Typography key="3" sx={{ color: "text.primary" }}>
      All Collections
    </Typography>,
  ];

  return (
    <div>
      <Grid container>
        <Grid size={{ xs: 12 }}>{/* <Navbar /> */}</Grid>
        <Grid size={{ xs: 12 }} sx={{ padding: "2vw" }}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            className={styles.breadcrumbs}
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Grid>
        <Grid
          size={{ xs: 12 }}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(auto-fit, minmax(250px, 1fr))",
              lg: "repeat(auto-fit, minmax(300px, 1fr))",
            },
            rowGap: "5vw",
            columnGap: "5vw",
            justifyItems: "center",
            paddingLeft: "3vw",
            paddingRight: "3vw",
          }}
        >
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
        </Grid>
        <Footer />
      </Grid>
    </div>
  );
}
