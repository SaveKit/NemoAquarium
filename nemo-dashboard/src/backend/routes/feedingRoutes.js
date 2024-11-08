const express = require("express");
const router = express.Router();
const feedingController = require("../controllers/feedingController");

router.post("/feeding/toggle", feedingController.toggleFeeding);
router.get("/feeding/status", feedingController.getFeedingStatus);

module.exports = router;
