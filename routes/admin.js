const express = require('express');
const router = express.Router();
const passport = require('passport');

const adminController = require('../controllers/admin_controller');

// get admin page
router.get('/admin-page', passport.checkAuthentication, adminController.adminPage);

// set reviewers to employee
router.post('/set-Reviewers', passport.checkAuthentication, adminController.setReviewrs);


module.exports = router;