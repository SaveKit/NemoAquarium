const { queryApi } = require("../config/influxConfig");

const getSensorData = async (req, res) => {
  try {
    const query = `
      from(bucket: "Data_ESP")
      |> range(start: -5m)
      |> last()
    `;

    let sensorData = {};
    queryApi.queryRows(query, {
      next(row, tableMeta) {
        const data = tableMeta.toObject(row);
        sensorData[data._field] = data._value;
      },
      complete() {
        res.json(sensorData);
      },
      error(error) {
        console.error("Error querying InfluxDB:", error);
        res.status(500).send("Error querying InfluxDB");
      },
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getSensorHistory = async (req, res) => {
  try {
    const { start = "-1h", stop = "now()" } = req.query; // Default to last 1 hour if not provided
    const query = `
      from(bucket: "Data_ESP")
      |> range(start: ${start}, stop: ${stop})
    `;

    const sensorData = [];
    queryApi.queryRows(query, {
      next(row, tableMeta) {
        const data = tableMeta.toObject(row);
        sensorData.push({
          time: data._time,
          field: data._field,
          value: data._value,
        });
      },
      complete() {
        res.json(sensorData);
      },
      error(error) {
        console.error("Error querying InfluxDB:", error);
        res.status(500).send("Error querying InfluxDB");
      },
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getSensorData, getSensorHistory };
