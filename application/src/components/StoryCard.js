import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import soccerImage from "../images/soccerstories.jpg";

export default function StoryCard(props) {
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
        <Typography>{props.name}</Typography>
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
        <Box>
          <img style={{ height: "300px" }} src={soccerImage}></img>
        </Box>
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
        <Typography>{props.description}</Typography>
      </Box>
    </Box>
  );
}
