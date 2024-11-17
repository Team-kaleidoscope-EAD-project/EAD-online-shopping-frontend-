import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductOverview from "./Sections/ProductOverview/ProductOverview";

function SingleProductPage() {
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "25px",
        }}
      >
        <ProductOverview />
      </div>
    </>
  );
}

export default SingleProductPage;
