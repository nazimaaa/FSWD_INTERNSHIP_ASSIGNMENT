const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const users = []; // temporary storage

// SIGNUP
app.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({
        username,
        password: hashedPassword
    });

    res.send("User registered successfully");
});

// LOGIN
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);

    if (!user) return res.send("User not found");

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.send("Invalid password");

    const token = jwt.sign({ username }, "secretkey");

    res.json({ token });
});

// PROTECTED ROUTE
app.get("/profile", (req, res) => {
    const token = req.headers["authorization"];

    if (!token) return res.send("Access denied");

    try {
        const verified = jwt.verify(token, "secretkey");
        res.json({ message: "Welcome " + verified.username });
    } catch {
        res.send("Invalid token");
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});