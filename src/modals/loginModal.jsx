import React, { useState } from 'react';
import { Modal, Button, Input, Form } from 'antd';

const LoginModal = ({ isVisible, onClose }) => {
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 2000);
  };

  return (
    <Modal
      visible={isVisible}
      title="Login"
      onOk={handleOk}
      onCancel={onClose}
      centered
      footer={[
        <Button key="back" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          Login
        </Button>,
      ]}
    >
      <Form layout="vertical">
        <Form.Item label="Username">
          <Input placeholder="Enter your username" />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
