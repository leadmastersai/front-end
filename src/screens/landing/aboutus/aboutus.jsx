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
import { useInView, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import {postService} from '../../../../services/postServices';
import { Alert, Spin } from 'antd';

const Aboutus = () => {
    const navigate = useNavigate();
const [loading,setLoading]=useState(false);
const [sloading,setsLoading]=useState(false);

const [email,setEmail]=useState('');
const [semail,setsEmail]=useState('');
const [ssuccess, setsSuccess] = useState(false); // state for showing success message
  const [serror, setsError] = useState(false);

const [success, setSuccess] = useState(false); // state for showing success message
  const [error, setError] = useState(false);
    const featuresRef = useRef(null);
    const featuresRef2 = useRef(null);
    const featuresRef3 = useRef(null);
    const featuresRef4 = useRef(null);
    const featuresRef5 = useRef(null);
    const featuresRef6 = useRef(null);

    const featuresInView = useInView(featuresRef, { once: false, threshold: 0.1 });
    const featuresInView2 = useInView(featuresRef2, { once: false, threshold: 0.1 });
    const featuresInView3 = useInView(featuresRef3, { once: false, threshold: 0.1 });
    const featuresInView4 = useInView(featuresRef4, { once: false, threshold: 0.1 });
    const featuresInView5 = useInView(featuresRef5, { once: false, threshold: 0.1 });
    const featuresInView6 = useInView(featuresRef6, { once: false, threshold: 0.1 });

    const textVariants = {
        hidden: { opacity: 0, y: 100, x: -200 },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: { duration: 2, ease: 'easeOut' },
        },
    };

    const imageVariants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 2, ease: 'easeOut' },
        },
    };

    const handlesSubmit=async(e)=>{
        e.preventDefault();
      
        const payload={
         
          email:semail,
        
        }
        try{
          setsLoading(true)
      const response=await postService.postContactInfo(payload);
      console.log(response.data,"sueccss");
      
     
      setsEmail('')
      setsSuccess(true);
      setsError(false);
      
      setsLoading(false)
      setTimeout(() => setsSuccess(false), 3000); // Hide after 3 seconds
      } catch (error) {
        console.log(error, 'error');
        setsError(true);
        setsSuccess(false);
        setsLoading(false);
        setTimeout(() => setsError(false), 3000);
      }
        
      }

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
      setsEmail('')
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

    return (
        <div>
            <motion.div className="container-section99" ref={featuresRef}
                initial="hidden"
                animate={featuresInView ? 'visible' : 'hidden'}>
                <motion.h1 variants={textVariants} className="biggest-text9">
                    LeadMasters AI is dedicated to <span className="purple-text">revolutionizing</span>
                </motion.h1>
                <motion.h1 variants={textVariants} className="biggest-text9 smaller">
                    marketing through cutting-edge
                </motion.h1>
                <motion.h1 variants={textVariants} className="biggest-text9 smallest">
                    AI technology.
                </motion.h1>
            </motion.div>
            <motion.div className="image-container" ref={featuresRef2}
                initial="hidden"
                animate={featuresInView2 ? 'visible' : 'hidden'}>
                <motion.img variants={imageVariants} className='bg-img-sect55' src={backgr} />
                <motion.img variants={imageVariants} className='bg-img-sect77' src={Back} />
            </motion.div>
            <motion.section className='container-section4' ref={featuresRef3}
                initial="hidden"
                animate={featuresInView3 ? 'visible' : 'hidden'}>
                <motion.h3 variants={textVariants} className='biggest-text1'>Our Story</motion.h3>
                <motion.p variants={textVariants} style={{ width: '50vw', textAlign: 'center', marginBottom: '5vh' }}>
                    “Seamlessly integrate LeadMasters AI with your existing tools and platforms to create a unified marketing ecosystem. Our integration capabilities ensure that data flows smoothly between systems, enhancing workflow efficiency and data accuracy.”
                </motion.p>
                <div className="image-container">
                    <motion.img className='bg-img-sect55' variants={imageVariants} src={backgr} />
                    <motion.img className='bg-img-sect77' variants={imageVariants} src={two} />
                </div>
                <motion.div className="team-member" ref={featuresRef4}
                    initial="hidden"
                    animate={featuresInView4 ? 'visible' : 'hidden'}>
                    <div>
                        <motion.img src={found} alt="Abdullah Khan" className="profile-img" variants={imageVariants} />
                    </div>
                    <div className="content">
                        <motion.h2 variants={textVariants}>Abdullah Khan</motion.h2>
                        <motion.h3 variants={textVariants}>- CEO & Founder</motion.h3>
                        <motion.p variants={textVariants}>
                            With a robust 16-year career spanning corporate training, software development, and cutting-edge digital marketing, Abdullah Khan leads LeadMasters with a visionary approach to AI-driven lead generation and ad optimization. His expertise and forward-thinking leadership position LeadMasters as a trailblazer in revolutionizing digital advertising strategies, ensuring clients achieve unparalleled results in a competitive landscape.
                        </motion.p>
                    </div>
                </motion.div>
            </motion.section>
            <motion.div className="our-values" ref={featuresRef5}
                initial="hidden"
                animate={featuresInView5 ? 'visible' : 'hidden'}>
                <motion.h1 variants={textVariants} className='biggest-text1' style={{ alignItems: 'center', marginBottom: '3vh' }}>
                    Our Values
                </motion.h1>
                <div className="values-container">
                    <motion.div className="value-card" variants={imageVariants}>
                        <img src={layer} alt="Innovation Icon" />
                        <h2>Innovation</h2>
                        <p>Constantly pushing the boundaries of AI technology</p>
                    </motion.div>
                    <motion.div className="value-card" variants={imageVariants}>
                        <img src={layer} alt="Customer Success Icon" />
                        <h2>Customer Success</h2>
                        <p>Dedicated to helping our customers achieve their goals.</p>
                    </motion.div>
                    <motion.div className="value-card" variants={imageVariants}>
                        <img src={layer} alt="Transparency Icon" />
                        <h2>Transparency</h2>
                        <p>Building trust through open and honest communication.</p>
                    </motion.div>
                </div>
            </motion.div>
            <div className="newsletter-container">
                <div className="newsletter-content">
                    <h1 className='biggest-text9' style={{ textAlign: 'left', width: '130%' }}>
                        Subscribe to our newsletter for the latest updates
                    </h1>
                    <div className="newsletter-input">
                        <input type="email" placeholder="Enter your email id" value={semail} onChange={(e) => setsEmail(e.target.value)}/>
                    </div>
                    <button className="cta-button90" onClick={handlesSubmit}>{sloading ? <Spin size="small" /> : "Submit"}</button>
                    {ssuccess && <Alert style={{marginBlock:5}} message="Submitted successfully!" type="success" showIcon />}
                {serror && <Alert style={{marginBlock:5}} message="There was an error sending your message." type="error" showIcon />}
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
                    <ul>
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
                <div style={{ display: 'flex', flexDirection: 'column', width: '25vw' }}>
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
}

export default Aboutus;
