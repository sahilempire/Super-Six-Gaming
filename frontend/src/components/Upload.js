import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentCompleted);
        },
      });

      alert(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Upload failed.');
    }
  };

  return (
    <div className="upload">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <progress value={progress} max="100">{progress}%</progress>
    </div>
  );
};

export default Upload;
