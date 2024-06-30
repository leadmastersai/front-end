import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from 'antd';
import './styles.css';
import Icon from '../assets/auth/appIcon.svg'
import items from '../utils/items';
import avtar from '../assets/dashb/Avatars.svg';

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  // const handleMouseEnter = () => {
  //   setCollapsed(false);
  // };

  // const handleMouseLeave = () => {
  //   setCollapsed(true);
  // };
  const handleToggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div style={{ display: 'flex' }}>
      <div
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        style={{
          position: 'fixed', 
          left: 0, 
          top: 0, 
          zIndex: 1000, 
          width: collapsed ? 80 : 230, 
     
          height: '100%',
          transition: ' 0.05s', 
          borderRight: '1px solid #e8e8e8', 
        }}
      >
        <div
          style={{
            marginInline: 7,
            padding: '10px',
            cursor:'pointer'
          }}
          onClick={handleToggle}
        >
          <img src={Icon} style={{ width: 40, height: 40 }} alt="App Icon" />
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['1-1']}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          items={items}
          className='custom-menu'
          style={{ flex: 1,fontFamily:'MyCustomFont'}}
         
        />
        <div className='avtar-c'>
        <img src={avtar} />
      </div>
      </div>
      
      <div style={{ marginLeft:collapsed ? 60:210 , flex: 1, paddingLeft: 20 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
