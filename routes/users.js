var express = require('express');
var router = express.Router();

const UserController = require('../controllers/UserController');

/* GET users listing. */
router.get('/login', UserController.landing);
router.post('/login', UserController.login);
router.get('/logout', UserController.logout);
router.post('/signup', UserController.signup);

module.exports = router;
