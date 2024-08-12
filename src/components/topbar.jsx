
import './styles.css';
import Icon from '../assets/auth/appIcon.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Topbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Scroll to top whenever location changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
  return (
    <div>
      <nav className="navbar">
        <Link to="/"  className="navbar-brand">

  <img src={Icon} alt="Logo" className="logo" />
  <h2 style={{fontWeight:'300'}}>LeadMasters.ai</h2>

</Link>
<ul className="navbar-menu">
  <li><a href="/" >Product</a></li>
  <li><Link to="/aboutus"><a>About Us</a></Link></li>
  <li><Link to="/features"><a >Features</a></Link></li>
  <li><Link to="/blog"><a >Blog</a></Link></li>
  <li><Link to="/pricing"><a >Pricing</a></Link></li>
  <li><Link to="/contactus"><a>Contact Us</a></Link></li>
</ul>
<div className="navbar-actions">
 
  <button onClick={()=>navigate('/signup')}  className="signup-btn">Login</button>
</div>
</nav>
    </div>
  )
}

export default Topbar
