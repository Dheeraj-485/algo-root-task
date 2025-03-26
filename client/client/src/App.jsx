import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "./baseUrl";
import toast from "react-hot-toast";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get(`${BASE_URL}/tasks`);

    setTasks(response.data);
  };

  const handleAddOrUpdate = async () => {
    if (!title.trim()) return;

    if (editingTask) {
      try {
        const updatedTask = await axios.put(
          `${BASE_URL}/tasks/update/${editingTask._id}`,
          { title }
        );
        setTasks(
          tasks.map((task) =>
            task._id === updatedTask._id ? updatedTask : task
          )
        );
        fetchTasks();
        toast.success(updatedTask.data.message);
        setEditingTask(null);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      try {
        const newTask = await axios.post(`${BASE_URL}/tasks`, { title });
        fetchTasks();
        setTasks([...tasks, newTask]);
        toast.success(newTask.data.message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }

    setTitle("");
  };

  const handleEdit = (task) => {
    setTitle(task.title);
    setEditingTask(task);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/tasks/delete/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleCompleted = async (id, completed) => {
    try {
      await axios.put(`${BASE_URL}/tasks/update/${id}`, {
        completed: !completed,
      });
      setTasks(
        tasks.map((task) =>
          task._id === id ? { ...task, completed: !completed } : task
        )
      );
    } catch (error) {}
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-blue-100 shadow-lg rounded-lg">
      <h1 className="text-xl font-bold text-center">Task Manager</h1>

      <div className="flex gap-2 p-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 border rounded p-2"
          placeholder="Enter task..."
        />
        <button
          onClick={handleAddOrUpdate}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {editingTask ? "Update" : "Add"}
        </button>
      </div>

      <div className="p-4 space-y-2">
        {tasks.length === 0 && (
          <p className="text-center text-gray-500">No tasks available.</p>
        )}
        {tasks.map((task) => (
          <div
            key={task._id}
            className="flex justify-between items-center p-3 border rounded-lg shadow"
          >
            <input
              type="checkbox"
              value={task.completed}
              onChange={() => handleCompleted(task._id, task.completed)}
            />
            <span
              className={`flex-1 ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.title}
            </span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(task)}
                className="px-3 py-1 bg-yellow-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task._id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
