const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// API
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend 🚀" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});