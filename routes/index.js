const express = require('express');
const router = express.Router();




const userController = require('../controller/userController')

// router.get('/', )

router.use('/users',require('./user'));



module.exports = router;