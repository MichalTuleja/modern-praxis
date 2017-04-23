/*
 * modern-praxis main server
 *
 * Created: 2015-09-03
 * Author:  Michal Tuleja <michal.tuleja@outlook.com>
 */
const API_VERSION = 'v1';
var request = require('request');
var express = require('express');
// var httpProxy = require('http-proxy');
const bodyParser  = require("body-parser");
const cookieParser = require('cookie-parser');

const Router = require('./api/routing');

var app = express();

// var apiUrl = 'http://127.0.0.1:5984/';
// var apiProxy = httpProxy.createProxyServer();

// app.all("/patients/*", function(req, res){ 
//   apiProxy.web(req, res, { target: apiUrl });
// });

// Express configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());

app.use('/api/' + API_VERSION, Router());
app.use('/', express.static('./public'));

var server = app.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

