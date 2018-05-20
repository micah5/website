var express = require('express');
var app = express();
var path = require('path');

// Routes
app.use("/background3.png", express.static(__dirname + "/background3.png"));
app.get('/', function(req, res) {
  res.sendfile(path.join(__dirname + '/index.html'));
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);
