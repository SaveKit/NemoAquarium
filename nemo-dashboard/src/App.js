import React, { useState, useEffect } from "react";
import "./output.css";
import Header from "./components/Header";
import ImageDisplay from "./components/ImageDisplay";
import Timer from "./components/Timer";
import Switch from "./components/Switch";
import DataDisplay from "./components/DataDisplay";
const API_BASE_URL = "http://localhost:5000";

function App() {
  const [lightOn, setLightOn] = useState(false);
  const [pumpOn, setPumpOn] = useState(false);
  const [feederOn, setFeederOn] = useState(false);

  // Fetch the initial status of devices
  useEffect(() => {
    const fetchStatuses = async () => {
      try {
        const [lightResponse, pumpResponse, feedingResponse] =
          await Promise.all([
            fetch(`${API_BASE_URL}/light/status`),
            fetch(`${API_BASE_URL}/waterpump/status`),
            fetch(`${API_BASE_URL}/feeding/status`),
          ]);

        const lightData = await lightResponse.json();
        const pumpData = await pumpResponse.json();
        const feedingData = await feedingResponse.json();

        setLightOn(lightData.status === "on");
        setPumpOn(pumpData.status === "on");
        setFeederOn(feedingData.status === "feed");
      } catch (error) {
        console.error("Error fetching device statuses:", error);
      }
    };

    fetchStatuses();
  }, []);

  // Toggle light state
  const handleLightToggle = async () => {
    const newStatus = lightOn ? "off" : "on";
    try {
      await fetch(`${API_BASE_URL}/light/toggle`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      setLightOn(!lightOn);
    } catch (error) {
      console.error("Error toggling light:", error);
    }
  };

  // Toggle water pump state
  const handlePumpToggle = async () => {
    const newStatus = pumpOn ? "off" : "on";
    try {
      await fetch(`${API_BASE_URL}/waterpump/toggle`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      setPumpOn(!pumpOn);
    } catch (error) {
      console.error("Error toggling water pump:", error);
    }
  };

  // Toggle feeder state
  const handleFeederToggle = async () => {
    const newAction = feederOn ? "stop" : "feed";
    try {
      await fetch(`${API_BASE_URL}/feeding/toggle`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: newAction }),
      });
      setFeederOn(!feederOn);
    } catch (error) {
      console.error("Error toggling feeder:", error);
    }
  };

  return (
    <div className="font-sans text-center p-4 w-full min-h-screen flex flex-col items-center justify-center App">
      <Header />
      <div className="flex flex-wrap justify-between gap-4 max-w-4xl w-full mt-8">
        <ImageDisplay />
        <Timer initialTime={15 * 60} />
        <div className="flex flex-col items-center gap-4">
          <Switch label="LIGHT" isOn={lightOn} onToggle={handleLightToggle} />
          <Switch label="PUMP" isOn={pumpOn} onToggle={handlePumpToggle} />
          <Switch
            label="FEEDER"
            isOn={feederOn}
            onToggle={handleFeederToggle}
          />
        </div>
      </div>
      <DataDisplay />
    </div>
  );
}

export default App;
