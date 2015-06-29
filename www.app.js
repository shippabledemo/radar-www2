var http = require('http');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var winston = require('winston');

var app = express();

global.logger = winston;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('secret'));
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.ENVIRONMENT == 'prod') {
  logger.remove(winston.transports.Console);
  logger.add(winston.transports.File, { filename: 'logs.log' });
  logger.add(winston.transports.Console, { level: 'error' });
}

app.get('/', function(req, res) {
  logger.info('Main page');
  res.sendFile(path.resolve('./public/views/home.html')); 
});

app.get('/env', function(req, res) {
  res.status(200).json({'API_URL':process.env.API_URL,'API_PORT':process.env.API_PORT, 'ENVIRONMENT':process.env.ENVIRONMENT});
});


var PORT = process.env.WWW_PORT || '3000';

// listen
app.listen(PORT, function() {
  logger.info("Application running on port:", PORT);
});