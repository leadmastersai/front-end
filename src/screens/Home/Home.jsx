import Carousel from "../../components/carouse";
import card1 from '../../assets/dashb/chart1.svg';
import card2 from '../../assets/dashb/chart2.svg';
import card3 from '../../assets/dashb/chart3.svg';
import card4 from '../../assets/dashb/Profit.svg';
import chart1 from '../../assets/dashb/Analytics.svg';
import chart2 from '../../assets/dashb/charts4.svg';
import chart3 from '../../assets/dashb/charts5.svg';
import first from '../../assets/dashb/1st.svg';
import second from '../../assets/dashb/2nd.svg';
import third from '../../assets/dashb/3rd.svg';

import './styles.scss';
import { useEffect } from "react";

const Home = () => {
  const smallCards=[
    {image:card1},
    {image:card2},
    {image:card3},
    {image:card4}
  ]
  function getCookie(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

useEffect(() => {
  console.log("Component Mounted");

  // Fetch the token from cookies
  const token = getCookie('auth_token');
  console.log('Auth Token:', token);

  // Store the token in local storage if it exists
  if (token) {
    localStorage.setItem('auth_token', token);
    console.log('Token saved to local storage');
  } else {
    console.log('No token found in cookies');
  }
}, []);

console.log("hiiiiii");

const token = getCookie('auth_token');
console.log('Auth Token:', token);

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
        <div className="cards-cont3">
          <img className="chart-others2" src={first} />
          <img className="chart-2" src={second} />
          <img className="chart-others3" src={third} />
        </div>
        
    </div>
  );
};

export default Home;
