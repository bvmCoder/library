'use strict';

var express = require('express'),
    app = express(),
    //console.log(app);
    handlebars = require('express-handlebars'),
    port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

/*
app.set('view engine', 'jade');
app.engine('.hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');*/

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello From Render',
        nav: [{
            Link: '/books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }]
    });
});

app.get('/books', function (req, res) {
    res.send('Book Library');
});

app.listen(port, function (err) {
    console.log('Running Server on port ' + port);
});

/*var hi = 'Hello!';

if(true) {
    console.log(hi);
}
console.log(hi);*/