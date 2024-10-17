import React, { useState } from 'react'
import './styles.scss';
import Pguy from '../../assets/blog/pointingguy.svg';
import backgr from '../../assets/landing/backgr.svg';
import Back from '../../assets/privacy/Mask.svg';
import Icon from '../../assets/auth/appIcon.svg'
import soc1 from '../../assets/landing/social1.svg';
import soc2 from '../../assets/landing/social2.svg';
import soc3 from '../../assets/landing/social3.svg';
import soc4 from '../../assets/landing/social4.svg';
import soc5 from '../../assets/landing/social5.svg';
import loc from '../../assets/landing/Location.svg';
import time from '../../assets/landing/Message.svg';
import mess from '../../assets/landing/Calling.svg';
import call from '../../assets/landing/Time.svg';
import { useNavigate } from 'react-router-dom';
import { postService } from '../../../services/postServices';
import { Alert, Spin } from 'antd';
const Privacy = () => {
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
    
      
    const navigate=useNavigate();
  return (
    <div>
      <div className="container-section99">
        <h1 className="biggest-text91 closs closs1">Privacy Policy: Legal Information About Data Protection
        </h1>
        <p className=' closs2' style={{ width: '50vw', textAlign: 'center', }}>LeadMasters AI is committed to protecting your privacy. This policy outlines how we collect, use, and protect your personal information.</p>
      </div>
      <div className="image-container999 op">
        <img className='bg-img-sect55' src={backgr} />
        <img className='bg-img-sect77' src={Back} />
      </div>
      <div className='privacy-policy-container'>
      <h1>Privacy Policy for LeadMasters AI</h1>
      <p><strong>Effective Date:</strong> October 2nd</p>
      <h2>1. Introduction</h2>
      <p>
      LeadMasters AI Solutions Private Limited ("we," "us," or "our") operates the website leadmasters.ai and the associated services, including our mobile application (collectively referred to as the "LeadMasters AI App"). This Privacy Policy outlines how LeadMasters AI Solutions Private Limited collects, uses, and safeguards your personal data when you use our services.
      </p><p>
We are committed to ensuring that your privacy is protected in accordance with applicable international data protection laws, including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other relevant standards. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when using our services, including integrations with Meta platforms (Facebook, Instagram, Threads, WhatsApp), LinkedIn, X (formerly Twitter), Google Ads, and YouTube.
      </p>

      <h2>2. Data Collection</h2>
      <p>We collect personal information in the following ways:</p>
      <ul>
        <li><strong>Information You Provide Directly:</strong> This includes information provided by creating an account, subscribing to our services, interacting with our platform, and connecting to third-party services like LinkedIn, X, Google Ads, and YouTube. This may include your name, email address, profile information, and other contact details.</li>
        <li><strong>Meta Platforms Integration:</strong> We collect data when you connect Meta platforms to our services, including:
          <ul>
            <li><strong>Instagram:</strong> Profile information, content, engagement metrics, and any data necessary for our automation and ad features.</li>
            <li><strong>WhatsApp:</strong> Contact details, messaging data, and user interactions.</li>
            <li><strong>Threads and Facebook:</strong> Public profile data, posts, usage analytics, and ad campaign metrics.</li>
          </ul>
        </li>
        <li><strong>LinkedIn Integration:</strong> When you connect your LinkedIn account to LeadMasters AI, we collect:
          <ul>
            <li><strong>Profile Information:</strong> Such as your name, profile photo, headline, and other public information.</li>
            <li><strong>Engagement Metrics:</strong> Data on post interactions, connections, and other engagement data for automated post creation, scheduling, and ad generation.</li>
            <li><strong>Content Data:</strong> Information you provide to generate posts or ad campaigns.</li>
          </ul>
        </li>
        <li><strong>X (formerly Twitter) Integration:</strong> When you use LeadMasters AI to integrate with X, we collect:
          <ul>
            <li><strong>Profile Information:</strong> Username, public tweets, followers, and engagement metrics.</li>
            <li><strong>Content Data:</strong> Information to schedule and publish posts, generate leads, and create ad content.</li>
          </ul>
        </li>
        <li><strong>Google Ads and YouTube Integration:</strong> When you connect Google Ads or YouTube to LeadMasters AI, we collect:
          <ul>
            <li><strong>Google Ads Campaign Data:</strong> Including keywords, performance metrics, demographics, and ad analytics to facilitate ad generation, campaign optimization, and reporting.</li>
            <li><strong>YouTube Profile and Engagement Data:</strong> Public channel information, video interactions, and analytics to optimize content strategies and enhance ad targeting.</li>
          </ul>
        </li>
        <li><strong>Usage Information:</strong> We collect data automatically through cookies, web beacons, and similar technologies to understand how users interact with our platform. This includes pages visited, time spent, actions performed, and interaction data from our integrations.</li>
      </ul>

      <h2>3. How We Use Your Data</h2>
      <p>We use the collected data to:</p>
      <ul>
        <li>Provide and Improve Services: Including integrating with Meta, LinkedIn, X, Google Ads, and YouTube, managing ad campaigns, creating and posting content, generating ads, and generating leads.</li>
        <li>Communications: Sending service-related communications such as updates, promotional offers, and newsletters, based on user consent.</li>
        <li>Personalization and Marketing: Customizing your experience and providing tailored recommendations, including targeted advertising on LinkedIn, Meta, X, Google Ads, and YouTube platforms.</li>
        <li>Ad Generation and Advertising Activities:
          <ul>
            <li><strong>Meta Platforms:</strong> We use collected data for generating targeted advertisements, managing ad campaigns, and analyzing engagement metrics to improve ad performance.</li>
            <li><strong>LinkedIn:</strong> We use LinkedIn data to generate ad content targeting specific professional demographics, using engagement data to create, optimize, and schedule ads tailored to user segments.</li>
            <li><strong>X:</strong> We use X data for ad campaign creation, analyzing post performance, and generating targeted ads, including automated tools to craft engaging ads and deploy them effectively.</li>
            <li><strong>Google Ads Integration:</strong> We use Google Ads data to create, manage, and optimize ad campaigns. This includes analyzing campaign metrics to improve targeting, adjust ad spend, and enhance overall ad performance.</li>
            <li><strong>YouTube Integration:</strong> Data from YouTube is used to optimize video content, create targeted ads, and enhance engagement through personalized ad strategies.</li>
          </ul>
        </li>
        <li>Compliance and Legal Requirements: To adhere to applicable legal obligations, industry standards, and platform policies.</li>
      </ul>

      <h2>4. Sharing of Information</h2>
      <p>We may share your data with:</p>
      <ul>
        <li>Service Providers: Third-party vendors who support our services, including hosting, analytics, customer support, data processing, and ad management.</li>
        <li>Business Partners and Advertisers: Where permitted by law and based on user consent, we may share information with our business partners to provide co-branded services or to help with advertising and marketing initiatives.</li>
        <li>Meta, LinkedIn, X, Google, and YouTube Platforms: Data is shared with these platforms to facilitate integrations, including ad generation, ensuring compliance with their respective privacy policies and terms.</li>
      </ul>

      <h2>5. User Consent</h2>
      <p>
        By using our services, you consent to our data collection practices. You may withdraw your consent at any time by contacting us at <a href="mailto:support@leadmasters.ai">support@leadmasters.ai</a>. Withdrawal of consent may limit your access to specific features of our platform, including ad generation services.
      </p>

      {/* Add the remaining sections similarly */}
      
      <h2>13. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at:</p>
      <ul>
        <li>Email: <a href="mailto:support@leadmasters.ai">support@leadmasters.ai</a></li>
        <li>Website: <a href="https://leadmasters.ai" target="_blank" rel="noopener noreferrer">https://leadmasters.ai</a></li>
      </ul>
    </div>
      <section className='container-section4' style={{marginTop:'-20v'}}>
   
   <img className='bg-img-sect5 maya' src={backgr}  />
   <div className="newsletter-container" style={{marginTop:'-70vh',height:'50vh'}}>
         <div className="newsletter-content">
           <h1 className='biggest-text91 closs' style={{textAlign:'left',width:'130%'}}>Ready to transform your marketing?</h1>
           <p>Sign up now or request a demo to experience the power of LeadMasters AI.</p>
        
           <button className="cta-button90" onClick={()=>navigate("/signup")}>Get Started Free</button>
         </div>
         <div className="newsletter-image101 kira" >
           <img src={Pguy} alt="Newsletter" />
         </div>
       </div>
         </section>
         <footer className="footer9" style={{marginTop:'5vh'}}>
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
              <li><a className='jumpa' href="/terms-and-conditions">Terms of Service</a></li>
              <li><a className='jumpa' href="/privacy-policy">Privacy Policy</a></li>
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
  )
}

export default Privacy
