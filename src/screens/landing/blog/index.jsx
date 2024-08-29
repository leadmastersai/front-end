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
import image3 from '../../../assets/blogdetails/eight.webp';
import image4 from '../../../assets/blogdetails/fourth.webp';
import soc5 from '../../../assets/landing/social5.svg';
import image1 from '../../../assets/blogdetails/n1.webp';
import image2 from '../../../assets/blogdetails/second.webp';
import loc from '../../../assets/landing/Location.svg';
import image5 from '../../../assets/blogdetails/s3.webp';
import time from '../../../assets/landing/Message.svg';
import mess from '../../../assets/landing/Calling.svg';
import call from '../../../assets/landing/Time.svg';
import rightArrow from '../../../assets/carousel/right.svg';
import leftArrow from '../../../assets/carousel/left.svg';
import { postService } from '../../../../services/postServices';

import caro from '../../../assets/blog/caro.svg'
import caro1 from '../../../assets/blog/caro1.webp'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Spin } from 'antd';

const Blog = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false); // State for showing success message
  const [error, setError] = useState(false);
  const [cardIndex, setCardIndex] = useState(0); // Trac
  const [currentCard, setCurrentCard] = useState(0);
  const cardsPerPage = 1; 
  const handleNextPage = () => {
    setCurrentCard((prev) => (prev + 1) % cardData.length);
  };

  const handlePrevPage = () => {
    setCurrentCard((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  const slides = [
    {
      text: "Retail Client Increases ROI by 25%",
      desc: "A comprehensive look at how a retail client used LeadMasters AI to optimize their ad campaigns and significantly boost their return on investment.",
      imageUrl: caro
    },
    {
      text: "Real Estate Agency Boosts Lead Conversion by 30%",
      desc: "Discover how a real estate agency leveraged LeadMasters AI's smart lead generation and automated social media posts to increase lead engagement.",
      imageUrl: caro1
    },
    // Add more slides as needed
  ];

  const handlePageClick = (index) => {
    setCurrentCard(index);
  };

  const renderPageNumbers = () => {
    const totalPages = Math.ceil(cardData.length / cardsPerPage);
    const startPage = Math.max(0, currentCard - 1);
    const endPage = Math.min(totalPages - 1, currentCard + 1);
  
    const pageNumbers = [];
  
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          key={i}
          className={`page ${currentCard === i ? 'active' : ''}`}
          onClick={() => handlePageClick(i)}
        >
          {i + 1}
        </span>
      );
    }
  
    if (endPage < totalPages - 1) {
      pageNumbers.push(<span key="ellipsis">...</span>);
    }
  
    return pageNumbers;
  };

  const CustomPrevArrow = ({ onClick }) => {
    return (
      <div
        className="custom-arrow custom-prev-arrow hide"
        style={{
          position: 'absolute',
          left: '130px',
          top: '31.5%',
          transform: 'translateY(-5%)',
          cursor: 'pointer',
        }}
        onClick={onClick}
      >
        <img src={leftArrow} alt="left arrow" />
      </div>
    );
  };
  
  const CustomNextArrow = ({ onClick }) => {
    return (
      <div
        className="custom-arrow custom-next-arrow hide "
        style={{
          position: 'absolute',
          right: '130px',
          top: '31.5%',
          transform: 'translateY(-5%)',
          cursor: 'pointer',
        }}
        onClick={onClick}
      >
        <img src={rightArrow} alt="right arrow" />
      </div>
    );
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: email,
    };
    try {
      setLoading(true);
      const response = await postService.postContactInfo(payload);
      console.log(response.data, "success");

      setEmail('');

      setSuccess(true);
      setError(false);

      setLoading(false);
      setTimeout(() => setSuccess(false), 3000); // Hide after 3 seconds
    } catch (error) {
      console.log(error, 'error');
      setError(true);
      setSuccess(false);
      setLoading(false);
      setTimeout(() => setError(false), 3000);
    }
  };

  const cardData = [
    {
      image: image2,
      title: 'Maximizing ROI: How AI-Driven Lead Generation Transforms Digital Marketing Campaigns',
      description: 'In todays fast-paced digital landscape, businesses are constantly...',
      link: 'blog/maximize'
    },
    {
      image: image3,
      title: 'The Future of Advertising: How AI is Revolutionizing Social Media Ad Campaigns',
      description: 'In the rapidly evolving landscape of digital marketing, social media platforms have become indispensable...',
      link: 'blog/future'
    },
    {
      image: image4,
      title: 'Data-Driven Decisions: The Power of Analytics in Modern Lead Generation',
      description: 'In today’s competitive business environment, making informed decisions is crucial for success...',
      link: 'blog/driven'
    },
    {
      image: sky,
      title: 'From Clicks to Conversions: How AI Personalization Increases Customer Engagement',
      description: 'In the world of digital marketing, the journey from a click to a conversion is a delicate process that ...',
      link: 'blog/click'
    },
    {
      image: image1,
      title: 'The Ultimate Guide to Automating Your Lead Generation with LeadMasters: Tools, Tips, and Best Practices ',
      description: 'In today’s fast-paced digital marketing world, businesses need to constantly...',
      link: 'blog/ultimate'
    },
    {
      image: image5,
      title: 'AI-Powered Lead Scoring: How to Prioritize High-Quality Prospects and Boost Conversion Rates',
      description: 'In the competitive world of digital marketing, not all leads are created equal. Some prospects are ...',
      link: 'blog/scoring'
    }
  ];



  const Card = ({ image, title, description, link }) => {
    const handleLink=()=>{
      navigate(`/${link}`);
    }
    return (
      <div className="card77" onClick={handleLink}>
        <img src={image} alt={title} className="card-image79" />
        <div className="card-content79">
          <h3 className="card-title79">{title}</h3>
          <p className="card-description79">{description}</p>
        </div>
        <a href={link} className="card-link79">Read more</a>
      </div>
    );
  }

  const [transitionStage, setTransitionStage] = useState(''); // Track transition stage

const handleNextCards = () => {
  setTransitionStage('sliding-left');
  setTimeout(() => {
    setCardIndex((prev) => (prev + 3) % cardData.length);
    setTransitionStage(''); // Reset after sliding
  }, 500); // Match with CSS transition duration
};

const handlePrevCards = () => {
  setTransitionStage('sliding-right');
  setTimeout(() => {
    setCardIndex((prev) => (prev - 3 + cardData.length) % cardData.length);
    setTransitionStage(''); // Reset after sliding
  }, 500);
};


  return (
    <div>
      <div className="container-section99">
        <h1 className="biggest-text91">Blog/Resources</h1>
      </div>
      <div className="image-container999">
        <img className='bg-img-sect55' src={backgr} />
        <img className='bg-img-sect77' src={Back} />
      </div>

      <div className="container-section99">
        <h1 className="biggest-text91">Latest Blogs</h1>
        <CustomPrevArrow onClick={handlePrevCards} />
        <div className="single-card-container" style={{ display: 'none' }}>
        <Card
          image={cardData[currentCard].image}
          title={cardData[currentCard].title}
          description={cardData[currentCard].description}
          link={cardData[currentCard].link}
        />
        <div className="pagination">
          <span className="page" onClick={handlePrevPage}>Prev</span>
          {renderPageNumbers()}
          <span className="page" onClick={handleNextPage}>Next</span>
        </div>
      </div>
        <div className="carousel-container79">
          <div className="cards-row79">
            {cardData.slice(cardIndex, cardIndex + 3).map((card, index) => (
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
        <CustomNextArrow  onClick={handleNextCards} />
      </div>

      <div className="app69">
        <h1 className="biggest-text91" style={{ marginBottom: 20 }}>Case Studies</h1>
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
            <div className={currentSlide === 1 ? "image69-alt" : "image69"}>
              <img src={slides[currentSlide].imageUrl} alt="Slide image" />
            </div>
          </div>
        </div>
      </div>

      <div className="newsletter-container newsletter-container6">
        <div className="newsletter-content">
          <h1 className='biggest-text91 closs' style={{ textAlign: 'left', width: '130%' }}>Subscribe to our newsletter for the latest updates</h1>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email id" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button className="cta-button90" onClick={handleSubmit}>{loading ? <Spin size="small" /> : "Submit"}</button>
          {success && <Alert style={{ marginBlock: 5 }} message="Submitted successfully!" type="success" showIcon />}
          {error && <Alert style={{ marginBlock: 5 }} message="There was an error sending your message." type="error" showIcon />}
        </div>
        <div className="newsletter-image">
          <img src={seo} alt="Newsletter" />
        </div>
      </div>

      <footer className="footer9 top" >
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
  )
}

export default Blog;
