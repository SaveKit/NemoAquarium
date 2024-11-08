import React, { useState } from "react";
import "./output.css";
import Header from "./components/Header";
import ImageDisplay from "./components/ImageDisplay";
import Timer from "./components/Timer";
import Switch from "./components/Switch";
import DataDisplay from "./components/DataDisplay";

function App() {
  const [lightOn, setLightOn] = useState(false);
  const [pumpOn, setPumpOn] = useState(false);
  const [feederOn, setFeederOn] = useState(false);

  return (
    <div className="font-sans text-center p-4 w-full min-h-screen flex flex-col items-center justify-center App">
      <Header />
      <div className="flex flex-wrap justify-between gap-4 max-w-4xl w-full mt-8">
        <ImageDisplay />
        <Timer initialTime={15 * 60} />
        <div className="flex flex-col items-center gap-4">
          <Switch label="LIGHT" isOn={lightOn} onToggle={() => setLightOn(!lightOn)} />
          <Switch label="PUMP" isOn={pumpOn} onToggle={() => setPumpOn(!pumpOn)} />
          <Switch label="FEEDER" isOn={feederOn} onToggle={() => setFeederOn(!feederOn)} />
        </div>
      </div>
      <DataDisplay />
    </div>
  );
}

export default App;
