import React from "react";

const Switch = ({ label, isOn, onToggle }) => (
  <div className="text-center">
    <h3 className="text-lg font-semibold mb-1">{label}</h3>
    <div className="relative inline-block w-16 h-8">
      <input
        id={`switch-${label}`}
        type="checkbox"
        checked={isOn}
        onChange={onToggle}
        className="peer appearance-none w-16 h-9 bg-slate-500 rounded-full cursor-pointer checked:bg-blue-800 transition-colors duration-300"
      />
      <label
        htmlFor={`switch-${label}`}
        className="absolute top-1 left-1 right-1 w-7 h-7 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-8 peer-checked:border-slate-800 cursor-pointer"
      ></label>
    </div>
  </div>
);

export default Switch;
