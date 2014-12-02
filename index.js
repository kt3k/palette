#! /usr/bin/env node

var express = require('express');
var fs = require('fs');

var app = express();

if (!fs.existsSync('./paletteSet.json')) {
    console.log('paletteSet.json not found');
    process.exit();
}


app.get('/', function (req, res) {
    var html = fs.readFileSync(__dirname + '/index.html');

    res.type('html');
    res.send(html);
});

app.get('/paletteSet.json', function (req, res) {
    var json = fs.readFileSync('./paletteSet.json');

    res.type('json');
    res.send(json);
});

app.use('/bower_components', express.static(__dirname + '/bower_components'));

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Palette running at http://%s:%s', host, port)

});
