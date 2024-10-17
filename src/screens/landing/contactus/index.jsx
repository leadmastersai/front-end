import backgr from '../../../assets/landing/backgr.svg';
import './style.scss';
import Icon from '../../../assets/auth/appIcon.svg';
import cont from '../../../assets/blog/cont.svg';
import loc from '../../../assets/landing/Location.svg';
import time from '../../../assets/landing/Message.svg';
import mess from '../../../assets/landing/Calling.svg';
import call from '../../../assets/landing/Time.svg';
import girl from '../../../assets/blog/girl3.svg';
import seo from '../../../assets/blog/seo.svg';
import soc1 from '../../../assets/landing/social1.svg';
import soc2 from '../../../assets/landing/social2.svg';
import soc3 from '../../../assets/landing/social3.svg';
import soc4 from '../../../assets/landing/social4.svg';
import soc5 from '../../../assets/landing/social5.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { postService } from '../../../../services/postServices';
import { Alert ,Spin} from 'antd';

const ContactUs = () => {
const [fname,setFName]=useState('');
const [lname,setLName]=useState('');
const [loading,setLoading]=useState(false);
const [email,setEmail]=useState('');
const [phone,setPhone]=useState('');
const [message,setMessage]=useState('');
const [success, setSuccess] = useState(false); // state for showing success message
  const [error, setError] = useState(false);

const handleSubmit=async(e)=>{
  e.preventDefault();

  const payload={
    firstName:fname,
    lastName:lname,
    email:email,
    phone:phone,
    message:message
  }
  try{
    setLoading(true)
const response=await postService.postContactInfo(payload);
console.log(response.data,"sueccss");
setFName('');
setLName('');
setEmail('');
setPhone('');
setSuccess(true);
setError(false);
setMessage('');
setLoading(false)
setTimeout(() => setSuccess(false), 15000); // Hide after 3 seconds
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
    <>
    <div className='whole-cont'>
          
        <div className="contact-form-container">

    
      <div className="contact-text">
        <h1 className='biggest-text91 closs closs1' style={{textAlign:'left'}}>Contact Our Friendly Support Team Today</h1>
        <p style={{marginRight:'10%'}}>Our support team is available Monday to Friday, 9 AM to 6 PM (GMT+4).</p>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
     
          <div className="form-group">
            <input type="text" placeholder="First Name*" required value={fname} onChange={(e) => setFName(e.target.value)}/>
            <input type="text" placeholder="Last name*" required value={lname} onChange={(e) => setLName(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email id*" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="tel" placeholder="Phone No"value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          
          <div className="form-group">
            <textarea placeholder="Message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          {success && <Alert style={{marginBlock:5}} message="Our Team will Contact you Shortly" type="success" showIcon />}
          {error && <Alert style={{marginBlock:5}} message="There was an error sending your message." type="error" showIcon />}
          <button type="submit" className="submit-button" >
          {loading ? <Spin size="small" /> : "Submit"}
          </button>
        </form>
      </div>
 
    </div>
    <div className="image-container00">

<img className='bg-img-sect55' src={backgr} />
</div>

    </div>
    <div className='contact-info-container57 '>
    <div className="image-container57">
      <img src={cont} alt="Contact Us" />
    </div>
    <div className="footer-section101">
        <h1 className='biggest-text91 kuma closs closs1 cen2'>For inquiries,
        please contact us via</h1>
        <div className="contact-item" style={{marginBlock:5}}>
        <img src={loc} alt="Location Icon" className="contact-icon" />
        <div className="contact-details4">
         
          <p >#81/16, Haralukunte, HSR Layout, Bangalore, 560102</p>
        </div>
      </div>
      <div className="contact-item" style={{marginBlock:5}}>
        <img src={mess} alt="Phone Icon" className="contact-icon" />
        <div className="contact-details4">
        
          <p>+91-8147808161</p>
        </div>
      </div>
      {/* <div className="contact-item">
        <img src={call} alt="Clock Icon" className="contact-icon" />
        <div className="contact-details">
          <p>Response hours:</p>
          <p>8 to 20</p>
        </div>
      </div> */}
      <div className="contact-item" style={{marginBlock:5}}>
        <img src={time} alt="Email Icon" className="contact-icon" />
        <div className="contact-details4">
          {/* <p>Email:</p> */}
          <p>support@leadmasters.ai</p>
        </div>
      </div>
      </div>
     
  </div>
  <div className="newsletter-container">
      <div className="newsletter-content">
        <h1 className='biggest-text91 closs' style={{textAlign:'left',width:'130%'}}>Be a Part of Innovation</h1>
        <p>Join our dynamic team and help shape the future of AI-driven lead generation and digital marketing</p>
     
        <button className="cta-button90" onClick={()=>navigate("/contactus")}>Join Us</button>
      </div>
      <div className="newsletter-image101">
        <img src={seo} alt="Newsletter" />
      </div>
    </div>
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
  </>
  )
}

export default ContactUs
