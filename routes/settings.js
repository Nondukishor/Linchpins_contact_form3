var express = require('express');
var router = express.Router();

const SettingController = require('../controllers/SettingsController');
const SmtpSettingsController = require('../controllers/SmtpSettingsController');
const MailSettingsController = require('../controllers/MailSettingsController');

router.get('/index', SettingController.index);
router.get('/mail', SettingController.mail);
router.get('/user', SettingController.user);

router.post('/smtp', SmtpSettingsController.update);
router.post('/mail', MailSettingsController.update);


module.exports = router;
