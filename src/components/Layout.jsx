import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from 'antd';
import './styles.css';
import Icon from '../assets/auth/appIcon.svg'
import items from '../utils/items';
import avtar from '../assets/dashb/Avatars.svg';
import { useSelector } from 'react-redux';

const Layout = () => {
  const navigate=useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {userBasics}  = useSelector((state) => state.auth);
  const profilepic=userBasics.picture;
 
  const handleLogout = () => {
    // Clear the local storage
    localStorage.removeItem('oauthToken');
    
    // Optionally, you might want to clear the Redux state or perform other actions
    // e.g., dispatch(logoutAction());

    // Redirect to the login page or home page
    navigate('/signup'); // Adjust the path as needed
  };
  
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
        <img
            src={profilepic ? profilepic : avtar}
            alt="Avatar"
            className={profilepic ? 'profile-pic' : ''}
          />
      </div>
      <div className='logout-btn' onClick={handleLogout}>
        logout
      </div>
      </div>
      
      <div style={{ marginLeft:collapsed ? 60:210 , flex: 1, paddingLeft: 20 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
