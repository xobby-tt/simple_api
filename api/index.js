var express = require('express');
var router = express.Router();
//var mocks = require('./mock');
const db = require('./db');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.get('/info', function (req, res, next) {

	db.connect((err, client, done) => {
		if (err) throw err;
		client.query('SELECT * from info', function (err, result) {
			if (err) {
				console.log(err);
			}
			res.json(result.rows);
			done();
		});
	});

});

router.post('/info/entity', (req, res) => {

	db.connect((err, client, done) => {
		if (err) throw err;
		client.query("INSERT INTO info(category, subcategory, person, cash, date, comment) VALUES($1, $2, $3, $4, $5, $6)",
			[req.body.category, req.body.subcategory, req.body.person, req.body.cash, req.body.date, req.body.comment]
		)
		done();
		res.redirect('/info');
	});
});


module.exports = router;