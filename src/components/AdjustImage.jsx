import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../Helpers/cropImage';
import Slider from '@mui/material/Slider';

const AdjustImage = ({ uploadedImage, setAdjustedImage }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const handleCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleNextClick = async () => {
    if (croppedAreaPixels) {
      const croppedImage = await getCroppedImg(uploadedImage, croppedAreaPixels, brightness, contrast);
      setAdjustedImage(croppedImage);
    }
  };

  const imageStyle = {
    filter: `brightness(${brightness}%) contrast(${contrast}%)`
  };

  return (
    <div className="my-4">
      <div className="relative w-full h-80">
        <div className="absolute w-full h-full" style={imageStyle}>
          <Cropper
            image={uploadedImage}
            crop={crop}
            zoom={zoom}
            aspect={3.5 / 4.5}
            onCropChange={setCrop}
            onCropComplete={handleCropComplete}
            onZoomChange={setZoom}
          />
        </div>
      </div>
      <div className="my-4">
        <div className="flex items-center justify-center">
          <label className="mr-2">Brightness</label>
          <Slider
            value={brightness}
            onChange={(e, val) => setBrightness(val)}
            min={0}
            max={200}
            className="w-1/2"
          />
        </div>
        <div className="flex items-center justify-center mt-4">
          <label className="mr-2">Contrast</label>
          <Slider
            value={contrast}
            onChange={(e, val) => setContrast(val)}
            min={0}
            max={200}
            className="w-1/2"
          />
        </div>
      </div>
      <button onClick={handleNextClick} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Next</button>
    </div>
  );
};

export default AdjustImage;
