const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const users = [];

// SIGNUP
app.post("/signup", async (req, res) => {
    const { username, password, role } = req.body;

    if (!username || !password) {
        return res.send("Username and password required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({
        username,
        password: hashedPassword,
        role: role || "user"
    });

    res.send("User registered");
});

// LOGIN
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) return res.send("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.send("Invalid password");

    const token = jwt.sign(
        { username: user.username, role: user.role },
        "secretkey"
    );

    res.json({ token });
});

// VERIFY TOKEN
function verifyToken(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) return res.send("Access denied");

    try {
        const verified = jwt.verify(token, "secretkey");
        req.user = verified;
        next();
    } catch {
        res.send("Invalid token");
    }
}

// ROLE CHECK
function isAdmin(req, res, next) {
    if (req.user.role !== "admin") {
        return res.send("Admin access only");
    }
    next();
}

// ROUTES
app.get("/profile", verifyToken, (req, res) => {
    res.json({ message: "Welcome " + req.user.username });
});

app.get("/admin", verifyToken, isAdmin, (req, res) => {
    res.json({ message: "Welcome Admin " + req.user.username });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});