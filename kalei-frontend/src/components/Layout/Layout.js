// components/Layout/Layout.js
import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
);

export default Layout;
