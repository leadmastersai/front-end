import React, { useState } from 'react';
import { Modal, Radio, Button, Spin, message } from 'antd';

const DeleteAccountPopup = ({ visible, onCancel, onConfirm }) => {
  const [deleteOption, setDeleteOption] = useState('deactivate');
  const [loading, setLoading] = useState(false);

  const handleOptionChange = (e) => {
    setDeleteOption(e.target.value);
  };

  const handleConfirm = async () => {
    setLoading(true);
    try {
      // Simulate a delay for the delete/deactivate operation
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Here you can add the logic to delete or deactivate the account
      onConfirm(deleteOption);

      // Show success message
      message.success('Data Deleted successfully');
    } catch (error) {
      message.error('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      visible={visible}
      title={<div style={{ fontWeight: 'bold', fontSize: '18px' }}>Deactivating or deleting your LeadMasters account</div>}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button
          key="continue"
          type="primary"
          danger
          onClick={handleConfirm}
          disabled={loading}
        >
          {loading ? <Spin /> : 'Continue'}
        </Button>,
      ]}
      bodyStyle={{ padding: '24px', borderRadius: '12px' }}
      style={{ borderRadius: '12px' }}
      centered
    >
      <p style={{ marginBottom: '20px' }}>
        If you want to take a break from LeadMasters, you can temporarily deactivate your account. If you want to permanently delete your account, let us know. You can only deactivate your account once a week.
      </p>
      <Radio.Group onChange={handleOptionChange} value={deleteOption}>
        <div style={{ padding: '12px', border: deleteOption === 'deactivate' ? '1px solid #1890ff' : '1px solid #d9d9d9', borderRadius: '6px', marginBottom: '12px' }}>
          <Radio value="deactivate">
            <div style={{ fontWeight: 'bold' }}>Deactivate account</div>
            <div style={{ fontSize: '12px', color: '#8c8c8c' }}>
              Deactivating your account is temporary, and it means that your profile will be hidden on LeadMasters until you reactivate it through the Accounts Centre or by logging in to your LeadMasters account.
            </div>
          </Radio>
        </div>
        <div style={{ padding: '12px', border: deleteOption === 'delete' ? '1px solid #1890ff' : '1px solid #d9d9d9', borderRadius: '6px' }}>
          <Radio value="delete">
            <div style={{ fontWeight: 'bold' }}>Delete account</div>
            <div style={{ fontSize: '12px', color: '#8c8c8c' }}>
              Deleting your account is permanent. When you delete your LeadMasters account, your profile, data, and all associated content will be permanently removed. If you'd just like to take a break, you can temporarily deactivate your account.
            </div>
          </Radio>
        </div>
      </Radio.Group>
    </Modal>
  );
};

export default DeleteAccountPopup;
