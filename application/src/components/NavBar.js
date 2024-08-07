// src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import HouseIcon from "@mui/icons-material/House";
import CalendarIcon from "@mui/icons-material/CalendarToday";
import ToolsIcon from "@mui/icons-material/Construction";
import SoccerIcon from "@mui/icons-material/SportsSoccer";
import DonateIcon from "@mui/icons-material/CardGiftcard";

const NavBar = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        background: "#eee",
        padding: "10px 0",
      }}
    >
      <Button
        component={Link}
        to="/page1"
        variant="contained"
        sx={{ minWidth: "50px", minHeight: "50px", borderRadius: "10px" }}
      >
        <HouseIcon />
      </Button>
      <Button
        component={Link}
        to="/page2"
        variant="contained"
        sx={{ minWidth: "50px", minHeight: "50px", borderRadius: "10px" }}
      >
        <CalendarIcon />
      </Button>
      <Button
        component={Link}
        to="/page3"
        variant="contained"
        sx={{ minWidth: "50px", minHeight: "50px", borderRadius: "10px" }}
      >
        <ToolsIcon />
      </Button>
      <Button
        component={Link}
        to="/page4"
        variant="contained"
        sx={{ minWidth: "50px", minHeight: "50px", borderRadius: "10px" }}
      >
        <SoccerIcon />
      </Button>
      <Button
        component={Link}
        to="/page5"
        variant="contained"
        sx={{ minWidth: "50px", minHeight: "50px", borderRadius: "10px" }}
      >
        <DonateIcon />
      </Button>
    </Box>
  );
};

export default NavBar;
