// console.log('__dirname: ' + __dirname);
// console.log('__filename: ' + __filename);
// console.log('path.join(): ' + path.join(__dirname, '../'));
// console.log('path.join(): ' + path.join(__dirname, './public'));

const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () => { console.log('http://127.0.0.1:3000') });

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/search', (req, res) => {
	const q = req.query.q;
	res.send(`<h2>${q}의 검색결과는 아직은...</h2>`);
});

app.use((req, res) => {
	res.redirect('/html/404.html');
});
