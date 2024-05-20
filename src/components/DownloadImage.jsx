import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const DownloadImage = ({ adjustedImage }) => {
  const imageRef = useRef();

  const handleDownload = async () => {
    const canvas = await html2canvas(imageRef.current);
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'passport-photo.png';
    link.click();
  };

  return (
    <div className=' flex justify-center items-center h-[100vh]'>
      <div>
            <div ref={imageRef} className="w-2/4 mx-auto flex flex-wrap justify-center gap-2">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="w-40 h-60 border-2 border-black">
                  <img src={adjustedImage} alt="Passport" className="w-full h-full object-cover " />
                </div>
              ))}
            </div>
            <button onClick={handleDownload} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Download Now</button>
      </div>
    </div>
  );
};

export default DownloadImage;
