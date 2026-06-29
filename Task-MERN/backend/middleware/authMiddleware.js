const jwt = require("jsonwebtoken");
const asyncH = require("express-async-handler");

const User = require("../models/userModels");

const protect = asyncH(async (req, res) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    // ?
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("You are not authorized");
    }


  }

  if (!token) {
    throw new Error('Yo not auth, no token buddy')
  }
});

module.exports = { protect };
