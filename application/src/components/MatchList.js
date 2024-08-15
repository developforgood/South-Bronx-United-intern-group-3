// src/MatchList.js
import React, { useEffect, useState } from "react";
import Match from "./Match";
import GenericEvent from "./GenericEvent";

const MatchList = ({ items, datetime, showAll }) => {
  const [selectedyear, setSelectedyear] = useState();
  const [selectedmonth, setSelectedmonth] = useState();
  const [selectedday, setSelectedday] = useState();

  const sortedItems = [...items].sort(
    (a, b) => new Date(a.dateTime) - new Date(b.dateTime)
  );

  const monthMap = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  useEffect(() => {
    const time = datetime.split("-");
    setSelectedyear(time[0]);
    setSelectedmonth(monthMap[time[1].substring(1, 2)]);
    setSelectedday(time[2]);
  });

  return (
    <div className="match-list">
      {sortedItems.map((item, index) => {
        const localdatetime = item.dateTime.split("-");
        const year = localdatetime[0];
        const month = monthMap[localdatetime[1].substring(1, 2)];
        const day = localdatetime[2].substring(0, 2);

        if (item.type === "match") {
          if (
            (day === selectedday &&
              month === selectedmonth &&
              year === selectedyear) ||
            showAll
          ) {
            return (
              <Match
                key={index}
                team1={item.team1}
                team2={item.team2}
                dateTime={item.dateTime}
              />
            );
          }
        } else if (item.type === "event") {
          if (
            (day === selectedday &&
              month === selectedmonth &&
              year === selectedyear) ||
            showAll
          ) {
            return (
              <GenericEvent
                key={index}
                title={item.title}
                dateTime={item.dateTime}
              />
            );
          }
        }
        return null;
      })}
    </div>
  );
};

export default MatchList;
