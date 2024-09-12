import React, { useState } from 'react';
import { Modal, Button, Input, Form, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Icon from "../assets/auth/appIcon.svg";
const LoginModal = ({ isVisible, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle login and form submission
  const handleLogin = async () => {
    setLoading(true);
    try {
      // Post login data to the backend
      const response = await axios.post('https://leadmasters.site/auth/login', { email, password });

      // Get the token from the response
      const { token } = response.data;

      // Redirect to the /auth page with the token in the query string
      navigate(`/auth?token=${token}`);

      // Close modal on success
      setLoading(false);
      onClose();
    } catch (err) {
      // Handle login error
      setError('Invalid email or password');
      message.error('Login failed: Invalid credentials');
      setLoading(false);
    }
  };

  return (
    <Modal
      visible={isVisible}
     
      onCancel={onClose}
      centered
      footer={[

        <Button
          key="submit"
       style={{display:"flex",alignItems:"center",justifyContent:"center",marginInline:'auto'}}
          loading={loading}
          className='button'
          onClick={handleLogin} // Bind login to button click
        >
          Login
        </Button>,
      ]}
    >
      <Form layout="vertical">
      <div className="cont1" style={{marginBottom:'3vh'}}>
      <img src={Icon} style={{width:50,height:50,resizeMode:"contain"}}/>
          <h2
            style={{
              textAlign: "center",
              flex: 1,
              alignSelf: "center",
              
            }}
          >
          Login
          </h2>
          <p
            className="gray-text1"
            style={{ marginBlock: -14, wordSpacing: 2 ,width:200,textAlign:'center'}}
          >
          Welcome Back to Leadmasters,You have Missed amazing Updates{" "}
          </p>
          </div>
        <Form.Item
          label="Email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Form>
    </Modal>
  );
};

export default LoginModal;
