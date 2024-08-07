import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box } from "@mui/material";
import { matchRoutes } from "react-router-dom";
import MatchList from "../components/MatchList";
import '../components/Page2.css';


export default function Page2() {
  const matches = [
    {
      team1: { name: 'Barcelona', badge: 'https://files.footovision.com/public/website/partners/fc-barcelona.png' },
      team2: { name: 'Real Madrid', badge: 'https://ih1.redbubble.net/image.426717476.2435/flat,800x800,075,f.jpg' },
      dateTime: '2024-08-08T14:00:00Z'
    },
    {
      team1: { name: 'Team C', badge: 'https://via.placeholder.com/50' },
      team2: { name: 'Team D', badge: 'https://via.placeholder.com/50' },
      dateTime: '2024-08-11T16:00:00Z'
    },
    {
      team1: { name: 'Team E', badge: 'https://via.placeholder.com/50' },
      team2: { name: 'Team F', badge: 'https://via.placeholder.com/50' },
      dateTime: '2024-08-09T12:00:00Z'
    },
    {
      team1: { name: 'Team E', badge: 'https://via.placeholder.com/50' },
      team2: { name: 'Team F', badge: 'https://via.placeholder.com/50' },
      dateTime: '2024-08-09T12:00:00Z'
    },
    {
      team1: { name: 'Team E', badge: 'https://via.placeholder.com/50' },
      team2: { name: 'Team F', badge: 'https://via.placeholder.com/50' },
      dateTime: '2024-08-09T12:00:00Z'
    }
  ];

  return (
    <div
      styles={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="calendar-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </div>
      <div className="matchlist-container">
        <MatchList matches={matches} />
      </div>
    </div>
  );
}
