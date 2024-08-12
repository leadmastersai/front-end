
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





const Landing = () => {
  const navigate = useNavigate();



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
  


  
  const PricingCard = ({ plan, price, features, buttonText, buttonLink }) => {
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
        <p className="annual-price">● ${price.annual} When Paid Annually</p>
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

  // Example for section1
  const isSection1Ready = imagesLoaded.section1;

  return (
    <div>
 
 <motion.section
        ref={productRef}
        id="product"
        className="main-section"
        style={{ marginTop: '8rem' }}
        initial="hidden"
        animate={productInView ? 'visible' : 'hidden'}
      >
        <motion.h1 className='biggest-text' variants={textVariants}>
          Maximize Your Marketing Potential with AI
        </motion.h1>
        <motion.p variants={textVariants}>
          Automate, Optimize, and Grow with LeadMasters.ai
        </motion.p>
        <motion.button
          className="cta-button8"
          onClick={() => navigate("/signup")}
          variants={textVariants}
        >
          Get Started Free
        </motion.button>
        <motion.img
          className='biggest-img'
          src={First}
          variants={imageVariants}
        />
        <motion.img
          className='left-img'
          src={left}
          variants={imageVariants}
        />
        <motion.img
          className='right-img'
          src={right}
          variants={imageVariants}
        />
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView && isSection1Ready ? 'visible' : 'hidden'}
        id="features"
        className="features-section"
        
      >
        <div className="features-content">
          <motion.h3 className='biggest-text1' variants={textVariants}>
            Why LeadMasters.ai?
          </motion.h3>
          <motion.img src={slides} className='half-img' variants={imageVariants} onLoad={() => handleImageLoad('section1')} />
          <motion.img src={analytics} className='anthr-img' variants={imageVariants} onLoad={() => handleImageLoad('section1')} />
          <motion.img src={chart1} className='anthr-img1' variants={imageVariants}onLoad={() => handleImageLoad('section1')} />
          <motion.img src={social} className='anthr-img2' variants={imageVariants}  onLoad={() => handleImageLoad('section1')}/>
        </div>
      </motion.section>
      <motion.section className='container-section1'  ref={featuresRef2}
        initial="hidden"
        animate={featuresInView2 ? 'visible' : 'hidden'}>
      <motion.img src={section1} className='features-section1' variants={imageVariants}/>

      </motion.section>
      <motion.section className='container-section2' ref={featuresRef3}
        initial="hidden"
        animate={featuresInView3 ? 'visible' : 'hidden'}>
      <motion.img src={section2} className='features-section2' variants={imageVariants} />
      </motion.section>
      <motion.section className='container-section3' ref={featuresRef4}
        initial="hidden"
        animate={featuresInView4 ? 'visible' : 'hidden'}>
      <motion.img src={section3} className='features-section1'  variants={imageVariants} />
      </motion.section>
      <motion.section className='container-section4' ref={featuresRef5}
        initial="hidden"
        animate={featuresInView5 ? 'visible' : 'hidden'}>
      <motion.h3 className='biggest-text1' variants={textVariants}>Analytics Dashboard</motion.h3>
<motion.p style={{width:'50vw',textAlign:'center',marginBottom:'5vh'}} variants={textVariants}>Comprehensive insights into your marketing performance with metrics like impressions, engagement rate, and new followers.</motion.p>
<div style={{marginInline:'auto'}}>
<motion.img src={num1} className='img-cont-sect4' variants={imageVariants}/>
<motion.img src={num2} className='img1-cont-sect4' variants={imageVariants}/>
<motion.img src={num3} className='img2-cont-sect4'variants={imageVariants}/>
<motion.img src={num4} className='img3-cont-sect4'variants={imageVariants}/>
</div>
      </motion.section>
      <motion.section className='container-section4' ref={featuresRef6}
        initial="hidden"
        animate={featuresInView6 ? 'visible' : 'hidden'}>
      <motion.h3 className='biggest-text1' variants={textVariants}>Automation Tools</motion.h3>
<motion.p variants={textVariants} style={{width:'50vw',textAlign:'center',marginBottom:'5vh'}}>Automate your marketing activities with features like scheduled reposts, delay threads, and autopilot for social posts.</motion.p>
<motion.img className='bg-img-sect5' src={backgr} variants={imageVariants}/>
<motion.img className='cards-img-sect5' src={cards} variants={imageVariants}/>
      </motion.section>
      <motion.section className='container-section1' style={{marginTop:'-15vh'}} ref={featuresRef7}
        initial="hidden"
        animate={featuresInView7 ? 'visible' : 'hidden'}>
      <motion.img src={sect6} className='features-section6' variants={imageVariants}/>
      <motion.button variants={imageVariants} className="cta-button9" onClick={()=>navigate("/signup")}>Get Started Free</motion.button>

      </motion.section>
      <motion.section className='container-section4' ref={featuresRef8}
        initial="hidden"
        animate={featuresInView8 ? 'visible' : 'hidden'}>
      <motion.h3 className='biggest-text1' variants={textVariants}>Team Collaboration</motion.h3>
<motion.p  variants={textVariants} style={{width:'40vw',textAlign:'center',marginBottom:'5vh'}}>Invite and manage team members, assign roles, and collaborate on ad campaigns.</motion.p>
<motion.img className='features-section6' src={sect7} variants={imageVariants} />

      </motion.section>
      <motion.section className='container-section4' ref={featuresRef9}
        initial="hidden"
        animate={featuresInView9 ? 'visible' : 'hidden'}>
      <motion.h3 className='biggest-text1' variants={textVariants}>AI Personalization</motion.h3>
<motion.p variants={textVariants} style={{width:'40vw',textAlign:'center',marginBottom:'5vh'}}>Personalize your ads by providing information about yourself and your company to tailor ad suggestions.</motion.p>
<motion.img className='bg-img-sect5' src={backgr} variants={imageVariants} />
<motion.img className='cards-img-sect5' src={sect8}  variants={imageVariants}/>

      </motion.section>
      <motion.section className='container-section4' style={{marginTop:'-20vh'}} ref={featuresRef10}
        initial="hidden"
        animate={featuresInView10 ? 'visible' : 'hidden'}>
      <motion.h3 className='biggest-text1' variants={textVariants}>Professional Networking</motion.h3>
<motion.p variants={textVariants} style={{width:'40vw',textAlign:'center',marginBottom:'5vh'}}>Connect and network with other professionals on the platform, share insights, and collaborate on projects.</motion.p>
<motion.img className='features-section7' src={sect9} variants={imageVariants} />

      </motion.section>
      <motion.section className='container-section4' ref={featuresRef11}
        initial="hidden"
        animate={featuresInView11 ? 'visible' : 'hidden'} >
      <motion.h3 variants={textVariants} className='biggest-text1'>Choose Your Plan</motion.h3>
<motion.p variants={textVariants} style={{width:'40vw',textAlign:'center',marginBottom:'5vh'}}>Connect and network with other professionals on the platform, share insights, and collaborate on projects.</motion.p>
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
      </motion.section>
      <motion.section className='container-section4' style={{marginTop:'-20vh'}} ref={featuresRef12}
        initial="hidden"
        animate={featuresInView12 ? 'visible' : 'hidden'} >
 <motion.button variants={textVariants} className="cta-button96" onClick={()=>navigate("/signup")}>Get Started Free</motion.button>
<motion.img className='bg-img-sect5' src={backgr} variants={imageVariants}/>
<motion.img className='cards-img-sect6' src={sect10} variants={imageVariants}/>
      </motion.section>
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
          <p>+91-8147808161</p>
        </div>
      </div>
      <div className="contact-item">
        <img src={call} alt="Clock Icon" className="contact-icon" />
        <div className="contact-details">
          <p>Response hours:</p>
          <p>2 to 4</p>
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


