import React, { useState, useEffect } from "react";

const Timer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} : ${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <div className="flex-1 border-2 border-blue-500 p-4 rounded-lg bg-white">
      <h2 className="text-xl font-semibold mb-2">Nom Nom Timer (countdown)</h2>
      <div className="text-4xl font-bold text-black">{formatTime(time)}</div>
    </div>
  );
};

export default Timer;
