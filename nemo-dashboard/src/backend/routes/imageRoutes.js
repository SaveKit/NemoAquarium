const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageController");

// Define the route and link it to the controller method
router.get("/image", imageController.getImage);

module.exports = router;
