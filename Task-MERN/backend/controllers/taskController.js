const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModels");
const { text } = require("express");

// @desc    Get all tasks
// @route   GET /api/tasks
const getTask = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
});

// @desc    Update a task
// @route   PUT /api/tasks/:id
const putTask = asyncHandler(async (req, res) => {
  
});

// @desc    Create a task
// @route   POST /api/tasks
const postTask = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Pls enter the text');
  }

  const task = await Task.create({text : req.body.text})
  res.status(200).json(task);
});

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
const delTask = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Task deleted with id: ${req.params.id}`,
  });
});

module.exports = {
  getTask,
  putTask,
  postTask,
  delTask,
};
