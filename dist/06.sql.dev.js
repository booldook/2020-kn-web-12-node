"use strict";

var express = require('express');

var path = require('path');

var app = express();
app.listen(3000, function () {
  console.log('http://127.0.0.1:3000');
});
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.pretty = true;
app.use('/', express["static"](path.join(__dirname, 'public')));
app.get('/city', function (req, res) {});