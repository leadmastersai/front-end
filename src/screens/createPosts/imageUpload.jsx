import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ImageService } from '../../../services/uploadService';
const ImageUpload = ({onImageUpload}) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile,'this is file'); // Log to see file details
    setFile(selectedFile);
  };

  useEffect(() => {
    // Only run if file is selected
    if (file) {
      const handleSubmit = async () => {
        setLoading(true);
        setError('');

        const formData = new FormData();
        formData.append('image', file);
        console.log(formData, 'Form data is being sent');

        try {
          const response = await ImageService.uploadImage(formData);
          setImageUrl(response.data.imageUrl); // URL from 
          onImageUpload(response.data.imageUrl);
        } catch (err) {
          setError('Failed to upload image');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      handleSubmit(); // Call the handleSubmit function
    }
  }, [file]); // Trigger

  return (
    <div>
      <h2>Upload Image</h2>
      <form >
        <input type="file" onChange={handleFileChange} />
        {/* <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload'}
        </button> */}
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {imageUrl && (
        <div>
         
          <img src={imageUrl} alt="Uploaded" style={{ width: '300px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
