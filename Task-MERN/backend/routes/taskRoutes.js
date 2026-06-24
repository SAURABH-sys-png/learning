const express = require('express');
const { stat } = require('node:fs');
const router = express.Router();
const {getTask} = require('../controllers/taskController');

router.get('/', getTask);

router.post('/', (req,res) =>{
    console.log("post vali command execute hui hai");
    res.status(200).json({
        message: "This is message form the post method"
    });

})

router.put('/:id',(req,res)=>{
    res.status(200).json({
        message: `This was sent by the put ${req.params.id}`
    });
})

router.delete('/:id',(req,res)=>{
    res.status(200).json({
        message : `taks this was ${req.params.id}`
    })
})


module.exports = router;