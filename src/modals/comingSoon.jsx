import React from 'react';
import { Modal, Button } from 'antd';

const ComingSoonModal = ({ isVisible, onClose }) => {
  return (
    <Modal
      visible={isVisible}
      title="Coming Soon"
      onCancel={onClose}
      centered
      footer={[
        <Button key="ok" type="primary" onClick={onClose}>
          OK
        </Button>,
      ]}
    >
      <p style={{ textAlign: 'center', fontSize: '16px' }}>
        This feature is coming soon! Stay tuned for updates.
      </p>
    </Modal>
  );
};

export default ComingSoonModal;
