import Carousel from "../../components/carouse";
import card1 from '../../assets/dashb/chart1.svg';
import card2 from '../../assets/dashb/chart2.svg';
import card3 from '../../assets/dashb/chart3.svg';
import card4 from '../../assets/dashb/Profit.svg';
import chart1 from '../../assets/dashb/Analytics.svg';
import chart2 from '../../assets/dashb/charts4.svg';
import chart3 from '../../assets/dashb/charts5.svg';
import './styles.scss';
const Home = () => {
  const smallCards=[
    {image:card1},
    {image:card2},
    {image:card3},
    {image:card4}
  ]
  return (
    <div style={{ backgroundColor:'#f3edf8'}}>
      <Carousel style={{marginTop:200}}/>
      <div className="cards-cont">
        {smallCards.map((card,index)=>(
          <>
          <div className="cards-img-s">
        <img className="imgs"  key={index} src={card.image} />
        </div>
        </>
        ))

        }
        
      </div>
      <div className="cards-cont1">
          <img className="chart-1" src={chart1} />
          <img className="chart-others1" src={chart2} />
          <img className="chart-others" src={chart3} />
        </div>
    </div>
  );
};

export default Home;
