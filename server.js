// Dependencies 
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers_controller');
const path = require('path');

// create an app
const app = express();

// Setting port
const PORT = process.env.PORT || 8080;

// Middleware-Rendering Engine: Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// 'public' folder is user-facing
app.use(express.static(path.join(__dirname, '/public')));

