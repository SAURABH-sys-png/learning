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
    res.status(200).json({ _id: user.id, name: user.name, email: user.email ,password : user.password,token : genJWT(user._id)});
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
  res.json({ message: "Registed user succesful" });
});

const loginUser = asyncH(async (req, res) => {
  const { email, password} = req.body
  const user = await User.findOne({ email})

  if (user && (await bcrypt.compare(password,user.password))) {
    res.json({ _id: user.id, name: user.name, email: user.email ,password : user.password,token : genJWT(user._id)})
  } else{
    res.status(400)
    throw new Error('Invalid data')
  }
});

const getcurrentUser = asyncH(async (req, res) => {
  const { _id,name,email} = await User.findById(req.user.id)
  res.status(200).json({id : _id,name,email})
});


const genJWT = id => jwt.sign({id}, process.env.JWT_SECRET,  { expiresIn : '5d'});
module.exports = {
  registerUser,
  loginUser,
  getcurrentUser,
};
