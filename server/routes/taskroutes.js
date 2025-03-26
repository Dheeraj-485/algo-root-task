const express = require("express");

const {
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controller/taskController");
const router = express.Router();

router.get("/", getTask);
router.post("/", createTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;
