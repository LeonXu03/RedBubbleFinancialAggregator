import React, {useState} from 'react'
import { Box, useMediaQuery} from "@mui/material";
import { Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useGetUserQuery } from 'state/api';

// Main layout of page, consists of Navbar and other React components
const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);
  console.log("userId:", userId);
  console.log("data:", data);
  console.log("process", process.env);
  console.log("process.URL", process.env.REACT_APP_BASE_URL);

  return (
    <Box display={isNonMobile ? "flex": "block"} width="100%" height="100%">
      <Sidebar user={data || {}} isNonMobile={isNonMobile} drawerWidth="250px" isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} /> 
      <Box flexGrow={1}>
        <Navbar user={data || {}} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
        {/* // Outlet will render the Dashboard component as it is the child route element for "/dashboard" */}
        <Outlet /> 
      </Box>
    </Box>
  );
}

export default Layout