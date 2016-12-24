/**
 * Created by maoreini on 24/12/2016.
 */

var express = require('express');
var messageManager = require('./messageManager.js');

var app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {title:'Hello', user:'Lucas'});
});

app.get('/screen', function (req, res) {
    var msgs = messageManager.GetMessagesByScreenId(req.query.id);
    var timeToFinish = 0;

    msgs.map(function (msg) {
        setTimeout(function () {
            timeToFinish = timeToFinish + 2000;

            res.render(msg.template, msg); //TODO: idea - slice this message and pass the rest of the array to the template's javascript that will create ajax call for the next message somehow.
        },timeToFinish);
    });

    console.log(timeToFinish);

});

app.listen(8080, function() {
console.log('open browser');
});

module.exports = app;