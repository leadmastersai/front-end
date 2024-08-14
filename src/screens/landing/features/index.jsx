import backgr from '../../../assets/landing/backgr.svg';
import { useEffect, useState } from 'react';
import First from './first';
import Second from './second';
import Three from './three';
import Four from './four';
import './style.scss';

const Features = () => {
  const tabs = ['AI-Powered Lead Generation', 'Multi-Channel Ad Optimization', 'Advanced Analytics', 'Integration Capabilities'];
  const [activeTab, setActiveTab] = useState(0);
  const [fade, setFade] = useState(true);
  const [pause, setPause] = useState(false); // State to control pausing

  useEffect(() => {
    if (!pause) {
      const intervalId = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setActiveTab(prevTab => (prevTab + 1) % tabs.length);
          setFade(true);
        }, 1000); // Wait 1 second before switching tabs
      }, 5000); // Switch every 5 seconds

      return () => clearInterval(intervalId);
    }
  }, [tabs.length, pause]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setPause(true); // Pause the cycling
    setTimeout(() => {
      setPause(false); // Resume cycling after 5 seconds
    }, 5000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <First />;
      case 1:
        return <Second />;
      case 2:
        return <Three />;
      case 3:
        return <Four />;
      default:
        return null;
    }
  };

  return (
    <div>
      <section className='container-section44'>
        <h3 className='biggest-text1'> Key Features & Functionalities</h3>
        <p style={{ width: '50vw', textAlign: 'center', marginBottom: '5vh' }}>
          LeadMasters AI offers a comprehensive suite of tools designed to optimize your marketing efforts and drive business growth. Explore our powerful features that make lead generation and ad optimization effortless.
        </p>
      </section>
      <div className="image-container">
        <img className='bg-img-sect55' src={backgr} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            style={{
              width: 270,
              textAlign: 'center',
              paddingBlock: 13,
              zIndex: 2,
              marginInline: 10,
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              backgroundColor: activeTab === index ? '#8F00FF' : 'white',
              color: activeTab === index ? '#fff' : '#000',
              transition: 'background-color 1s, color 2s ease-in-out',
              borderRadius: 10,
            }}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: '20px',
          opacity: fade ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default Features;
