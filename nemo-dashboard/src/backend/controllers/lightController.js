const { controlLight } = require("../mqtt/mqttClient");

let lightStatus = "off";
exports.toggleLight = (req, res) => {
  const { status } = req.body; // Status can be 'on' or 'off'
  lightStatus = status;
  controlLight(status);
  res.status(200).json({ message: `Light turned ${status}` });
};

exports.getLightStatus = (req, res) => {
  res.status(200).json({ status: lightStatus });
};
