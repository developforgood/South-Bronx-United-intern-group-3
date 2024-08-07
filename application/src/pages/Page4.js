// src/pages/Page4.js
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Page4 = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Typography variant="h4" component="div">
        Stories
      </Typography>

      <Box
        sx={{
          width: "80%",
          border: "1px solid",
          borderColor: "grey.400",
          boxShadow: 3,
          padding: "10px",
        }}
      >
        <TextField fullWidth label="Name" variant="outlined" />
      </Box>

      <Box
        sx={{
          width: "80%",
          height: "300px",
          border: "1px solid",
          borderColor: "grey.400",
          boxShadow: 3,
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" color="text.secondary">
          Image Placeholder
        </Typography>
      </Box>

      <Box
        sx={{
          width: "80%",
          border: "1px solid",
          borderColor: "grey.400",
          boxShadow: 3,
          padding: "10px",
        }}
      >
        <TextField
          fullWidth
          label="Description"
          multiline
          rows={4}
          variant="outlined"
        />
      </Box>
    </Box>
  );
};

export default Page4;
