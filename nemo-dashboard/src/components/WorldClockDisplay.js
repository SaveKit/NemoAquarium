import React, { useState, useEffect } from "react";
import Switch from "./Switch";
const API_BASE_URL = "http://localhost:5000";

const WorldClockDisplay = () => {
  const [time, setTime] = useState(new Date());
  const [lightOn, setLightOn] = useState(false);
  const [pumpOn, setPumpOn] = useState(false);
  const [feederOn, setFeederOn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Fetch the initial status of devices
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

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Bangkok",
    };

    return new Intl.DateTimeFormat("th-TH", options).format(date);
  };

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
    try {
      const newAction = feederOn ? "stop" : "feed";
      await fetch(`${API_BASE_URL}/feeding/toggle`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: newAction }),
      });

      setFeederOn(!feederOn);

      if (newAction === "feed") {
        setTimeout(async () => {
          await fetch(`${API_BASE_URL}/feeding/toggle`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: "stop" }),
          });
          setFeederOn(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error toggling feeder:", error);
    }
  };

  return (
    <div className="flex-1 border-2 border-blue-500 p-4 rounded-lg bg-white max-w-sm w-full">
      <h2 className="text-xl font-semibold mb-2">Current time in Thailand</h2>
      <h2
        className="text-4xl font-semibold mb-2"
        style={{ color: "rgb(18, 91, 222)" }}>{formatTime(time)}</h2>
      {/* Switches Section */}
      <div className="grid grid-cols-3 gap-4 place-items-center h-56">
        <br></br>
        <Switch label="LIGHT" isOn={lightOn} onToggle={handleLightToggle} />
        <Switch label="PUMP" isOn={pumpOn} onToggle={handlePumpToggle} />
        <div className="text-center">
          <br></br>
          <button onClick={handleFeederToggle}>Feeder Fishy 🦈</button>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="flex justify-center items-center h-screen">
        <img
          src="https://i.pinimg.com/originals/ac/79/87/ac7987fd1b46d916bbbbb55a75bd7b42.gif"
          alt="Loading GIF"
          className="w-64 h-64"
        />
      </div>
    </div>
  );
};

export default WorldClockDisplay;
