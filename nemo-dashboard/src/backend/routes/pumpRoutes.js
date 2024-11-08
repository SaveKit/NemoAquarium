const express = require("express");
const router = express.Router();
const pumpController = require("../controllers/pumpController");

router.post("/waterpump/toggle", pumpController.toggleWaterPump);
router.get("/waterpump/status", pumpController.getWaterPumpStatus);

module.exports = router;
