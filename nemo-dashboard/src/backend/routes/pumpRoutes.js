// routes/pumpRoutes.js
const express = require("express");
const router = express.Router();
const pumpController = require("../controllers/pumpController");

router.post("/pump/toggle", pumpController.toggleWaterPump);
router.get("/pump/status", pumpController.getWaterPumpStatus);

module.exports = router;
