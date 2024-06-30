import React from 'react';
import '../styles/DateTimeDisplay.css';

function DateTimeDisplay({ data }) {
  if (!data) return null;

  const { timezone } = data;
  const date = new Date(Date.now() + timezone * 1000);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    //   second: '2-digit',
      timeZone: 'UTC'
    });
  };

  return (
    <div className="date-time-display">
      <p className="date">{formatDate(date)}</p>
      <p className="time">{formatTime(date)}</p>
    </div>
  );
}

export default DateTimeDisplay;