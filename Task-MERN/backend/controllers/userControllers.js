const asyncH = require('express-async-handler');

const registerUser = asyncH( async (req,res) =>{
    res.json({
        message : 'User registered succesfully'
    })
})

const loginUser = asyncH(async (req,res) =>{
    res.json({
        message : 'User logged in succ'
    })
})

const getcurrentUser = asyncH(async (req,res) =>{
    res.json({
        message : 'Got this user'
    })
})

module.exports = {
    registerUser,loginUser,getcurrentUser
}