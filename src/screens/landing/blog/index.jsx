import './style.scss';
import backgr from '../../../assets/landing/backgr.svg';
import Icon from '../../../assets/auth/appIcon.svg';
import Back from '../../../assets/aboutus/mask.svg';
import sky from '../../../assets/blog/sky.svg';
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


import caro from '../../../assets/blog/caro.svg'
import { useState } from 'react';
const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      text:"Retail Client Increases ROI by 25%",
      desc: "A comprehensive look at how a retail client used LeadMasters AI to optimize their ad campaigns and significantly boost their return on investment.",
      imageUrl: caro
    },
    {
      text:"Retail Client Increases ROI by 25%",
      desc: "A comprehensive look at how a retail client used LeadMasters AI to optimize their ad campaigns and significantly boost their return on investment.",
      imageUrl: caro
    },
    // Add more slides as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const cardData = [
    {
      image: sky,
      title: 'The Future of AI in Marketing',
      description: 'An exploration of emerging trends and technologies in AI and their potential impact on marketing strategies.',
      link: '#'
    },
    {
      image: sky,
      title: '5 Ways to Improve Lead Quality with Predictive Analytics',
      description: 'Tips and techniques for leveraging predictive analytics to enhance lead quality and drive better results.',
      link: '#'
    },
    {
      image: sky,
      title: 'Integrating LeadMasters AI with Your CRM',
      description: 'A detailed guide on how to seamlessly integrate our platform with your existing CRM systems for improved data flow and efficiency.',
      link: '#'
    }
  ];

  const cardData1 = [
    {
      image: sky,
      title: 'Getting Started with LeadMasters AI',
      description: 'A beginner’s guide to setting up your account, integrating your tools, and navigating the platform.',
      link: '#'
    },
    {
      image: sky,
      title: 'Optimizing Your Ad Campaigns',
      description: 'Learn how to set up, manage, and optimize ad campaigns across multiple channels using our AI-driven tools.',
      link: '#'
    },
    {
      image:sky,
      title: 'Customizing Your Analytics Dashboard',
      description: 'Step-by-step instructions on how to create and customize dashboards to monitor key performance indicators and gain actionable insights.',
      link: '#'
    }
  ];

  const Card = ({ image, title, description, link }) => {
    return (
      <div className="card77">
        <img src={image} alt={title} className="card-image79" />
        <div className="card-content79">
          <h3 className="card-title79">{title}</h3>
          <p className="card-description79">{description}</p>
        
        </div>
        <a href={link} className="card-link79">Read more</a>
      </div>
    );
  }
  return (
    <div>
      <div className="container-section99">
      <h1 className="biggest-text9">Blog/Resources</h1>
      
    </div>
    <div className="image-container">
    <img className='bg-img-sect55' src={backgr} />
    <img className='bg-img-sect77' src={Back} />
    </div>
    
    <div className="container-section99">
    <h1 className="biggest-text9">Latest Blogs</h1>
    <div className="app79">
  
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
    </div>
    <div className="app69">
    <h1 className="biggest-text9" style={{marginBottom:20}}>Case Studies</h1>
      <div className="carousel69-container">
        <div className="slide69">
          <div className="content69">
            <h2>{slides[currentSlide].text}</h2>
            <p>{slides[currentSlide].desc}</p>
            <a href="#" className="read-more69">Read more</a>
            <div className="carousel69-indicators">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`indicator69 ${index === currentSlide ? 'active69' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="image69">
            <img src={slides[currentSlide].imageUrl} alt="Slide image" />
          </div>
        </div>
       
      </div>
    </div>
    <div className="container-section99">
    <h1 className="biggest-text9">User Guide</h1>
    <div className="app79">
  
      {cardData1.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
    </div>
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h1 className='biggest-text9' style={{textAlign:'left',width:'130%'
        }}>Subscribe to our newsletter for the latest updates</h1>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email id" />
          
        </div>
        <button className="cta-button90">Get Started Free</button>
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
          <p>8147808161</p>
        </div>
      </div>
      <div className="contact-item">
        <img src={call} alt="Clock Icon" className="contact-icon" />
        <div className="contact-details">
          <p>Response hours:</p>
          <p>8 to 20</p>
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
  )
}

export default Blog
