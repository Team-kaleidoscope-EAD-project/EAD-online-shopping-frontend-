import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";

import styles from "./Footer.module.css";

// icons
import facebookIcon from "../../assets/images/icons/social media icons/facebook.svg";
import instagramIcon from "../../assets/images/icons/social media icons/instagram.svg";
import pinterestIcon from "../../assets/images/icons/social media icons/printerest.svg";
import tiktokIcon from "../../assets/images/icons/social media icons/tiktok.svg";
import emailIcon from "../../assets/images/icons/social media icons/email.svg";
import visaIcon from "../../assets/images/icons/payment icons/visa.png";
import masterIcon from "../../assets/images/icons/payment icons/master card.png";

export default function Footer() {
  const [shopOpen, setShopOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const toggleShopDropdown = () => setShopOpen(!shopOpen);
  const toggleHelpDropdown = () => setHelpOpen(!helpOpen);
  const toggleTermsDropdown = () => setTermsOpen(!termsOpen);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleEmailValidation = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
      setSnackbarMessage("Email submission failed: Invalid email.");
      setSnackbarOpen(true);
    } else {
      setEmailError("");
      setSnackbarMessage("Email submitted successfully!");
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div
      style={{
        bottom: "0px",
        position: "fixed",
        bottom: "0px",
        left: "0px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#F9E4DA",
          padding: "20px",
          borderTop: "2px solid #E8C0B2",
        }}
      >
        <Grid container spacing={2} justifyContent="space-between">
          {/* SHOP Section */}
          <Grid item xs={12} sm={4} sx={{ order: { xs: 1, sm: 1 } }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              textAlign="left"
            >
              <Box display="flex" alignItems="center" width="100%">
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#7C4100", flexGrow: 1 }}
                >
                  <span className={styles.footerText1}>SHOP</span>
                </Typography>
                <IconButton
                  onClick={toggleShopDropdown}
                  sx={{
                    display: { xs: "block", sm: "none" },
                    color: "#D27C2C",
                  }}
                >
                  {shopOpen ? "-" : "+"}
                </IconButton>
              </Box>
              <Divider
                sx={{
                  display: { xs: "block", sm: "none" },
                  width: "100%",
                  marginY: 1,
                  borderColor: "#D27C2C",
                }}
              />
              <Box
                sx={{
                  display: { xs: shopOpen ? "block" : "none", sm: "block" },
                }}
              >
                <Box sx={{ marginBottom: "10px", marginTop: "20px" }}>
                  <Link
                    href="/home"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { textDecoration: "none" },
                    }}
                  >
                    Home
                  </Link>
                </Box>
                <Box sx={{ marginBottom: "10px" }}>
                  <Link
                    href="/new-arrivals"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { textDecoration: "none" },
                    }}
                  >
                    New Arrivals
                  </Link>
                </Box>
                <Box sx={{ marginBottom: "10px" }}>
                  <Link
                    href="/best-sellers"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { textDecoration: "none" },
                    }}
                  >
                    Best Sellers
                  </Link>
                </Box>
                <Box sx={{ marginBottom: "10px" }}>
                  <Link
                    href="/mens-collection"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { textDecoration: "none" },
                    }}
                  >
                    Men's Collection
                  </Link>
                </Box>
                <Box sx={{ marginBottom: "10px" }}>
                  <Link
                    href="/womens-collection"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { textDecoration: "none" },
                    }}
                  >
                    Women's Collection
                  </Link>
                </Box>
                <Box sx={{ marginBottom: "10px" }}>
                  <Link
                    href="/accessories"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { textDecoration: "none" },
                    }}
                  >
                    Accessories
                  </Link>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "20px",
                  display: { xs: "none", sm: "flex" },
                  gap: "10px",
                }}
              >
                <img
                  src={visaIcon}
                  alt="Visa"
                  style={{ width: "40px", height: "25px" }}
                />
                <img
                  src={masterIcon}
                  alt="MasterCard"
                  style={{ width: "40px", height: "25px" }}
                />
              </Box>
            </Box>
          </Grid>

          {/* HELP & INFO Section */}
          <Grid item xs={12} sm={4} sx={{ order: { xs: 2, sm: 2 } }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              textAlign="left"
            >
              <Box display="flex" alignItems="center" width="100%">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#7C4100",
                    flexGrow: 1,
                  }}
                >
                  <span className={styles.footerText1}>HELP & INFO</span>
                </Typography>
                <IconButton
                  onClick={toggleHelpDropdown}
                  sx={{
                    display: { xs: "block", sm: "none" },
                    color: "#D27C2C",
                  }}
                >
                  {helpOpen ? "-" : "+"}
                </IconButton>
              </Box>
              <Divider
                sx={{
                  display: { xs: "block", sm: "none" },
                  width: "100%",
                  marginY: 1,
                  borderColor: "#D27C2C",
                }}
              />
              <Box
                sx={{
                  display: { xs: helpOpen ? "block" : "none", sm: "block" },
                }}
              >
                <Box sx={{ marginBottom: "10px", marginTop: "20px" }}>
                  <Link
                    href="/about-us"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { textDecoration: "none" },
                    }}
                  >
                    About Us
                  </Link>
                </Box>
                <Box sx={{ marginBottom: "10px" }}>
                  <Link
                    href="/contact-us"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { textDecoration: "none" },
                    }}
                  >
                    Contact Us
                  </Link>
                </Box>
                <Box sx={{ marginBottom: "10px" }}>
                  <Link
                    href="/faq"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { textDecoration: "none" },
                    }}
                  >
                    FAQ
                  </Link>
                </Box>
                <Box sx={{ marginBottom: "10px" }}>
                  <Link
                    href="/size-guide"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { textDecoration: "none" },
                    }}
                  >
                    Size Guide
                  </Link>
                </Box>
                <Box sx={{ marginBottom: "10px" }}>
                  <Link
                    href="/shipping-info"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { textDecoration: "none" },
                    }}
                  >
                    Shipping Info
                  </Link>
                </Box>
                <Box sx={{ marginBottom: "10px" }}>
                  <Link
                    href="/returns"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { textDecoration: "none" },
                    }}
                  >
                    Returns
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* TERMS OF USE Section for mobile view */}
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: { xs: "block", sm: "none" },
              order: { xs: 3, sm: 3 },
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              textAlign="left"
            >
              <Box display="flex" alignItems="center" width="100%">
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#7C4100", flexGrow: 1 }}
                >
                  TERMS OF USE
                </Typography>
                <IconButton
                  onClick={toggleTermsDropdown}
                  sx={{
                    display: { xs: "block", sm: "none" },
                    color: "#D27C2C",
                  }}
                >
                  {termsOpen ? "-" : "+"}
                </IconButton>
              </Box>
              <Divider
                sx={{
                  display: { xs: "block", sm: "none" },
                  width: "100%",
                  marginY: 1,
                  borderColor: "#D27C2C",
                }}
              />
              <Box
                sx={{
                  display: { xs: termsOpen ? "block" : "none", sm: "block" },
                }}
              >
                <Box sx={{ marginBottom: "10px" }}>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { textDecoration: "none" },
                    }}
                  >
                    Refund Policy
                  </Link>
                </Box>
                <Box sx={{ marginBottom: "10px" }}>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { textDecoration: "none" },
                    }}
                  >
                    Shipping Policy
                  </Link>
                </Box>
                <Box sx={{ marginBottom: "10px" }}>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { textDecoration: "none" },
                    }}
                  >
                    Terms of Service
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* SIGN UP Section */}
          <Grid item xs={12} sm={4} sx={{ order: { xs: 4, sm: 4 } }}>
            <Box textAlign="left">
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#7C4100" }}
              >
                <span className={styles.footerText1}>SIGN UP</span>
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginTop: "10px", whiteSpace: "pre-line" }}
              >
                <span className={styles.footerText1}>
                  Sign up for 10% off your first order{"\n"}
                  and keep up to date with{"\n"}
                  all things Kalei.
                </span>
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                marginTop="25px"
              >
                <Box display="flex" alignItems="center" width="100%">
                  <TextField
                    placeholder="your@email.com"
                    variant="outlined"
                    size="small"
                    value={email}
                    onChange={handleEmailChange}
                    error={emailError}
                    sx={{
                      flexGrow: 1,
                      backgroundColor: "#fff",
                      borderRadius: "35px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "35px",
                        "& fieldset": {
                          borderColor: "#BE8748",
                        },
                        "&:hover fieldset": {
                          borderColor: "#BE8748",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#BE8748",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "#BE8748",
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "#BE8748",
                      },
                      marginRight: "10px",
                    }}
                  />
                  <Button
                    onClick={handleEmailValidation}
                    variant="contained"
                    sx={{
                      backgroundColor: "#BE8748",
                      borderRadius: "35px",
                      "&:hover": { backgroundColor: "#8B5F44" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    SEND
                  </Button>
                </Box>
                <Box
                  sx={{
                    marginTop: { xs: "30px", sm: "20px" },
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-circle"
                    sx={{
                      display: { xs: "flex", sm: "flex" },
                      backgroundColor: { xs: "white", sm: "transparent" },
                      borderRadius: "50%",
                      padding: { xs: "10px", sm: "0" },
                    }}
                  >
                    <img
                      src={facebookIcon}
                      alt="Facebook"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-circle"
                    sx={{
                      display: { xs: "flex", sm: "flex" },
                      backgroundColor: { xs: "white", sm: "transparent" },
                      borderRadius: "50%",
                      padding: { xs: "10px", sm: "0" },
                    }}
                  >
                    <img
                      src={instagramIcon}
                      alt="Instagram"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </Link>
                  <Link
                    href="https://www.pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-circle"
                    sx={{
                      display: { xs: "flex", sm: "flex" },
                      backgroundColor: { xs: "white", sm: "transparent" },
                      borderRadius: "50%",
                      padding: { xs: "10px", sm: "0" },
                    }}
                  >
                    <img
                      src={pinterestIcon}
                      alt="Pinterest"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </Link>
                  <Link
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-circle"
                    sx={{
                      display: { xs: "flex", sm: "flex" },
                      backgroundColor: { xs: "white", sm: "transparent" },
                      borderRadius: "50%",
                      padding: { xs: "10px", sm: "0" },
                    }}
                  >
                    <img
                      src={tiktokIcon}
                      alt="TikTok"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </Link>
                  <Link
                    href="mailto:someone@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-circle"
                    sx={{
                      display: { xs: "flex", sm: "flex" },
                      backgroundColor: { xs: "white", sm: "transparent" },
                      borderRadius: "50%",
                      padding: { xs: "10px", sm: "0" },
                    }}
                  >
                    <img
                      src={emailIcon}
                      alt="Email"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </Link>
                </Box>
                <Box
                  sx={{
                    marginTop: { xs: "10px", sm: "30px" },
                    display: { xs: "none", sm: "flex" },
                    gap: "20px",
                    justifyContent: "center",
                  }}
                >
                  <Link
                    href="#"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Refund Policy
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Shipping Policy
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Terms of Service
                  </Link>
                </Box>
                <Box
                  sx={{
                    marginTop: { xs: "30px", sm: "10px" },
                    display: { xs: "flex", sm: "none" },
                    gap: "10px",
                  }}
                >
                  <img
                    src={visaIcon}
                    alt="Visa"
                    style={{ width: "40px", height: "25px" }}
                  />
                  <img
                    src={masterIcon}
                    alt="MasterCard"
                    style={{ width: "40px", height: "25px" }}
                  />
                </Box>
              </Box>
              {emailError && (
                <Typography variant="caption" sx={{ color: "red" }}>
                  {emailError}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>

        {/* Snackbar for email notifications */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={emailError ? "error" : "success"}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>

        <Divider sx={{ marginY: 3, borderColor: "#E8C0B2" }} />
        <Typography
          variant="body2"
          color="#7C4100"
          align="center"
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          © 2024 | Kalei | All rights reserved.
        </Typography>
      </Box>
    </div>
  );
}
