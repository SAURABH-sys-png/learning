const getTask = (req,res) =>{
    console.log(req.body);
    res.status(200).json({
        message : "Here is the response form the getTask"
    });
}
module.exports = {getTask}