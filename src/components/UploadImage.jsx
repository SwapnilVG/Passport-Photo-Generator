import React, { useState } from 'react';

const UploadImage = ({ setUploadedImage }) => {
  const [temporaryImage, setTemporaryImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setTemporaryImage(reader.result);
      setTimeout(() => {
        setUploadedImage(reader.result);
      }, 2000);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {temporaryImage ? (
        <div className="flex flex-col items-center">
          <img src={temporaryImage} alt="Uploaded" className="w-40 h-60 object-cover border border-black" />
          <p className="mt-2">Loading...</p>
        </div>
      ) : (
        <>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer mt-2 px-4 py-2 bg-blue-500 text-white rounded shadow-lg"
          >
            Choose Image
          </label>
        </>
      )}
    </div>
  );
};

export default UploadImage;
