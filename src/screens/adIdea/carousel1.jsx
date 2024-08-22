
import Slider from 'react-slick';
import './styles1.css';
import Social1 from '../../assets/carousel/social1.svg';
import Cent from '../../assets/carousel/cent.svg';
import Social2 from '../../assets/carousel/social2.svg';
import Social3 from '../../assets/carousel/social3.svg';
import Social4 from '../../assets/carousel/social4.svg';
import rightArrow from '../../assets/carousel/right.svg';
import leftArrow from '../../assets/carousel/left.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

const Carousel1 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  const cards = [
    { logo: Social3, title: 'Google Ads', cent: Cent },
    { logo: Social4, title: 'Instagram Ads', cent: Cent },
    { logo: Social2, title: 'LinkedIn Ads', cent: Cent },
    { logo: Social1, title: 'Twitter Ads', cent: Cent },
    { logo: Social3, title: 'Google Ads', cent: Cent },
  ];

  const Card = ({ logo, title, cent ,index}) => {
    return (
        <div       className={`card ${index === activeIndex ? 'active munjal' : ''}`}
        onClick={() => setActiveIndex(index)}>
        <img src={logo} alt={`${title} logo`} className="card-logo1" />
        <h3 className="card-content1">{title}</h3>
    
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', left: '-55px',top:-3 }}
        onClick={onClick}
      >
        <img src={leftArrow} alt="left arrow" />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', right: '-35px',top:-3 }}
        onClick={onClick}
      >
        <img src={rightArrow} alt="right arrow" />
      </div>
    );
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-wrapper1">
      <Slider  {...settings}>
        {cards.map((card, index) => (
          <Card  key={index} {...card} index={index}/>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel1;
