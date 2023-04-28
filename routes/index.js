// Autor: Liam Benedetti
// Beschreibung: Index Routen
// Erstellt am: 27.10.2020
// Änderungen: 27.10.2020 / Liam Benedetti / Erstellung

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

module.exports = router;