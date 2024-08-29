
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

const Click = () => {
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
          <li><a href="#section-1">Data Collection and Analysis 📊</a></li>
          <li><a href="#section-2">Segmentation and Targeting 🎯</a></li>
          <li><a href="#section-3">Real-Time Personalization ⏱️</a></li>
          <li><a href="#section-4">Predictive Personalization 🔮</a></li>
          <li><a href="#section-5">Increased Relevance 🌟</a></li>
          <li><a href="#section-6">Improved User Experience 🛠️</a></li>
          <li><a href="#section-7">Stronger Emotional Connection 💞</a></li>
          <li><a href="#section-8">Higher Engagement Rates 📈</a></li>
          <li><a href="#section-9">Nurturing Leads Through the Funnel 🛒</a></li>
          <li><a href="#section-10">Building Trust and Loyalty 🤝</a></li>
          <li><a href="#section-11">Maximizing Customer Lifetime Value 💰</a></li>
          <li><a href="#section-12">Encouraging Advocacy 📢</a></li>
          <li><a href="#section-13">Conclusion: Embrace the Power of AI Personalization 🤖✨</a></li>
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
        <p>In the world of digital marketing, the journey from a click to a conversion is a delicate process that requires more than just a compelling offer or a well-placed ad. It’s about building a connection with the customer, understanding their needs, and delivering personalized experiences that resonate with them on a deeper level. This is where AI-driven personalization comes into play, transforming the way businesses engage with their customers and turning leads into loyal, repeat buyers. 🛒💡
In this blog, we’ll explore how AI-driven personalization techniques can significantly improve customer engagement and conversion rates, making the journey from clicks to conversions smoother and more effective. 🚀
The Power of Personalization in Digital Marketing 🎨
Personalization in marketing is not a new concept, but the advent of AI has taken it to unprecedented levels. Today’s consumers expect more than just generic messages and one-size-fits-all offers. They want content that is tailored to their preferences, behavior, and needs. AI makes this possible by analyzing vast amounts of data to deliver personalized experiences at scale.
Personalization can take many forms, from personalized product recommendations and customized email campaigns to dynamic website content that changes based on user behavior. When done right, personalization creates a sense of relevance and connection that can significantly boost customer engagement and drive higher conversion rates. 📈💻


</p>
      <section id="section-1" className="section">
        <h2>1. Data Collection and Analysis 📊
        </h2>
        <img
          src={image2}
          alt="AI Optimizing Ad Spend"
          className="content-image2"
        />
        <p>
        AI begins by collecting data from various sources, such as website interactions, social media activity, purchase history, and more. This data is then analyzed to identify patterns and trends that reveal insights into each customer’s preferences and behavior.
        </p>
      </section>
      <section id="section-2" className="section">
        <h2>2. Segmentation and Targeting 🎯
        </h2>
      
        <p>
        Based on the analysis, AI can segment customers into different groups based on their similarities. For example, customers who frequently purchase outdoor gear might be grouped together, while those who prefer electronics might form another segment. AI then uses this segmentation to target customers with personalized content and offers that are relevant to their interests.
        </p>
      </section>
      <section id="section-3" className="section">
        <h2>3. Real-Time Personalization ⏱️
        </h2>
       
        <p>
        One of the key advantages of AI is its ability to deliver real-time personalization. As customers interact with a brand’s website or app, AI can adjust the content they see in real-time based on their behavior. For example, if a customer frequently views hiking boots, the website might start showcasing related products like hiking gear or accessories.
        </p>
      </section>
      <section id="section-4" className="section">
        <h2>4. Predictive Personalization 🔮
        </h2>
     
        <p>
        AI doesn’t just react to what customers have done in the past; it can also predict what they might want in the future. By analyzing historical data and identifying patterns, AI can predict a customer’s future behavior and preferences, allowing brands to proactively offer products or content that align with their needs.
        </p>
      </section>
      <section id="section-5" className="section">
        <h2>5. Increased Relevance 🌟
        </h2>
       
        <p>
        When customers see content that is relevant to their interests, they are more likely to engage with it. AI ensures that every interaction a customer has with a brand feels tailored to them, increasing the likelihood that they will stay on the website longer, explore more products, and eventually make a purchase.
        </p>
      </section>
      <section id="section-6" className="section">
        <h2>6. Improved User Experience 🛠️
        </h2>
      
        <p>
        Personalization enhances the overall user experience by making it easier for customers to find what they’re looking for. AI can streamline the shopping experience by recommending products that match a customer’s preferences or by offering personalized navigation paths that lead them to the right content quickly.
        </p>
      </section>
      <section id="section-7" className="section">
        <h2>7. Stronger Emotional Connection 💞
        </h2>
      
        <p>
        Personalized experiences can also create a stronger emotional connection between customers and brands. When customers feel understood and valued, they are more likely to develop a positive association with the brand, leading to increased loyalty and repeat business.

        </p>
      </section>
      <section id="section-8" className="section">
        <h2>8. Higher Engagement Rates 📈
        </h2>
      
        <p>
        Personalized emails, product recommendations, and targeted ads typically see higher engagement rates compared to generic content. By delivering the right message to the right person at the right time, AI-driven personalization increases the chances of customers taking the desired action, whether it’s making a purchase, signing up for a newsletter, or downloading a resource.

        </p>
      </section>
      <section id="section-9" className="section">
        <h2>9. Nurturing Leads Through the Funnel 🛒
        </h2>
      
        <p>
        AI can personalize the entire customer journey, from the first click to the final purchase. By delivering relevant content at each stage of the funnel, AI helps nurture leads and guide them toward conversion. For example, a lead who has shown interest in a product but hasn’t yet purchased might receive personalized emails with product reviews, special offers, or reminders, encouraging them to complete their purchase.
        </p>
      </section>
      <section id="section-10" className="section">
        <h2>10. Building Trust and Loyalty 🤝
        </h2>
      
        <p>
        Personalization helps build trust by showing customers that a brand understands and values them. Over time, this trust can translate into loyalty, as customers are more likely to return to a brand that consistently delivers personalized experiences that meet their needs.
        </p>
      </section>
      <section id="section-11" className="section">
        <h2>11. Maximizing Customer Lifetime Value 💰
        </h2>
      
        <p>
        Loyal customers are more valuable to a brand in the long run. AI-driven personalization can help maximize customer lifetime value by continuously engaging customers with personalized offers, recommendations, and content that keeps them coming back for more.
        </p>
      </section>
      <section id="section-12" className="section">
        <h2>12. Encouraging Advocacy 📢
        </h2>
      
        <p>
        Satisfied customers are more likely to become brand advocates, sharing their positive experiences with others. AI can identify loyal customers and encourage them to spread the word by offering personalized incentives, such as discounts or rewards for referrals.
        </p>
      </section>
      <section id="section-13" className="section">
        <h2>Conclusion: Embrace the Power of AI Personalization 🤖✨
        </h2>
        <img
          src={image1}
          alt="Targeting the Right Audience"
          className="content-image2"
        />
        <p>
        In the age of digital marketing, AI-driven personalization is no longer a luxury; it’s a necessity. By delivering personalized experiences that resonate with customers, businesses can increase engagement, drive higher conversion rates, and turn leads into loyal customers.
As AI technology continues to evolve, the opportunities for personalization will only grow, allowing brands to create even more relevant, engaging, and effective marketing strategies. Whether you’re a large enterprise or a small business, embracing AI-driven personalization can help you stay ahead of the competition and achieve long-term success in the digital marketplace. 🌟

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

export default Click;
