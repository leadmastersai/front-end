import React, { useState, useEffect } from 'react';
import '../publishads/styles.scss';

const PublishPosts = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-02-20") - +new Date();
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
    <div >
<h2 style={{fontWeight:'300',margin:'5%'}}>No Live Social Media Post from your Account Yet !!</h2>
    </div>
  );
};

export default PublishPosts;
