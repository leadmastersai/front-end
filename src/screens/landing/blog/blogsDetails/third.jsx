
import image1 from '../../../../assets/blogdetails/first.webp';
import image2 from '../../../../assets/blogdetails/second.webp';
import image3 from '../../../../assets/blogdetails/third.webp';
import image4 from '../../../../assets/blogdetails/fourth.webp';
import image5 from '../../../../assets/blogdetails/fifth.webp';
import React, { useState } from 'react';

import roi from '../../../../assets/blogdetails/roi.svg';
import Ln from '../../../../assets/blogdetails/ln.svg';
import Cp from '../../../../assets/blogdetails/copy.svg';
import In from '../../../../assets/blogdetails/in.svg';
import fb from '../../../../assets/blogdetails/fb.svg';
import tw from '../../../../assets/blogdetails/tw.svg';
import { message } from "antd";
import './styles.scss';
import { postService } from '../../../../../services/postServices';
import { useNavigate } from 'react-router-dom';
import Pguy from '../../../../assets/blog/pointingguy.svg';
import backgr from '../../../../assets/landing/backgr.svg';

import soc1 from '../../../../assets/landing/social1.svg';
import soc2 from '../../../../assets/landing/social2.svg';
import soc3 from '../../../../assets/landing/social3.svg';
import soc4 from '../../../../assets/landing/social4.svg';
import soc5 from '../../../../assets/landing/social5.svg';
import loc from '../../../../assets/landing/Location.svg';
import time from '../../../../assets/landing/Message.svg';
import mess from '../../../../assets/landing/Calling.svg';
import call from '../../../../assets/landing/Time.svg';

import Icon from '../../../../assets/auth/appIcon.svg'
import { Alert, Spin } from "antd";

const Driven = () => {
  const navigate = useNavigate();

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
  const copyContentToClipboard = () => {
    // Query all sections
    const sections = document.querySelectorAll(".section");
  
    // Initialize content variable
    let content = "";
  
    // Loop through each section to gather text
    sections.forEach(section => {
      content += section.innerText + "\n\n";
    });
  
    // Check if navigator.clipboard is supported
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Copy content to clipboard
      navigator.clipboard.writeText(content).then(() => {
        message.success("Content copied to clipboard!", 2)
      }).catch(err => {
        console.error("Failed to copy: ", err);
        message.error("Failed to copy content. Please try again.", 2);
      });
    } else {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = content;
      textarea.style.position = "fixed"; // Prevent scrolling to bottom
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
  
      try {
        const successful = document.execCommand('copy');
        const msg = successful ? "Content copied to clipboard!" : "Failed to copy content.";
        alert(msg);
      } catch (err) {
        console.error("Fallback: Failed to copy", err);
        alert("Failed to copy content. Please try again.");
      }
  
      document.body.removeChild(textarea);
    }
  };
  


  return (
    <div className="page-layout">
          <header className="header">
      <h1 className="biggest-text91 padding-h1">Data-Driven Decisions: The Power of Analytics in Modern Lead Generation</h1>
      <img
        src={roi} // Replace with your image path
        alt="Maximizing ROI with AI"
        className="header-image"
      />
    </header>
    <div className="content-wrapper">
    <aside className="sidebar">
      <div className="toc-container">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#section-1">Improved Targeting and Segmentation</a></li>
          <li><a href="#section-2">Enhanced Personalization</a></li>
          <li><a href="#section-3">Real-Time Decision Making</a></li>
          <li><a href="#section-4">Measurable ROI</a></li>
          <li><a href="#section-5">Comprehensive Dashboard</a></li>
          <li><a href="#section-6">Predictive Analytics</a></li>
          <li><a href="#section-7">Automated Reporting</a></li>
          <li><a href="#section-8">AI-Driven Insights</a></li>
          <li><a href="#section-9">Conclusion: Embracing Data-Driven Lead Generation</a></li>
        </ul>
      </div>
      <div className="share-container">
        <h3>Share on</h3>
        <div className="social-icons">
          <img src={Ln} className="iri" />
          <img src={In} className="iri"/>
          <img src={fb} className="iri"/>
          <img src={tw} className="iri"/>
          <img src={Cp} className="iri" alt="copy" onClick={copyContentToClipboard}/>
          {/* Add your social icons here */}
        </div>
      </div>
    </aside>
    <main className="main-content">
        <p>In today’s competitive business environment, making informed decisions is crucial for success. Gone are the days when intuition and guesswork were sufficient to guide marketing strategies. Now, data-driven decision-making has become the cornerstone of effective lead generation, allowing businesses to harness the power of analytics to drive growth and stay ahead of the competition.
In this blog, we’ll delve into the importance of analytics in modern lead generation and explore how LeadMasters' advanced analytics features can help businesses make informed decisions that fuel their growth.
The Role of Analytics in Lead Generation
Lead generation is the lifeblood of any business. It’s the process of identifying and attracting potential customers (leads) who are likely to convert into paying customers. However, not all leads are created equal. The ability to distinguish between high-quality leads that are more likely to convert and those that are less promising is crucial. This is where analytics comes into play.
Analytics provides businesses with the tools and insights needed to understand their audience, track campaign performance, and optimize lead generation strategies. By analyzing data from various sources, including website interactions, social media engagements, email campaigns, and more, businesses can identify patterns and trends that reveal what works and what doesn’t. This data-driven approach allows for more precise targeting, personalized marketing efforts, and ultimately, higher conversion rates.

</p>
      <section id="section-1" className="section">
        <h2>1. Improved Targeting and Segmentation
        </h2>
        <img
          src={image2}
          alt="AI Optimizing Ad Spend"
          className="content-image2"
        />
        <p>
        One of the primary benefits of using analytics in lead generation is the ability to segment your audience more effectively. By analyzing demographic
         data, online behavior, and engagement metrics, businesses can create detailed customer profiles and segment their audience into specific
         groups. This segmentation enables more targeted marketing efforts, ensuring that the right message reaches the right audience at the right time.

        </p>
      </section>
      <section id="section-2" className="section">
        <h2>2. Enhanced Personalization
        </h2>
      
        <p>
        Today’s consumers expect personalized experiences. Analytics allows businesses to deliver tailored content and offers that resonate
         with individual leads. By analyzing data such as past interactions, preferences, and purchase history, businesses can create personalized 
         marketing campaigns that speak directly to the needs and desires of their leads. This level of personalization increases engagement and conversion rates,
          as leads are more likely to respond to messages that feel relevant to them.
        </p>
      </section>
      <section id="section-3" className="section">
        <h2>3. Real-Time Decision Making
        </h2>
       
        <p>
        In the fast-paced world of digital marketing, the ability to make real-time decisions is crucial. Analytics provides businesses with 
        real-time data that can be used to adjust strategies on the fly. Whether it’s tweaking a campaign that isn’t performing as expected or
         capitalizing on a sudden trend, real-time analytics allows businesses to stay agile and responsive to changing market conditions.
        </p>
      </section>
      <section id="section-4" className="section">
        <h2>4. Measurable ROI
        </h2>
     
        <p>
        One of the most significant advantages of data-driven lead generation is the ability to measure the return on investment (ROI) of marketing
         efforts. Analytics tools provide detailed reports on campaign performance, allowing businesses to see exactly how their marketing dollars
          are being spent and what impact those efforts are having on lead generation. This transparency enables businesses to allocate resources
           more effectively and focus on strategies that deliver the highest ROI.
        </p>
      </section>
      <section id="section-5" className="section">
        <h2>5. Comprehensive Dashboard
        </h2>
       
        <p>
        LeadMasters provides a comprehensive dashboard that consolidates data from various marketing channels into a single, easy-to-navigate 
        interface. This dashboard offers real-time insights into key performance indicators (KPIs) such as lead conversion rates, cost per lead,
         and campaign effectiveness. With all this data at your fingertips, you can quickly identify areas for improvement and optimize your lead 
         generation strategies.
        </p>
      </section>
      <section id="section-6" className="section">
        <h2>6. Predictive Analytics
        </h2>
      
        <p>
        One of the standout features of LeadMasters is its predictive analytics capabilities. By analyzing historical data, LeadMasters can 
        forecast future trends and predict which leads are most likely to convert. This allows businesses to prioritize high-value leads and
         allocate resources more effectively. Predictive analytics also helps businesses anticipate market changes and adjust their strategies
          accordingly, ensuring they stay ahead of the competition.

        </p>
      </section>
      <section id="section-7" className="section">
        <h2>7. Automated Reporting
        </h2>
      
        <p>
        Time is a valuable resource, and LeadMasters understands that. That’s why the platform offers automated reporting features that save 
        businesses time and effort. With just a few clicks, you can generate detailed reports on campaign performance, lead quality, and more.
         These reports can be customized to focus on the metrics that matter most to your business, providing the insights you need to make 
         data-driven decisions quickly.
        </p>
      </section>
      <section id="section-8" className="section">
        <h2>8. AI-Driven Insights
        </h2>
      
        <p>
        LeadMasters leverages artificial intelligence (AI) to provide deeper insights into lead behavior and campaign performance. The AI-driven 
        analytics engine can identify patterns and correlations that might be missed by human analysts, offering recommendations for optimizing
         lead generation strategies. These AI-driven insights enable businesses to stay proactive and continuously refine their marketing efforts.
        </p>
      </section>
      <section id="section-9" className="section">
        <h2>Conclusion: Embracing Data-Driven Lead Generation
        </h2>
        <img
          src={image1}
          alt="Targeting the Right Audience"
          className="content-image2"
        />
        <p>
        The power of analytics in modern lead generation cannot be overstated. By leveraging data to make informed decisions, businesses can
         improve targeting, enhance personalization, make real-time adjustments, and measure ROI with greater accuracy. LeadMasters' advanced 
         analytics features provide the tools and insights needed to harness the full potential of data-driven lead generation.
In a world where competition is fierce and consumer behavior is constantly evolving, embracing data-driven decision-making is essential for driving
 growth and achieving long-term success. With LeadMasters as your partner, you can unlock the power of analytics and take your lead generation efforts
  to the next level.
        </p>
      </section>
      {/* Add more sections as needed */}

    </main>
    </div>
  
    <section className='container-section4' style={{marginTop:'-20vh'}}>
   
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

export default Driven;
