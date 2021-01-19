// console.log('__dirname: ' + __dirname);
// console.log('__filename: ' + __filename);
// console.log('path.join(): ' + path.join(__dirname, '../'));
// console.log('path.join(): ' + path.join(__dirname, './public'));

const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () => { console.log('http://127.0.0.1:3000') });

app.use('/', express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
	const html = `
	<!doctype html>
	<html>
	<head>
		<meta charset="utf-8">
		<title>File not found</title>
	</head>
	<body style="margin: 10% 0 0 10%;">
		<h1>Error 404</h1>
		<p>파일을 찾을 수 없습니다.</p>
	</body>
	</html>`;
	res.send(html);
});
