const router = require('express').Router();
const mailController = require('../controllers/mailer.controller');

router.post("/sendAny", mailController.sendMessageThroughEmail);
module.exports = router;