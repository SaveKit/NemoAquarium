const express = require("express");
const router = express.Router();
const { getSensorData, getSensorHistory } = require("../controllers/dataController");

router.get("/data", getSensorData);
router.get("/data/history", getSensorHistory);

module.exports = router;
