import backgr from '../../../assets/landing/backgr.svg';
import { useEffect, useState } from 'react';
import First from './first';
import Second from './second';
import Three from './three';
import Four from './four';
import './style.scss';
import Pguy from '../../../assets/blog/pointingguy.svg';
import soc1 from '../../../assets/landing/social1.svg';
import soc2 from '../../../assets/landing/social2.svg';
import soc3 from '../../../assets/landing/social3.svg';
import soc4 from '../../../assets/landing/social4.svg';
import soc5 from '../../../assets/landing/social5.svg';
import Icon from '../../../assets/auth/appIcon.svg';
import sect10 from '../../../assets/landing/sect10.svg';

import loc from '../../../assets/landing/Location.svg';
import time from '../../../assets/landing/Message.svg';
import mess from '../../../assets/landing/Calling.svg';
import call from '../../../assets/landing/Time.svg';
import { useNavigate } from 'react-router-dom';
import { postService } from '../../../../services/postServices';
import { Alert, Spin } from 'antd';
const Features = () => {
  const tabs = ['AI-Powered Lead Generation', 'Multi-Channel Ad Optimization', 'Advanced Analytics', 'Integration Capabilities'];
  const [activeTab, setActiveTab] = useState(0);
  const [fade, setFade] = useState(true);
  const [pause, setPause] = useState(false);
  const [loading,setLoading]=useState(false);
  const [email,setEmail]=useState('');
  
  const [success, setSuccess] = useState(false); // state for showing success message
    const [error, setError] = useState(false); // State to control pausing
const navigate=useNavigate();


  const handleTabClick = (index) => {
    setActiveTab(index);

  };

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <First />;
      case 1:
        return <Second />;
      case 2:
        return <Three />;
      case 3:
        return <Four />;
      default:
        return null;
    }
  };

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
    <div>
      <section className='container-section44'>
        <h3 className='biggest-text91 '> Key Features & Functionalities</h3>
        <p className='closs closs2' style={{ width: '50vw', textAlign: 'center', marginBottom: '5vh' }}>
          LeadMasters AI offers a comprehensive suite of tools designed to optimize your marketing efforts and drive business growth. Explore our powerful features that make lead generation and ad optimization effortless.
        </p>
      </section>
      <div className="image-container">
        <img className='bg-img-sect55' src={backgr} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='image-container'>
        {tabs.map((tab, index) => (
          <div
            key={index}
            style={{
              width: 270,
              textAlign: 'center',
              paddingBlock: 13,
              zIndex: 2,
              marginInline: 10,
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              backgroundColor: activeTab === index ? '#8F00FF' : 'white',
              color: activeTab === index ? '#fff' : '#000',
              transition: 'background-color 1s, color 2s ease-in-out',
              borderRadius: 10,
            }}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: '20px',
          opacity: fade ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}
      >
        {renderContent()}
      </div>
      <section className='container-section4' style={{marginTop:'-20vh'}}>
   
   <img className='bg-img-sect5 maya' src={backgr}  />
   <div className="newsletter-container" style={{marginTop:'-70vh',height:'50vh'}}>
         <div className="newsletter-content">
           <h1 className='biggest-text91 closs' style={{textAlign:'left',width:'130%'}}>Get Started for Free</h1>
           <p>Connect and network with other professionals on the platform, share insights, and collaborate on projects.</p>
        
           <button className="cta-button90" onClick={()=>navigate("/signup")}>Get Started Free</button>
         </div>
         <div className="newsletter-image101 kira" >
           <img src={Pguy} alt="Newsletter" />
         </div>
       </div>
         </section>
         <footer className="footer9" style={{marginTop:'3vh'}}>
         <div className="footer-section">
         <div className="navbar-brand">
           <img src={Icon} alt="Logo" className="logo" />
           <h4 className='item-9 wht'>LeadMasters.ai</h4>
           </div>
           <p className='bora wht'>LeadMasters AI: AI-powered lead generation and ad optimization for smarter marketing.</p>
         </div>
         <div className="footer-section">
           <h3>Quick links</h3>
           <ul >
           <li><a className='jumpa' href="/aboutus">About Us</a></li>
              <li><a className='jumpa' href="/contactus">Contact</a></li>
              <li><a className='jumpa' href="/blog">Blog</a></li>
              <li><a className='jumpa' href="/terms">Terms of Service</a></li>
              <li><a className='jumpa' href="/privacy">Privacy Policy</a></li>
              <li><a className='jumpa' href="/cancellation">Cancellation and Refund Policy</a></li>
           </ul>
         </div>
         <div className="footer-section ">
                       <h3>Contact details</h3>
                       <div className="contact-item">
                           <img src={loc} alt="Location Icon" className="contact-icon" />
                           <div className="contact-details">
                            
                               <p>Address: #81/16, Haralukunte, HSR Layout, Bangalore, 560102</p>
                           </div>
                       </div>
                       <div className="contact-item">
                           <img src={mess} alt="Phone Icon" className="contact-icon" />
                           <div className="contact-details">
                              
                               <p>Tel: +91-8147808161</p>
                           </div>
                       </div>
                       <div className="contact-item">
                           <img src={call} alt="Clock Icon" className="contact-icon" />
                           <div className="contact-details">
                             
                               <p>Response hours: 2 to 4</p>
                           </div>
                       </div>
                       <div className="contact-item">
                           <img src={time} alt="Email Icon" className="contact-icon" />
                           <div className="contact-details">
                           
                               <p>Email: support@leadmasters.ai</p>
                           </div>
                       </div>
                   </div>
         <div style={{display:'flex',flexDirection:'column',width:'25vw'}}>
   
         <div className="footer-section3 karuna">
           <h3 className='wht' >Subscribe to Our Newsletter</h3>
           <form className="subscribe-form2" onSubmit={handleSubmit}>
             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
             <button type="submit">{loading ? <Spin size="small" /> : "Send"}</button>
           </form>
           {success && <Alert style={{marginBlock:5}} message="Submitted successfully!" type="success" showIcon />}
           {error && <Alert style={{marginBlock:5}} message="There was an error sending your message." type="error" showIcon />}
           <div className="follow-us">
           <h3>Follow us on</h3>
           <div className="social-icons">
           <a  href="https://x.com/@leadmastersai" target="_blank" rel="noopener noreferrer"><img src={soc5} alt="Facebook" className='soc-img-sec' /></a>
             <a  href="https://www.linkedin.com/company/lead-masters-ai/" target="_blank" rel="noopener noreferrer"><img src={soc4} alt="Twitter" className='soc-img-sec' /></a>
             <a  href="https://www.facebook.com/profile.php?id=61564621096389" target="_blank" rel="noopener noreferrer"><img src={soc3} alt="LinkedIn" className='soc-img-sec' /></a>
             <a  href="https://www.facebook.com/profile.php?id=61564621096389" target="_blank" rel="noopener noreferrer"><img src={soc2} alt="Instagram" className='soc-img-sec' /></a>
             <a  href="https://youtube.com/@leadmastersai" target="_blank" rel="noopener noreferrer"><img src={soc1} alt="Instagram" className='soc-img-sec' /></a>
           </div>
         </div>
         </div>
        
         </div>
      
       </footer>
       <p className='last-line'>© 2024 | Powered by LeadMaster.AI</p>
    </div>
  );
};

export default Features;
