// server.js
const express = require("express");
const cors = require("cors");
const imageRoutes = require("./routes/imageRoutes");

const app = express();
const PORT = 5000; // You can use any port

// Enable CORS for the front-end
app.use(cors());

// Root route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Use the routes
app.use("/", pumpRoutes);
app.use("/", lightRoutes);
app.use("/", feedingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
