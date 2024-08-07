// src/MatchList.js
import React from 'react';
import Match from './Match';

const MatchList = ({ matches }) => {
  const sortedMatches = [...matches].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));

  return (
    <div className="match-list">
      {sortedMatches.map((match, index) => (
        <Match
          key={index}
          team1={match.team1}
          team2={match.team2}
          dateTime={match.dateTime}
        />
      ))}
    </div>
  );
};

export default MatchList;
