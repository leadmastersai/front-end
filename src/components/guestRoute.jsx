import { Navigate } from 'react-router-dom';

const GuestRoute = ({ children }) => {
  const token = localStorage.getItem('oauthToken'); // Check if token exists

  return token ? <Navigate to="/home" replace /> : children;
};

export default GuestRoute;
