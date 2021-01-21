"use strict";

var express = require('express');

var path = require('path');

var mysql = require('mysql2');

var moment = require('moment');

var numeral = require('numeral');

var connection = mysql.createConnection({
  host: 'localhost',
  database: 'booldook',
  user: 'booldook',
  password: '000000'
});
var app = express();
app.listen(3000, function () {
  console.log('http://127.0.0.1:3000');
});
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.pretty = true;
app.use('/', express["static"](path.join(__dirname, 'public')));
app.get('/city/create', function (req, res) {
  var pug = {
    css: 'city-create',
    js: 'city-create'
  };
  res.render('city/create', pug);
});
app.get('/city', function (req, res) {
  connection.query('select * from city', function (err, r) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = r[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var v = _step.value;
        v.sdate = moment(v.sdate).format('YYYY년 MM월 DD일');
        v.population = numeral(v.population).format('0,0') + '명';
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var pug = {
      css: 'city-list',
      js: 'city-list',
      city: r
    };
    res.render('city/list', pug);
  });
});