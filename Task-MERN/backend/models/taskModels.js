const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  },
);

//  RIGHT: Compile and export the model correctly
module.exports = mongoose.model("Task", taskSchema);