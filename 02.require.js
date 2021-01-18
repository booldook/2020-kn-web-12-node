const { sum } = require('./02.util');
const http = require('http');
const os = require('os');
const fs = require('fs');

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.end('<meta charset="utf-8"><h1>안녕하세요</h1>');
});

// console.log( os.cpus() );
// console.log( os.freemem() );
console.log( fs.readFileSync('c:/test.txt').toString() );
console.log( fs.copyFileSync('c:/test.txt', 'c:/test2.txt') );


server.listen(1000, '127.0.0.1');
