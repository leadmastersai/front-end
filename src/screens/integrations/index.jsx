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
const SocialMediaIntegration = ({ platform, isConnected }) => {
  const [connected, setConnected] = useState(isConnected);
  const token = localStorage.getItem('oauthToken');
  function handleClick() {
    const state =  `postsignup|token=${token}`;
    const encodedState = encodeURIComponent(state);
    const linkedinAuthUrl = `https://leadmasters.site/auth/linkedin?state=${encodedState}`;
    window.location.href = linkedinAuthUrl;
    }

    function handleClick1() {
      
      const linkedinAuthUrl = `https://leadmasters.site/auth/twitter?token=${token}`;
      window.location.href = linkedinAuthUrl;
      }
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
              disabled
            >
              Disconnect
            </button>
          </>
        ) : (
          <button 
            style={styles.integrateButton}
            onClick={platform.icon===twi ? handleClick1 : handleClick}
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
      isConnected: false,
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
    cursor: 'not-allowed',
    fontSize: '16px',
  },
};

export default Integrations;
