const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();

// // Error Handler
// app.use(errorHandler);

const app = express();
const PORT = process.env.PORT || 5000;

// mount routes
app.use("/api/auth", authRoutes);


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to Tourvisto Travel App API");})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
