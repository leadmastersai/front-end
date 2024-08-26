import './styles.css';
import Icon from '../assets/auth/appIcon.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Topbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    // Scroll to top whenever location changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // Function to check if the current path matches the link path
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                <img src={Icon} alt="Logo" className="logo go" />
                <h2 style={{ fontWeight: '300' }}>LeadMasters.ai</h2>
            </Link>
            <div>
            <button 
                className="menu-toggle" 
                onClick={() => setMenuOpen(prevState => !prevState)}
                aria-expanded={menuOpen}
                aria-controls="navbar-menu"
                style={{ display: 'block !important', zIndex: '2000', position: 'relative' }}  // Add ID to your <ul> to link the button with the menu
            >
                {menuOpen ? '✖' : '☰'}
            </button>
            </div>
            <ul id="navbar-menu" className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                <li className={isActive('/') ? 'active' : ''}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                </li>
                <li className={isActive('/aboutus') ? 'active' : ''}>
                    <Link to="/aboutus" onClick={() => setMenuOpen(false)}>About Us</Link>
                </li>
                <li className={isActive('/features') ? 'active' : ''}>
                    <Link to="/features" onClick={() => setMenuOpen(false)}>Features</Link>
                </li>
                <li className={isActive('/blog') ? 'active' : ''}>
                    <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
                </li>
                <li className={isActive('/pricing') ? 'active' : ''}>
                    <Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
                </li>
                <li className={isActive('/contactus') ? 'active' : ''}>
                    <Link to="/contactus" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                </li>

                {/* Add the Login button inside the navbar-menu for small screens */}
                <li className="navbar-actions-mobile">
                    <button onClick={() => { navigate('/signup'); setMenuOpen(false); }} className="signup-btn">Login</button>
                </li>
            </ul>

            {/* Keep the Login button outside the navbar-menu for larger screens */}
            <div className="navbar-actions">
                <button onClick={() => navigate('/signup')} className="signup-btn">Login</button>
            </div>
        </nav>
    );
}

export default Topbar;
