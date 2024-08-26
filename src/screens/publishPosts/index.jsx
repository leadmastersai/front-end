import React, { useState, useEffect } from 'react';
import '../publishads/styles.scss';
import Carousel1 from '../adIdea/carousel1';
import stars from '../../assets/getIdea/stars.svg';

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
      <div className='main-cont55' style={{}}>
       <div style={{marginInline:'50px'}}>
    <div className='heading' >
    <h3>Published Posts</h3>
    <img src={stars} className='str'/>

    </div>
    <Carousel1  />
<h2 style={{fontWeight:'300',margin:'5%'}}>No Live Social Media Post from your Account Yet !!</h2>
    </div>
    </div>
    </div>


  );
};

export default PublishPosts;
