import React, { useState, useEffect } from "react";

const WorldClockDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // อัปเดตเวลาทุกๆ 1 วินาที

    return () => clearInterval(interval); // เคลียร์ interval เมื่อคอมโพเนนต์ถูกทำลาย
  }, []);

  const formatTime = (date) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Bangkok", // ตั้งค่าเขตเวลาเป็นประเทศไทย
    };

    return new Intl.DateTimeFormat("th-TH", options).format(date);
  };

  return (
    <div className="flex-1 border-2 border-blue-500 p-4 rounded-lg bg-white">
      <h2 className="text-xl font-semibold mb-2">Current time in Thailand</h2>
      <div className="text-4xl font-bold text-black">
        {formatTime(time)}
      </div>
    </div>
  );
};

export default WorldClockDisplay;
