const mongoose = require(mongoose);

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      requireed: [true, "Name is requiered"],
    },
    email: {
      type: String,
      requireed: [true, "Email is essential bro"],
    },
    password: {
      type: String,
      requireed: [true, "Password ni enter karega tou bsdk ander kse jaega"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', userSchema);
