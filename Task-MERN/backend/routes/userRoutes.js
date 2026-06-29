const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/authMiddleware');



const { registerUser, loginUser,getcurrentUser} = require('../controllers/userControllers');


router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/current', protect,getcurrentUser);

module.exports = router;