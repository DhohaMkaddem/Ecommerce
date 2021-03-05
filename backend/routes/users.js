const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const auth = require("../middleware/auth");
const User = require("../models/User");

// register user

router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: user.address,
    };

    jwt.sign(payload, "eshop", { expiresIn: 10800 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("Wrong email or password");
    }

    const isUser = await bcrypt.compare(password, user.password);

    if (!isUser) {
      return res.status(404).send("Wrong email or password");
    }
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
    };
    // convert payload token
    jwt.sign(payload, "eshop", { expiresIn: 10800 }, (error, token) => {
      if (error) throw error;
      res.json({ token });
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// auth
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// edit user
router.patch("/edit", auth, async (req, res) => {
  const { name, email, password } = req.body;
  const updates = {};
  if (name) {
    updates.name = name;
  }
  if (email) {
    updates.email = email;
  }
  if (password) {
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);
    updates.password = newPassword;
  }
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: updates },
      { new: true }
    );

    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
    };
    jwt.sign(payload, "eshop", { expiresIn: 10800 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;

