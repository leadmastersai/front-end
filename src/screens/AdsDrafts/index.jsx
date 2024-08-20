import React, { useState, useEffect } from 'react';
import '../publishads/styles.scss';

const AdsDrafts = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-10-20") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="coming-soon-container">
      <div className="coming-soon-box animate-box">
        <h1 className="animate-text">Coming Soon!</h1>
        <p className="animate-text">STAY TUNED</p>
        <div className="countdown-container">
          <div className="countdown-timer">
            <div>{timeLeft.days || '00'} Days -</div>
            <div>{timeLeft.hours || '00'} Hours -</div>
            <div>{timeLeft.minutes || '00'} Mins -</div>
            <div>{timeLeft.seconds || '00'} Secs</div>
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default AdsDrafts;
