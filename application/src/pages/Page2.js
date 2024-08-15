// src/Page2.js
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

import MatchList from "../components/MatchList";
import "../components/Page2.css";
import dayjs from "dayjs";

export default function Page2() {
  const [value, setValue] = useState(dayjs().format("YYYY-MM-DD"));
  const [showall, setShowall] = useState(true);

  const Ball =
    "https://www-vra.stjohns.k12.fl.us/wp-content/uploads/2015/06/Soccer-ball-clipart-5.png";
  const blueBall =
    "https://www.clker.com/cliparts/l/A/p/7/F/b/blue-soccer-ball-md.png";

  const items = [
    {
      type: "match",
      team1: {
        name: "Barcelona",
        badge:
          "https://files.footovision.com/public/website/partners/fc-barcelona.png",
      },
      team2: {
        name: "Real Madrid",
        badge:
          "https://ih1.redbubble.net/image.426717476.2435/flat,800x800,075,f.jpg",
      },
      dateTime: "2024-08-08T14:00:00Z",
    },
    {
      type: "match",
      team1: { name: "Team C", badge: Ball },
      team2: { name: "Team D", badge: blueBall },
      dateTime: "2024-08-11T16:00:00Z",
    },
    {
      type: "match",
      team1: { name: "Team E", badge: Ball },
      team2: { name: "Team F", badge: blueBall },
      dateTime: "2024-08-11T18:00:00Z",
    },
    {
      type: "event",
      title: "Soccer Tournament Referee - Volunteers Needed!",
      dateTime: "2024-08-09T14:00:00Z",
    },
    {
      type: "event",
      title: "Soccer Tournament 2 Referee - Volunteers Needed!",
      dateTime: "2024-08-09T15:00:00Z",
    },
    {
      type: "event",
      title: "Soccer Tournament 3 Referee - Volunteers Needed!",
      dateTime: "2024-08-09T16:00:00Z",
    },
    {
      type: "event",
      title: "Academic Tutoring (K-3rd) - Volunteers Needed!",
      dateTime: "2024-08-10T13:00:00Z",
    },
    {
      type: "event",
      title: "Soccer Tournament 4 Referee - Volunteers Needed!",
      dateTime: "2024-08-14T15:00:00Z",
    },
    {
      type: "match",
      team1: { name: "Team G", badge: Ball },
      team2: { name: "Team H", badge: blueBall },
      dateTime: "2024-08-14T13:00:00Z",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="calendar-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            onChange={(newValue) => setValue(newValue.format("YYYY-MM-DD"))}
          />
        </LocalizationProvider>
      </div>
      <div className="matchlist-container">
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              onClick={() => {
                setShowall(!showall);
              }}
              label="Show All"
            ></Checkbox>
          }
          label={showall ? "Showing All Events" : "Showing on Date Selected"}
        />

        <MatchList items={items} datetime={value} showAll={showall} />
      </div>
    </div>
  );
}
