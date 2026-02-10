const User = require("../models/User");

// ---------------- REGISTER USER ----------------
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // save new user
    const newUser = new User({
      name: name,
      email: email,
      password: password
    });

    await newUser.save();

    res.json({ message: "User registered successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// ---------------- LOGIN USER ----------------
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    // check password
    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({ message: "Login successful" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
