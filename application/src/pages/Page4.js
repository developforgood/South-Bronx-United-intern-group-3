// src/pages/Page4.js
import React from "react";
import StoryCard from "../components/StoryCard";
import { Button } from "@mui/material";

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
      <StoryCard
        name={stories[index].name}
        description={stories[index].description}
      />

      <div style={{ textAlign: "center" }}>
        <Button variant="contained" onClick={handleClick}>
          NEXT
        </Button>
      </div>
    </div>
  );
};

export default Page4;
