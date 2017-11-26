var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var port = process.env.PORT || 3000;
var exphbs = require('express-handlebars'); // set handlebars
var routes = require('./controllers/burgers_controller.js');
var app = express();


app.use(express.static('public'));//Server static assets
app.use(bodyParser.urlencoded({extended: false}));

app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use('/', routes);
app.listen(port, function(){
    console.log('Th server is running on port: ' +port);
});