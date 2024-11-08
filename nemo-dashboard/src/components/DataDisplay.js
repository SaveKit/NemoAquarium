import React, { useReducer, useEffect, useCallback } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import GaugeChart from "react-gauge-chart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./DataDisplay.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const initialState = {
  sensorData: {
    waterTemp: 0,
    turbidity: 0,
  },
  chartData: {
    waterTemp: { labels: [], data: [] },
    turbidity: { labels: [], data: [] },
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SENSOR_DATA":
      return {
        ...state,
        sensorData: action.payload,
      };
    case "UPDATE_CHART_DATA":
      return {
        ...state,
        chartData: {
          ...state.chartData,
          waterTemp: {
            labels: [
              ...state.chartData.waterTemp.labels,
              new Date().toLocaleTimeString(),
            ],
            data: [...state.chartData.waterTemp.data, action.payload.waterTemp],
          },
          turbidity: {
            labels: [
              ...state.chartData.turbidity.labels,
              new Date().toLocaleTimeString(),
            ],
            data: [...state.chartData.turbidity.data, action.payload.turbidity],
          },
        },
      };
    default:
      return state;
  }
};

const SensorData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchSensorData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/data");

      const processedData = {
        ...response.data,
      };
      dispatch({ type: "UPDATE_SENSOR_DATA", payload: processedData });
      dispatch({ type: "UPDATE_CHART_DATA", payload: processedData });
    } catch (error) {
      console.error("Error fetching sensor data:", error);
    }
  }, []);

  useEffect(() => {
    fetchSensorData();
    const interval = setInterval(fetchSensorData, 5000);
    return () => clearInterval(interval);
  }, [fetchSensorData]);

  const DataDisplay = () => (
    <div className="border-2 border-blue-500 mt-4 p-4 w-full max-w-4xl rounded-lg bg-white">
      <h2 className="text-xl font-semibold">DATA</h2>
      <div className="sensor-grid">
        <div className="sensor-box">
          <h3>Soil Moisture</h3>
          <p>{state.sensorData.waterTemp}%</p>
          <GaugeChart
            id="soil-moisture-gauge"
            nrOfLevels={30}
            textColor={"black"}
            percent={state.sensorData.waterTemp / 100}
            colors={["#FF5F6D", "#FFC371"]}
            hideText={true}
          />
        </div>
        <div className="sensor-box">
          <h3>Air Humidity</h3>
          <p>{state.sensorData.turbidity}%</p>
          <GaugeChart
            id="air-humidity-gauge"
            nrOfLevels={30}
            textColor={"black"}
            percent={state.sensorData.turbidity / 100}
            colors={["#69B3E7", "#3498DB"]}
            hideText={true}
          />
        </div>

        <div className="sensor-box">
          <h3>Soil Moisture</h3>
          {/* <p>{state.sensorData.waterTempStatus}</p> */}
          <Line
            data={{
              labels: state.chartData.waterTemp.labels,
              datasets: [
                {
                  label: "Soil Moisture",
                  data: state.chartData.waterTemp.data,
                  borderColor: "rgba(75, 192, 192, 1)",
                  backgroundColor: "rgba(75, 192, 192, 0.2)",
                  fill: true,
                },
              ],
            }}
          />
        </div>
        <div className="sensor-box">
          <h3>Air Humidity</h3>
          <Line
            data={{
              labels: state.chartData.turbidity.labels,
              datasets: [
                {
                  label: "Air Humidity",
                  data: state.chartData.turbidity.data,
                  borderColor: "rgba(153, 102, 255, 1)",
                  backgroundColor: "rgba(153, 102, 255, 0.2)",
                  fill: true,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );

  return <DataDisplay />;
};

export default SensorData;
