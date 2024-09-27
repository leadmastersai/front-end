import React, { useState, useEffect } from 'react';
import arrow from '../../assets/published/arrow.svg';
import live from '../../assets/published/live.svg';
import '../publishads/styles.scss';
import Carousel1 from '../adIdea/carousel1';
import stars from '../../assets/getIdea/stars.svg';
import { postService } from '../../../services/postServices';
import './styles.scss';
import { Spin } from 'antd';
const PublishPosts = () => {
  const [loading,setLoading]=useState(true);
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
      setLoading(false);
    } catch (error) {
      console.log(error, "error");
      setLoading(false);
    }
  };

  useEffect(() => {

    getDrafts();
  }, [selectedPlatform]);

  return (
    <div >
        {loading && (
        <div className='overlay'>
          <Spin size="large" />
        </div>
      )}
      <div className='main-cont55' style={{}}>
       <div style={{marginInline:'50px'}}>
    <div className='heading' >
    <h3>Published Posts</h3>
    <img src={stars} className='str'/>

    </div>
    <Carousel1  onPlatformSelect={handlePlatformSelect}  />


{!loading && (!data || data.length === 0) && (<h2 style={{fontWeight:'300',margin:'5%'}}>No Live Social Media Post from your Account Yet !!</h2>)}
    </div>
    <div className='card-containr'>
    {data?.slice() // Create a shallow copy to avoid mutating the original array
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by createdAt from latest to oldest
.map((item, index) => (
        <div className='card-cont13'  key={index} >
          <img className='img-live' src={live} />
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
          {/* <h5>{i
          <tem?.title}</h5> */}
        {item?.imgLink && (
        <div>
     
          <img src={item.imgLink} alt="Uploaded in Parent" style={{ width: '300px',height:'200px',objectFit:'contain' }} />
        </div>
      )}
          <p className='para231'>{item?.content?.replace(/\[|\]/g, '')}</p>
<div className='sm-c'>
<span>View Analytics</span>
<img style={{marginInline:'1vw'}} src={arrow} />
</div>
        </div>
      ))}
      </div>
    </div>

    </div>


  );
};

export default PublishPosts;
