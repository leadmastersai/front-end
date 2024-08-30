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
const Cancellation = () => {
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
        <h1 className="biggest-text91 closs closs1">Cancellation and Refund Policy
        </h1>
      
      </div>
      <div className="image-container999 op">
        <img className='bg-img-sect55' src={backgr} />
        <img className='bg-img-sect77' src={Back} />
      </div>
      <div className="privacy-policy-container">
       
            <p className="last-updated">Last Updated: 30 aug 2024</p>
            <p>
                At LeadMasters AI, we strive to ensure customer satisfaction with our services. However, we understand that sometimes situations arise where you may need to cancel a service or request a refund. This Cancellation and Refund Policy outlines the terms and conditions for cancellations and refunds.
            </p>
            
            <h2>1. Cancellation Policy</h2>

            <h3>1.1 Subscription Cancellations</h3>
            <p>
                You may cancel your subscription to any of our services at any time through your account settings. Upon cancellation, your subscription will remain active until the end of the current billing cycle. No further payments will be charged after the cancellation is processed.
            </p>

            <h3>1.2 One-Time Service Cancellations</h3>
            <p>
                If you have purchased a one-time service, cancellations are accepted within 24 hours of purchase, provided that the service has not been initiated or delivered. After the 24-hour window, or if the service has commenced, cancellations will no longer be accepted.
            </p>

            <h3>1.3 Workshop/Event Cancellations</h3>
            <p>
                Cancellations for workshops, events, or scheduled sessions must be made at least 48 hours prior to the start of the event for a full refund. Cancellations made within 48 hours of the event may not be eligible for a refund but may be eligible for rescheduling or credits towards future events.
            </p>

            <h2>2. Refund Policy</h2>

            <h3>2.1 Refund Eligibility</h3>
            <p>
                Refunds may be granted at our sole discretion under the following circumstances:
            </p>
            <ul>
                <li>Technical issues that prevent you from accessing the platform or services for an extended period (e.g., system downtime).</li>
                <li>Errors in billing or duplicate charges.</li>
                <li>Refunds for unused portions of a subscription if the service is terminated by LeadMasters AI without cause.</li>
            </ul>

            <h3>2.2 Non-Refundable Services</h3>
            <p>
                Certain services and products may be marked as non-refundable. This includes digital products, downloadable materials, or services that have already been delivered or initiated. Payments for completed services, such as campaigns that have already been executed or delivered, are non-refundable.
            </p>

            <h3>2.3 How to Request a Refund</h3>
            <p>
                If you believe you are entitled to a refund, please contact us at support@leadmasters.ai within 30 days of your purchase or the date the issue occurred. All refund requests must include your account information, the transaction details, and a description of the issue.
            </p>

            <h3>2.4 Processing of Refunds</h3>
            <p>
                Approved refunds will be processed within 14 business days of the request being granted. Refunds will be issued to the original payment method. If that method is no longer valid, an alternative refund method will be arranged. Any bank or transaction fees incurred during the refund process will be deducted from the refunded amount, where applicable.
            </p>

            <h2>3. No Refund Policy</h2>

            <h3>3.1 Subscription and Usage</h3>
            <p>
                Refunds will not be issued for partially used subscriptions or for failure to use the platform’s services. It is the user’s responsibility to manage their subscription and use of the services. Refunds will not be granted for services that are suspended or terminated due to a violation of our Terms and Conditions or Acceptable Use Policy.
            </p>

            <h2>4. Modifications to the Policy</h2>
            <p>
                LeadMasters AI reserves the right to modify this Cancellation and Refund Policy at any time. Any changes to this policy will be effective immediately upon posting on our website. Continued use of our platform or services after changes to the policy constitutes your acceptance of the revised policy.
            </p>

            <h2>5. Contact Information</h2>
            <p>
                If you have any questions or concerns about this policy, please contact us at:
                <br />
                Email: support@leadmasters.ai
                <br />
                Phone: +91 8147808161
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

export default Cancellation
