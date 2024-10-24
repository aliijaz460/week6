const express = require('express');
const { getUserData } = require('../controllers/userController');
const router = express.Router();

router.get('/', getUserData); // Route to fetch user data

module.exports = router;
