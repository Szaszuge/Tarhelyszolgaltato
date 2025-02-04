const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');

/**
 * USER modul útvonalai
 */

// register new user
router.post('/register', userController.register);

// login user
router.post('/login', userController.login);

// get all users
router.get('/', authMiddleware,  userController.getAllUsers);

module.exports = router;