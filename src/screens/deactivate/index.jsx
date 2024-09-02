import React, { useState } from 'react';
import DeleteAccountPopup from './popup'; // Adjust the path as necessary
import { Button } from 'antd';

const DeleteAccount = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleConfirm = (option) => {
    if (option === 'delete') {
      // Add your delete logic here
    } else if (option === 'deactivate') {
      // Add your deactivate logic here
    }
    setIsModalVisible(false);
  };

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center',margin:'10vh'}}>
        <h3>Do you want to Delete Your Data Permanently?</h3>
      <Button type="primary" onClick={showModal}>
        Delete Permanently
      </Button>
      <DeleteAccountPopup
        visible={isModalVisible}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default DeleteAccount;
