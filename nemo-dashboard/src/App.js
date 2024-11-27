import React from "react";
import "./output.css";
import Header from "./components/Header";
import ImageDisplay from "./components/ImageDisplay";
import WorldClockDisplay from "./components/WorldClockDisplay";
import DataDisplay from "./components/DataDisplay";

function App() {

  return (
    <div className="font-sans text-center p-4 w-full min-h-screen flex flex-col items-center justify-center App">
      <br></br>
      <br></br>
      <Header />
      <br></br>
      <br></br>
      <div className="flex flex-wrap justify-center gap-4 w-full mt-8">
        {/* Nemo's House Section */}
        <ImageDisplay />
        {/* Timer Section */}
        <WorldClockDisplay />
      </div>
      {/* Data Section */}
      <DataDisplay />
    </div>
  );
}

export default App;
