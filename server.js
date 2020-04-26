// Dependencies 
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers_controller');
const path = require('path');

// create an app
const app = express();

// Setting port
const PORT = process.env.PORT || 8080;

