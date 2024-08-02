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
import { useEffect, useState } from "react";
import { postService } from "../../../services/postServices";
import { useDispatch, useSelector } from "react-redux";
import { saveUserDetail } from "../../redux/authSlice";




const Home = () => {
const dispatch=useDispatch();

  const smallCards=[
    {image:card1},
    {image:card2},
    {image:card3},
    {image:card4}
  ]
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token'); // Changed from encryptedToken to token

    console.log('Received Token:', token); // Log the received token

    if (token) {
        // Store the token securely
        localStorage.setItem('oauthToken', token);

        // Remove the token from URL parameters
        urlParams.delete('token');
        const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
        window.history.replaceState({}, document.title, newUrl);

        // Optional: Redirect the user to another page

    } else {
        console.error('Token is null or undefined');
    }
}, []);


useEffect(() => {
  const token = localStorage.getItem('oauthToken');
  if (token) {
      console.log('Token in Home:', token);
  } else {
      console.error('Token is null or undefined in Home');
  }
}, []);

useEffect(()=>{
const getUserDetails=async()=>{
  const response=await postService.getUser();
  console.log(response.data,"+++");
 dispatch(saveUserDetail(response.data));
  
}
getUserDetails()
},[])

const {userBasics}  = useSelector((state) => state.auth);

console.log(userBasics,"this is user");


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
