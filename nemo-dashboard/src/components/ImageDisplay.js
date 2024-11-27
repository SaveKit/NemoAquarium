import React, { useState, useEffect } from "react";

const ImageDisplay = () => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch("http://localhost:5000/image");
        if (response.ok) {
          setImageSrc(
            `http://localhost:5000/image?timestamp=${new Date().getTime()}`
          );
        } else {
          console.error("Error fetching image:", response.status);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    const interval = setInterval(fetchImage, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 border-2 border-blue-500 p-4 rounded-lg bg-white max-w-2xl w-full">
      <h2 className="text-xl font-semibold mb-2">NEMO's HOUSE 🪸</h2>
      <img src={imageSrc} alt="Nemo's House" className="w-full rounded-lg" />
    </div>
  );
};

export default ImageDisplay;
