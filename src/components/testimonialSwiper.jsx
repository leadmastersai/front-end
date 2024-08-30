import React from 'react';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import backgr from '../assets/landing/backgr.svg';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
const TestimonialSwiper = () => {
  return (
    <div style={containerStyle}>
      <h2 className='biggest-text912 closs'>What Our Users Say About Us</h2>
     
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 1,
          stretch: 0,
          
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: -30 },
          
        }}
      >
        <SwiperSlide style={slideStyle}>
          <div style={cardStyle}>
            <p style={textStyle1} className='max-height'>
            LeadMasters AI transformed our marketing strategy! The AI-driven insights helped us target the right audience, optimizing our ad spend significantly. We've seen a tremendous boost in leads and conversions. Highly recommended!

            </p>
            <p style={textStyle}>⭐️⭐️⭐️⭐️⭐️ </p>
            <h4 style={authorStyle}>— Priya S</h4>
            <p style={companyStyle}>Digital Marketing Manager</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <div style={cardStyle}>
            <p style={textStyle} className='max-height'>
            The ease of use and the powerful AI features of LeadMasters AI are unmatched. Our team has been able to streamline our campaigns and get real-time insights, leading to better decision-making and higher ROI.
           
            </p>
            <p style={textStyle}>⭐️⭐️⭐️⭐️⭐️ </p>
            <h4 style={authorStyle}>— Michael R.</h4>
            <p style={companyStyle}>Chief Marketing Officer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <div style={cardStyle}>
            <p style={textStyle1} className='max-height'>
            LeadMasters AI helped us cut through the noise and focus on what really matters. The platform's automation and optimization tools have saved us time and increased our campaign effectiveness.
           
            </p>
            <p style={textStyle}>⭐️⭐️⭐️⭐️⭐️ </p>
            <h4 style={authorStyle}>— Ravi P.</h4>
            <p style={companyStyle}>Growth Strategist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <div style={cardStyle}>
            <p style={textStyle1} className='max-height'>
            We saw a 30% increase in qualified leads within the first month of using LeadMasters AI. The insights and recommendations are spot-on, making our campaigns more targeted and successful.
           
            </p>
            <p style={textStyle}>⭐️⭐️⭐️⭐️⭐️ </p>
            <h4 style={authorStyle}>— Emily L.</h4>
            <p style={companyStyle}>Head of Marketing</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <div style={cardStyle}>
            <p style={textStyle1} className='max-height'>
            LeadMasters AI is a must-have for any business looking to scale their digital marketing efforts. The AI tools are intuitive, and the support team is always there to help. We've achieved incredible results!
            </p>
            <p style={textStyle}>⭐️⭐️⭐️⭐️⭐️ </p>
            <h4 style={authorStyle}>— Michael R.</h4>
            <p style={companyStyle}>Marketing Head</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <div style={cardStyle}>
            <p style={textStyle1} className='max-height'>
            Thanks to LeadMasters AI, our lead generation process is now more efficient than ever. The platform's ability to analyze data and provide actionable recommendations is a game-changer for our business.
        
            </p>
            <p style={textStyle}>⭐️⭐️⭐️⭐️⭐️ </p>
            <h4 style={authorStyle}>— Rajesh M.</h4>
            <p style={companyStyle}>Brand Awareness Specialist</p>
          </div>
        </SwiperSlide>
       
        {/* Add more SwiperSlides as needed */}
      </Swiper>
      <img className='bg-img-sect5 ' src={backgr} style={marginTop} />
    </div>
  );
};

// Styling for the container
const containerStyle = {
  padding: '50px 20px', 
  textAlign: 'center',
  
  position: 'relative',
  backgroundImage: 'url(../assets/landing/backgr.svg) no-repeat center center/cover', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

// Styling for the title
const titleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#333',
};

const marginTop={
    marginTop:'-30vh'
}

// Styling for the Swiper slides
const slideStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

// Styling for the cards
const cardStyle = {
  background: 'white',
  paddingInline: '70px',
  paddingBlock:'20px',
  borderRadius: '10px',
  display:'flex',
  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  textAlign: 'center',
  flexDirection:'column',
  minHeight: '350px',
  maxWidth: '50vw',
  margin: '10px',
};

const textStyle = {
  fontSize: '1rem',
  color: '#333',
};
const textStyle1 = {
  fontSize: '1rem',
  color: '#333',
  height:'150px',

};

const authorStyle = {
  marginTop: '10px',
  fontWeight: 'bold',
  fontSize: '1.2rem',
};

const companyStyle = {
  color: '#777',
};

export default TestimonialSwiper;
