import React, { useState } from 'react';
import UploadImage from './components/UploadImage';
import AdjustImage from './components/AdjustImage';
import DownloadImage from './components/DownloadImage';
import './index.css';

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [adjustedImage, setAdjustedImage] = useState(null);

  return (
    <div className="container mx-auto p-4 text-center">
      {!uploadedImage && <UploadImage setUploadedImage={setUploadedImage} />}
      {uploadedImage && !adjustedImage && (
        <AdjustImage uploadedImage={uploadedImage} setAdjustedImage={setAdjustedImage} />
      )}
      {adjustedImage && <DownloadImage adjustedImage={adjustedImage} />}
    </div>
  );
}

export default App;
