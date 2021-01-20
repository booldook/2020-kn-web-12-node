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

app.get('/main', (req, res) => {
	const pug = { css: 'main', js: 'main' }
	res.render('index', pug);
})

app.get('/about', (req, res) => {
	const pug = { css: 'about', js: 'about' }
	res.render('about', pug);
})

app.get('/pf', (req, res) => {
	const pug = { css: 'pf', js: 'pf' }
	res.render('pf', pug);
})

app.get('/contact', (req, res) => {
	const pug = { css: 'contact', js: 'contact' }
	res.render('contact', pug);
})

app.get('/info', (req, res) => {
	const pug = { css: 'info', js: 'info' }
	res.render('info', pug);
})

app.use((req, res) => {
	res.redirect('/html/404.html');
});
