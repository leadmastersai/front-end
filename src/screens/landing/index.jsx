import Pguy from '../../assets/blog/pointingguy.svg';
import './styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import aut1 from '../../assets/landing/aut1.svg';
import aut2 from '../../assets/landing/aut2.svg';
import aut3 from '../../assets/landing/aut3.svg';
import aut4 from '../../assets/landing/aut4.svg';
import aut5 from '../../assets/landing/aut5.svg';
import aut6 from '../../assets/landing/aut6.svg';
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
import l1 from '../../assets/landing/l1.svg';
import l2 from '../../assets/landing/l2.svg';
import l3 from '../../assets/landing/l3.svg';
import l4 from '../../assets/landing/l4.svg';
import l5 from '../../assets/landing/l5.svg';
import l6 from '../../assets/landing/l6.svg';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Alert, Spin } from 'antd';
import { postService } from '../../../services/postServices';
import TestimonialSwiper from '../../components/testimonialSwiper';
import sing1 from '../../assets/landing/sing1.svg' ;
import sing2 from '../../assets/landing/sing2.svg' ;
import sing3 from '../../assets/landing/sing3.svg' ;
import ComingSoonModal from '../../modals/comingSoon';







const Landing = () => {
  const plansRef = useRef(null);
    const navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);  const [loading,setLoading]=useState(false);
  const [email,setEmail]=useState('');
  
  const [success, setSuccess] = useState(false); // state for showing success message
    const [error, setError] = useState(false);
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


  const features1=[
    {image:l1},
    {image:l2},
    {image:l3},
    {image:l4},
    {image:l5},
    {image:l6},
  ]
  const features2=[
    {image:sing1,text:'1. Sign Up and Connect Your Account With Leadmasters'},
    {image:sing2,text:'2. Choose and Customize Your Ad Templates'},
    {image:sing3 ,text:'3.  Launch Your Campaign across Google, Meta, LinkedIn and Twitter and Track Performance'},
  ]
  const autm=[
    {image:aut1},
    {image:aut2},
    {image:aut3},
    {image:aut4},
    {image:aut5},
    {image:aut6},
  ]

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
 <section
       
       id="product"
       className="main-section"
       style={{ marginTop: '8rem' }}
     
     >
       <h1 className='biggest-text91 closs2'>
         Maximize Your Marketing Potential with AI
       </h1>
     <p className='closs2'>
         Automate, Optimize, and Grow with LeadMasters.ai
       </p>
       <button
         className="cta-button8"
         onClick={() => navigate("/signup")}
       
       >
         Get Started Free
       </button>
       <img
         className='biggest-img'
         src={First}
        
       />
       <img
         className='left-img'
         src={left}
        
       />
       <img
         className='right-img'
         src={right}
        
       />
     </section>
 


      {/* Features Section */}
      <section
       
        id="features"
        className="features-section"
        
      >
        <div className="features-content">
          <h3 className='biggest-text91 closs cen' >
            Why LeadMasters.ai?
          </h3>
          <div className='new-cont'>
            <div className='l-cont'>
          <img src={slides} className='half-img'  />
          </div>
          <div className='l-cont'>
          <img src={analytics} className='anthr-img' />
          <img src={chart1} className='anthr-img1' />
          <img src={social} className='anthr-img2' />
          </div>
          </div>
        </div>
      </section>
  <div>
    <TestimonialSwiper />
  </div>
      <section className='container-section1'  >
      <h3 className='biggest-text91 closs2 '>Our Powerfull Features</h3>
      <div className="features-container-cards0">
        {features1.map((feature, index) => (
          <div key={index} className="feature-card-img0">
            <img src={feature.image} alt={`Feature ${index + 1}`} className="feature-image1" />
          </div>
        ))}
      </div>

      </section>
  
      <section className='container-section3j' >
      <h3 className='biggest-text91 closs2 '>How It Works</h3>
      <div className="features-container-cards09">
        {features2.map((feature, index) => (
          <div key={index} className="feature-card-img09">
            <img src={feature.image} alt={`Feature ${index + 1}`} className="feature-image09" />
            <h4 style={{textAlign:'center'}} className='' >{feature.text}</h4>
          </div>
        ))}
      </div>
      </section>
      <section className='container-section4' >
      <h3 className='biggest-text91 closs2 ' >Analytics Dashboard</h3>
<p className='closs closs2' style={{width:'50vw',textAlign:'center',marginBottom:'5vh'}}>Comprehensive insights into your marketing performance with metrics like impressions, engagement rate, and new followers.</p>
<div style={{marginInline:'auto'}}>
<img src={num1} className='img-cont-sect4' />
<img src={num2} className='img1-cont-sect4' />
<img src={num3} className='img2-cont-sect4'/>
<img src={num4} className='img3-cont-sect4'/>
</div>
      </section>
      <section className='container-section4'>
  <h3 className='biggest-text91 closs2'>Automation Tools</h3>
  <p className='closs closs2' style={{ width: '50vw', textAlign: 'center', marginBottom: '5vh' }}>
    Automate your marketing activities with features like scheduled reposts, delay threads, and autopilot for social posts.
  </p>
  <img className='bg-img-sect5' src={backgr} />
  <div className="features-container-cards07">
        {autm.map((feature, index) => (
          <div key={index} className="feature-card-img07">
            <img src={feature.image} alt={`Feature ${index + 1}`} className="feature-image1" />
          </div>
        ))}
      </div>
</section>

<section className='container-section4'>
  <h3 className='biggest-text91 closs2'>Team Collaboration</h3>
  <p className='closs closs2' style={{ width: '40vw', textAlign: 'center', marginBottom: '5vh' }}>
    Invite and manage team members, assign roles, and collaborate on ad campaigns.
  </p>
  <img className='features-section6 mobile-width' src={sect7} />
</section>

<section className='container-section4'>
  <h3 className='biggest-text91 closs2 add-m-top'>AI Personalization</h3>
  <p className='closs closs2'  style={{ width: '40vw', textAlign: 'center', marginBottom: '5vh' }}>
    Personalize your ads by providing information about yourself and your company to tailor ad suggestions.
  </p>
  <img className='bg-img-sect5 m-top' src={backgr} />
  <img className='cards-img-sect5 m-bottom mobile-width ' src={sect8} />
</section>

<section className='container-section4' style={{ marginTop: '-20vh' }}>
  <h3 className='biggest-text91'>Professional Networking</h3>
  <p className='closs closs2' style={{ width: '40vw', textAlign: 'center', marginBottom: '5vh' }}>
    Connect and network with other professionals on the platform, share insights, and collaborate on projects.
  </p>
  <img className='features-section7 add-m-bottom' src={sect9} />
</section>
<section className='container-section4 ' style={{marginBlock:'20vh'}} >
<h3 className='biggest-text91'>Integrations</h3>
  <p className='closs closs2' style={{ width: '40vw', textAlign: 'center', marginBottom: '5vh' }}>
   Seamlessly integrate with platforms like Twitter, LinkedIn, and other social media networks.
  </p>
      <img src={sect6} className='features-section6 add-m-bottom' />
      <button className="cta-button9 cta-m-top" onClick={()=>navigate("/signup")}>Get Started Free</button>

      </section>

<section className='container-section4'>
  <h3 className='biggest-text91  '>Choose Your Plan</h3>
  <p className='closs2 closs' style={{ width: '40vw', textAlign: 'center', marginBottom: '5vh' }}>
    Connect and network with other professionals on the platform, share insights, and collaborate on projects.
  </p>
  <ComingSoonModal isVisible={isModalVisible} onClose={handleClose} />
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
  );
};

export default Landing;


