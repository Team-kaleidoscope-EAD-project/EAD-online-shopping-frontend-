import React from "react";
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

// price ranges
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

export default function ProductCatalog() {
  // drawer
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  // drawer

  // price range
  const [val, setVal] = React.useState(MIN);
  const handleChange = (_, newValue) => {
    setVal(newValue);
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
      <Navbar />
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
                <span>All Products</span>
                <span>Foot wear</span>
                <span>Watches</span>
                <span>Denim wear</span>
                <span>Men</span>
                <span>Women</span>
                <span>Pants</span>
                <span>Oversized T-shirts</span>
                <span>Casuals</span>
                <span>Sports wear</span>
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
                <div className={`${styles.selectedSizeBox}`}>
                  <span>All</span>
                </div>
                <div className={styles.sizeBox}>
                  <span>XXS</span>
                </div>
                <div className={styles.sizeBox}>
                  <span>XS</span>
                </div>
                <div className={styles.sizeBox}>
                  <span>S</span>
                </div>
                <div className={styles.sizeBox}>
                  <span>M</span>
                </div>
                <div className={styles.sizeBox}>
                  <span>L</span>
                </div>
                <div className={styles.sizeBox}>
                  <span>XL</span>
                </div>
                <div className={styles.sizeBox}>
                  <span>XXL</span>
                </div>
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
                value={val}
                valueLabelDisplay="auto"
                min={MIN}
                max={MAX}
                onChange={handleChange}
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
                    <span>All Products</span>
                    <span>Foot wear</span>
                    <span>Watches</span>
                    <span>Denim wear</span>
                    <span>Men</span>
                    <span>Women</span>
                    <span>Pants</span>
                    <span>Oversized T-shirts</span>
                    <span>Casuals</span>
                    <span>Sports wear</span>
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
                    <div className={`${styles.selectedSizeBox}`}>
                      <span>All</span>
                    </div>
                    <div className={styles.sizeBox}>
                      <span>XXS</span>
                    </div>
                    <div className={styles.sizeBox}>
                      <span>XS</span>
                    </div>
                    <div className={styles.sizeBox}>
                      <span>S</span>
                    </div>
                    <div className={styles.sizeBox}>
                      <span>M</span>
                    </div>
                    <div className={styles.sizeBox}>
                      <span>L</span>
                    </div>
                    <div className={styles.sizeBox}>
                      <span>XL</span>
                    </div>
                    <div className={styles.sizeBox}>
                      <span>XXL</span>
                    </div>
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
                    value={val}
                    valueLabelDisplay="auto"
                    min={MIN}
                    max={MAX}
                    onChange={handleChange}
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
        </Grid>
      </Grid>
      {/* product catalog */}
      {/* footer section */}

      {/* footer section */}
    </div>
  );
}
