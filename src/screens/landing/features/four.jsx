import React, { useState } from 'react'
import Icon from '../../../assets/auth/appIcon.svg'
import left from '../../../assets/features/left4.svg';
import caros from '../../../assets/features/caros2.svg';
import cards from '../../../assets/features/cards4.svg';
import sect10 from '../../../assets/landing/sect10.svg';
import backgr from '../../../assets/landing/backgr.svg';
import soc1 from '../../../assets/landing/social1.svg';
import soc2 from '../../../assets/landing/social2.svg';
import soc3 from '../../../assets/landing/social3.svg';
import soc4 from '../../../assets/landing/social4.svg';
import soc5 from '../../../assets/landing/social5.svg';
import loc from '../../../assets/landing/Location.svg';
import time from '../../../assets/landing/Message.svg';
import card1 from '../../../assets/features/c10.svg';
import card2 from '../../../assets/features/c11.svg';
import card3 from '../../../assets/features/c12.svg';
import mess from '../../../assets/landing/Calling.svg';
import call from '../../../assets/landing/Time.svg';

import './style.scss';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'antd';
import { postService } from '../../../../services/postServices';

const Four = () => {
  const navigate=useNavigate();
  const [loading,setLoading]=useState(false);
  const [email,setEmail]=useState('');
  
  const [success, setSuccess] = useState(false); // state for showing success message
    const [error, setError] = useState(false);

    const features = [
      { image: card1 },
      { image: card2 },
      { image: card3 },
    ];


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


  return (
    <div style={{marginTop:'-22vh'}}>
     <div className="team-member">
    <div >
      
        <img src={left} alt="Abdullah Khan" className="profile-img0 canta"/>
    </div>
    <div className="content101 power">
        <h1 className='biggest-text91 closs power' style={{textAlign:'left'}}>Integration Capabilities</h1>
      
        <p>Seamlessly integrate LeadMasters AI with your existing tools and platforms to create a unified marketing ecosystem. Our integration capabilities ensure that data flows smoothly between systems, enhancing workflow efficiency and data accuracy.</p>
    </div>
</div>

<div className='cont-center-first'>
<h1 className='biggest-text91'>Supported Integrations</h1>
<div className="features-container-cards">
        {features.map((feature, index) => (
          <div key={index} className="feature-card-img">
            <img src={feature.image} alt={`Feature ${index + 1}`} className="feature-image1" />
          </div>
        ))}
      </div>
</div>

  
    </div>
  )
}

export default Four
