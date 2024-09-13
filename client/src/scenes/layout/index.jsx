import React, {useState} from 'react'
import { Box, useMediaQuery} from "@mui/material";
import { Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import Navbar from "components/Navbar";
import Dashboard from "scenes/dashboard";

// Main layout of page, consists of Navbar and other React components
const Layout = () => {
  return (
    <Box width="100%" height="100%">
      <Box>
        <Navbar />
        {/* // Outlet will render the Dashboard component as it is the child route element for "/dashboard" */}
        <Outlet /> 
      </Box>
    </Box>
  );
}

export default Layout