import backgr from '../../../assets/landing/backgr.svg';
import './style.scss';
import Icon from '../../../assets/auth/appIcon.svg';
import cont from '../../../assets/blog/cont.svg';
import loc from '../../../assets/landing/Location.svg';
import time from '../../../assets/landing/Message.svg';
import mess from '../../../assets/landing/Calling.svg';
import call from '../../../assets/landing/Time.svg';
import girl from '../../../assets/blog/girl3.svg';
import soc1 from '../../../assets/landing/social1.svg';
import soc2 from '../../../assets/landing/social2.svg';
import soc3 from '../../../assets/landing/social3.svg';
import soc4 from '../../../assets/landing/social4.svg';
import soc5 from '../../../assets/landing/social5.svg';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className='whole-cont'>
          
        <div className="contact-form-container">

    
      <div className="contact-text">
        <h1 className='biggest-text91' style={{textAlign:'left'}}>Contact Our Friendly Support Team Today</h1>
        <p>Our support team is available Monday to Friday, 9 AM to 6 PM (GMT+4).</p>
      </div>

      <div className="contact-form">
        <form>
          <div className="form-group">
            <input type="text" placeholder="First Name*" required />
            <input type="text" placeholder="Last name*" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email id*" required />
            <input type="tel" placeholder="Phone No" />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
 
    </div>
    <div className="image-container00">

<img className='bg-img-sect55' src={backgr} />
</div>

    </div>
    <div className='contact-info-container57'>
    <div className="image-container57">
      <img src={cont} alt="Contact Us" />
    </div>
    <div className="footer-section">
        <h1 style={{fontSize:40,fontWeight:'500'}}>For inquiries,
        please contact us via</h1>
        <div className="contact-item" style={{marginBlock:5}}>
        <img src={loc} alt="Location Icon" className="contact-icon" />
        <div className="contact-details">
         
          <p >#81/16, Haralukunte, HSR Layout, Bangalore, 560102</p>
        </div>
      </div>
      <div className="contact-item" style={{marginBlock:5}}>
        <img src={mess} alt="Phone Icon" className="contact-icon" />
        <div className="contact-details">
        
          <p>8147808161</p>
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
        <div className="contact-details">
          {/* <p>Email:</p> */}
          <p>support@leadmasters.ai</p>
        </div>
      </div>
      </div>
     
  </div>
  <div className='girl-container1'>
  <button className="cta-button93" onClick={()=>navigate("/signup")}>Get Started Free</button>
  <img src={girl} alt="ss" className='girl-cont'/>
  </div>
  <footer className="footer9" style={{marginTop:'5vh'}}>
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
          <p>8147808161</p>
        </div>
      </div>
      <div className="contact-item">
        <img src={call} alt="Clock Icon" className="contact-icon" />
        <div className="contact-details">
          <p>Response hours:</p>
          <p>8 to 20</p>
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
  </>
  )
}

export default ContactUs
