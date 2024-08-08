import enter from '../../../assets/landing/enter.svg';
import pro from '../../../assets/landing/pro.svg';
import free from '../../../assets/landing/free.svg';
import './style.scss';
import soc1 from '../../../assets/landing/social1.svg';
import soc2 from '../../../assets/landing/social2.svg';
import soc3 from '../../../assets/landing/social3.svg';
import soc4 from '../../../assets/landing/social4.svg';
import soc5 from '../../../assets/landing/social5.svg';
import Icon from '../../../assets/auth/appIcon.svg';
import sect10 from '../../../assets/landing/sect10.svg';
import backgr from '../../../assets/landing/backgr.svg';
import loc from '../../../assets/landing/Location.svg';
import time from '../../../assets/landing/Message.svg';
import mess from '../../../assets/landing/Calling.svg';
import call from '../../../assets/landing/Time.svg';
import sect9 from '../../../assets/pricing/table.svg';
import { Link, useNavigate } from 'react-router-dom';

const Pricing = () => {
    const navigate = useNavigate();
    const plans = [
        {
          name: 'Free Plan',
          icon: free,
          price: { amount: '$49', period: '/Per Month', annual: '450' },
          features: ['AI-Powered Lead Generation', 'Basic Analytics', 'Email Support.'],
          buttonText: 'Choose your Plan',
          buttonLink: '#'
        },
        {
          name: 'Pro Plan',
          icon: pro,
          price: { amount: '$99', period: '/Per Month', annual: '450' },
          features: ['All Basic Plan features', 'Multi-Channel Ad Optimization', 'Advanced Analytics & Priority Support'],
          buttonText: 'Choose your Plan',
          buttonLink: '#'
        },
        {
          name: 'Enterprise Plan',
          icon: enter,
          price: {},
          features: ['All Professional Plan features', 'Custom Integrations', 'Dedicated Account Manager',' Enterprise Support'],
          buttonText: 'Customize Pricing',
          buttonLink: '#'
        }
      ];

      const PricingCard = ({ plan, price, features, buttonText, buttonLink }) => {
        return (
          <div className="pricing-card">
            <div className="pricing-header">
              <img src={plan.icon} alt={`${plan.name} icon`} className="plan-icon" />
              <h3 style={{marginLeft:'1vw'}}>{plan.name}</h3>
            </div>
            <span style={{textAlign:'left',justifyContent:'flex-start',marginLeft:'-30vh'}}>Features</span>
            <ul className="features-list">
            {features.map((feature, index) => (
          <li className='small-p-rngs' key={index}>{feature}</li>
        ))}
        </ul>
   
          <div className="pricing-price" >
            <h2>{price.amount}</h2>
            <span>{price.period}</span>
          </div>
        

  
            <p className="small-p-rngs1" style={{width:300,marginLeft:'2%'}}>Ideal For: Small businesses looking to get started with AI-driven marketing.</p>
            <a href={buttonLink} className="cta-button">
              {buttonText}
            </a>
          </div>
        );
      };
    
  return (
    <div>
  
      <section className='container-section4' >
      <h3 className='biggest-text1' style={{textAlign:'center',width:'68vw',marginTop:'4vh'}}>Flexible and competitive pricing plans designed
      to meet your business needs.</h3>
{/* <p style={{wi<img className='bg-img-sect5' src={backgr} />dth:'40vw',textAlign:'center',marginBottom:'5vh'}}>Connect and network with other professionals on the platform, share insights, and collaborate on projects.</p> */}
<img className='bg-img-sect5' src={backgr} />
      <div className="pricing-cards" style={{marginTop:'-80vh'}}>
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan}
            price={plan.price}
            features={plan.features}
            buttonText={plan.buttonText}
            buttonLink={plan.buttonLink}
          />
        ))}
      </div>
      </section>
      <section className='container-section4' >
      <h3 className='biggest-text1'>Comparison Table</h3>
{/* <p style={{width:'40vw',textAlign:'center',marginBottom:'5vh'}}>Connect and network with other professionals on the platform, share insights, and collaborate on projects.</p> */}
<img className='features-section77' src={sect9}  />
<div style={{justifyContent:'center',textAlign:'center',marginBlock:'5vh',alignSelf:'center'}}> 
<a  className="cta-button" style={{marginInline:0}}>
              Choose Your Plan
            </a>
            </div>
      </section>
      <section className='container-section4' style={{marginTop:'-20vh'}}>
 
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

export default Pricing
