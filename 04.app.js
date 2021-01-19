const express = require('express');
const app = express();

app.listen(3000, () => { console.log('http://127.0.0.1:3000') });

app.get('/', (req, res) => {
	var html = `
	<!DOCTYPE html>
	<html lang="ko">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>고골</title>
	</head>
	<body style="text-align: center; padding-top: 10em;">
		<h1>GOGOL</h1>
		<form method="get" action="/search">
			<input type="text" name="q" style="padding: 0.5em;">
			<button style="padding: 0.4em 3em;">검색</button>
		</form>
	</body>
	</html>`;
	res.send(html);
});

app.get('/search', (req, res) => {
	const q = req.query.q;
	// 서버에서 검색하는 로직
	const result = [
		{title: '결과1', content: '결과입니다.'},
		{title: '결과2', content: '결과입니다.'},
		{title: '결과3', content: '결과입니다.'},
		{title: '결과4', content: '결과입니다.'},
	];
	var html = `
	<!DOCTYPE html>
	<html lang="ko">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>고골</title>
	</head>
	<body style="padding: 2em;">
		<form method="get" action="/search">
			<input type="text" name="q" value="${q}" style="padding: 0.5em;">
			<button style="padding: 0.4em 3em;">검색</button>
		</form>
		<ul>`;
	for(var v of result) {
		html += `<li>${q}의 ${v.title}: ${v.content}</li>`;
	}
	html += `</ul>
	</body>
	</html>`;
	res.send(html);
});

app.get('/booldook', (req, res) => {
	res.send('<h1>Hello Booldook</h1>');
});

app.get('/sample', (req, res) => {
	res.send('<h1>Hello Sample</h1>');
});

app.use((req, res) => {
	res.send('<h1>Error 404</h1><p>- File not found</p>');
});