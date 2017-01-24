/**
 * Created by maoreini on 24/12/2016.
 */

var express = require('express');
var messageManager = require('./messageManager.js');

var app = express();
var monk = require('monk');
var db = monk('localhost:27017/applications');
app.set('view engine', 'ejs');

app.use(function (req, res, next) {
    req.db = db;
    next();
});

app.get('/', function (req, res) {
    res.render('index', {title: 'Hello', user: 'Lucas'});
});

app.get('/screen', function (req, res) {
    var msgs = [];
    var db = req.db;
    var collection = db.get('messages');
    collection.find({stations:parseInt(req.query.id)}, function (e, docs) {
        msgs = docs;
    });

    //var msgs = messageManager.GetMessagesByScreenId(req.query.id);
    var timeToFinish = 0;

    msgs.map(function (msg) {
        setTimeout(function () {
            timeToFinish = timeToFinish + 2000;

            res.render(msg.template, msg);
        }, timeToFinish);
    });

    console.log(timeToFinish);

});

app.listen(8080, function () {
    console.log('open browser');
});

module.exports = app;