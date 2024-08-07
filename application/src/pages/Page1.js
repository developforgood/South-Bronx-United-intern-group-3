// src/pages/Page1.js
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Page1 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography style={{ marginBottom: "50px" }} variant="h3" component="div">
        South Bronx United
      </Typography>

      <Typography style={{ padding: 15 }} variant="h8" component="div">
        South Bronx United provides academic support, college prep, mentoring,
        workforce development, immigration legal services, and more, while using
        soccer as a vehicle for social change.
      </Typography>
    </Box>
  );
};

export default Page1;
