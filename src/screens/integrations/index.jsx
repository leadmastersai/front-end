import { useEffect, useState } from 'react';
import './style.scss';
import insta from '../../assets/integrations/ig.svg';
import stars from '../../assets/getIdea/stars.svg';
import face from '../../assets/integrations/fb.svg';
import twi from '../../assets/integrations/tw.svg';
import link from '../../assets/integrations/ln.svg';
import google from "../../assets/auth/google.svg";
import { postService } from '../../../services/postServices';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserDetail } from "../../redux/authSlice";
import { disconnectService } from '../../../services/disconnectService';

const SocialMediaIntegration = ({ platform, isConnected }) => {
  const dispatch=useDispatch();
  const [connected, setConnected] = useState(isConnected);
  const token = localStorage.getItem('oauthToken');
  const getUserDetails=async()=>{
    const response=await postService.getUser();
    console.log(response.data,"+++");
   dispatch(saveUserDetail(response.data));
    
  }
  function handleClick() {
    const state =  `postsignup|token=${token}`;
    const encodedState = encodeURIComponent(state);
    console.log(encodedState,"********************************************");
    
    const linkedinAuthUrl = `https://leadmasters.site/auth/linkedin?state=${encodedState}`;
    window.location.href = linkedinAuthUrl;
    }

    function handleClick1() {
      
      const linkedinAuthUrl = `https://leadmasters.site/auth/twitter?token=${token}`;
      window.location.href = linkedinAuthUrl;
      }

      
function handleClick2() {
 
  window.location.href = `https://leadmasters.site/auth/facebook`;
}


      const handleDisconnect = async () => {
        try {
          if (platform.name === 'Twitter X') {
            const response = await disconnectService.twitterDisconnect();
            console.log(response.data, "Twitter disconnected");
          } else if (platform.name === 'LinkedIn Profile') {
            const response = await disconnectService.linkedinDisconnect();
            console.log(response.data, "LinkedIn disconnected");
          } else if (platform.name === 'Google') {
            const response = await disconnectService.googleDisconnect();
            console.log(response.data, "Google disconnected");
          }
          getUserDetails();
          setConnected(false); // Update the state to show it's disconnected
        } catch (error) {
          console.error(`Error disconnecting ${platform.name}:`, error);
        }
      };


  return (
    <div style={styles.container}>
      <div style={styles.platformName}>
        <img src={platform.icon} alt={`${platform.name} icon`} style={styles.icon} />
        <span>{platform.name}</span>
      </div>
      <div style={styles.actions}>
        {isConnected ? (
          <>
            <span style={styles.connectedText}>Connected</span>
            <button 
              style={styles.disabledButton} 
              onClick={handleDisconnect}
            >
              Disconnect
            </button>
          </>
        ) : (
          <button 
            style={styles.integrateButton}
            onClick={() => {
              if (platform.icon === twi) {
                handleClick1(); // Handle Twitter icon click
              } else if (platform.icon === face) {
                handleClick2(); // Handle Facebook icon click
              } else {
                handleClick(); // Handle other icons
              }
            }}
          >
            Integrate
          </button>
        )}
      </div>
    </div>
  );
};

const Integrations = () => {
  const dispatch=useDispatch();
  const token = localStorage.getItem('oauthToken');
const {userBasics}  = useSelector((state) => state.auth);
  

  useEffect(()=>{
    const getUserDetails=async()=>{
      const response=await postService.getUser();
      console.log(response.data,"+++");
     dispatch(saveUserDetail(response.data));
      
    }
    getUserDetails()
    },[]);

  const platforms = [
    {
      name: 'LinkedIn Profile',
      icon: link,
      isConnected: userBasics.isLinkedInConnected,
    },
    {
      name: 'Instagram Profile',
      icon: insta,
      isConnected: false,
    },
    {
      name: 'Twitter X',
      icon: twi,
      isConnected: userBasics.isTwitterLogin,
    },
    {
      name: 'Facebook',
      icon:face,
      isConnected: false,
    },
    {
      name:'Google',
      icon:google,
      isConnected:userBasics.isGoogleConnected
    }
  ];

  return (
    <div style={{marginTop:'5vh'}}>
         <div className='heading'>
    <h3>Social Logins</h3>
    <img src={stars} className='str'/>
    </div>
    <div className='inte-cont'>
      {platforms.map((platform, index) => (
        <SocialMediaIntegration 
          key={index} 
          platform={platform} 
          isConnected={platform.isConnected} 
        />
      ))}
    </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',
    borderBottom: '1px solid #E0E0E0',
  },
  platformName: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    width: '24px',
    height: '24px',
    marginRight: '10px',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
  },
  connectedText: {
    color: '#7E7E7E',
    marginRight: '20px',
    fontSize: '16px',
  },
  integrateButton: {
    background: 'linear-gradient(90deg, #0000FF 0%, #8F00FF 48.99%, #FF1494 99.99%)',
    paddingInline: '3vw',
    paddingBlock: '1.3vh',
    border: 'none',
    borderRadius: '8px',
    fontSize: '12px',
    color: 'white',
    cursor: 'pointer',
  },
  disabledButton: {
    backgroundColor: '#C0C0C0',
    color: '#fff',
    border: 'none',
    padding: '8px 20px',
    borderRadius: '8px',
   cursor:'pointer',
    fontSize: '16px',
  },
};

export default Integrations;
