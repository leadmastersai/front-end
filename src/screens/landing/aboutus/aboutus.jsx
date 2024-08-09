import { Link, useNavigate } from 'react-router-dom';
import './style.scss';
import backgr from '../../../assets/landing/backgr.svg';
import seo from '../../../assets/blog/seo.svg';
import soc1 from '../../../assets/landing/social1.svg';
import soc2 from '../../../assets/landing/social2.svg';
import soc3 from '../../../assets/landing/social3.svg';
import soc4 from '../../../assets/landing/social4.svg';
import soc5 from '../../../assets/landing/social5.svg';


import loc from '../../../assets/landing/Location.svg';
import time from '../../../assets/landing/Message.svg';
import mess from '../../../assets/landing/Calling.svg';
import call from '../../../assets/landing/Time.svg';
import Icon from '../../../assets/auth/appIcon.svg';
import Back from '../../../assets/aboutus/mask.svg';
import found from '../../../assets/aboutus/founder.svg';
import two from '../../../assets/aboutus/two.svg';
import layer from '../../../assets/aboutus/layer.svg';

const Aboutus = () => {
    const navigate = useNavigate();
  return (
    <div>
         
   <div className="container-section99">
      <h1 className="biggest-text9">LeadMasters AI is dedicated to <span className="purple-text">revolutionizing</span></h1>
      <h1 className="biggest-text9 smaller">marketing through cutting-edge</h1>
      <h1 className="biggest-text9 smallest">AI technology.</h1>
    </div>
    <div className="image-container">
    <img className='bg-img-sect55' src={backgr} />
    <img className='bg-img-sect77' src={Back} />
    </div>
    <section className='container-section4'>
    <h3 className='biggest-text1'>Our Story</h3>
    <p style={{width:'50vw',textAlign:'center',marginBottom:'5vh'}}>“Seamlessly integrate LeadMasters AI with your existing tools and platforms to create a unified marketing ecosystem. Our integration capabilities ensure that data flows smoothly between systems, enhancing workflow efficiency and data accuracy.”</p>
    <div className="image-container">
    <img className='bg-img-sect55' src={backgr} />
    <img className='bg-img-sect77' src={two} />
    </div>
    <div className="team-member">
    <div >
      
        <img src={found} alt="Abdullah Khan" className="profile-img"/>
    </div>
    <div className="content">
        <h2>Abdullah Khan</h2>
        <h3>-CEO & Founder</h3>
        <p>With 16 years of experience in corporate training and software development, Abdullah leads the team with a vision for innovation and excellence.</p>
    </div>
</div>
<div className="our-values">
            <h1 className='biggest-text1' style={{alignItems:'center'}}>Our Values</h1>
            <div className="values-container">
                <div className="value-card">
                    <img src={layer} alt="Innovation Icon" />
                    <h2>Innovation</h2>
                    <p>Constantly pushing the boundaries of AI technology</p>
                </div>
                <div className="value-card">
                    <img src={layer} alt="Customer Success Icon" />
                    <h2>Customer Success</h2>
                    <p>Dedicated to helping our customers achieve their goals.</p>
                </div>
                <div className="value-card">
                    <img src={layer} alt="Transparency Icon" />
                    <h2>Transparency</h2>
                    <p>Building trust through open and honest communication.</p>
                </div>
            </div>
        </div>
    </section>
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h1 className='biggest-text9' style={{textAlign:'left',width:'130%'
        }}>Subscribe to our newsletter for the latest updates</h1>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email id" />
          
        </div>
        <button className="cta-button90" onClick={()=>navigate("/signup")}>Get Started Free</button>
      </div>
      <div className="newsletter-image">
        <img src={seo} alt="Newsletter" />
      </div>
    </div>
    <footer className="footer9">
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
   </div>
    
  )
}

export default Aboutus
