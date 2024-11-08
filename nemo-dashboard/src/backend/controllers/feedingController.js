const { controlFeeding } = require("../mqtt/mqttClient");

let feedingStatus = "off";
exports.toggleFeeding = (req, res) => {
  const { action } = req.body; // Action can be 'feed' or 'stop'
  feedingStatus = action;
  controlFeeding(action);
  res.status(200).json({ message: `Feeding ${action}` });
};

exports.getFeedingStatus = (req, res) => {
  res.status(200).json({ status: feedingStatus });
};
