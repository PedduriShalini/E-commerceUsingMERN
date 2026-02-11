const User = require("../models/User");


// ================= REGISTER USER =================
exports.registerUser = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    
    if (email === "admin") {
      return res.status(400).json({
        message: "This email is reserved for admin"
      });
    }

    // check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // create new user
    const newUser = new User({
      name,
      email,
      password
    });

    await newUser.save();

    res.json({
      message: "User registered successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};



// ================= LOGIN USER / ADMIN =================
exports.loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    // -------- ADMIN LOGIN (hardcoded) --------
    if (email === "admin" && password === "admin123") {
      return res.json({
        role: "admin",
        message: "Admin login successful"
      });
    }

    // -------- NORMAL USER LOGIN --------
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email"
      });
    }

    if (password !== user.password) {
      return res.status(400).json({
        message: "Invalid password"
      });
    }

    // user login success
    return res.json({
      role: "user",
      message: "User login successful"
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};
