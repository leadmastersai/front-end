import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    console.log('Received Token:', token); // Log the received token

    if (token) {
      // Store the token securely
      localStorage.setItem('oauthToken', token);

      // Remove the token from URL parameters
      urlParams.delete('token');
      const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
      window.history.replaceState({}, document.title, newUrl);

      // Redirect to /home after token is stored
      navigate('/home');
    } else {
      console.error('Token is null or undefined');
    }
  }, [navigate]);

  return <div></div>;
};

export default Auth;
