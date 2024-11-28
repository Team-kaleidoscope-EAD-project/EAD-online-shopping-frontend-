import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import styles from "./ProductCatalog.module.css";
import Navbar from "../../components/Navbar/Navbar";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Box,
  Breadcrumbs,
  Checkbox,
  Link,
  Stack,
  Typography,
} from "@mui/material";

// accordian
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// accordian

// filter data
import { productCategories } from "../../data/productFilters";
import { productSizes } from "../../data/productFilters";
// filter data

// drawer
import Drawer from "@mui/material/Drawer";
// drawer

// slider
import Slider from "@mui/material/Slider";
// slider

// close img
import closeBtn from "../../assets/images/icons/cross.png";
// close img

import { grey } from "@mui/material/colors";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const MAX = 9000.0;
const MIN = 0.0;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];
// price ranges

export default function ProductCatalog({ category = productCategories[0] }) {
  
  // filters
  const [productCategory, setProductCategory] = useState(productCategories[0]);
  const [size, setSize] = useState(productSizes[0]);
  const [instock_availability, setInstock_Availability] = useState(true);
  const [outofstock_availability, setOutofstock_Availability] = useState(false);
  const [price, setPrice] = useState(0.0);
  // filters

  useEffect(() => {
    setProductCategory(category);
  }, []);

  const handleProductCategoryFilter = (category) => {
    setProductCategory(category);
  };

  const handleProductSizeFilter = (size) => {
    setSize(size);
  };

  const handleInstock_Availability = () => {
    setInstock_Availability(!instock_availability);
    alert("in stock availability: " + instock_availability);
    alert("out of stock availability: " + outofstock_availability);
  };

  const handleOutOfstock_Availability = () => {
    setOutofstock_Availability(!outofstock_availability);
    alert("in stock availability: " + instock_availability);
    alert("out of stock availability: " + outofstock_availability);
  };

  // drawer
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  // drawer

  // price range
  const handleProductPrice = (_, newValue) => {
    setPrice(newValue);
  };

  // price range
  const breadcrumbs = [
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Typography key="3" sx={{ color: "text.primary" }}>
      All Products
    </Typography>,
  ];

  return (
    <div className={styles.ProductCatalogPage}>
      {/* navbar section */}
      {/* <Navbar /> */}
      {/* navbar section */}
      {/* product catalog */}
      <Grid container>
        <Grid p={3} size={{ xs: 12 }} className={styles.breadcrumbs}>
          <Stack spacing={2}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              className={styles.breadcrumbs}
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 10, sm: 6, md: 4, lg: 3 }}
          paddingLeft={3}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          {/* product categories */}
          <Accordion sx={{ boxShadow: "none", border: "none" }} defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ borderBottom: "solid grey 1px" }}
            >
              <span className={styles.accordionText}>Categories</span>
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: "start" }}>
              <div className={styles.productCategories}>
                {productCategories.map((item) => {
                  return (
                    <>
                      <span
                        className={
                          productCategory === item
                            ? `${styles.selectedCategory}`
                            : ""
                        }
                        onClick={() => {
                          handleProductCategoryFilter(item);
                        }}
                      >
                        {productCategory === item ? "• " : ""}
                        {item}
                      </span>
                    </>
                  );
                })}
              </div>
            </AccordionDetails>
          </Accordion>
          {/* product categories */}
          {/* product sizes */}
          <Accordion sx={{ boxShadow: "none", border: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ borderBottom: "solid grey 1px" }}
            >
              <span className={styles.accordionText}>Sizes</span>
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: "start" }}>
              <div className={styles.productSizes}>
                {productSizes.map((item) => {
                  return (
                    <>
                      <div
                        className={
                          size === item
                            ? `${styles.selectedSizeBox}`
                            : `${styles.sizeBox}`
                        }
                        onClick={() => {
                          handleProductSizeFilter(item);
                        }}
                      >
                        <span>{item}</span>
                      </div>
                    </>
                  );
                })}
              </div>
            </AccordionDetails>
          </Accordion>
          {/* product sizes */}
          {/* product availability */}
          <Accordion sx={{ boxShadow: "none", border: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ borderBottom: "solid grey 1px" }}
            >
              <span className={styles.accordionText}>Availability</span>
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: "start" }}>
              <div className={styles.checkBoxContainer}>
                <Checkbox
                  sx={{
                    color: grey[800],
                    "&.Mui-checked": {
                      color: grey[900],
                    },
                  }}
                  defaultChecked
                  name="availability"
                  checked={instock_availability}
                  onClick={handleInstock_Availability}
                />
                <span>In Stock</span>
              </div>
              <div className={styles.checkBoxContainer}>
                <Checkbox
                  sx={{
                    color: grey[800],
                    "&.Mui-checked": {
                      color: grey[900],
                    },
                  }}
                  name="availability"
                  checked={outofstock_availability}
                  onClick={handleOutOfstock_Availability}
                />
                <span>Out Of Stock</span>
              </div>
            </AccordionDetails>
          </Accordion>
          {/* product availability */}
          {/* product price */}
          <Accordion sx={{ boxShadow: "none", border: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ borderBottom: "solid grey 1px" }}
            >
              <span className={styles.accordionText}>Price</span>
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: "start" }}>
              <Slider
                marks={marks}
                step={10}
                value={price}
                valueLabelDisplay="auto"
                min={MIN}
                max={MAX}
                onChange={handleProductPrice}
                color="grey"
                sx={{
                  color: grey[800],
                  "&.Mui-checked": {
                    color: grey[900],
                  },
                }}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <span className={styles.sliderText}>Rs. {MIN}</span>
                <span className={styles.sliderText}>Rs. {MAX}</span>
              </Box>
            </AccordionDetails>
          </Accordion>
          {/* product price */}
        </Grid>
        <Grid
          size={{ xs: 12 }}
          sx={{
            display: { xs: "flex", md: "none" },
            height: "50px",
            paddingLeft: "20px",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "start" },
          }}
          marginTop={-2}
        >
          <button className={styles.filtersButton} onClick={toggleDrawer(true)}>
            Show Filters
          </button>

          {/* drawer */}
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <Grid
              size={{ xs: 12 }}
              paddingLeft={3}
              paddingTop={5}
              paddingRight={5}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <Grid container paddingBottom={4}>
                <Grid
                  size={{ xs: 12 }}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span className={styles.drawerText}>Filter products</span>
                  <div
                    className={styles.drawerCloseBtn}
                    onClick={toggleDrawer(false)}
                  >
                    <img src={closeBtn} alt="close btn" width={20} />
                  </div>
                </Grid>
              </Grid>
              {/* product categories */}
              <Accordion
                sx={{ boxShadow: "none", border: "none" }}
                defaultExpanded
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ borderBottom: "solid grey 1px" }}
                >
                  <span className={styles.accordionText}>Categories</span>
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: "start" }}>
                  <div className={styles.productCategories}>
                    {productCategories.map((item) => {
                      return (
                        <>
                          <span
                            className={
                              productCategory === item
                                ? `${styles.selectedCategory}`
                                : ""
                            }
                            onClick={() => {
                              handleProductCategoryFilter(item);
                            }}
                          >
                            {productCategory === item ? "• " : ""}
                            {item}
                          </span>
                        </>
                      );
                    })}
                  </div>
                </AccordionDetails>
              </Accordion>
              {/* product categories */}
              {/* product sizes */}
              <Accordion sx={{ boxShadow: "none", border: "none" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ borderBottom: "solid grey 1px" }}
                >
                  <span className={styles.accordionText}>Sizes</span>
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: "start" }}>
                  <div className={styles.productSizes}>
                    {productSizes.map((item) => {
                      return (
                        <>
                          <div
                            className={
                              size === item
                                ? `${styles.selectedSizeBox}`
                                : `${styles.sizeBox}`
                            }
                            onClick={() => {
                              handleProductSizeFilter(item);
                            }}
                          >
                            <span>{item}</span>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </AccordionDetails>
              </Accordion>
              {/* product sizes */}
              {/* product availability */}
              <Accordion sx={{ boxShadow: "none", border: "none" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ borderBottom: "solid grey 1px" }}
                >
                  <span className={styles.accordionText}>Availability</span>
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: "start" }}>
                  <div className={styles.checkBoxContainer}>
                    <Checkbox
                      sx={{
                        color: grey[800],
                        "&.Mui-checked": {
                          color: grey[900],
                        },
                      }}
                      defaultChecked
                      name="availability"
                      checked={instock_availability}
                      onClick={handleInstock_Availability}
                    />
                    <span>In Stock</span>
                  </div>
                  <div className={styles.checkBoxContainer}>
                    <Checkbox
                      sx={{
                        color: grey[800],
                        "&.Mui-checked": {
                          color: grey[900],
                        },
                      }}
                      name="availability"
                      checked={outofstock_availability}
                      onClick={handleOutOfstock_Availability}
                    />
                    <span>Out Of Stock</span>
                  </div>
                </AccordionDetails>
              </Accordion>
              {/* product availability */}
              {/* product price */}
              <Accordion sx={{ boxShadow: "none", border: "none" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ borderBottom: "solid grey 1px" }}
                >
                  <span className={styles.accordionText}>Price</span>
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: "start" }}>
                  <Slider
                    marks={marks}
                    step={10}
                    value={price}
                    valueLabelDisplay="auto"
                    min={MIN}
                    max={MAX}
                    onChange={handleProductPrice}
                    color="grey"
                    sx={{
                      color: grey[800],
                      "&.Mui-checked": {
                        color: grey[900],
                      },
                    }}
                  />
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span className={styles.sliderText}>Rs. {MIN}</span>
                    <span className={styles.sliderText}>Rs. {MAX}</span>
                  </Box>
                </AccordionDetails>
              </Accordion>
              {/* product price */}
            </Grid>
          </Drawer>
          {/* drawer */}
        </Grid>
        <Grid
          size={{ xs: 12, md: 8, lg: 9 }}
          paddingLeft={3}
          className={styles.productCatalogContainer}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Grid>
      </Grid>
      {/* product catalog */}
      {/* footer section */}
      <Footer />
      {/* footer section */}
    </div>
  );
}
