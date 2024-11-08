const { controlWaterPump } = require("../mqtt/mqttClient");

let pumpStatus = "off";
exports.toggleWaterPump = (req, res) => {
  const { status } = req.body; // Status can be 'on' or 'off' or 'auto'
  pumpStatus = status;
  controlWaterPump(status);
  res.status(200).json({ message: `Water pump turned ${status}` });
};

exports.getWaterPumpStatus = (req, res) => {
  res.status(200).json({ status: pumpStatus });
};
