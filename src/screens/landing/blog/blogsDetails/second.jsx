import React, { useState } from 'react';
import image1 from '../../../../assets/blogdetails/sixth.webp';
import image2 from '../../../../assets/blogdetails/seventh.webp';
import image3 from '../../../../assets/blogdetails/eight.webp';
import image4 from '../../../../assets/blogdetails/nine.webp';
import image5 from '../../../../assets/blogdetails/ten.webp';
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

const Future = () => {
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
      <h1 className="biggest-text91 padding-h1">The Future of Advertising: How AI is Revolutionizing Social Media Ad Campaigns</h1>
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
          <li><a href="#section-1">AI-Driven Targeting: Reaching the Right Audience</a></li>
          <li><a href="#section-2">Personalized Content: Enhancing User Engagement</a></li>
          <li><a href="#section-3">Predictive Analytics: Forecasting Ad Performance</a></li>
          <li><a href="#section-4">Real-Time Optimization: Adapting on the Fly</a></li>
          <li><a href="#section-5"> Automating Ad Campaigns: Efficiency at Scale</a></li>
          <li><a href="#section-6">Conclusion: Embracing the Future of Social Media Advertising</a></li>
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
        <p>In the rapidly evolving landscape of digital marketing, social media platforms have become indispensable tools for businesses seeking to reach and engage with their target audiences. As the digital ecosystem grows increasingly complex, the role of artificial intelligence (AI) in enhancing the effectiveness of ad campaigns on platforms like Facebook, Instagram, LinkedIn, and Twitter has become more pronounced. AI is not just a tool; it’s a game-changer, transforming how businesses approach social media advertising and enabling unprecedented levels of precision, personalization, and performance.
In this blog, we’ll delve into how AI is revolutionizing social media ad campaigns, supported by case studies and success stories that illustrate its transformative power.
</p>
      <section id="section-1" className="section">
        <h2>1. AI-Driven Targeting: Reaching the Right Audience
        </h2>
        <img
          src={image2}
          alt="AI Optimizing Ad Spend"
          className="content-image2"
        />
        <p>
        One of the most significant challenges in social media advertising is reaching the right audience with the right message. Traditional targeting methods, while effective to a certain extent, often lack the precision needed to maximize ad effectiveness. AI has revolutionized this aspect by enabling highly sophisticated audience targeting.
AI algorithms analyze vast amounts of data from user behaviors, preferences, and interactions to create detailed customer profiles. This data-driven approach allows marketers to segment their audience with unprecedented accuracy, ensuring that ads are delivered to individuals most likely to engage and convert. For example, on Facebook and Instagram, AI can predict which users are likely to be interested in a particular product based on their past behavior, such as likes, shares, and clicks.
Case Study: Coca-Cola’s AI-Powered Facebook Campaign
Coca-Cola used AI-driven targeting to boost its ad campaign on Facebook. By leveraging AI, Coca-Cola was able to segment its audience into micro-groups based on preferences and behavior. The result was a 40% increase in ad engagement and a significant reduction in ad spend, demonstrating the power of AI in targeting the right audience effectively.

        </p>
      </section>
      <section id="section-2" className="section">
        <h2>2. Personalized Content: Enhancing User Engagement
        </h2>
      
        <p>
        In today’s digital age, consumers expect personalized experiences. Generic ads often fail to capture attention or drive meaningful engagement. AI enables marketers to deliver personalized content at scale, tailoring ad creatives to individual user preferences and behaviors.
AI algorithms can analyze user data to determine the most relevant content for each individual, whether it’s the type of product, the message tone, or even the time of day the ad is served. This level of personalization enhances user engagement, making ads more appealing and relevant to the target audience.
Case Study: Netflix’s Personalized Ad Campaigns on Twitter
Netflix, known for its use of AI in content recommendations, also leverages AI for personalized ad campaigns on Twitter. By analyzing user data, Netflix tailors its ad content to align with individual viewing habits and preferences. This approach has resulted in higher engagement rates, with users more likely to interact with ads that resonate with their interests.

        </p>
      </section>
      <section id="section-3" className="section">
        <h2>3. Predictive Analytics: Forecasting Ad Performance
        </h2>
       
        <p>
        Predictive analytics is another area where AI is making a substantial impact on social media ad campaigns. AI-powered predictive models can forecast ad performance based on historical data and real-time insights. This allows marketers to make data-driven decisions, optimizing campaigns for maximum ROI.
AI can predict which ad creatives will perform best, which audiences are most likely to convert, and even the optimal times to run ads. This proactive approach reduces the trial-and-error aspect of ad campaigns, ensuring that resources are allocated efficiently from the start.
Success Story: Sephora’s AI-Driven Instagram Ads
Sephora, a global beauty retailer, utilized AI-driven predictive analytics for its Instagram ad campaigns. By analyzing past campaign data, Sephora’s AI system predicted which ad creatives would resonate most with its target audience. This led to a 20% increase in conversion rates and a reduction in cost-per-click (CPC), showcasing the effectiveness of AI in forecasting and optimizing ad performance.

        </p>
      </section>
      <section id="section-4" className="section">
        <h2>4. Real-Time Optimization: Adapting on the Fly
        </h2>
     
        <p>
        One of the most powerful aspects of AI in social media advertising is its ability to optimize campaigns in real time. Unlike traditional campaigns that require manual adjustments, AI-driven campaigns can adapt on the fly, making automatic adjustments to improve performance.
AI can analyze real-time data to adjust targeting, bidding strategies, and ad creatives, ensuring that campaigns remain effective even as conditions change. This level of agility is crucial in the fast-paced world of social media, where trends can shift rapidly.
Success Story: Adidas’ Real-Time Optimization on LinkedIn
Adidas leveraged AI for real-time optimization of its LinkedIn ad campaigns. The AI system continuously monitored ad performance, adjusting targeting and bidding strategies in real time to maximize engagement. This approach resulted in a 30% increase in click-through rates (CTR) and a significant boost in overall campaign ROI.

        </p>
      </section>
      <section id="section-5" className="section">
        <h2>5. Automating Ad Campaigns: Efficiency at Scale
        </h2>
       
        <p>
        AI also plays a crucial role in automating various aspects of social media ad campaigns, from ad creation to placement and management. Automation powered by AI not only saves time but also ensures consistency and efficiency at scale.
AI-driven platforms can automatically generate ad creatives based on user data, select the best-performing channels, and manage bidding strategies. This automation allows businesses to run multiple campaigns simultaneously, reaching broader audiences without the need for extensive manual intervention.
Case Study: H&M’s Automated Campaigns on Facebook
H&M utilized AI to automate its Facebook ad campaigns, from creative generation to placement. The AI system analyzed user data to create personalized ads and automatically selected the optimal times and platforms for ad placement. This automation led to a 25% increase in ad reach and a 15% reduction in ad spend, illustrating the efficiency and effectiveness of AI-driven automation.

        </p>
      </section>
      <section id="section-6" className="section">
        <h2>Conclusion: Embracing the Future of Social Media Advertising
        </h2>
        <img
          src={image1}
          alt="Targeting the Right Audience"
          className="content-image2"
        />
        <p>
        The integration of AI into social media advertising is not just a trend; it’s the future of the industry. As AI technology continues to evolve, its impact on ad campaigns will only grow, offering businesses new ways to connect with their audiences, optimize their strategies, and achieve their marketing goals.
From advanced targeting and personalized content to predictive analytics and real-time optimization, AI is revolutionizing how businesses approach social media advertising. By embracing AI-driven strategies, companies can stay ahead of the competition, delivering more effective, efficient, and engaging ad campaigns.
As the digital landscape continues to shift, businesses that leverage AI will be well-positioned to thrive in the ever-changing world of social media advertising. The future is here, and it’s powered by AI.


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

  );
};

export default Future;
