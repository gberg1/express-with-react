var express = require('express');

var port = 3000;
var app = express();

app.use(express.static(__dirname + '../client'));

app.listen(port);

console.log('Express server started on port %s', port);