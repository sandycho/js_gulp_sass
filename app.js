var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/hello_world', function (req, res) {
   res.send('Hello World');
});

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "app/index.html" );
})

app.get('/commute', function (req, res) {
   res.sendFile( __dirname + "/" + "app/index.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})