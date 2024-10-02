import React, { useEffect, useState, useRef } from 'react';
import { ImageService } from '../../../services/uploadService';
import Up from '../../assets/createAd/up.svg';
import delt from '../../assets/createAd/delt.svg';

const ImageUpload = ({ onImageUpload }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState('');
  
  // Create a reference to the input element
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  useEffect(() => {
    if (file) {
      const uploadImage = async () => {
        setLoading(true);
        setError('');

        const formData = new FormData();
        formData.append('image', file);

        try {
          const response = await ImageService.uploadImage(formData);
          setImageUrl(response.data.imageUrl);
          onImageUpload(response.data.imageUrl);
        } catch (err) {
          setError('Failed to upload image');
        } finally {
          setLoading(false);
        }
      };

      uploadImage();
    }
  }, [file]);  // Remove imageUrl from dependencies

  const handleDeleteImage = () => {
    setFile(null);
    setImageUrl(null);
    onImageUpload(null);
    
    // Clear the input value so that the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; 
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <div style={styles.dropArea}>
        <input
          type="file"
          style={styles.input}
          ref={fileInputRef} // Attach the reference to the input element
          onChange={handleFileChange}
        />
        <img src={Up} style={{ marginRight: '.5vw' }} alt="Upload Icon" />
        <p style={styles.text}>Drop items here or <span>Browse files</span></p>
      </div>
      {loading && <p>Uploading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {imageUrl && (
        <div style={{ marginTop: '2vh' }}>
          <img src={imageUrl} alt="Uploaded" style={{ width: '300px' }} />
          <img
            src={delt}
            alt="Delete"
            style={styles.deleteButton}
            onClick={handleDeleteImage}
          />
        </div>
      )}
    </div>
  );
};

const styles = {
  dropArea: {
    border: '2px dashed #ccc',
    position: 'relative',
    width: '100%',
    paddingInline: '2vw',
    paddingBlock: '.5vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  deleteButton: {
    cursor: 'pointer',
  },
  input: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0,
    cursor: 'pointer',
  },
  text: {
    fontSize: '12px',
    color: '#888',
  },
  browseText: {
    color: '#1890ff',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default ImageUpload;
