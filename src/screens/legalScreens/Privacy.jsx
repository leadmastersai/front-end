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
      <div className="privacy-policy-container">
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last Updated: 30 aug 2024</p>
            <p>
                LeadMasters AI (“We,” “Us,” “Our”) is committed to protecting your privacy. This
                Privacy Policy outlines how we collect, use, disclose, and safeguard your information
                when you use our platform, leadmasters.ai, and any related services (collectively, the
                "Platform").
            </p>
            <p>
                By using the Platform, you consent to the practices described in this Privacy Policy.
                If you do not agree with the terms of this Privacy Policy, please do not use our
                Platform.
            </p>
            <h2>1. Information We Collect</h2>
            <h3>1.1 Personal Information</h3>
            <ul>
                <li>Contact Information: Name, email address, phone number, and other similar information.</li>
                <li>Account Information: Username, password, profile picture, and other registration details.</li>
              
                          </ul>
            <h3>1.2 Non-Personal Information</h3>
            <ul>
                <li>Usage Data: Information regarding how you interact with the Platform, including your IP address, browser type, device information, referring URLs, and pages accessed.</li>
                <li>Cookies: Data stored on your device that helps improve your browsing experience on the Platform.</li>
            </ul>
            <h3>1.3 Sensitive Information</h3>
            <p>
                In rare cases, we may collect sensitive information such as government-issued IDs for
                identity verification, but only with your explicit consent or where required by law.
            </p>
            <h2>2. How We Use Your Information</h2>
            <h3>2.1 Providing Services</h3>
            <ul>
                <li>To manage your account, authenticate users, and facilitate access to the Platform.</li>
                <li>To process payments and provide transactional receipts.</li>
            </ul>
            <h3>2.2 Improving User Experience</h3>
            <ul>
                <li>To analyze usage patterns and improve the performance of the Platform.</li>
                <li>To personalize content, suggestions, and advertisements.</li>
            </ul>
            <h3>2.3 Communication</h3>
            <ul>
                <li>To respond to inquiries, provide customer support, and send administrative information (e.g., updates, security alerts).</li>
                <li>To send marketing communications with your consent (you can opt-out at any time).</li>
            </ul>
            <h3>2.4 Compliance with Legal Obligations</h3>
            <ul>
                <li>To comply with legal requirements, such as responding to court orders or regulatory requests.</li>
                <li>To enforce our Terms and Conditions or protect our rights and interests.</li>
            </ul>
            <h2>3. How We Share Your Information</h2>
            <p>
                We do not sell your personal information. However, we may share your information under
                the following circumstances:
            </p>
            <h3>3.1 Service Providers</h3>
            <p>
                We may share information with third-party vendors who help us operate the Platform
                (e.g., payment processors, cloud storage providers, analytics services). These third
                parties are obligated to use your data solely for the purpose of providing the
                services.
            </p>
            <h3>3.2 Third-Party Integrations</h3>
            <p>
                If you choose to integrate third-party services (e.g., Google Ads, Facebook,
                LinkedIn), we may share data with these services to facilitate the integration. These
                third-party services are governed by their own privacy policies.
            </p>
            <h3>3.3 Business Transfers</h3>
            <p>
                In the event of a merger, acquisition, or asset sale, your information may be
                transferred as part of the transaction. You will be notified of such a change in
                ownership or control.
            </p>
            <h3>3.4 Legal Compliance</h3>
            <p>
                We may disclose your information to law enforcement or other authorities if required
                by law, or if we believe that such disclosure is necessary to:
            </p>
            <ul>
                <li>Comply with legal obligations,</li>
                <li>Protect and defend our rights or property,</li>
                <li>Prevent fraud or other illegal activity.</li>
            </ul>
            <h2>4. Cookies and Tracking Technologies</h2>
            <h3>4.1 Cookies</h3>
            <p>
                We use cookies and similar technologies to collect non-personal information, improve
                your experience on the Platform, and track usage. You can set your browser to refuse
                cookies, but this may limit some functionalities of the Platform.
            </p>
            <h3>4.2 Analytics</h3>
            <p>
                We use third-party analytics services such as Google Analytics to gather data about
                how users interact with the Platform. This helps us optimize performance and improve
                user experience.
            </p>
            <h2>5. Data Security</h2>
            <p>
                We take reasonable precautions to protect your personal information from unauthorized
                access, disclosure, alteration, or destruction. These include encryption, access
                controls, and secure hosting environments.
            </p>
            <p>
                However, no method of transmission over the internet is completely secure...
            </p>
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
  )
}

export default Privacy
