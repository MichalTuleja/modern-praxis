var express = require('express');
var app = express();

app.get('/api', function (req, res) {
  res.send('Hello World!');
});

app.use('/', express.static('../../frontend/src'));

var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});