import React,{useState} from 'react';
import image1 from '../../../../assets/blogdetails/n1.webp';
import image2 from '../../../../assets/blogdetails/n2.webp';
import image3 from '../../../../assets/blogdetails/n3.webp';
import image4 from '../../../../assets/blogdetails/n4.webp';
import image5 from '../../../../assets/blogdetails/n3.webp';



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

const Ultimate = () => {
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
      <h1 className="biggest-text91 padding-h1"> The Ultimate Guide to Automating Your Lead Generation with LeadMasters: Tools, Tips, and Best Practices 🚀</h1>
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
          <li><a href="#section-1">Unified Platform</a></li>
          <li><a href="#section-2">Advanced AI Capabilities</a></li>
          <li><a href="#section-3">Scalability</a></li>
          <li><a href="#section-4">Real-Time Analytics</a></li>
          <li><a href="#section-5">Advanced CRM Integration 📊</a></li>
          <li><a href="#section-6">Email Marketing Automation 📧</a></li>
          <li><a href="#section-7">Landing Page Optimization 🌐</a></li>
          <li><a href="#section-8">Social Media Automation 📱</a></li>
          <li><a href="#section-9">AI-Powered Chatbots 🤖</a></li>
          <li><a href="#section-10">Leverage AI for Targeting and Segmentation 🎨</a></li>
          <li><a href="#section-11">Implement Intelligent Lead Scoring 📈</a></li>
          <li><a href="#section-12">Create Automated Nurturing Workflows 🌱</a></li>
          <li><a href="#section-13">Optimize Lead Capture with Smart Forms 💻</a></li>
          <li><a href="#section-14">Engage in Real-Time with AI Chatbots 🤖 </a></li>
          <li><a href="#section-15">Regularly Update and Clean Your Data 🧹</a></li>
          <li><a href="#section-16">Continuously Test and Optimize 🔄</a></li>
          <li><a href="#section-17">Focus on the Customer Journey 🛤️ </a></li>
          <li><a href="#section-18">Integrate Seamlessly with Existing Tools 🔗</a></li>
          <li><a href="#section-19">Monitor Performance with Real-Time Analytics 📊</a></li>
          <li><a href="#section-20">Conclusion: LeadMasters is Your Key to Successful Lead Generation Automation 🏆</a></li>
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
        <p>In today’s fast-paced digital marketing world, businesses need to constantly innovate to stay ahead of the competition. Automating lead generation is one of the most effective strategies to boost efficiency, ensure consistency, and scale operations. LeadMasters is designed to help you achieve just that—automating your lead generation processes with precision, helping you attract high-quality leads and convert them into loyal customers. This guide will walk you through how LeadMasters can be your ultimate partner in automating lead generation, along with tips and best practices to get the most out of this powerful tool.
</p>
      <section id="section-1" className="section">
        <h2>1. Unified Platform
        </h2>
        <img
          src={image2}
          alt="AI Optimizing Ad Spend"
          className="content-image2"
        />
        <p>
        LeadMasters integrates all essential lead generation tools into one platform, reducing the need for multiple third-party services.
        </p>
      </section>
      <section id="section-2" className="section">
        <h2>2. Advanced AI Capabilities
        </h2>
      
        <p>
        LeadMasters uses AI to enhance targeting, segmentation, and personalization, ensuring that your lead generation efforts are both efficient and effective
        </p>
      </section>
      <section id="section-3" className="section">
        <h2>3. Scalability
        </h2>
       
        <p>
        As your business grows, LeadMasters scales with you, handling larger volumes of leads without compromising on performance.
        </p>
      </section>
      <section id="section-4" className="section">
        <h2>4. Real-Time Analytics
        </h2>
     
        <p>
        With LeadMasters, you get real-time insights into your lead generation efforts, enabling you to make data-driven decisions quickly.

        </p>
      </section>
      <section id="section-5" className="section">
        <h2>5. Advanced CRM Integration 📊
        </h2>
       
        <p>
        Unified Data Management: LeadMasters’ CRM integration ensures that all your lead data is centralized, making it easy to manage, track, and nurture leads throughout the sales funnel.  \n
 Automated Follow-Ups: Automatically schedule and send follow-up emails, ensuring that no lead falls through the cracks.

        </p>
      </section>
      <section id="section-6" className="section">
        <h2>6. Email Marketing Automation 📧
        </h2>
      
        <p>
        Personalized Campaigns: Use LeadMasters to create and automate email campaigns that are tailored to each segment of your audience, improving engagement and conversion rates. /n
Behavioral Triggers: Set up automated email workflows based on lead behavior, such as website visits or content downloads, to nurture leads effectively.

        </p>
      </section>
      <section id="section-7" className="section">
        <h2>7. Landing Page Optimization 🌐
        </h2>
      
        <p>
        Custom Landing Pages: Build and automate landing pages within LeadMasters, using A/B testing to optimize for conversions. The platform’s dynamic content features ensure that each visitor sees the most relevant offers. /n
Lead Capture Forms: Automatically integrate lead capture forms with your CRM, ensuring that all leads are tracked and followed up with promptly.
        </p>
      </section>
      <section id="section-8" className="section">
        <h2>8. Social Media Automation 📱
        </h2>
      
        <p>
        Scheduled Posts: Automate your social media campaigns directly from LeadMasters, ensuring a consistent presence across platforms without the need for constant manual intervention. /n
Social Listening: Use LeadMasters’ social media tools to monitor mentions of your brand, engage with potential leads, and respond to inquiries in real-time.
        </p>
      </section>
      <section id="section-9" className="section">
        <h2>9. AI-Powered Chatbots 🤖
        </h2>
      
        <p>
        Real-Time Engagement: Deploy AI-powered chatbots on your website to engage visitors, qualify leads, and provide instant support—all while gathering valuable data. /n
Lead Qualification: LeadMasters’ chatbots can automatically qualify leads by asking pre-set questions, ensuring that your sales team only focuses on the most promising prospects.
        </p>
      </section>
      <section id="section-10" className="section">
        <h2>10. Leverage AI for Targeting and Segmentation 🎨
        </h2>
      
        <p>
        Use LeadMasters’ AI capabilities to segment your audience based on behavior, preferences, and demographics. Personalize your outreach to increase engagement and conversion rates.

        </p>
      </section>
      <section id="section-11" className="section">
        <h2>11. Implement Intelligent Lead Scoring 📈
        </h2>
      
        <p>
        LeadMasters’ lead scoring system ranks leads based on their likelihood to convert, allowing your sales team to focus on high-quality prospects. Automate follow-ups based on lead scores to ensure timely engagement.
        </p>
      </section>
      <section id="section-12" className="section">
        <h2>12. Create Automated Nurturing Workflows 🌱
        </h2>
      
        <p>
        Develop automated email workflows within LeadMasters to guide leads through the sales funnel. Start with a welcome series, followed by content tailored to the lead’s stage in the buyer’s journey.
        </p>
      </section>
      <section id="section-13" className="section">
        <h2>13. Optimize Lead Capture with Smart Forms 💻
        </h2>
      
        <p>
        Use LeadMasters’ lead capture forms on your landing pages to gather essential information. Automate the transfer of this data to your CRM and trigger personalized follow-up actions.

        </p>
      </section>
      <section id="section-14" className="section">
        <h2>14. Engage in Real-Time with AI Chatbots 🤖

        </h2>
      
        <p>
        Deploy chatbots to engage visitors as soon as they land on your site. Use LeadMasters to automate the chatbot responses, ensuring that every interaction is consistent and valuable.
        </p>
      </section>
      <section id="section-15" className="section">
        <h2>15. Regularly Update and Clean Your Data 🧹

        </h2>
      
        <p>
        Ensure that your CRM data is always up-to-date by using LeadMasters’ data management tools. Regularly clean and audit your database to remove duplicates and outdated information
        </p>
      </section>
      <section id="section-16" className="section">
        <h2>16. Continuously Test and Optimize 🔄
        </h2>
      
        <p>
        Use LeadMasters’ A/B testing features to continuously optimize your campaigns. Regularly test different email subject lines, landing page designs, and call-to-action buttons to find what works best.
        </p>
      </section>
      <section id="section-17" className="section">
        <h2>17. Focus on the Customer Journey 🛤️

        </h2>
      
        <p>
        Map out your customer journey within LeadMasters and automate touchpoints that enhance the experience. Use insights from LeadMasters’ analytics to refine these touchpoints for better engagement.
        </p>
      </section>
      <section id="section-18" className="section">
        <h2>18. Integrate Seamlessly with Existing Tools 🔗
        </h2>
      
        <p>
        LeadMasters integrates with a wide range of tools and platforms. Ensure seamless integration to maintain a consistent flow of data between your CRM, email marketing, and social media tools.
        </p>
      </section>
      <section id="section-19" className="section">
        <h2>19. Monitor Performance with Real-Time Analytics 📊
        </h2>
      
        <p>
        Track your lead generation efforts in real-time using LeadMasters’ analytics dashboard. Monitor key metrics such as lead conversion rates, cost per lead, and customer acquisition costs to make data-driven adjustments.

        </p>
      </section>
      <section id="section-20" className="section">
        <h2>Conclusion: LeadMasters is Your Key to Successful Lead Generation Automation 🏆
        </h2>
        <img
          src={image1}
          alt="Targeting the Right Audience"
          className="content-image2"
        />
        <p>
        Automating your lead generation with LeadMasters is not just a smart choice—it’s essential for staying competitive in today’s digital landscape. With the right tools, strategies, and best practices, LeadMasters empowers you to streamline your lead generation process, attract high-quality leads, and convert them into loyal customers.
Whether you’re a startup or an established enterprise, LeadMasters is designed to scale with your business and help you achieve your goals more efficiently and effectively. Embrace the power of automation with LeadMasters, and watch your business thrive. 🚀

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

export default Ultimate;
