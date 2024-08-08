
import './styles.scss';
import Icon from '../../assets/auth/appIcon.svg'
import First from '../../assets/landing/first.svg';
import left from '../../assets/landing/left.svg';
import right from '../../assets/landing/right.svg';
import slides from '../../assets/landing/slides.svg';
import analytics from '../../assets/landing/Analytics.svg';
import chart1 from '../../assets/landing/chart1.svg';
import social from '../../assets/landing/social.svg';
import section1 from '../../assets/landing/section1.svg';
import section2 from '../../assets/landing/section2.svg';
import section3 from '../../assets/landing/section3.svg';
import num1 from '../../assets/landing/number1.svg';
import num2 from '../../assets/landing/number2.svg';
import num3 from '../../assets/landing/number3.svg';
import num4 from '../../assets/landing/number4.svg';
import cards from '../../assets/landing/cards.svg';
import backgr from '../../assets/landing/backgr.svg';
import sect6 from '../../assets/landing/sect6.svg';
import sect7 from '../../assets/landing/section7.svg';
import sect8 from '../../assets/landing/sect8.svg';
import sect10 from '../../assets/landing/sect10.svg';
import sect9 from '../../assets/landing/sect9.svg';
import enter from '../../assets/landing/enter.svg';
import pro from '../../assets/landing/pro.svg';
import free from '../../assets/landing/free.svg';
import soc1 from '../../assets/landing/social1.svg';
import soc2 from '../../assets/landing/social2.svg';
import soc3 from '../../assets/landing/social3.svg';
import soc4 from '../../assets/landing/social4.svg';
import soc5 from '../../assets/landing/social5.svg';
import loc from '../../assets/landing/Location.svg';
import time from '../../assets/landing/Message.svg';
import mess from '../../assets/landing/Calling.svg';
import call from '../../assets/landing/Time.svg';
import { Link, useNavigate } from 'react-router-dom';





const Landing = () => {
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: 'Free Plan',
      icon: free,
      price: { amount: '00', period: '/Per Month', annual: '450' },
      features: 'Basic features to get started.',
      buttonText: 'Start Your Free Trial',
      buttonLink: '#'
    },
    {
      name: 'Pro Plan',
      icon: pro,
      price: { amount: '25', period: '/Per Month', annual: '450' },
      features: 'Advanced tools for growing businesses.',
      buttonText: 'Compare Plans',
      buttonLink: '#'
    },
    {
      name: 'Enterprise Plan',
      icon: enter,
      price: { amount: '30', period: '/Per Month', annual: '450' },
      features: 'Comprehensive suite for large teams.',
      buttonText: 'Compare Plans',
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
        <div className="pricing-price">
          <h2>${price.amount}</h2>
          <span>{price.period}</span>
        </div>
        <p className='small-p-rng' >{features}</p>
        <p className="annual-price">● ${price.annual} When Paid Annually</p>
        <a href={buttonLink} className="cta-button">
          {buttonText}
        </a>
      </div>
    );
  };

  return (
    <div>
 
    <section id="product" className="main-section" style={{ marginTop: '8rem' }}>
        <h1 className='biggest-text'>Maximize Your Marketing Potential with AI</h1>
        <p>Automate, Optimize, and Grow with LeadMasters.ai</p>
        <button className="cta-button8">Get Started Free</button>
        <img className='biggest-img' src={First} />
        <img className='left-img' src={left} />
        <img className='right-img' src={right} />
      </section>
      <section id="features" className="features-section">
        
        <div className="features-content">
        <h3 className='biggest-text1'>Why LeadMasters.ai?</h3>
         <img src={slides} className='half-img'/> 
<img src={analytics} className='anthr-img'/>
<img src={chart1} className='anthr-img1'/>
<img src={social} className='anthr-img2'/>

          
          <div className="features-graphics">
            {/* <img src="path-to-graphic1.png" alt="Graphic 1" className="feature-graphic" />
            <img src="path-to-graphic2.png" alt="Graphic 2" className="feature-graphic" />
            <img src="path-to-graphic3.png" alt="Graphic 3" className="feature-graphic" /> */}
          </div>
        </div>
      </section>
      <section className='container-section1'>
      <img src={section1} className='features-section1' />

      </section>
      <section className='container-section2'>
      <img src={section2} className='features-section2' />
      </section>
      <section className='container-section3'>
      <img src={section3} className='features-section1' />
      </section>
      <section className='container-section4'>
      <h3 className='biggest-text1'>Analytics Dashboard</h3>
<p style={{width:'50vw',textAlign:'center',marginBottom:'5vh'}}>Comprehensive insights into your marketing performance with metrics like impressions, engagement rate, and new followers.</p>
<div style={{marginInline:'auto'}}>
<img src={num1} className='img-cont-sect4'/>
<img src={num2} className='img1-cont-sect4' />
<img src={num3} className='img2-cont-sect4'/>
<img src={num4} className='img3-cont-sect4'/>
</div>
      </section>
      <section className='container-section4'>
      <h3 className='biggest-text1'>Automation Tools</h3>
<p style={{width:'50vw',textAlign:'center',marginBottom:'5vh'}}>Automate your marketing activities with features like scheduled reposts, delay threads, and autopilot for social posts.</p>
<img className='bg-img-sect5' src={backgr} />
<img className='cards-img-sect5' src={cards} />
      </section>
      <section className='container-section1' style={{marginTop:'-15vh'}}>
      <img src={sect6} className='features-section6'/>
      <button className="cta-button9">Get Started Free</button>

      </section>
      <section className='container-section4'>
      <h3 className='biggest-text1'>Team Collaboration</h3>
<p style={{width:'40vw',textAlign:'center',marginBottom:'5vh'}}>Invite and manage team members, assign roles, and collaborate on ad campaigns.</p>
<img className='features-section6' src={sect7} />

      </section>
      <section className='container-section4'>
      <h3 className='biggest-text1'>AI Personalization</h3>
<p style={{width:'40vw',textAlign:'center',marginBottom:'5vh'}}>Personalize your ads by providing information about yourself and your company to tailor ad suggestions.</p>
<img className='bg-img-sect5' src={backgr} />
<img className='cards-img-sect5' src={sect8} />

      </section>
      <section className='container-section4' style={{marginTop:'-20vh'}}>
      <h3 className='biggest-text1'>Professional Networking</h3>
<p style={{width:'40vw',textAlign:'center',marginBottom:'5vh'}}>Connect and network with other professionals on the platform, share insights, and collaborate on projects.</p>
<img className='features-section7' src={sect9} />

      </section>
      <section className='container-section4' >
      <h3 className='biggest-text1'>Choose Your Plan</h3>
<p style={{width:'40vw',textAlign:'center',marginBottom:'5vh'}}>Connect and network with other professionals on the platform, share insights, and collaborate on projects.</p>
      <div className="pricing-cards">
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
  );
};

export default Landing;


