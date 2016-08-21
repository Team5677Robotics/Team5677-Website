var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/client/templates/index.html');
});

app.use('/client', express.static(__dirname + '/client'));

app.listen(3000, function() {
    console.log('I\'m Listening...');
})
