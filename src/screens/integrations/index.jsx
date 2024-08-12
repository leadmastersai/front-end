import { useState } from 'react';
import './style.scss';
import insta from '../../assets/integrations/ig.svg';
import stars from '../../assets/getIdea/stars.svg';
import face from '../../assets/integrations/fb.svg';
import twi from '../../assets/integrations/tw.svg';
import link from '../../assets/integrations/ln.svg';
const SocialMediaIntegration = ({ platform, isConnected }) => {
  const [connected, setConnected] = useState(isConnected);

  const handleConnect = () => {
    setConnected(!connected);
  };

  return (
    <div style={styles.container}>
      <div style={styles.platformName}>
        <img src={platform.icon} alt={`${platform.name} icon`} style={styles.icon} />
        <span>{platform.name}</span>
      </div>
      <div style={styles.actions}>
        {connected ? (
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
            onClick={handleConnect}
          >
            Integrate
          </button>
        )}
      </div>
    </div>
  );
};

const Integrations = () => {
  const platforms = [
    {
      name: 'LinkedIn Profile',
      icon: link,
      isConnected: true,
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
  ];

  return (
    <div style={{marginTop:'5vh'}}>
         <div className='heading'>
    <h3>Integrations</h3>
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
