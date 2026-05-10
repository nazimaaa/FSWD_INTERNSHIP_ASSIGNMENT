const express = require("express");
const app = express();

app.use(express.json());

const taskRoutes = require("./routes/taskRoutes");

app.use("/", taskRoutes);

app.get("/", (req, res) => {
    res.send("MVC Task API Running 🚀");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});