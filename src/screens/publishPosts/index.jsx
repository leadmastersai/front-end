import React, { useState, useEffect } from 'react';
import '../publishads/styles.scss';
import Carousel1 from '../adIdea/carousel1';
import stars from '../../assets/getIdea/stars.svg';
import { postService } from '../../../services/postServices';
import './styles.scss';
const PublishPosts = () => {
  const [data, setData] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState("LinkedIn");
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

  const handlePlatformSelect = (platform) => {
    console.log('Selected Platform:', platform);
    setSelectedPlatform(platform);
    // You can now use this selectedPlatform for further actions in the parent component
  };


  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const getDrafts = async () => {
    const platform=selectedPlatform.toLocaleLowerCase();
    try {
      const response = await postService.publishService(platform);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {

    getDrafts();
  }, [selectedPlatform]);

  return (
    <div >
      <div className='main-cont55' style={{}}>
       <div style={{marginInline:'50px'}}>
    <div className='heading' >
    <h3>Published Posts</h3>
    <img src={stars} className='str'/>

    </div>
    <Carousel1  onPlatformSelect={handlePlatformSelect}  />
{!data && (<h2 style={{fontWeight:'300',margin:'5%'}}>No Live Social Media Post from your Account Yet !!</h2>)}
    </div>
    <div className='card-containr'>
    {data?.map((item, index) => (
        <div className='card-cont3'  key={index} >
          {/* <div className='profile-cont'>
            <img src={avtar} className='avtar' />
            <div className='profile-subcont'>
              <h4 className='name'>
                {userBasics?.fullName}
              </h4>
              <p className='email'>
{userBasics?.email}
              </p>
            </div>
          </div> */}
          {/* <h5>{item?.title}</h5> */}
          <p className='para23'>{item?.content?.replace(/\[|\]/g, '')}</p>

        </div>
      ))}
      </div>
    </div>

    </div>


  );
};

export default PublishPosts;
