const express = require('express');
const router = express.Router();


const { registerUser, loginUser,getcurrentUser} = require('../controllers/userControllers');


router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/current',getcurrentUser);

module.exports = router;