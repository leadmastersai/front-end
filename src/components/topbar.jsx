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

    // Function to check if the current path matches the link path
    const isActive = (path) => location.pathname === path;

    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="navbar-brand">
                    <img src={Icon} alt="Logo" className="logo" />
                    <h2 style={{ fontWeight: '300' }}>LeadMasters.ai</h2>
                </Link>
                <ul className="navbar-menu">
                    <li className={isActive('/') ? 'active' : ''}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={isActive('/aboutus') ? 'active' : ''}>
                        <Link to="/aboutus">About Us</Link>
                    </li>
                    <li className={isActive('/features') ? 'active' : ''}>
                        <Link to="/features">Features</Link>
                    </li>
                    <li className={isActive('/blog') ? 'active' : ''}>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className={isActive('/pricing') ? 'active' : ''}>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <li className={isActive('/contactus') ? 'active' : ''}>
                        <Link to="/contactus">Contact Us</Link>
                    </li>
                </ul>
                <div className="navbar-actions">
                    <button onClick={() => navigate('/signup')} className="signup-btn">Login</button>
                </div>
            </nav>
        </div>
    );
}

export default Topbar;
