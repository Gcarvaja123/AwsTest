var express = require('express');
var controllers = require ('.././Controllers');
var router = express.Router();






router.get('/', controllers.UserController.Inicio);






module.exports = router;