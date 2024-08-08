import backgr from '../../../assets/landing/backgr.svg';
import { useEffect } from 'react';
import First from './first';
import './style.scss';
import { useState } from 'react';
import Second from './second';
import Three from './three';
import Four from './four';
const Features = () => {
  const tabs = ['AI-Powered Lead Generation', 'Multi-Channel Ad Optimization', 'Advanced Analytics', 'Integration Capabilities'];
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
   
    const intervalId = setInterval(() => {
      setActiveTab(prevTab => (prevTab + 1) % tabs.length);
    }, 5000); // Switch every 3 seconds

    return () => clearInterval(intervalId);
  }, [tabs.length]);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <First/>;
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
        <section className='container-section44'  >
      <h3 className='biggest-text1'> Key Features & Functionalities</h3>
   
<p style={{width:'50vw',textAlign:'center',marginBottom:'5vh'}}>LeadMasters AI offers a comprehensive suite of tools designed to optimize your marketing efforts and drive business growth. Explore our powerful features that make lead generation and ad optimization effortless.</p>
</section>
<div className="image-container">
    <img className='bg-img-sect55' src={backgr} />
    </div>
<div style={{ display: 'flex',justifyContent:'center',alignItems:'center' }}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            style={{
              width:270,
              textAlign:'center',
              paddingBlock:13,
          zIndex:2,
              marginInline:10,
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              backgroundColor: activeTab === index ? '#8F00FF' : 'white',
              color: activeTab === index ? '#fff' : '#000',
              transition: 'background-color 1.5s',
              borderRadius:10
            }}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        {renderContent()}
      </div>
    </div>
 
  )
}

export default Features
