// Hirushi
import React from "react";
import CollectionCard from "../../../../components/Cards/CollectionCard";
import image1 from "../../../../assets/images/products/collection1.png";
import image2 from "../../../../assets/images/products/collection2.png";
import image4 from "../../../../assets/images/products/collection4.png";
import image3 from "../../../../assets/images/products/collection3.png";
import styles from "./Collections.module.css";

export default function Collections() {
  const collections = [
    {
      key: 1,
      name: "TIMELESS",
      image: image1,
    },
    {
      key: 2,
      name: "CELINE",
      image: image2,
    },
    {
      key: 3,
      name: "SIERRA",
      image: image3,
    },
    {
      key: 4,
      name: "WORKWEAR",
      image: image4,
    },
  ];

  return (
    <div>
      <h2 className={styles.title}>COLLECTIONS</h2>
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
    </div>
  );
}
