import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 shadow-md p-4 flex justify-between bg-gray-800 text-white">
      <a to="/" className="text-xl font-bold">
        MyTodo
      </a>
      <div>
        <a to="/home" className="mr-4">
          Home
        </a>

        <a to="/signup" className="mr-4">
          Signup
        </a>
        <a to="/login" className="bg-blue-500 px-3 py-1 rounded">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
