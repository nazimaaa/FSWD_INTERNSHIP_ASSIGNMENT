const express = require("express");
const app = express();

app.use(express.json());

// sample data
let tasks = [
    { id: 1, name: "Study" },
    { id: 2, name: "Namaz" }
];

// GET all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// GET one task
app.get("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    res.json(task || { message: "Task not found" });
});

// CREATE task
app.post("/tasks", (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        name: req.body.name
    };
    tasks.push(newTask);
    res.json(newTask);
});

// UPDATE task
app.put("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);

    if (task) {
        task.name = req.body.name;
        res.json(task);
    } else {
        res.json({ message: "Task not found" });
    }
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.json({ message: "Task deleted" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
app.get("/", (req, res) => {
    res.send("Task API is running 🚀");
});