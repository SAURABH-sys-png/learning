const asyncH = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModels");

const registerUser = asyncH(async (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    res.status(400);
    throw new Error("Pls enter all the fields properly");
  }
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw Error("The user already exists proceed to login instead");
  }

  const salt = await bcrypt.genSalt(10);

  const hashedPass = await bcrypt.hash(password, salt);
  const user = await User.create({ name, email, password: hashedPass });

  if (user) {
    res.status(200).json({ _id: user.id, name: user.name, email: user.email });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
  res.json({ message: "Registed user succesful" });
});

const loginUser = asyncH(async (req, res) => {
  res.json({
    message: "User logged in succ",
  });
});

const getcurrentUser = asyncH(async (req, res) => {
  res.json({
    message: "Got this user",
  });
});

module.exports = {
  registerUser,
  loginUser,
  getcurrentUser,
};
