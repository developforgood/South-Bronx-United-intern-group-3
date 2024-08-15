// src/GenericEvent.js
import React from 'react';
import './GenericEvent.css'; // Optional: for styling

const GenericEvent = ({ title, dateTime }) => {
  return (
    <div className="generic-event">
      <div className="event-date-time">
        {new Date(dateTime).toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </div>
      <div className="event-title">{title}</div>
    </div>
  );
};

export default GenericEvent;
