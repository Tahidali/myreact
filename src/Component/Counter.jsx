import React, { useState, useEffect } from 'react';
import ApiData from './ApiData';

const Counter = () => {
  const [timeInSeconds, setTimeInSeconds] = useState(120);

  useEffect(() => {
    if (timeInSeconds > 0) {
      const countdownInterval = setInterval(() => {
        setTimeInSeconds((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [timeInSeconds]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <h1>Countdown Timer: {formatTime(timeInSeconds)}</h1>
      <ApiData/>
    </div>
  );
};

export default Counter;
