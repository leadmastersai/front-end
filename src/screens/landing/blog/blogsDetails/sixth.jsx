
import image1 from '../../../../assets/blogdetails/s1.webp';
import image2 from '../../../../assets/blogdetails/s2.webp';
import image3 from '../../../../assets/blogdetails/s3.webp';
import image4 from '../../../../assets/blogdetails/s4.webp';
import image5 from '../../../../assets/blogdetails/s3.webp';

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

const Scoring = () => {
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
      <h1 className="biggest-text91 padding-h1">From Clicks to Conversions: How AI Personalization Increases Customer Engagement</h1>
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
          <li><a href="#section-1">Data Collection 📊</a></li>
          <li><a href="#section-2">Behavioral Analysis 📈</a></li>
          <li><a href="#section-3">Engagement Tracking 🔍</a></li>
          <li><a href="#section-4">Demographic Profiling 🧑‍💼</a></li>
          <li><a href="#section-5">Scoring and Prioritization 🔢</a></li>
          <li><a href="#section-6">Increased Accuracy 🎯</a></li>
          <li><a href="#section-7">Real-Time Insights ⏱️</a></li>
          <li><a href="#section-8">Scalability 📈</a></li>
          <li><a href="#section-9">Time and Resource Efficiency 🕒</a></li>
          <li><a href="#section-10">Improved Conversion Rates 💼</a></li>
          <li><a href="#section-11">Integrate Your Data Sources 🔗</a></li>
          <li><a href="#section-12">Define Your Ideal Customer Profile 📋</a></li>
          <li><a href="#section-13">Customize Your Scoring Model 🛠️</a></li>
          <li><a href="#section-14">Monitor and Adjust 🔄</a></li>
          <li><a href="#section-15">Scalability 📈</a></li>
          <li><a href="#section-16">Conclusion: Boost Your Conversion Rates with AI-Powered Lead Scoring 🚀</a></li>
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
        <p>In the competitive world of digital marketing, not all leads are created equal. Some prospects are ready to buy, while others may need more nurturing, and some may never convert at all. The key to effective marketing and sales strategies is identifying which leads are worth your time and effort. This is where AI-powered lead scoring comes into play. By leveraging artificial intelligence to analyze customer behavior, engagement, and demographics, businesses can accurately score leads, prioritize high-quality prospects, and ultimately boost conversion rates. In this blog, we’ll explore the power of AI-driven lead scoring and how it can transform your approach to lead management.
What is Lead Scoring? 🧠
Lead scoring is the process of assigning a numerical value (or score) to each lead based on their behavior, engagement, and demographic information. The goal is to rank leads according to their likelihood of converting into customers. Traditionally, lead scoring has been done manually, using a set of predefined criteria. However, this method can be time-consuming and often lacks the precision needed to truly differentiate between high and low-quality leads.
With the advent of AI, lead scoring has become more sophisticated and accurate. AI-powered lead scoring systems can analyze vast amounts of data in real-time, continuously refining the scoring model to reflect the latest customer behaviors and trends.
</p>
      <section id="section-1" className="section">
        <h2>1. Data Collection 📊
        </h2>
        <img
          src={image2}
          alt="AI Optimizing Ad Spend"
          className="content-image2"
        />
        <p>
        AI-powered systems gather data from various touchpoints, including website visits, social media interactions, email opens, clicks, and more. Additionally, demographic information like job title, industry, and company size is collected to build a comprehensive profile of each lead.
        </p>
      </section>
      <section id="section-2" className="section">
        <h2>2. Behavioral Analysis 📈
        </h2>
      
        <p>
        The AI system analyzes the behavior of each lead, identifying patterns that indicate a higher likelihood of conversion. For example, a lead that frequently visits your pricing page or downloads multiple whitepapers is likely more interested in your product than a lead who has only visited your homepage once.
        </p>
      </section>
      <section id="section-3" className="section">
        <h2>3. Engagement Tracking 🔍
        </h2>
       
        <p>
        AI tracks how engaged a lead is with your brand. Engagement metrics might include email open rates, social media interactions, and time spent on your website. High engagement typically correlates with a higher chance of conversion.
        </p>
      </section>
      <section id="section-4" className="section">
        <h2>4. Demographic Profiling 🧑‍💼
        </h2>
     
        <p>
        AI evaluates the demographic data of each lead to determine how closely they match your ideal customer profile. Leads that closely align with your target audience are scored higher, as they are more likely to convert.

        </p>
      </section>
      <section id="section-5" className="section">
        <h2>5. Scoring and Prioritization 🔢
        </h2>
       
        <p>
        Based on the analysis, AI assigns a score to each lead. This score helps your sales team prioritize their efforts, focusing on leads with the highest potential for conversion. The AI system continuously updates these scores as new data is collected, ensuring that your lead scoring is always accurate and up-to-date.

        </p>
      </section>
      <section id="section-6" className="section">
        <h2>6. Increased Accuracy 🎯
        </h2>
      
        <p>
        AI can process and analyze vast amounts of data far more accurately than manual methods. This precision ensures that the scores assigned to leads are reflective of their true potential, allowing your sales team to focus on the most promising prospects.
        </p>
      </section>
      <section id="section-7" className="section">
        <h2>7. Real-Time Insights ⏱️
        </h2>
      
        <p>
        AI-driven systems operate in real-time, continuously analyzing new data as it comes in. This means that lead scores are always up-to-date, giving your team the most accurate picture of a lead’s potential at any given moment.
        </p>
      </section>
      <section id="section-8" className="section">
        <h2>8. Scalability 📈
        </h2>
      
        <p>
        As your business grows, the volume of leads will increase. AI-powered lead scoring can scale with your business, handling large 
        volumes of data without compromising on accuracy or efficiency.
        </p>
      </section>
      <section id="section-9" className="section">
        <h2>9. Time and Resource Efficiency 🕒
        </h2>
      
        <p>
        By automating the lead scoring process, AI frees up valuable time for your sales and marketing teams. They can focus on engaging with high-priority leads rather than manually sorting through and scoring prospects.
        </p>
      </section>
      <section id="section-10" className="section">
        <h2>10. Improved Conversion Rates 💼
        </h2>
      
        <p>
        With accurate lead scoring, your sales team can prioritize leads that are more likely to convert. This targeted approach increases conversion rates and, ultimately, boosts your revenue.
        </p>
      </section>
      <section id="section-11" className="section">
        <h2>11. Integrate Your Data Sources 🔗
        </h2>
      
        <p>
        Ensure that your AI system has access to all relevant data sources, including your CRM, email marketing platform, social media channels, and website analytics. The more data the AI has, the more accurate the lead scores will be.

        </p>
      </section>
      <section id="section-12" className="section">
        <h2>12. Define Your Ideal Customer Profile 📋
        </h2>
      
        <p>
        Work with your sales and marketing teams to define the characteristics of your ideal customer. This profile will guide the AI in assigning scores based on how closely each lead matches your target audience.

        </p>
      </section>
      <section id="section-13" className="section">
        <h2>13. Customize Your Scoring Model 🛠️
        </h2>
      
        <p>
        While AI can analyze data and assign scores, it’s important to customize the scoring model to align with your specific business goals. You might prioritize certain behaviors or demographic factors based on what drives conversions in your industry.

        </p>
      </section>
      <section id="section-14" className="section">
        <h2>14. Monitor and Adjust 🔄

        </h2>
      
        <p>
        Continuously monitor the performance of your AI-powered lead scoring system. Use real-time insights to adjust your strategies and refine your scoring model as needed. This iterative approach ensures that your lead scoring remains effective over time.
        </p>
      </section>
      <section id="section-15" className="section">
        <h2>15. Align Sales and Marketing Teams 🤝
        </h2>
      
        <p>
        Make sure that both your sales and marketing teams are on the same page regarding lead scoring criteria and priorities. Collaboration between these teams will maximize the effectiveness of your AI-powered lead scoring system.

        </p>
      </section>
      <section id="section-16" className="section">
        <h2>Conclusion: Boost Your Conversion Rates with AI-Powered Lead Scoring 🚀
        </h2>
        <img
          src={image1}
          alt="Targeting the Right Audience"
          className="content-image2"
        />
        <p>
        AI-powered lead scoring is a game-changer for businesses looking to optimize their lead management and boost conversion rates. By leveraging AI to analyze customer behavior, engagement, and demographics, you can accurately identify and prioritize high-quality prospects, ensuring that your sales team focuses on leads with the highest potential. The result? Improved efficiency, higher conversion rates, and a greater return on investment.
As the digital landscape continues to evolve, AI-powered tools like lead scoring will become increasingly essential for staying competitive. By implementing AI-driven lead scoring in your business, you’ll be well-equipped to turn more leads into loyal customers and drive long-term growth. 🌟

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

export default Scoring;
