const asyncHandler = require("express-async-handler");

const getTask = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "Here is the response form the getTask",
  });
});
module.exports = { getTask };
