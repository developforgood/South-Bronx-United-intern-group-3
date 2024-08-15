// src/pages/Page4.js
import React from "react";
import StoryCard from "../components/StoryCard";
import kevin from "../images/kevin.png";
import june from "../images/june.png";
import hannah from "../images/hannah.png";
import michael from "../images/michael.png";
import yash from "../images/yash.png";
import { Typography } from "@mui/material";

const Page4 = () => {
  const stories = [
    {
      name: "Kevin",
      description:
        "Kevin is an interesting fellow... Good PM, but keep him away from the fish tanks. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      badge: kevin,
    },
    {
      name: "June",
      description:
        "June helped us get NPM working by fixing our horrible package.json files! Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis dui convallis est mauris habitasse pharetra natoque. Tortor magna hac neque, dui hendrerit velit litora. Curabitur pulvinar gravida mollis torquent molestie iaculis facilisis velit. Pellentesque eget viverra adipiscing eu urna consectetur. Vestibulum eget blandit fusce dapibus imperdiet placerat. Nascetur venenatis dis, sollicitudin adipiscing vulputate iaculis ultrices consectetur.",
      badge: june,
    },
    {
      name: "Hannah",
      description:
        "Hannah is still upset about the cancelled Taylor Swift concerts.  Lorem ipsum odor amet, consectetuer adipiscing elit. Nec nunc tincidunt netus fusce molestienec mattis litora vivamus. Hac faucibus sed convallis nibh imperdiet varius lectus. Penatibus vel in interdum; mattis metus senectus elit. Laoreet dis libero pretium class pellentesque iaculis. Inceptos vestibulum est dui hac accumsan fames sodales interdum rutrum. Quisque cras vestibulum elit vestibulum, massa egestas. Lacinia natoque tortor inceptos vestibulum cubilia imperdiet.",
      badge: hannah,
    },
    {
      name: "Michael",
      description:
        "I followed Michael on Instagram! Best lead researcher there is. Lorem ipsum odor amet, consectetuer adipiscing elit. Nec nunc tincidunt netus fusce molestie nec mattis litora vivamus. Hac faucibus sed convallis nibh imperdiet varius lectus. Penatibus vel in interdum; mattis metus senectus elit. Laoreet dis libero pretium class pellentesque iaculis. Inceptos vestibulum est dui hac accumsan fames sodales interdum rutrum. Quisque crasvestibulum elit vestibulum, massa egestas. Lacinia natoque tortor inceptos vestibulum cubilia imperdiet.",
      badge: michael,
    },
    {
      name: "Yash",
      description:
        "Best prototyper there is... Best lead researcher there is. Lorem ipsum odor amet, consectetuer adipiscing elit. Nec nunc tincidunt netus fusce molestie nec mattis litora vivamus. Hac faucibus sed convallis nibh imperdiet varius lectus. Penatibus vel in interdum; mattis metus senectus elit. Laoreet dis libero pretium class pellentesque iaculis. Inceptos vestibulum est dui hac accumsan fames sodales interdum rutrum. Quisque cras vestibulum elit vestibulum, massa egestas. Lacinia natoque tortor inceptos vestibulum cubilia imperdiet.",
      badge: yash,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        scrollSnapType: "y mandatory",
        overflowY: "scroll",
        height: "90vh",
      }}
    >
      {stories.map((collection, index) => {
        return (
          <StoryCard
            name={collection.name}
            description={collection.description}
            badge={collection.badge}
          />
        );
      })}
    </div>
  );
};

export default Page4;
