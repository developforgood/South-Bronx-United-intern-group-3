import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const Page3 = () => {
  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Volunteering is a great way to give back to the community and make a
        positive impact.
      </Typography>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: 2,
        }}
      >
        <TextField label="Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField label="Phone Number" variant="outlined" fullWidth />

        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default Page3;
