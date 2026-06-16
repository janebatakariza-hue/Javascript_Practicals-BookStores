const express = require("express");
const mongoose = require("mongoose");
const booksRouter = require("./routes/books");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/bookstore";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/books", booksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
