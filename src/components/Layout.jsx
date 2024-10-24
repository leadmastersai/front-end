import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from 'antd';
import './styles.css';
import Icon from '../assets/auth/appIcon.svg';
import items from '../utils/items';
import avtar from '../assets/dashb/Avatars.svg';
import menu9 from '../assets/dashb/getad.svg';
import { useSelector } from 'react-redux';
import { BsLayoutTextSidebar } from "react-icons/bs";
const Layout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { userBasics } = useSelector((state) => state.auth);
  const profilepic = userBasics.picture;

  const handleLogout = () => {
    localStorage.removeItem('oauthToken');
    navigate('/');
  };

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const handleProfileClick = () => {
    setShowPopup(!showPopup);
  };

  const updatedItems = [
    {
      key: '5',
      label: <Link to='/home'>Dashboard</Link>,
      icon: <img src={menu9} className='item-ims' style={{ width: 17, height: 17 }} />,
    },
    {
      key: 'generate-ads',
      label: (
        <button className="cta-button-side" style={{ width: '100%' }} onClick={() => navigate('/createad')}>
          {collapsed ? "" : "Generate Ads"}
        </button>
      ),
    },
    ...items.slice(1, 3), // Adjust index as per the requirement, these will be the first two items
    {
      key: 'generate-posts',
      label: (
        <button className="cta-button-side" style={{ width: '100%' }} onClick={() => navigate('/createposts')}>
          {collapsed ? "" : "Generate Posts"}
        </button>
      ),
    },
    ...items.slice(3), // The rest of the items will follow
  ];

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 1000,
          width: collapsed ? 80 : 230,
          height: '100%',
          transition: '0.05s',
          borderRight: '1px solid #e8e8e8',
          overflowY: 'auto',
          scrollbarWidth: 'none', // For Firefox
          msOverflowStyle: 'none',
        }}
      >
        <div
          style={{
            marginInline: 7,
            padding: '10px',
            cursor: 'pointer',
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
          items={updatedItems}
          className="custom-menu"
          style={{ flex: 1, fontFamily: 'MyCustomFont' }}
        />
        <div className="avtar-c" onClick={handleProfileClick}>
          <img
            src={profilepic ? profilepic : avtar}
            alt="Avatar"
            className={profilepic ? 'profile-pic' : ''}
          />
        </div>
        <BsLayoutTextSidebar style={{marginInline:collapsed?'35%':'13%',cursor:'pointer'}} onClick={handleToggle}/>
      </div>

      <div style={{ marginLeft: collapsed ? 60 : 210, flex: 1, paddingLeft: 20 }}>
        <Outlet />
      </div>

      {showPopup && (
        <div className="profile-popup" style={{left:collapsed ?'85px':'235px'}}>
          <div className="popup-content">
            <img
              src={profilepic ? profilepic : avtar}
              alt="Avatar"
              className={profilepic ? 'profile-pic-large' : ''}
            />
            <h3>{userBasics?.name}</h3>
            <p>{userBasics?.email}</p>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
