// Hirushi
import React from "react";
import CollectionCard2 from "../../components/Cards/CollectionCard2";
import image1 from "../../../../assets/images/products/collection1.png";
import styles from "./Collections.module.css";

export default function CollectionsPage() {
  const collections = [
    {
      key: 1,
      name: "TIMELESS",
      image: image1,
      noOfItems: 5,
    },
    {
      key: 2,
      name: "TIMELESS",
      image: image1,
      noOfItems: 5,
    },
    {
      key: 3,
      name: "TIMELESS",
      image: image1,
      noOfItems: 5,
    },
    {
      key: 4,
      name: "TIMELESS",
      image: image1,
      noOfItems: 5,
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
            <CollectionCard2
              key={collection.key}
              name={collection.name}
              image={collection.image}
              noOfItems={collection.noOfItems}
            />
          ))
        )}
      </div>
    </div>
  );
}
