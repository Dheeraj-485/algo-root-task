const Task = require("../model/Task");

exports.getTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    if (tasks < 1) {
      return res.status(404).json({ message: "No tasks found" });
    }
    res.status(200).json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error -get task", error: error.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }
    const newTask = new Task({ title, description, completed });

    await newTask.save();
    res.status(201).json({ message: "Task created successfully", newTask });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating task", error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    if (title === "")
      return res.status(400).json({ error: "Title cannot be empty" });
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, completed },
      {
        new: true,
      }
    );
    if (!updatedTask) return res.status(404).json({ error: "Task not found" });
    res.status(200).json({ message: "Task updated successfully", updatedTask });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating task", error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting task", error: error.message });
  }
};
