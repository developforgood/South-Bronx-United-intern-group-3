import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Send from "@mui/icons-material/Send";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Sync from "@mui/icons-material/Sync";

export default function StoryCard(props) {
  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "800px",
        scrollSnapAlign: "start",
        maxWidth: "700px",
      }}
    >
      <Box
        sx={{
          width: "80%",
          border: "1px solid",
          borderColor: "grey.400",
          boxShadow: 3,
          padding: "10px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "800",
        }}
      >
        <div style={{ marginBottom: "2vh" }}>
          <Typography variant="h3">{props.name}</Typography>
        </div>

        <hr style={{ width: "100%" }} />
        <img alt="" style={{ height: "200px" }} src={props.badge}></img>

        <hr style={{ width: "100%" }} />

        <Box
          sx={{
            height: "360px",
            overflowY: "auto",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <Typography>{props.description}</Typography>
        </Box>

        <hr style={{ width: "100%" }} />

        <Box
          sx={{
            height: "60px",
            width: "100%",
            overflowY: "auto",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <FavoriteBorderIcon />
            <ChatBubbleOutlineIcon />
            <Sync />
            <Send />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
