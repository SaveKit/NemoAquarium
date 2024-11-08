const path = require("path");
const fs = require("fs");

exports.getImage = (req, res) => {
  const imagePath = path.join(__dirname, "../frame_objectdetection.jpg"); // Adjust path if necessary
  fs.access(imagePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error("Image not found:", err); // Log the error
      return res.status(404).send("Image not found");
    }
    res.sendFile(imagePath);
  });
};
