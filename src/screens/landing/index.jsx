
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
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Alert, Spin } from 'antd';
import { postService } from '../../../services/postServices';





const Landing = () => {
  const navigate = useNavigate();

  const [loading,setLoading]=useState(false);
  const [email,setEmail]=useState('');
  
  const [success, setSuccess] = useState(false); // state for showing success message
    const [error, setError] = useState(false);


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

  const productRef = useRef(null);
  const featuresRef = useRef(null);
  const featuresRef2 = useRef(null);
  const featuresRef3 = useRef(null);
  const featuresRef4 = useRef(null);
  const featuresRef5 = useRef(null);

  const featuresRef6 = useRef(null);
  const featuresRef7 = useRef(null);
  const featuresRef8 = useRef(null);
  const featuresRef9 = useRef(null);
  const featuresRef10 = useRef(null);
  const featuresRef11 = useRef(null);
  const featuresRef12 = useRef(null);
  // Checking if sections are in view
  const productInView = useInView(productRef, { once: false, threshold: 0.1 });
  const featuresInView = useInView(featuresRef, { once: false, threshold: 0.1 });
  const featuresInView2 = useInView(featuresRef2, { once: false, threshold: 0.1 });
  const featuresInView3 = useInView(featuresRef3, { once: false, threshold: 0.1 });
  const featuresInView4= useInView(featuresRef4, { once: false, threshold: 0.1 });
  const featuresInView5= useInView(featuresRef5, { once: false, threshold: 0.1 });
  const featuresInView6 = useInView(featuresRef6, { once: false, threshold: 0.1 });
  const featuresInView7 = useInView(featuresRef7, { once: false, threshold: 0.1 });
  const featuresInView8 = useInView(featuresRef8, { once: false, threshold: 0.1 });
  const featuresInView9= useInView(featuresRef9, { once: false, threshold: 0.1 });
  const featuresInView10= useInView(featuresRef10, { once: false, threshold: 0.1 });
  const featuresInView11= useInView(featuresRef11, { once: false, threshold: 0.1 });
  const featuresInView12= useInView(featuresRef12, { once: false, threshold: 0.1 });
  
  // Variants for text animation
  const textVariants = {
    hidden: { opacity: 0, y: 100, x: -200 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 2, ease: 'easeOut' },
    },
  };

  // Variants for image animation
  const imageVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 2, ease: 'easeOut' },
    },
  };
  


  
  const PricingCard = ({ plan, price, features, buttonText, buttonLink ,index}) => {
    return (
      <motion.div className="pricing-card" variants={imageVariants}>
        <div className="pricing-header">
          <motion.img  src={plan.icon} alt={`${plan.name} icon`} className="plan-icon" />
          <h3 style={{marginLeft:'1vw'}}>{plan.name}</h3>
        </div>
        <div className="pricing-price">
          <h2>${price.amount}</h2>
          <span>{price.period}</span>
        </div>
        <p className='small-p-rng' >{features}</p>
        <p className="annual-price"   style={{ opacity: index === 0 ? 0 : 1 }} >● ${price.annual} When Paid Annually</p>
        <a className="cta-button" onClick={()=>navigate("/signup")}>
          {buttonText}
        </a>
      </motion.div>
    );
  };

  const [imagesLoaded, setImagesLoaded] = useState({
    section1: false,
    section2: false,
    // add more sections as needed
  });

  const handleImageLoad = (section) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [section]: true,
    }));
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

  // Example for section1
  const isSection1Ready = imagesLoaded.section1;

  return (
    <div>
 
 <section className='container-section1' style={{marginBlock:'20vh'}} >
      <img src={sect6} className='features-section6' />
      <button className="cta-button9" onClick={()=>navigate("/signup")}>Get Started Free</button>

      </section>

      {/* Features Section */}
      <section
       
        id="features"
        className="features-section"
        
      >
        <div className="features-content">
          <h3 className='biggest-text1' >
            Why LeadMasters.ai?
          </h3>
          <img src={slides} className='half-img'  />
          <img src={analytics} className='anthr-img' />
          <img src={chart1} className='anthr-img1' />
          <img src={social} className='anthr-img2' />
        </div>
      </section>
      <section className='container-section1'  >
      <img src={section1} className='features-section1'/>

      </section>
      <section className='container-section2' >
      <img src={section2} className='features-section2'/>
      </section>
      <section className='container-section3' >
      <img src={section3} className='features-section1' />
      </section>
      <section className='container-section4' >
      <h3 className='biggest-text1' >Analytics Dashboard</h3>
<p style={{width:'50vw',textAlign:'center',marginBottom:'5vh'}}>Comprehensive insights into your marketing performance with metrics like impressions, engagement rate, and new followers.</p>
<div style={{marginInline:'auto'}}>
<img src={num1} className='img-cont-sect4' />
<img src={num2} className='img1-cont-sect4' />
<img src={num3} className='img2-cont-sect4'/>
<img src={num4} className='img3-cont-sect4'/>
</div>
      </section>
      <section className='container-section4'>
  <h3 className='biggest-text1'>Automation Tools</h3>
  <p style={{ width: '50vw', textAlign: 'center', marginBottom: '5vh' }}>
    Automate your marketing activities with features like scheduled reposts, delay threads, and autopilot for social posts.
  </p>
  <img className='bg-img-sect5' src={backgr} />
  <img className='cards-img-sect5' src={cards} />
</section>

<section className='container-section4'>
  <h3 className='biggest-text1'>Team Collaboration</h3>
  <p style={{ width: '40vw', textAlign: 'center', marginBottom: '5vh' }}>
    Invite and manage team members, assign roles, and collaborate on ad campaigns.
  </p>
  <img className='features-section6' src={sect7} />
</section>

<section className='container-section4'>
  <h3 className='biggest-text1'>AI Personalization</h3>
  <p style={{ width: '40vw', textAlign: 'center', marginBottom: '5vh' }}>
    Personalize your ads by providing information about yourself and your company to tailor ad suggestions.
  </p>
  <img className='bg-img-sect5' src={backgr} />
  <img className='cards-img-sect5' src={sect8} />
</section>

<section className='container-section4' style={{ marginTop: '-20vh' }}>
  <h3 className='biggest-text1'>Professional Networking</h3>
  <p style={{ width: '40vw', textAlign: 'center', marginBottom: '5vh' }}>
    Connect and network with other professionals on the platform, share insights, and collaborate on projects.
  </p>
  <img className='features-section7' src={sect9} />
</section>

<section className='container-section4'>
  <h3 className='biggest-text1'>Choose Your Plan</h3>
  <p style={{ width: '40vw', textAlign: 'center', marginBottom: '5vh' }}>
    Connect and network with other professionals on the platform, share insights, and collaborate on projects.
  </p>
  <div className="pricing-cards">
    {plans.map((plan, index) => (
      <PricingCard
        key={index}
        plan={plan}
        index={index}
        price={plan.price}
        features={plan.features}
        buttonText={plan.buttonText}
        buttonLink={plan.buttonLink}
      />
    ))}
  </div>
</section>

      <section className='container-section4' style={{marginTop:'-20vh'}}  >
 <button  className="cta-button96" onClick={()=>navigate("/signup")}>Get Started Free</button>
<img className='bg-img-sect5' src={backgr}/>
<img className='cards-img-sect6' src={sect10}/>
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
        <li><a className='jumpa' href="/aboutus">About Us</a></li>
           <li><a className='jumpa' href="/contactus">Contact</a></li>
           <li><a className='jumpa' href="/blog">Blog</a></li>
           <li><a className='jumpa' href="#">Terms of Service</a></li>
           <li><a className='jumpa' href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-section">
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

      <div className="footer-section">
        <h3>Stay up to date with the latest courses</h3>
        <form className="subscribe-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit">{loading ? <Spin size="small" /> : "Send"}</button>
        </form>
        {success && <Alert style={{marginBlock:5}} message="Submitted successfully!" type="success" showIcon />}
        {error && <Alert style={{marginBlock:5}} message="There was an error sending your message." type="error" showIcon />}
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


