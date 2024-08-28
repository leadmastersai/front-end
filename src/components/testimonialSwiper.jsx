import React from 'react';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import backgr from '../assets/landing/backgr.svg';
const TestimonialSwiper = () => {
  return (
    <div style={containerStyle}>
      <h2 className='biggest-text912 closs'>What Our Users Say About Us</h2>
     
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 1,
          stretch: 0,
          depth: 100,
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
            <p style={textStyle}>
            Incredible insights and easy to use.Incredible insights and easy to use.Incredible insights and easy to use.Incredible insights
            </p>
            <h4 style={authorStyle}>Arda Guler</h4>
            <p style={companyStyle}>Accenture</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <div style={cardStyle}>
            <p style={textStyle}>
            Incredible insights and easy to use.Incredible insights and easy to use.Incredible insights and easy to use.Incredible insights
            </p>
            <h4 style={authorStyle}>Arda Guler</h4>
            <p style={companyStyle}>Accenture</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <div style={cardStyle}>
            <p style={textStyle}>
            Incredible insights and easy to use.Incredible insights and easy to use.Incredible insights and easy to use.Incredible insights
            </p>
            <h4 style={authorStyle}>Arda Guler</h4>
            <p style={companyStyle}>Accenture</p>
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
  minHeight: '200px',
  maxWidth: '50vw',
  margin: '10px',
};

const textStyle = {
  fontSize: '1rem',
  color: '#333',
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
