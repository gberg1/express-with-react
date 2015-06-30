var html = require('html');
var ejs = require('ejs');
var express = require('express');

var port = 8000;
var app = express();

app.use(express.static(__dirname + '/client'));

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
  res.render('../views/index.html');
});

app.listen(port);

console.log('Express server started on port %s', port);