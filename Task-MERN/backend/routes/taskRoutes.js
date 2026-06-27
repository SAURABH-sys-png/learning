const express = require('express');
const { stat } = require('node:fs');
const router = express.Router();
const {getTask,putTask,postTask,delTask} = require('../controllers/taskController');

router.get('/', getTask);

router.post('/',postTask);

router.put('/:id',putTask);

router.delete('/:id',delTask);


module.exports = router;