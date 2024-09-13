import React, { useState } from 'react'
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined } from '@mui/icons-material';
import FlexBetween from "components/FlexBetween";
import { useDispatch } from 'react-redux'; 
import {setMode} from "state";
import profileImage from "assets/landx_logo.jpeg";
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from '@mui/material';

// Navigation bar react component
const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();

  return (
    <AppBar
        sx={{
            position: "static",
            background: "none",
            boxShadow: "none",
        }}
    >
        <Toolbar sx={{justifyContent: "space-between"}}>
            {/* Left part of navigation bar including side bar icon, search bar, and magnify search icon*/}
            <FlexBetween>
                <IconButton onClick={() => console.log('open/close sidebar')}>
                    <MenuIcon />

                </IconButton>
                <FlexBetween backgroundColor={theme.palette.background.alt} borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem">
                    <InputBase placeholder="Search..." />
                    <IconButton>
                        <Search />
                    </IconButton>

                </FlexBetween>
            </FlexBetween>
            {/*right side of nav bar including the night mode icon and the settings icon*/}
            <FlexBetween gap="1.5rem">
                <IconButton onClick={() => dispatch(setMode())}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlined sx={{fontSize: "25px"}}/>
                    ) : (
                        <LightModeOutlined sx={{ fontSize: "25px"}} />
                    )}
                </IconButton>
                <IconButton>
                    <SettingsOutlined sx={{fontSize:"25px"}}/>
                </IconButton>
            </FlexBetween>
        </Toolbar>
    </AppBar>
  )
  
}

export default Navbar