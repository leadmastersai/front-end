import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('oauthToken');
  
  // If token exists, render the child component
  return token ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
