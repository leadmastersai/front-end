
import './styles.css';
import Icon from '../assets/auth/appIcon.svg';
import { Link, useNavigate } from 'react-router-dom';
const Topbar = () => {
    const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar">
        <Link to="/"  className="navbar-brand">

  <img src={Icon} alt="Logo" className="logo" />
  <h2 style={{fontWeight:'300'}}>LeadMasters.ai</h2>

</Link>
<ul className="navbar-menu">
  <li><a href="#product" onClick={() => scrollToSection('product')}>Product</a></li>
  <li><Link to="/aboutus"><a>About Us</a></Link></li>
  <li><Link to="/features"><a >Features</a></Link></li>
  <li><Link to="/blog"><a >Blog</a></Link></li>
  <li><Link to="/pricing"><a >Pricing</a></Link></li>
  <li><Link to="/contactus"><a>Contact Us</a></Link></li>
</ul>
<div className="navbar-actions">
  <button onClick={()=>navigate('/signup')}  className="login-btn">Login</button>
  <button onClick={()=>navigate('/signup')}  className="signup-btn">Sign Up</button>
</div>
</nav>
    </div>
  )
}

export default Topbar
