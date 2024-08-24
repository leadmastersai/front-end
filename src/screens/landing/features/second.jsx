import React, { useState } from 'react'
import Icon from '../../../assets/auth/appIcon.svg'
import left from '../../../assets/features/left2.svg';
import caros from '../../../assets/features/caros2.svg';
import cards from '../../../assets/features/cards2.svg';
import sect10 from '../../../assets/landing/sect10.svg';
import backgr from '../../../assets/landing/backgr.svg';
import soc1 from '../../../assets/landing/social1.svg';
import soc2 from '../../../assets/landing/social2.svg';
import soc3 from '../../../assets/landing/social3.svg';
import soc4 from '../../../assets/landing/social4.svg';
import soc5 from '../../../assets/landing/social5.svg';
import loc from '../../../assets/landing/Location.svg';
import time from '../../../assets/landing/Message.svg';
import mess from '../../../assets/landing/Calling.svg';
import call from '../../../assets/landing/Time.svg';
import card1 from '../../../assets/features/c4.svg';
import card2 from '../../../assets/features/c5.svg';
import card3 from '../../../assets/features/c6.svg';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { Alert, Spin } from 'antd';
import { postService } from '../../../../services/postServices';
const Second = () => {
  const navigate=useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading,setLoading]=useState(false);
  const [email,setEmail]=useState('');
  
  const [success, setSuccess] = useState(false); // state for showing success message
    const [error, setError] = useState(false);

    const handleSubmit=async(e)=>{
      e.preventDefault();
    
      const payload={
       
        email:email,
      
      }
      try{
        setLoading(true)
    const response=await postService.postContactInfo(payload);
    console.log(response.data,"sueccss");
    
    setEmail('');
    
    setSuccess(true);
    setError(false);
    
    setLoading(false)
    setTimeout(() => setSuccess(false), 3000); // Hide after 3 seconds
    } catch (error) {
      console.log(error, 'error');
      setError(true);
      setSuccess(false);
      setLoading(false);
      setTimeout(() => setError(false), 3000);
    }
      
    }

  const slides = [
    {
      text:"A retail client saw a 25% increase in ROI after using LeadMasters AI to optimize their multi-channel ad campaigns.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imageUrl: caros
    },
    {
      text:"A retail client saw a 25% increase in ROI after using LeadMasters AI to optimize their multi-channel ad campaigns.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imageUrl: caros
    },
    // Add more slides as needed
  ];

  const features = [
    { image: card1 },
    { image: card2 },
    { image: card3 },
  ];


  return (
    <div style={{marginTop:'-25vh'}}>
     <div className="team-member">
    <div >
      
        <img src={left} alt="Abdullah Khan" className="profile-img0 canta"/>
    </div>
    <div className="content101 power">
        <h1 className='biggest-text91 closs power' style={{textAlign:'left'}}>Multi-Channel Ad Optimization</h1>
      
        <p>Maximize your advertising ROI with our multi-channel ad optimization feature. Seamlessly manage and optimize ad campaigns across various platforms, including Google Ads, Facebook Ads, LinkedIn Ads, Twitter Ads, and Instagram Ads</p>
    </div>
</div>

<div className='cont-center-first'>
<h1 className='biggest-text91'> Key Features</h1>
<div className="features-container-cards">
        {features.map((feature, index) => (
          <div key={index} className="feature-card-img">
            <img src={feature.image} alt={`Feature ${index + 1}`} className="feature-image1" />
          </div>
        ))}
      </div>
</div>
<div className="app69" style={{backgroundColor:'white',marginTop:-10}}>
   
      <div className="carousel69-container">
        <div className="slide69">
          <div className="content69">
            <h2>{slides[currentSlide].text}</h2>
            <p>{slides[currentSlide].desc}</p>
            <a href="#" className="read-more69">Read more</a>
            <div className="carousel69-indicators">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`indicator69 ${index === currentSlide ? 'active69' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="image69">
            <img src={slides[currentSlide].imageUrl} alt="Slide image" />
          </div>
        </div>
       
      </div>
    </div>
 
  
    </div>
  )
}

export default Second
