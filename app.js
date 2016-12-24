/**
 * Created by maoreini on 24/12/2016.
 */
var express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('main.ejs');
});

app.get('/screen', function (req, res) {
    //Call ViewManager with req.query.id
    res.render('templateX', {title:'Hello', user:'Lucas'});
});

app.listen(8080, function() {
console.log('open browser');
});

exports = app;