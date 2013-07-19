var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var arr = new Array();
  var buf = new Buffer(arr);
  var fs = require("fs");  
  buf = fs.readFileSync("index.html");
  response.send( buf.toString() );
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
