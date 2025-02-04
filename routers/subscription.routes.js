const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscription.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');

router.post('/add', authMiddleware, subscriptionController.add);

module.exports = router;