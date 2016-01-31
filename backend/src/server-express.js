/*
 * modern-praxis main server
 *
 * Created: 2015-09-03
 * Author:  Michal Tuleja <michal.tuleja@outlook.com>
 */

var request = require('request');
var express = require('express');
var proxyMiddleware = require('http-proxy-middleware');

var app = express();

var apiUrl = 'http://127.0.0.1:5984';
var context = '/db';
var options = {
        target: apiUrl, // target host 
        changeOrigin: true,               // needed for virtual hosted sites 
        ws: false,                         // proxy websockets 
        pathRewrite: {
         //   '^/couch' : '/'      // rewrite paths 
        },
        proxyTable: {
            // when request.headers.host == 'dev.localhost:3000', 
            // override target 'http://www.example.org' to 'http://localhost:8000' 
        //    'localhost:5984' : 'http://modern-praxis-michaltuleja.c9.io/couch'
        }
    };
 
// create the proxy 
var proxy = proxyMiddleware(context, options);

app.use('/', express.static('../../frontend'));

app.use('/hello', function(req, res) {
  res.json({opt: 'world'});
});

app.get('/w', function (req, res) {
  res.send('Hello World!');
});

app.use(proxy);

var server = app.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

