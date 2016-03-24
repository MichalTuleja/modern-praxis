/*
 * modern-praxis main server
 *
 * Created: 2015-09-03
 * Author:  Michal Tuleja <michal.tuleja@outlook.com>
 */

var request = require('request');
var express = require('express');
var httpProxy = require('http-proxy');

var app = express();

var apiUrl = 'http://127.0.0.1:5984/';
var apiProxy = httpProxy.createProxyServer();

app.all("/patients/*", function(req, res){ 
  apiProxy.web(req, res, { target: apiUrl });
});

app.use('/', express.static('../frontend'));

var server = app.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

