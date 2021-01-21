const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const moment = require('moment');
const numeral = require('numeral');
const connection = mysql.createConnection({
	host     : 'localhost',
	database : 'booldook',
	user     : 'booldook',
	password : '000000',
});


const app = express();
app.listen(3000, () => { console.log('http://127.0.0.1:3000') });
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.pretty = true;

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/city/create', (req, res) => {
	const pug = {
		css: 'city-create',
		js: 'city-create',
	}
	res.render('city/create', pug);
});

app.get('/city', (req, res) => {
	connection.query('select * from city', (err, r) => {
		for(let v of r) {
			v.sdate = moment(v.sdate).format('YYYY년 MM월 DD일');
			v.population = numeral(v.population).format('0,0')+'명';
		}
		const pug = {
			css: 'city-list',
			js: 'city-list',
			city: r
		}
		res.render('city/list', pug);
	});
});
