import React, { useState, useEffect } from 'react';
import './output.css';

function App() {
  const [imageSrc, setImageSrc] = useState(''); // State to hold the image URL

  // Function to fetch the latest image from the backend
  const fetchImage = async () => {
    try {
      const response = await fetch('http://localhost:3001/image'); // Updated URL
      if (response.ok) {
        setImageSrc(`http://localhost:3001/image?timestamp=${new Date().getTime()}`); // Prevent caching
      } else {
        console.error('Error fetching image:', response.status);
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };


  useEffect(() => {
    const interval = setInterval(fetchImage, 1000); // Fetch image every second
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="font-sans text-center p-4 w-full min-h-screen flex flex-col items-center justify-center App">
      <div class="bubble bubble--1"></div>
      <div class="bubble bubble--2"></div>
      <div class="bubble bubble--3"></div>
      <div class="bubble bubble--4"></div>
      <div class="bubble bubble--5"></div>
      <div class="bubble bubble--6"></div>
      <div class="bubble bubble--7"></div>
      <div class="bubble bubble--8"></div>
      <div class="bubble bubble--9"></div>
      <div class="bubble bubble--10"></div>
      <div class="bubble bubble--11"></div>
      <div class="bubble bubble--12"></div>
      <h1 className="text-4xl font-bold mb-4 nemo relative">
        <span className="nemo-text-stroke">NEMO PROJECT</span>
        <span className="nemo-text-fill">NEMO PROJECT</span>
      </h1>

      <div className="flex flex-wrap justify-between gap-4 max-w-4xl w-full mt-8">
        {/* Nemo's House Section */}
        <div className="flex-1 border-2 border-blue-500 p-4 rounded-lg bg-white">
          <h2 className="text-xl font-semibold mb-2">NEMO's HOUSE</h2>
          <img
            src={imageSrc || setImageSrc}
            alt="Nemo's House"
            className="w-full rounded-lg"
          />
        </div>

        {/* Timer Section */}
        <div className="flex-1 border-2 border-blue-500 p-4 rounded-lg bg-white">
          <h2 className="text-xl font-semibold mb-2">Nom Nom Timer (countdown)</h2>
          <div className="text-4xl font-bold text-black">15 : 00</div>
        </div>

        {/* Switches Section */}
        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-1">LIGHT</h3>
            <div className="relative inline-block w-16 h-8">
              <input
                id="switch-light"
                type="checkbox"
                className="peer appearance-none w-16 h-9 bg-slate-500 rounded-full cursor-pointer checked:bg-blue-800 transition-colors duration-300"
              />
              <label
                htmlFor="switch-light"
                className="absolute top-1 left-1 right-1 w-7 h-7 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-8 peer-checked:border-slate-800 cursor-pointer"
              ></label>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-1">PUMP</h3>
            <div className="relative inline-block w-16 h-8">
              <input
                id="switch-pump"
                type="checkbox"
                className="peer appearance-none w-16 h-9 bg-slate-500 rounded-full cursor-pointer checked:bg-blue-800 transition-colors duration-300"
              />
              <label
                htmlFor="switch-pump"
                className="absolute top-1 left-1 right-1 w-7 h-7 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-8 peer-checked:border-slate-800 cursor-pointer"
              ></label>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-1">Feeder</h3>
            <div className="relative inline-block w-16 h-8">
              <input
                id="switch-nom"
                type="checkbox"
                className="peer appearance-none w-16 h-9 bg-slate-500 rounded-full cursor-pointer checked:bg-blue-800 transition-colors duration-300"
              />
              <label
                htmlFor="switch-nom"
                className="absolute top-1 left-1 right-1 w-7 h-7 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-8 peer-checked:border-slate-800 cursor-pointer"
              ></label>
            </div>
          </div>

        </div>
      </div>

      {/* Data Section */}
      <div className="border-2 border-blue-500 mt-4 p-4 w-full max-w-4xl rounded-lg bg-white">
        <h2 className="text-xl font-semibold">DATA</h2>
        {/* Add any additional data here */}
      </div>
    </div>

  );
}

export default App;