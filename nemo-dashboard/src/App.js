import React, { useState } from 'react';
import './output.css';

function App() {
  const [lightOn, setLightOn] = useState(false);
  const [pumpOn, setPumpOn] = useState(false);

  const toggleLight = () => setLightOn(!lightOn);
  const togglePump = () => setPumpOn(!pumpOn);

  return (
    <div className="font-sans text-center border-4 border-blue-500 p-4 bg-gray-100 w-full min-h-screen flex flex-col items-center justify-center App">
      <h1 className="text-3xl font-bold mb-4">NEMO PROJECT</h1>
      <div className="flex flex-wrap justify-between gap-4 max-w-4xl w-full">
        <div className="flex-1 border-2 border-blue-500 p-4">
          <h2 className="text-xl font-semibold mb-2">NEMO's HOUSE</h2>
          <img
            src="https://www.rollingstone.com/wp-content/uploads/2023/05/Finding-Nemo-Anniversary.jpg?w=1581&h=1054&crop=1.jpg"
            alt="Nemo's House"
            className="w-full rounded-lg App-logo-spin"
          />
        </div>
        <div className="flex-1 border-2 border-blue-500 p-4">
          <h2 className="text-xl font-semibold mb-2">Nom Nom Timer (countdown)</h2>
          <div className="text-4xl font-bold text-black">15 : 00</div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-1">LIGHT</h3>
            <div class="inline-flex items-center gap-2">
              <div class="relative inline-block w-16 h-8">
                <input id="switch-component-on" type="checkbox" class="peer appearance-none w-16 h-9 bg-slate-500 rounded-full cursor-pointer checked:bg-blue-800 cursor-pointer transition-colors duration-300"/>
                <label for="switch-component-on" class="absolute top-1 left-1 right-1 down-1 w-7 h-7 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-8 peer-checked:border-slate-800 cursor-pointer">
                </label>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-1">PUMP</h3>
            <div
              onClick={togglePump}
              className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer bg-blue-500`}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${pumpOn ? 'translate-x-8' : ''}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-blue-500 mt-4 p-4 w-full max-w-4xl">
        <h2 className="text-xl font-semibold">DATA</h2>
        {/* ข้อมูลเพิ่มเติมที่นี่ */}
      </div>
    </div>
  );
}

export default App;