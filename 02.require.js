const { sum } = require('./02.util');
const http = require('http');
const os = require('os');
const fs = require('fs');
const moment = require('moment');
const _ = require('lodash');

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.end('<meta charset="utf-8"><h1>안녕하세요</h1>');
});

// console.log( os.cpus() );
// console.log( os.freemem() );
console.log( fs.readFileSync('c:/test.txt').toString() );
console.log( fs.copyFileSync('c:/test.txt', 'c:/test2.txt') );
console.log( moment().format('YYYY-MM-DD hh:mm:ss') );

const arr = [1,3,5,2,7,11,9,8];
console.log(_.sortBy(arr));
console.log(_.shuffle(arr));

server.listen(1000, '127.0.0.1');
