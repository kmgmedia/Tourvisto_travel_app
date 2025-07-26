const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/trips", require("./routes/tripRoutes")); // ✅ Trip Routes added

// Start server after DB connection
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
