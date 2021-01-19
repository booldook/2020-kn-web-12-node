// console.log('__dirname: ' + __dirname);
// console.log('__filename: ' + __filename);
// console.log('path.join(): ' + path.join(__dirname, '../'));
// console.log('path.join(): ' + path.join(__dirname, './public'));

const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () => { console.log('http://127.0.0.1:3000') });
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.pretty = true;

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/search', (req, res) => {
	const q = req.query.q;
	// 검색결과 로직 - 미구현
	const lists = [
		{title: `${q}물산`, content: `${q}물산, ${q}물산`, src: '/img/ny.jpg'},
		{title: `${q}상사`, content: `${q}상사, ${q}상사`, src: '/img/paris.jpg'},
		{title: `${q}약국`, content: `${q}약국, ${q}약국`, src: '/img/la.jpg'},
		{title: `${q}식당`, content: `${q}식당, ${q}식당`, src: '/img/sanfran.jpg'}
	];
	res.render('search', { q, lists });
});

// http://127.0.0.1:3000/band?src=ny
app.get('/band', (req, res) => {
	const src = req.query.src;
	res.render('band', { src });
});

app.use((req, res) => {
	res.redirect('/html/404.html');
});
