const tasks = require("../models/taskModel");

// GET all
exports.getTasks = (req, res) => {
    res.json(tasks);
};

// GET one
exports.getTask = (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    res.json(task || { message: "Task not found" });
};

// CREATE
exports.createTask = (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        name: req.body.name
    };
    tasks.push(newTask);
    res.json(newTask);
};

// UPDATE
exports.updateTask = (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);

    if (task) {
        task.name = req.body.name;
        res.json(task);
    } else {
        res.json({ message: "Task not found" });
    }
};

// DELETE
exports.deleteTask = (req, res) => {
    const index = tasks.findIndex(t => t.id == req.params.id);

    if (index !== -1) {
        tasks.splice(index, 1);
        res.json({ message: "Task deleted" });
    } else {
        res.json({ message: "Task not found" });
    }
};