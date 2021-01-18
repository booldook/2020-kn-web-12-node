const express = require('express');
const app = express();

app.listen(3000, () => { console.log('http://127.0.0.1:3000') });

app.get('/', (req, res) => {
	res.send('<h1>Hello Root</h1>');
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