import React from "react";
import "./Match.css"; // Optional: for styling

const Match = ({ team1, team2, dateTime }) => {
  return (
    <div className="match">
      <div className="date-time-container">
        <div className="date-time">
          {new Date(dateTime).toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
      <div className="match-content">
        <div className="team">
          <img
            src={team1.badge}
            alt={`${team1.name} badge`}
            className="badge"
          />
          <span className="team-name">{team1.name}</span>
        </div>
        <span className="vs">VS</span>
        <div className="team">
          <img
            src={team2.badge}
            alt={`${team2.name} badge`}
            className="badge"
          />
          <span className="team-name">{team2.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Match;
