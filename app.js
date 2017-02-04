/**
 * Created by maoreini on 24/12/2016.
 */
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var monk = require('monk');
var m = require('./data/messages');
var s = require('./data/stations');

var db = monk('localhost:27017/applications');
var messages = db.get('messages');
messages.remove({});
messages.insert(m);

var stations = db.get('stations');
stations.remove({});
stations.insert(s);

server.listen(8080, function () {
    console.log('open browser');
});

//Set EJS view engine for rendering templates
app.set('view engine', 'ejs');

app.use(function (req, res, next) {
    req.db = db;
    next();
});

app.use(express.static("./views/templates/"));

app.get('/', function (req, res) {
    res.render('index', {title: 'Hello', user: 'Lucas'});
});

app.get('/screen', function (req, res) {
    res.render('index', {title: 'Hello', user: 'Lucas', screenId: req.query.id });
});

io.on('connection', function (socket) {

    socket.on('getMessages' , function(screen){
        var msgs = [];
        var collection = db.get('messages');

        collection.find({stations: Number(screen.screenId)}, function (e, docs) {
            msgs = docs;
            return msgs;
        }).then(msgs => {
            socket.emit('display', {msgs});
        });
    });
});

module.exports = app;