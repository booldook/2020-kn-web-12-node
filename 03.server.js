const http = require('http');
const server = http.createServer(onCreateServer);
server.listen(3000, () => { console.log('http://127.0.0.1:3000') });

function onCreateServer(req, res) {
	if(req.url == '/') {
		res.end('Hello root');
	}
	else if(req.url == '/booldook') {
		res.end('hello booldook');
	}
	else {
		res.end('File not found!')
	}
}