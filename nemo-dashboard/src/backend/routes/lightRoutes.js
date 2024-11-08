const express = require("express");
const router = express.Router();
const lightController = require("../controllers/lightController");

router.post("/light/toggle", lightController.toggleLight);
router.get("/light/status", lightController.getLightStatus);

module.exports = router;
