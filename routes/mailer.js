const express = require('express');
const router = express.Router();
const mailController = require('../controllers/MailController');

router.post('/send-email', mailController.sendMail);

module.exports = router;
