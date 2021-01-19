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
	res.send(html);
});
