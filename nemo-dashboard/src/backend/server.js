// server.js
const express = require("express");
const cors = require("cors");
const dataRoutes = require("./routes/dataRoutes");
const pumpRoutes = require("./routes/pumpRoutes");
const lightRoutes = require("./routes/lightRoutes");
const feedingRoutes = require("./routes/feedingRoutes");
const imageRoutes = require("./routes/imageRoutes");

const app = express();
const PORT = 5000; // You can use any port

// Enable CORS for the front-end
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Use the routes
app.use("/", dataRoutes);
app.use("/", pumpRoutes);
app.use("/", lightRoutes);
app.use("/", feedingRoutes);
app.use("/", imageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
