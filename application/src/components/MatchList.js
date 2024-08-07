// src/MatchList.js
import React from 'react';
import Match from './Match';
import GenericEvent from './GenericEvent';

const MatchList = ({ items }) => {
  const sortedItems = [...items].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));

  return (
    <div className="match-list">
      {sortedItems.map((item, index) => {
        if (item.type === 'match') {
          return (
            <Match
              key={index}
              team1={item.team1}
              team2={item.team2}
              dateTime={item.dateTime}
            />
          );
        } else if (item.type === 'event') {
          return (
            <GenericEvent
              key={index}
              title={item.title}
              dateTime={item.dateTime}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default MatchList;
