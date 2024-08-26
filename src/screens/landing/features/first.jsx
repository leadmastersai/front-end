import React, { useState } from 'react'
import Icon from '../../../assets/auth/appIcon.svg'
import left from '../../../assets/features/left.svg';
import caros from '../../../assets/features/caros.svg';
import cards from '../../../assets/features/cards.svg';
import card1 from '../../../assets/features/c1.svg';
import card2 from '../../../assets/features/c2.svg';
import card3 from '../../../assets/features/c3.svg';

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

import './style.scss';
import { useNavigate } from 'react-router-dom';
import { Alert, Spin } from 'antd';
import { postService } from '../../../../services/postServices';
import Second from './second';
import Three from './three';
import Four from './four';
const First = () => {
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
      text:"Boost Sales Pipeline",
      desc: "Quickly fill your sales pipeline with high-quality leads, leading to higher conversion rates and sales efficiency.",
      imageUrl: caros
    },
    {
      text:"Boost Sales Pipeline",
      desc: "Quickly fill your sales pipeline with high-quality leads, leading to higher conversion rates and sales efficiency.",
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
    <div style={{marginTop:'-12vh'}}>
     <div className="team-member">
    <div >
      
        <img src={left} alt="Abdullah Khan" className="profile-img0"/>
    </div>
    <div className="content101 power">
        <h1 className='biggest-text91 closs power' style={{textAlign:'left'}}>AI-Powered Lead Generation</h1>
      
        <p>Our AI-powered lead generation tool uses advanced algorithms to identify and target high-quality leads. By analyzing various data points and behavioral patterns, our system predicts the likelihood of conversion, ensuring your sales team focuses on the most promising prospects.</p>
    </div>
</div>

<div className='cont-center-first'>
<h1 className='biggest-text91 m-bottom'> Key Features</h1>
<div className="features-container-cards">
        {features.map((feature, index) => (
          <div key={index} className="feature-card-img">
            <img src={feature.image} alt={`Feature ${index + 1}`} className="feature-image1" />
          </div>
        ))}
      </div>

</div>
<div className="app69 hide" style={{backgroundColor:'white',marginTop:-10}}>
   
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
 
  <div  className='display-block displayN'>
    <div className='m-top' >
<Second className='display-block displayN' />
</div>
<div className='m-top' >
<Three className='display-block displayN' />
</div>
<div className='m-top' >
<Four  />
</div>
  </div>
    </div>
  )
}

export default First
