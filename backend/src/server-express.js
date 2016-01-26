/*
 * modern-praxis main server
 *
 * Created: 2015-09-03
 * Author:  Michal Tuleja <michal.tuleja@outlook.com>
 */

var request = require('request');
var express = require('express');
var app = express();

var apiUrl = 'http://localhost:5984';

app.get('/api', function (req, res) {
  res.send('Hello World!');
});

app.use('/', express.static('../../frontend'));


app.use('/couchdb', function(req, res) {
  var url = apiUrl + req.url;
  req.pipe(request(url)).pipe(res);
});

var server = app.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

