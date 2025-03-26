const mongoose = require("mongoose");
require("dotenv").config();

const URL = process.env.MONGO_URL || "mongodb://localhost:27017/algo-root";
exports.connectToDb = async () => {
  try {
    await mongoose
      .connect(URL)
      .then(() => console.log("DB connect successfully"))
      .catch((err) => console.log("Error connecting to db", err));
  } catch (error) {
    console.error("Server error", error);
  }
};
