const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Make sure decoded includes `userId`
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    next();
  } catch (err) {
    console.error("Auth error:", err.message);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

module.exports = { protect };
