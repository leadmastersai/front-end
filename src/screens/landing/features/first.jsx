import React, { useState } from 'react'
import Icon from '../../../assets/auth/appIcon.svg'
import left from '../../../assets/features/left.svg';
import caros from '../../../assets/features/caros.svg';
import cards from '../../../assets/features/cards.svg';
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
const First = () => {
  const navigate=useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
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

  return (
    <div>
     <div className="team-member">
    <div >
      
        <img src={left} alt="Abdullah Khan" className="profile-img0"/>
    </div>
    <div className="content101">
        <h1 className='biggest-text1' style={{textAlign:'left'}}>AI-Powered Lead Generation</h1>
      
        <p>Our AI-powered lead generation tool uses advanced algorithms to identify and target high-quality leads. By analyzing various data points and behavioral patterns, our system predicts the likelihood of conversion, ensuring your sales team focuses on the most promising prospects.</p>
    </div>
</div>

<div className='cont-center-first'>
<h1 className='biggest-text1'> Key Features</h1>
<img src={cards} alt="iam" className='cards-three' />
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
    <section className='container-section4' style={{marginTop:'-20vh'}}>
    <button className="cta-button96" onClick={()=>navigate("/signup")}>Get Started Free</button>
 <img className='bg-img-sect5' src={backgr} />
 <img className='cards-img-sect6' src={sect10} />
       </section>
       <footer className="footer">
       <div className="footer-section">
       <div className="navbar-brand">
         <img src={Icon} alt="Logo" className="logo" />
         <h4>LeadMasters.ai</h4>
         </div>
         <p>Connect and network with other professionals on the platform, share insights, and collaborate on projects.</p>
       </div>
       <div className="footer-section">
         <h3>Quick links</h3>
         <ul >
           <li><a className='jumpa' href="#">About Us</a></li>
           <li><a className='jumpa' href="#">Contact</a></li>
           <li><a className='jumpa' href="#">Blog</a></li>
           <li><a className='jumpa' href="#">Terms of Service</a></li>
           <li><a className='jumpa' href="#">Privacy Policy</a></li>
         </ul>
       </div>
       <div className="footer-section">
         <h3>Contact details</h3>
         <div className="contact-item">
         <img src={loc} alt="Location Icon" className="contact-icon" />
         <div className="contact-details">
           <p>Address:</p>
           <p>#81/16, Haralukunte, HSR Layout, Bangalore, 560102</p>
         </div>
       </div>
       <div className="contact-item">
         <img src={mess} alt="Phone Icon" className="contact-icon" />
         <div className="contact-details">
           <p>Tel:</p>
           <p>+91-8147808161</p>
         </div>
       </div>
       <div className="contact-item">
         <img src={call} alt="Clock Icon" className="contact-icon" />
         <div className="contact-details">
           <p>Response hours:</p>
           <p>2 to 4</p>
         </div>
       </div>
       <div className="contact-item">
         <img src={time} alt="Email Icon" className="contact-icon" />
         <div className="contact-details">
           <p>Email:</p>
           <p>support@leadmasters.ai</p>
         </div>
       </div>
       </div>
       <div style={{display:'flex',flexDirection:'column',width:'25vw'}}>
 
       <div className="footer-section">
         <h3>Stay up to date with the latest courses</h3>
         <form className="subscribe-form">
           <input type="email" placeholder="Email" />
           <button type="submit">Send</button>
         </form>
       </div>
       <div className="footer-section follow-us">
         <h3>Follow us on</h3>
         <div className="social-icons">
           <a href="#"><img src={soc5} alt="Facebook" className='soc-img-sec' /></a>
           <a href="#"><img src={soc4} alt="Twitter" className='soc-img-sec' /></a>
           <a href="#"><img src={soc3} alt="LinkedIn" className='soc-img-sec' /></a>
           <a href="#"><img src={soc2} alt="Instagram" className='soc-img-sec' /></a>
           <a href="#"><img src={soc1} alt="Instagram" className='soc-img-sec' /></a>
         </div>
       </div>
       </div>
    
     </footer>
     <p className='last-line'>© 2024 | Powered by LeadMaster.AI</p>
  
    </div>
  )
}

export default First
