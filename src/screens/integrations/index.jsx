import { useEffect, useState } from 'react';
import './style.scss';
import insta from '../../assets/integrations/ig.svg';
import stars from '../../assets/getIdea/stars.svg';
import face from '../../assets/integrations/fb.svg';
import twi from '../../assets/integrations/tw.svg';
import link from '../../assets/integrations/ln.svg';
import tick from '../../assets/integrations/tick.svg';
import google from "../../assets/auth/google.svg";
import { postService } from '../../../services/postServices';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserDetail } from "../../redux/authSlice";
import { disconnectService } from '../../../services/disconnectService';
import th from '../../assets/integrations/threads.svg';

const SocialMediaIntegration = ({ platform, isConnected }) => {
  const dispatch = useDispatch();
  const { userBasics } = useSelector((state) => state.auth);
  const [connected, setConnected] = useState(isConnected);

  const token = localStorage.getItem('oauthToken');

  const getUserDetails = async () => {
    const response = await postService.getUser();
    console.log(response.data, "+++");
    dispatch(saveUserDetail(response.data));
  }

  useEffect(() => {
    // Update the connected state based on userBasics
    setConnected(isConnected);
  }, [isConnected]);

  useEffect(() => {
    if (connected) {
      getUserDetails();  // Fetch user details when the platform becomes connected
    }
  }, [connected, dispatch]);

  // Define the OAuth click handlers
  const handleOAuthClick = (platformName) => {
    const urls = {
      'LinkedIn Profile': `https://leadmasters.site/auth/linkedin?state=postsignup|token=${token}`,
      'Twitter X': `https://leadmasters.site/auth/twitter?token=${token}`,
      'Google': `https://leadmasters.site/auth/google?token=${token}`,
      'Instagram': `https://leadmasters.site/auth/instagram?token=${token}`,
      'Threads': `https://leadmasters.site/auth/threads?token=${token}`,
      'Facebook': `https://leadmasters.site/auth/facebook?token=${token}`,
    };
    window.location.href = urls[platformName];
  };

  const handleDisconnect = async () => {
    try {
      let response;
      switch (platform.name) {
        case 'Twitter X':
          response = await disconnectService.twitterDisconnect();
          break;
        case 'LinkedIn Profile':
          response = await disconnectService.linkedinDisconnect();
          break;
        case 'Google':
          response = await disconnectService.googleDisconnect();
          break;
        case 'Instagram':
          response = await disconnectService.instagramDisconnect();
          break;
        case 'Threads':
          response = await disconnectService.threadsDisconnect();
          break;
        case 'Facebook':
          response = await disconnectService.facebookDisconnect();
          break;
        default:
          break;
      }
      console.log(response.data, `${platform.name} disconnected`);
      await getUserDetails();  // Fetch updated user details after disconnection
      setConnected(false);  // Update local state to show it's disconnected
    } catch (error) {
      console.error(`Error disconnecting ${platform.name}:`, error);
    }
  };

  const renderPlatformDetail = () => {
    const emailsAndNames = {
      'Facebook': userBasics.facebookEmail,
      'Instagram': userBasics.instagramName,
      'Twitter X': userBasics.twitterName,
      'Threads': userBasics.threadsName,
      'LinkedIn Profile': userBasics.linkedinEmail,
      'Google': userBasics.email,
    };
    return <span style={styles.fullNameText}>{emailsAndNames[platform.name]}</span>;
  };

  return (
    <div style={styles.container}>
      <div style={styles.platformName}>
        <img src={platform.icon} alt={`${platform.name} icon`} style={styles.icon} />
        <span>{platform.name}</span>
        {connected && (
          <>
            {renderPlatformDetail()}
            <img src={tick} alt="connected" style={{ width: '12px', marginTop: '15px', objectFit: 'contain' }} />
          </>
        )}
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
            onClick={() => handleOAuthClick(platform.name)}
          >
            Integrate
          </button>
        )}
      </div>
    </div>
  );
};

const Integrations = () => {
  const dispatch = useDispatch();
  const { userBasics } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const response = await postService.getUser();
      dispatch(saveUserDetail(response.data));
    };
    fetchUserDetails();
  }, [dispatch]);

  const platforms = [
    
    {
      name: 'Facebook',
      icon: face,
      isConnected: userBasics.isFacebookLogin,
    },
    {
      name: 'Instagram',
      icon: insta,
      isConnected: userBasics.isInstagramLogin,
    },
    {
      name: 'Threads',
      icon: th,
      isConnected: userBasics.isThreadsLogin,
    },
    {
      name: 'Twitter X',
      icon: twi,
      isConnected: userBasics.isTwitterLogin,
    },
    
    {
      name: 'Google',
      icon: google,
      isConnected: userBasics.isGoogleConnected,
    },
    
    {
      name: 'LinkedIn Profile',
      icon: link,
      isConnected: userBasics.isLinkedInConnected,
    },
  ];

  return (
    <div style={{ marginTop: '5vh' }}>
      <div className='heading'>
        <h3>Social Logins</h3>
        <img src={stars} className='str' />
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
  fullNameText: {
    marginLeft: '8px',
    marginTop: '15px',
    fontSize: '12px',
    color: 'gray',
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
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Integrations;
