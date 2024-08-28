import enter from '../../../assets/landing/enter.svg';
import pro from '../../../assets/landing/pro.svg';
import free from '../../../assets/landing/free.svg';
import './style.scss';
import Pguy from '../../../assets/blog/pointingguy.svg';
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
import { useRef, useState } from 'react';
import ComingSoonModal from '../../../modals/comingSoon';
import { Alert, Spin } from 'antd';
import { postService } from '../../../../services/postServices';

const Pricing = () => {
  const plansRef = useRef(null);
    const navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const scrollToPlans = () => {
      plansRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
    
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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

    const plans = [
        {
          name: 'Free Plan',
          icon: free,
          price: { amount: '$0', period: '/Per Month', annual: '450' },
          features: ['AI-Powered Lead Generation', 'Basic Analytics', 'Email Support.'],
          buttonText: 'Subscribe for Free',
          buttonLink: '/signup'
        },
        {
          name: 'Pro Plan',
          icon: pro,
          price: { amount: '$99', period: '/Per Month', annual: '450' },
          features: ['All Basic Plan features', 'Multi-Channel Ad Optimization', 'Advanced Analytics & Priority Support'],
          buttonText: 'Choose your Plan',
          buttonLink: 'signup'
        },
        {
          name: 'Enterprise Plan',
          icon: enter,
          price: {},
          features: ['All Professional Plan features', 'Custom Integrations', 'Dedicated Account Manager',' Enterprise Support'],
          buttonText: 'Contact Our Team',
          buttonLink: 'signup'
        }
      ];

      const PricingCard = ({ plan, price, features, buttonText, buttonLink, showModal }) => {
        const handleClick = () => {
          if (plan.name === 'Enterprise Plan' || plan.name === 'Pro Plan') {
            showModal();
          } else {
            window.location.href = buttonLink;
          }
        };
      
        return (
          <div className="pricing-card">
            <div className="pricing-header">
              <img src={plan.icon} alt={`${plan.name} icon`} className="plan-icon" />
              <h3 style={{ marginLeft: '1vw' }}>{plan.name}</h3>
            </div>
            <span style={{ textAlign: 'left', justifyContent: 'flex-start', marginLeft: '-30vh' }}>Features</span>
            <ul className="features-list">
              {features.map((feature, index) => (
                <li className="small-p-rngs" key={index}>{feature}</li>
              ))}
            </ul>
      
            <div className="pricing-price">
              <h2>{price.amount}</h2>
              <span>{price.period}</span>
            </div>
      
            <p className="small-p-rngs1" style={{ width: 300, marginLeft: '2%' }}>Ideal For: Small businesses looking to get started with AI-driven marketing.</p>
            <a className="cta-button" onClick={handleClick}>
              {buttonText}
            </a>
          </div>
        );
      };
      
    
  return (
    <div>
    <ComingSoonModal isVisible={isModalVisible} onClose={handleClose} />
      <section className='container-section4'>
      <h3 className='biggest-text1 support-css biggest-text91' >Flexible and competitive pricing plans designed
      to meet your business needs.</h3>
{/* <p style={{wi<img className='bg-img-sect5' src={backgr} />dth:'40vw',textAlign:'center',marginBottom:'5vh'}}>Connect and network with other professionals on the platform, share insights, and collaborate on projects.</p> */}
<img className='bg-img-sect5' src={backgr} />
      <div className="pricing-cards sup-cards">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan}
            price={plan.price}
            features={plan.features}
            buttonText={plan.buttonText}
            showModal={showModal}
            buttonLink={plan.buttonLink}
          />
        ))}
      </div>
      </section>
      <section className='container-section4' >
      <h1 className='biggest-text91'>Comparison Table</h1>
{/* <p style={{width:'40vw',textAlign:'center',marginBottom:'5vh'}}>Connect and network with other professionals on the platform, share insights, and collaborate on projects.</p> */}
<img className='features-section77' src={sect9}  />
<div style={{justifyContent:'center',textAlign:'center',marginBlock:'5vh',alignSelf:'center'}}> 
<a  className="cta-button" style={{marginInline:0}}  onClick={scrollToPlans}>
              Choose Your Plan
            </a>
            </div>
      </section>
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
        <p className='bora'>Connect and network with other professionals on the platform, share insights, and collaborate on projects.</p>
      </div>
      <div className="footer-section">
        <h3>Quick links</h3>
        <ul >
        <li><a className='jumpa' href="/aboutus">About Us</a></li>
           <li><a className='jumpa' href="/contactus">Contact</a></li>
           <li><a className='jumpa' href="/blog">Blog</a></li>
           <li><a className='jumpa' href="#">Terms of Service</a></li>
           <li><a className='jumpa' href="#">Privacy Policy</a></li>
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
        <h3 className='wht'>Stay up to date with the latest courses</h3>
        <form className="subscribe-form2" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit">{loading ? <Spin size="small" /> : "Send"}</button>
        </form>
        {success && <Alert style={{marginBlock:5}} message="Submitted successfully!" type="success" showIcon />}
        {error && <Alert style={{marginBlock:5}} message="There was an error sending your message." type="error" showIcon />}
        <div className="follow-us">
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
     
      </div>
   
    </footer>
    <p className='last-line'>© 2024 | Powered by LeadMaster.AI</p>
    </div>

  )
}

export default Pricing
