# Algo Root Task - API Documentation

## Table of Contents
- [Introduction](#introduction)
- [Installation and Setup](#installation-and-setup)
- [API Endpoints](#api-endpoints)
- [Testing with Postman](#testing-with-postman)

## Introduction
Algo Root Task is a project that provides an API for performing various algorithm-based tasks. This documentation covers installation steps, API endpoints, and how to test the API using Postman.

## Installation and Setup

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (Latest LTS version)
- npm or yarn
- MongoDB (if using a database)

### Steps to Install and Run
1. Clone the repository:
   ```sh
   git clone https://github.com/Dheeraj-485/algo-root-task.git
   cd algo-root-task

   
   ```
2. Install dependencies:
3. For frontEnd:
   - cd client/client
   - npm run dev
4. For Backend:
  -cd server
   
    ```sh
   npm install
   ```
    nodemon server.js
   
6. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add necessary environment variables (e.g., database URI, API keys, etc.). Example:
     ```env
     PORT=8080
     MONGO_URI=mongodb://localhost:27017/algo-root-task
     ```
7. Start the server:
   ```sh
   nodemon server.js (for Backend)
   ```
   or (for FrontEnd)
   ```sh
   npm run dev
   ```

## API Endpoints

### Base URL
```
http://localhost:8080/tasks
```

### 1. Get All Tasks
**Endpoint:** `GET /tasks`
- **Description:** Retrieves a list of all available tasks.
- **Response:**
  ```json
  {
    "success": true,
    "tasks": [
      { "id": 1, "title": "Task 1", "completed": "true" },
      { "id": 2, "title": "Task 2", "completed": "false" }
    ]
  }
  ```

### 2. Get Task by ID
**Endpoint:** `GET /tasks/:id`
- **Description:** Fetch a specific task by ID.
- **Response:**
  ```json
  {
    "success": true,
    "task": { "id": 1, "title": "Task 1", "completed": "false" }
  }
  ```

### 3. Create a Task
**Endpoint:** `POST /tasks`
- **Request Body:**
  ```json
  {
    "title": "New Task",
    "completed": false
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "task": { "id": 3, "title": "New Task", "completed": false }
  }
  ```

### 4. Update a Task
**Endpoint:** `PUT /tasks/:id`
- **Request Body:**
  ```json
  {
     "completed":"true
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "task": { "id": 3, "title": "New Task",  "completed":false }
  }
  ```

### 5. Delete a Task
**Endpoint:** `DELETE /tasks/:id`
- **Response:**
  ```json
  {
    "success": true,
    "message": "Task deleted successfully"
  }
  ```

## Testing with Postman

### Steps to Test
1. Open Postman and create a new request.
2. Set the request type (GET, POST, PUT, DELETE) and enter the API URL.
3. If required, go to the **Body** tab, select **raw**, and set the type to **JSON**.
4. Enter the necessary request payload (for POST and PUT requests).
5. Click **Send** to execute the request and view the response.
6. To automate tests, you can use the **Tests** tab in Postman to validate API responses.

### Example Postman Collection
You can import the provided Postman collection (if available) using:
- **File > Import > Upload Collection JSON**
- Or manually create requests based on the above documentation.

## Conclusion
This README provides an overview of how to set up and interact with the Algo Root Task API. For further details or contributions, refer to the repository and contribute as needed.

