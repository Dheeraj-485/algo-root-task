import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Toaster position="top-right" />
    <Navbar />
    <App />
  </>
);
