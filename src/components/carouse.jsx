
import Slider from 'react-slick';
import './styles.css';
import Social1 from '../assets/carousel/social1.svg';
import Cent from '../assets/carousel/cent.svg';
import Social2 from '../assets/carousel/social2.svg';
import Social3 from '../assets/carousel/social3.svg';
import Social4 from '../assets/carousel/social4.svg';
import rightArrow from '../assets/carousel/right.svg';
import leftArrow from '../assets/carousel/left.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const cards = [
    { logo: Social3, title: 'Google Ads', cent: Cent },
    { logo: Social4, title: 'Instagram Ads', cent: Cent },
    { logo: Social2, title: 'LinkedIn Ads', cent: Cent },
    { logo: Social1, title: 'Twitter Ads', cent: Cent },
    { logo: Social3, title: 'Google Ads', cent: Cent },
  ];

  const Card = ({ logo, title, cent }) => {
    return (
      <div className="card">
        <img src={logo} alt={`${title} logo`} className="card-logo" />
        <h3 className="card-content">{title}</h3>
        <img src={cent} className="cent-logo" alt="cent logo" />
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', left: '-55px',top:5 }}
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
        style={{ ...style, display: 'block', right: '-35px',top:5 }}
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
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
