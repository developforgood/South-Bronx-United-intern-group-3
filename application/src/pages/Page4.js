// src/pages/Page4.js
import React from "react";
import StoryCard from "../components/StoryCard";
import { Button, Typography } from "@mui/material";
import ArrowCircleRight from "@mui/icons-material/ArrowCircleRight";

const Page4 = () => {
  const [index, setIndex] = React.useState(0);
  const [stories, setStories] = React.useState([
    {
      name: "Kevin",
      description:
        "Kevin is an interesting fellow... Good PM, but keep him away from the fish tanks.",
    },
    {
      name: "June",
      description:
        "June helped us get NPM working by fixing our horrible package.json files!",
    },
    {
      name: "Hannah",
      description:
        "Hannah is still upset about the cancelled Taylor Swift concerts.",
    },
    { name: "Michael", description: "I followed Michael on Instagram!" },
  ]);

  const handleClick = () => {
    setIndex((index + 1) % stories.length);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* {stories.map(() => {
        return (
          <Typography variant="h4" component="div">
            Stories
          </Typography>
        );
      })} */}

      <StoryCard
        name={stories[index].name}
        description={stories[index].description}
      />

      <div style={{ textAlign: "center", marginTop: "5vh" }}>
        <Button variant="contained" onClick={handleClick}>
          <ArrowCircleRight />
        </Button>

        <Typography variant="h6" component="div">
          {index + 1} of {stories.length}
        </Typography>
      </div>
    </div>
  );
};

export default Page4;
