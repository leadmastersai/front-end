import React, { useState } from 'react'
import './styles.scss';
import Pguy from '../../assets/blog/pointingguy.svg';
import backgr from '../../assets/landing/backgr.svg';
import Back from '../../assets/privacy/Mask.svg';
import Icon from '../../assets/auth/appIcon.svg'
import soc1 from '../../assets/landing/social1.svg';
import soc2 from '../../assets/landing/social2.svg';
import soc3 from '../../assets/landing/social3.svg';
import soc4 from '../../assets/landing/social4.svg';
import soc5 from '../../assets/landing/social5.svg';
import loc from '../../assets/landing/Location.svg';
import time from '../../assets/landing/Message.svg';
import mess from '../../assets/landing/Calling.svg';
import call from '../../assets/landing/Time.svg';
import { useNavigate } from 'react-router-dom';
import { postService } from '../../../services/postServices';
import { Alert, Spin } from 'antd';
const Terms2 = () => {
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
    
      
    const navigate=useNavigate();
  return (
    <div style={{width:'80%',marginLeft:150,marginTop:-100}}>
  <div className="container-section99">
    <h1 className="biggest-text91 closs closs1">Terms of Service</h1>
</div>
<div className="image-container999 op">
    <img className='bg-img-sect55' src={backgr} />
    <img className='bg-img-sect77' src={Back} />
</div>
<div className="privacy-policy-container">
    <p className="last-updated">Effective Date: Oct 02nd, 2024</p>
    <h2>1. Definitions</h2>
    <p><strong>1.1 "Platform"</strong> refers to LeadMasters AI, accessible via leadmasters.ai and leadmasters.site.</p>
    <p><strong>1.2 "We," "Us," or "Our"</strong> refers to LeadMasters AI, its affiliates, and subsidiaries.</p>
    <p><strong>1.3 "User," "You," or "Your"</strong> refers to the individual or entity accessing and using LeadMasters AI.</p>
    <p><strong>1.4 "Services"</strong> means the lead generation, ad optimization, and social media integration services provided by LeadMasters AI, including integrations with third-party platforms such as Meta, LinkedIn, X, Google Ads, and YouTube.</p>

    <h2>2. Eligibility</h2>
    <p>To use our Services, you must:</p>
    <ul>
        <li>Be at least 18 years old or have reached the age of majority in your jurisdiction.</li>
        <li>Comply with all applicable laws and regulations, including international privacy laws such as GDPR.</li>
    </ul>

    <h2>3. User Responsibilities</h2>
    <p>You agree not to:</p>
    <ul>
        <li>Use the platform in any way that violates applicable laws or platform policies (e.g., Meta, LinkedIn, X).</li>
        <li>Post or transmit content that is defamatory, abusive, obscene, or unlawful.</li>
        <li>Interfere with the proper working of the platform, including uploading viruses or harmful code.</li>
        <li>Use automated systems, such as bots or scripts, to interact with our Services without permission.</li>
    </ul>

    <h2>4. Account Registration</h2>
    <p>To use our Services, you may be required to register and create an account. You agree to:</p>
    <ul>
        <li>Provide accurate, current, and complete information during the registration process.</li>
        <li>Maintain the confidentiality of your account credentials.</li>
        <li>Be responsible for all activities that occur under your account.</li>
    </ul>

    <h2>5. Payment and Subscription</h2>
    <p>By subscribing to any paid features of the platform, you agree to:</p>
    <ul>
        <li>Provide accurate payment details.</li>
        <li>Allow us to charge you for the selected service plan.</li>
        <li>Comply with any subscription renewal terms.</li>
    </ul>

    <h2>6. Refund Policy</h2>
    <p>All payments are final unless otherwise specified. Refunds may be granted at our sole discretion under specific circumstances outlined in our Refund Policy. If you believe you are entitled to a refund, please contact us at support@leadmasters.ai within 30 days from the date of payment.</p>

    <h2>7. License</h2>
    <p>LeadMasters AI grants you a limited, non-exclusive, non-transferable license to access and use the platform for your personal or business purposes, including ad generation and campaign management.</p>

    <h2>8. Intellectual Property</h2>
    <p>All content and materials on the platform, including but not limited to software, logos, graphics, and text, are owned by LeadMasters AI or its licensors. You are not permitted to reproduce, distribute, or modify any content without prior written permission from LeadMasters AI.</p>

    <h2>9. Termination</h2>
    <p>LeadMasters AI reserves the right to suspend or terminate your access to the platform without cause or notice if you violate these Terms, engage in any unlawful activity, or fail to comply with third-party integration policies.</p>

    <h2>10. Dispute Resolution</h2>
    <p>Any disputes arising under these Terms shall be resolved by binding arbitration in accordance with the Arbitration and Conciliation Act, 1996, of India. The location of arbitration shall be Bangalore, India, and the language of arbitration shall be English.</p>

    <h2>11. Limitation of Liability</h2>
    <p>LeadMasters AI shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of the platform, including but not limited to loss of data or profit. In no event shall our liability exceed the amount paid by you for the service in the preceding 12 months.</p>

    <h2>12. Indemnity</h2>
    <p>You agree to indemnify, defend, and hold harmless LeadMasters AI and its affiliates, officers, employees, and agents from any claims, liabilities, damages, losses, or expenses, including legal fees, arising out of your use of the platform or breach of these Terms.</p>

    <h2>13. Service Availability</h2>
    <p>While we strive to ensure continuous access to our platform, we cannot guarantee uninterrupted service. LeadMasters AI shall not be liable for any outages or disruptions caused by scheduled maintenance, third-party service outages, or events beyond our control.</p>

    <h2>14. Third-Party Services</h2>
    <p>LeadMasters AI integrates with third-party services such as Google Ads, Facebook, LinkedIn, YouTube, and X. Your use of such third-party services is subject to their respective terms and conditions. LeadMasters AI is not responsible for any actions, policies, or data practices of these third-party services.</p>

    <h2>15. Acceptable Use Policy</h2>
    <p>Users must comply with the Acceptable Use Policy while using LeadMasters AI. The following activities are prohibited:</p>
    <ul>
        <li>Running campaigns that promote illegal, fraudulent, or harmful content.</li>
        <li>Using the platform to harass or harm others.</li>
        <li>Misusing the platform for unauthorized access, hacking, or security breaches.</li>
    </ul>

    <h2>16. Termination Without Cause</h2>
    <p>LeadMasters AI reserves the right to terminate any account without cause and without prior notice. If your account is terminated, you may no longer access our platform or services.</p>

    <h2>17. No Waiver</h2>
    <p>Failure by LeadMasters AI to enforce any part of these Terms at any time does not constitute a waiver of our right to enforce it in the future.</p>

    <h2>18. User-Generated Content</h2>
    <p>Any content created or uploaded by users (including ad copy, social media posts, etc.) remains the property of the user. However, by uploading such content, you grant LeadMasters AI a worldwide, royalty-free, non-exclusive, perpetual license to use, display, distribute, and modify such content in connection with the operation of the platform.</p>

    <h2>19. Modifications to Terms</h2>
    <p>LeadMasters AI reserves the right to modify these Terms at any time. Any changes will be effective immediately upon posting to the platform. Your continued use of the platform after the posting of the modified Terms constitutes your agreement to the changes.</p>

    <h2>20. Governing Law</h2>
    <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of laws principles.</p>

    <h2>21. Contact Information</h2>
    <p>If you have any questions regarding these Terms, please contact us at:</p>
    <p>Email: support@leadmasters.ai</p>
    <p>Phone: +91 8179212829</p>
</div>

   
    </div>
  )
}

export default Terms2
