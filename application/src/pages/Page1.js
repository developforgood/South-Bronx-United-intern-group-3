// src/pages/Page1.js
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import logo from '../images/miniLogo.jpg'; // Tell webpack this JS file uses this image
import { blue } from '@mui/material/colors';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Arrow from '../components/Arrow';

const Page1 = () => {
  return (
    <React.Fragment>
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        marginRight: "20px",
        marginTop: "20px"
      }}
    >
      <Avatar sx={{
        height: "30px",
        width: "30px",
        bgcolor: blue[700]
      }}/>
    </Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        paddingLeft: 10,
        paddingRight: 10
      }}
    >
      <img src={logo} alt="Logo" style={{
          height: 150,
          width: 150,
          borderRadius: "50%",
          border: "5px solid #1a76d3",
          marginTop: "5vh",
          marginBottom: "2.5vh"
        }}/>
      <Typography style={{
        fontFamily: "'Work Sans', sans-serif",
        }} variant="h3" component="div">
        Clubhouse
        <SportsSoccerIcon sx={{
          fontSize: 35
        }} /> Cafe <SportsSoccerIcon sx={{
          fontSize: 35
        }} />
      </Typography>

      <Typography style={{
        marginBottom: "50px",
        marginTop: "10px",
        color: "#189ded",
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 16,
        }} variant="h3" component="div">
        A South Bronx United © Cafe
      </Typography>

      <Typography style={{
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: 15
        }} variant="h8" component="div">
        Clubhouse Cafe is a new SBU organization to provide not just coffee, but
        a tight-knit community for people in Southern Bronx to come together and
        enjoy.
      </Typography>

      <Typography style={{
        marginTop: "35px",
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: 12
        }} variant="h8" component="div">
        Check out our soccer calendar, events, stories, and much more around the app!
      </Typography>

      <Arrow />
    </Box>
    <Box
      style={{
        position: 'fixed',
        bottom: 100,
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Typography
        style={{
          marginTop: '12.5vh',
          fontFamily: "'Source Sans 3', sans-serif",
          color: '#189ded'
        }}
        variant="h8"
        component="div"
      >
        Current Hours: <b>10am - 7pm</b>
      </Typography>
    </Box>
    </React.Fragment>
  );
};

export default Page1;
